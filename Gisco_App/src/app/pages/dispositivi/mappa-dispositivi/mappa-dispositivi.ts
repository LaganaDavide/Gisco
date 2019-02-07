import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StoreService } from '../../../services/store/store.service';
import { DispositiviService } from '../../../services/dispositivi/dispositivi.service';

import { Dispositivo } from '../../../models/dispositivo/dispositivo.namespace';
import { Login } from '../../../models/login/login.namespace';
import { Common } from '../../../models/common/common.namespace';
import { DashboardDispositivoPage } from '../dashboard-dispositivo/dashboard-dispositivo';

/**
 * Generated class for the MappaDispositiviPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mappa-dispositivi',
  templateUrl: 'mappa-dispositivi.html'
})

export class MappaDispositiviPage {

  public listaAllDispositivi: Array<Dispositivo.Dispositivo>;
  public listaDispositivi: Array<Dispositivo.Dispositivo>;
  public listaPrimoFiltro: Array<string>;
  public listaSecondoFiltro: Array<string>;
  public primoFiltro: string;
  public secondoFiltro: string;
  public q: any;

  public mapModel: Common.MapModel;

  public showMap: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storeService: StoreService,
    public dispositiviService: DispositiviService) {
    this.listaDispositivi = new Array<Dispositivo.Dispositivo>();
    this.listaPrimoFiltro = dispositiviService.getListaPrimoFiltroDispositivo();
    this.listaSecondoFiltro = dispositiviService.getListaSecondoFiltroDispositivo();
    this.secondoFiltro = this.listaSecondoFiltro[0];
    this.primoFiltro = this.listaPrimoFiltro[0];

    var mapMarkers: Common.MapMarker[] = [];
    this.mapModel = new Common.MapModel();
    this.mapModel.markers = mapMarkers;

    this.showMap = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MappaDispositiviPage');

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.dispositiviService.getListaDispositivi(tokenValue).subscribe(r => {
        console.log('ionViewDidLoad getListaDispositivi');
        if (r.ErrorMessage.msg_code === 0) {
          this.listaDispositivi = r.l_lista_dispositivi;
          this.listaAllDispositivi = this.listaDispositivi;

          //genero il modello da passare al componente MAPPA
          this.mapModel.centerLat = 41.893056;
          this.mapModel.centerLon = 12.482778;
          this.mapModel.initialZoom = 6;

          for (let dispositivo of this.listaAllDispositivi) {
            var marker = new Common.MapMarker();

            marker.lat = dispositivo.dis_baricentro_n;
            marker.lgn = dispositivo.dis_baricentro_e;
            marker.lab = dispositivo.dis_titolo;
            marker.draggable = false;
            this.mapModel.markers.push(marker);
          }

          this.showMap = true;
        }
      })
    });
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToDetailsDispositivo(event) {
    var dispositivoSelezionato = this.listaDispositivi[parseInt(event)];
    this.navCtrl.push(DashboardDispositivoPage, { dispositivo: dispositivoSelezionato })
  }

  public getDispositivi(event) {
    // Reset items back to all of the items

    this.listaDispositivi = this.listaAllDispositivi;

    if (event != undefined) {
      this.q = event.srcElement.value;
    }

    this.listaDispositivi = this.listaAllDispositivi.filter((v) => {
      if ((!this.q || this.q.trim() == '' || v.az_ragione_sociale.toLowerCase().indexOf(this.q.toLowerCase()) > -1) &&
        (this.primoFiltro == this.listaPrimoFiltro[0] || v.tab_tipo_dispositivo_desc.indexOf(this.primoFiltro) > -1) &&
        (this.secondoFiltro == this.listaSecondoFiltro[0] || v.dis_descrizione.indexOf(this.secondoFiltro) > -1)
      ) {

        return true;
      }
      return false;
    });

    this.mapModel.markers.length = 0;

    for (let dispositivo of this.listaDispositivi) {
      var marker = new Common.MapMarker();

      marker.lat = dispositivo.dis_baricentro_n;
      marker.lgn = dispositivo.dis_baricentro_e;
      marker.lab = dispositivo.dis_titolo;
      marker.draggable = false;

      this.mapModel.markers.push(marker);
    }

    console.log(this.secondoFiltro, this.listaDispositivi.length);
    console.log(this.q, this.listaDispositivi.length);
    console.log(this.q, this.listaAllDispositivi.length);
    console.log(this.q, this.mapModel.markers.length);
  }

  public secondoFiltroChanged(secondoFiltro) {
    console.log("secondoFiltro", secondoFiltro);
    this.secondoFiltro = secondoFiltro;
    this.getDispositivi(undefined);
  }

  public primoFiltroChanged(primoFiltro) {
    console.log("primoFiltro", primoFiltro);
    this.primoFiltro = primoFiltro;
    this.getDispositivi(undefined);
  }
}

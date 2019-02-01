import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StoreService } from '../../../services/store/store.service';
import { SitiService } from '../../../services/siti/siti.service';

import { Sito } from '../../../models/sito/sito.namespace';
import { Login } from '../../../models/login/login.namespace';
import { Common } from '../../../models/common/common.namespace';

/**
 * Generated class for the MappaSitiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mappa-siti',
  templateUrl: 'mappa-siti.html'
})
export class MappaSitiPage {

  public listaAllSiti: Array<Sito.Sito>;
  public listaSiti: Array<Sito.Sito>;
  public listaProvince: Array<string>;
  public listaTipologie: Array<string>;
  public tipologia: string;
  public provincia: string;
  public q: any;

  public mapModel: Common.MapModel;

  public showMap: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storeService: StoreService,
    public sitiService: SitiService) {
    this.listaSiti = new Array<Sito.Sito>();
    this.listaProvince = ["All", "RM", "PU", "TO"];
    this.listaTipologie = ["All", "Autostradale", "Punto vendita", "Centro agricolo", "Deposito AGIP fuel", "Deposito AGIP gas", "Uffici"];
    this.tipologia = this.listaTipologie[0];
    this.provincia = this.listaProvince[0];

    var mapMarkers: Common.MapMarker[] = [];
    this.mapModel = new Common.MapModel();
    this.mapModel.markers = mapMarkers;

    this.showMap = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoSitiPage');

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.sitiService.getListaSiti(tokenValue).subscribe(r => {
        console.log('ionViewDidLoad getListaSiti');
        if (r.ErrorMessage.msg_code === 0) {

          //genero il modello da passare al componente MAPPA
          this.mapModel.centerLat = 41.893056;
          this.mapModel.centerLon = 12.482778;
          this.mapModel.initialZoom = 6;

          for(let sito of r.l_lista_siti) {
            var marker = new Common.MapMarker();

            marker.lat = sito.az_baricentro_n;
            marker.lgn = sito.az_baricentro_e;
            marker.lab = sito.az_ragione_sociale;
            marker.draggable = false;

            this.mapModel.markers.push(marker);
          }

          this.showMap = true;
        }
      })
    });
  }

}

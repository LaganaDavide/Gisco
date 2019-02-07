import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';

import { DashboardSitoPage } from '../dashboard-sito/dashboard-sito';

import { Sito } from '../../../models/sito/sito.namespace';
import { SitiService } from '../../../services/siti/siti.service';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';


/**
 * Generated class for the ElencoSitiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-elenco-siti',
  templateUrl: 'elenco-siti.html',
})

export class ElencoSitiPage {

  public listaAllSiti: Array<Sito.Sito>;
  public listaSiti: Array<Sito.Sito>;
  public listaProvince: Array<string>;
  public listaTipologie: Array<string>;
  public tipologia: string;
  public provincia: string;
  public q: any;

  constructor(public navParams: NavParams,
    public sitiService: SitiService,
    private storeService: StoreService,
    private nav: Nav) {
    this.listaSiti = new Array<Sito.Sito>();
    this.listaProvince = sitiService.getListaProvinceSito();
    this.listaTipologie = sitiService.getListaTipologieSito();// ["All", "Autostradale", "Punto vendita", "Centro agricolo", "Deposito AGIP fuel", "Deposito AGIP gas", "Uffici"];
    this.tipologia = this.listaTipologie[0];
    this.provincia = this.listaProvince[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoSitiPage');

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.sitiService.getListaSiti(tokenValue).subscribe(r => {
        console.log('ionViewDidLoad getListaSiti');
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r.ErrorMessage.msg_code);
          this.listaSiti = r.l_lista_siti;
          this.listaAllSiti = this.listaSiti;
        }
      })
    });
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToDetails(event, sito) {
    this.nav.push(DashboardSitoPage, { sito: sito })
  }

  public getSiti(event) {
    // Reset items back to all of the items
    this.listaSiti = this.listaAllSiti;

    if (event != undefined) {
      this.q = event.srcElement.value;
    }

    this.listaSiti = this.listaAllSiti.filter((v) => {
      if ( (!this.q || this.q.trim() == '' || v.az_ragione_sociale.toLowerCase().indexOf(this.q.toLowerCase()) > -1) && 
        (this.provincia == this.listaProvince[0] || v.provincia_desc.indexOf(this.provincia) > -1) && 
        (this.tipologia == this.listaTipologie[0] || v.tab_tipologia_sito_desc.indexOf(this.tipologia) > -1)
      ) {
        return true;
      }
      return false;
    });


    console.log(this.tipologia, this.listaSiti.length);
    console.log(this.q, this.listaSiti.length);
    console.log(this.q, this.listaAllSiti.length);
  }

  public tipologiaChanged(tipologia) {
    console.log("tipologia", tipologia);
    this.tipologia = tipologia;
    this.getSiti(undefined);
  }

  public provinciaChanged(provincia) {
    console.log("provincia", provincia);
    this.provincia = provincia;
    this.getSiti(undefined);
  }
}

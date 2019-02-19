import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Documento } from '../../../models/documento/documento.namespace';
import { DocumentiService } from '../../../services/documenti/documenti.service';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
import { ElencoDocumentiPage } from '../elenco-documenti/elenco-documenti';

/**
 * Generated class for the CartellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tipologie',
  templateUrl: 'elenco-tipologie.html',
})

export class TipologiePage {
  public listaCartelle: Array<Documento.Cartella>;
  public selectedCartella: Documento.Cartella;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public documentiService: DocumentiService,
    private storeService: StoreService,
    private nav: Nav) {
    this.selectedCartella = navParams.get('cartella');
    this.listaCartelle = new Array<Documento.Cartella>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartellePage');

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.documentiService.getTipologiaDocumenti(tokenValue, this.selectedCartella.doc_foreign_type).subscribe(r => {
        console.log('ionViewDidLoad getCartelle');
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r.ErrorMessage.msg_code);
          this.listaCartelle = r.l_lista_cartelle;
        }
      })
    });
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToElencoDocumenti(event, cartella) {
    console.log("goToElencoDocumenti click" + cartella);
    this.nav.push(ElencoDocumentiPage, { cartella: cartella })
  }

}

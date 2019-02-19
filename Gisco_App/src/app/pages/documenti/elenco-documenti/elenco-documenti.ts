import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Documento } from '../../../models/documento/documento.namespace';
import { DocumentiService } from '../../../services/documenti/documenti.service';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
import { DashboardDocumentoPage } from '../dashboard-documento/dashboard-documento';

/**
 * Generated class for the CartellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-documenti',
  templateUrl: 'elenco-documenti.html',
})

export class ElencoDocumentiPage {
  public listaDocumenti: Array<Documento.Documento>;
  public selectedCartella: Documento.Cartella;
  public campoLiberoSito: string;
  public campoLiberoDocumento: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public documentiService: DocumentiService,
    private storeService: StoreService,
    private nav: Nav) {
    this.selectedCartella = navParams.get('cartella');
    this.listaDocumenti = new Array<Documento.Documento>();
    this.campoLiberoDocumento = "A";
    this.campoLiberoSito = "A";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartellePage');

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.documentiService.getListaDocumentiAll(tokenValue, this.selectedCartella.tab_tipo_documento_cod, this.selectedCartella.doc_foreign_type).subscribe(r => {
        console.log('ionViewDidLoad getListaDocumentiAll');
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r.ErrorMessage.msg_code);
          this.listaDocumenti = r.l_lista_documenti; 
        }
      })
    });
  }

  public getDocumenti() {
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      this.documentiService.getListaDocumenti(tokenValue, this.selectedCartella.tab_tipo_documento_cod, this.selectedCartella.doc_foreign_type, this.campoLiberoSito, this.campoLiberoDocumento).subscribe(r => {
        console.log('ionViewDidLoad getListaDocumenti');
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r.ErrorMessage.msg_code);
          this.listaDocumenti = r.l_lista_documenti;
          console.log("getSiti listaSiti", this.listaDocumenti.length);
        }
      })
    });
    console.log("campoLiberoSito", this.campoLiberoSito);
    console.log("campoLiberoDocumento", this.campoLiberoDocumento);
  }

  public setDocumentoFiltro(event) {
    if (event != undefined) {
      this.campoLiberoDocumento = event.srcElement.value;
    }
    if (this.campoLiberoDocumento === "") {
      this.campoLiberoDocumento = "A";
    }
    this.getDocumenti();
  }

  public setSitoFiltro(event) {
    if (event != undefined) {
      this.campoLiberoSito = event.srcElement.value;
    }
    if (this.campoLiberoSito === "") {
      this.campoLiberoSito = "A";
    }
    this.getDocumenti();
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToDocumento(event, documento) {
    console.log("goToDocumento click" + documento);
      this.nav.push(DashboardDocumentoPage, { documento: documento })
  }

}

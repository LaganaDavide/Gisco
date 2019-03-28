import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Component } from '@angular/core';
import { StoreService } from '../../../services/store/store.service';
import { Dipendente } from '../../../models/dipendente/dipendente.namespace';
import { Login } from '../../../models/login/login.namespace';
import { Osservazione } from '../../../models/osservazione/osservazione.namespace';
import { OsservazioniService } from '../../../services/osservazioni/osservazioni.service';
import { Filtro } from '../../../models/filtro/filtro.namespace';
import { Sito } from '../../../models/sito/sito.namespace';
import { SitiService } from '../../../services/siti/siti.service';



@Component({
  selector: 'nuova-osservazione',
  templateUrl: 'nuova-osservazione.html'
})

export class NuovaOsservazionePage {
  public listaTipologie: Array<Filtro.TipologiaOsservazione>;
  public listaSiti: Array<Sito.Sito>;
  public tipologiaSelezionata: Filtro.TipologiaOsservazione;
  public sitoSelezionato: Sito.Sito;
  private ws_Oss: Osservazione.ws_Osservazione;
  private titolo: string;

  color: string;
  icon: string;
  constructor(public navCtrl: NavController,
    public osservazioniService: OsservazioniService,
    public sitiService: SitiService,
    private storeService: StoreService,
    private navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.ws_Oss = new Osservazione.ws_Osservazione();
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      this.osservazioniService.getListaTipologieOsservazione(tokenValue).subscribe(r => {
        this.listaTipologie = r.l_lista_tipologie;
      }, (error) => {
        alert("errore recupero della risorsa");
      })
      this.sitiService.getListaSitiAll(tokenValue).subscribe(r => {
        this.listaSiti = r.l_lista_siti;
        loading.dismiss();
      }, (error) => {
        loading.dismiss();
        alert("errore recupero della risorsa");
      })

    });
  }

  filterPorts(ports: Array<Dipendente.Dipendente>, text: string) {
    return ports.filter(port => {
      return port.nome.toLowerCase().indexOf(text) !== -1 ||
        port.cognome.toLowerCase().indexOf(text) !== -1
    });
  }

  /* destinatarioChange(event: {
     component: IonicSelectableComponent,
     text: string
   }) {
     console.log(event.text);
     if (event.text) {
       let text = event.text.trim().toLowerCase();
       event.component.startSearch();
       console.log(text);
       if (!text || text == "") {
         event.component.items = this.listaDestinatari;
         event.component.endSearch();
         return;
       }
       event.component.items = this.filterPorts(this.listaDestinatari, text);
       event.component.endSearch();
     }
   }
 
   conoscenzaChange(event: {
     component: IonicSelectableComponent,
     text: string
   }) {
     console.log(event.text);
     if (event.text) {
       let text = event.text.trim().toLowerCase();
       event.component.startSearch();
       console.log(text);
       if (!text || text == "") {
         event.component.items = this.listaDestinatari;
         event.component.endSearch();
         return;
       }
       event.component.items = this.filterPorts(this.listaDestinatari, text);
       event.component.endSearch();
     }
   }
 
   */

  back() {
    this.navCtrl.pop();
  }

  public salvaOsservazione() {

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      this.ws_Oss.osservazione = new Osservazione.Osservazione();
      if (this.tipologiaSelezionata != undefined) {
        this.ws_Oss.osservazione.tab_tipo_scadenza_desc = this.tipologiaSelezionata.tab_tipo_scadenza_desc;
      }
      if (this.sitoSelezionato != undefined) {
        this.ws_Oss.osservazione.az_codice_interno = this.sitoSelezionato.az_codice_interno;
        this.ws_Oss.osservazione.az_ragione_sociale = this.sitoSelezionato.az_ragione_sociale;      }

      this.ws_Oss.osservazione.att_data_inizio_effettiva = new Date().getTime().toString();
      this.ws_Oss.osservazione.att_titolo = this.titolo;
      this.ws_Oss.token = tokenValue;
      this.osservazioniService.salvaOsservazione(this.ws_Oss).subscribe(r => {
        console.log(r);
        if (r.ErrorMessage.msg_code == 0) {
          alert("Osservazione è stata salvata correttamente");
          this.back();
        } else {
          alert("Errore nell'salvataggio della osservazione");
        }
      });
    })

  }

}

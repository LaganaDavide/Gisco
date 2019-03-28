import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Messaggio } from '../../../models/messaggio/messaggio.namespace';
import { StoreService } from '../../../services/store/store.service';
import { Dipendente } from '../../../models/dipendente/dipendente.namespace';
import { MessaggiService } from '../../../services/messaggi/messaggi.service';
import { Login } from '../../../models/login/login.namespace';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ProfiloService } from '../../../services/profilo/profilo.service';
import { Osservazione } from '../../../models/osservazione/osservazione.namespace';
import { OsservazioniService } from '../../../services/osservazioni/osservazioni.service';



@Component({
  selector: 'nuova-assegnazione',
  templateUrl: 'nuova-assegnazione.html'
})

export class NuovaAssegnazionePage {
  public listaNominativi: Array<Dipendente.Dipendente>;
  public nominativoSelezionato: Dipendente.Dipendente;

  private selectedOsservazione: Osservazione.Osservazione;
  color: string;
  icon: string;
  constructor(public navCtrl: NavController,
    public messaggiService: MessaggiService,
    public osservazioniService: OsservazioniService,
    private storeService: StoreService,
    public loadingCtrl: LoadingController,
    private navParams: NavParams) {
    this.selectedOsservazione = navParams.get('osservazione');
  }

  ionViewDidLoad() {

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      this.messaggiService.getDipendentiAttivi(tokenValue).subscribe(r => {
        this.listaNominativi = r.l_dipendenti;
        for (let i = 0; i < this.listaNominativi.length; i++) {
          this.listaNominativi[i].nomeCognome = this.listaNominativi[i].nome + " " + this.listaNominativi[i].cognome;
        }
      },
        (error) => {
          this.back();
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

  nominativoChange(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    console.log(event.text);
    if (event.text) {
      let text = event.text.trim().toLowerCase();
      event.component.startSearch();
      console.log(text);
      if (!text || text == "") {
        event.component.items = this.listaNominativi;
        event.component.endSearch();
        return;
      }
      event.component.items = this.filterPorts(this.listaNominativi, text);
      event.component.endSearch();
    }
  }

  back() {
    this.navCtrl.pop();
  }

  public salvaAssegnazione() {

    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      if (this.nominativoSelezionato != null) {
        var ws_oss = new Osservazione.ws_Osservazione();
        var assegnazione = new Osservazione.Assegnazione();
        assegnazione.attivita_key = this.selectedOsservazione.attivita_key;
        assegnazione.dp_cognome = this.nominativoSelezionato.cognome;
        assegnazione.dp_nome = this.nominativoSelezionato.nome;
        assegnazione.tab_ruolo_aziendale_desc = this.nominativoSelezionato.ruolo_aziendale;
        assegnazione.dp_email = this.nominativoSelezionato.email;
        ws_oss.c_assegnazioni = new Array<Osservazione.Assegnazione>();
        ws_oss.c_assegnazioni.push(assegnazione)
        ws_oss.token = tokenValue;

          this.osservazioniService.salvaOsservazione(ws_oss).subscribe(r => {
            console.log(r);
            if (r.ErrorMessage.msg_code == 0) {
              console.log(ws_oss);
              alert("assegnazione salvata correttamente");
              this.back();
            } else {
              alert("Errore salvataggio assegnazione");
            }
          });

      } else {
        alert("Selezionare nominativo");
      }
    });
  }

}

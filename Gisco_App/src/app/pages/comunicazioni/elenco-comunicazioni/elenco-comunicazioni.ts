import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Procedimento } from '../../../models/procedimento/procedimento.namespace';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
import { DashboardProcedimentoPage } from '../../procedimenti/dashboard-procedimento/dashboard-procedimento';
import { Comunicazione } from '../../../models/comunicazione/comunicazione.namespace';
import { ComunicazioniService } from '../../../services/comunicazioni/comunicazioni.service';
import { DashboardComunicazionePage } from '../dashboard-comunicazione/dashboard-comunicazione';

/**
 * Generated class for the ComunicazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comunicazioni',
  templateUrl: 'elenco-comunicazioni.html',
})
export class ElencoComunicazioniPage {
  selectedProcedimento: Procedimento.Procedimento;
  public listaComunicazioni: Array<Array<Comunicazione.Comunicazione>>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public comunicazioniService: ComunicazioniService,
    private storeService: StoreService,
    public loadingCtrl: LoadingController) {
    this.listaComunicazioni = new Array<Array<Comunicazione.Comunicazione>>();
    this.selectedProcedimento = navParams.get('procedimento');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoDocumentiPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      this.comunicazioniService.getListaComunicazioni(tokenValue, this.selectedProcedimento.pro_azienda_key, this.selectedProcedimento.procedimento_key).subscribe(r => {
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r.ErrorMessage.msg_code);
          this.listaComunicazioni = r.l_lista_comunicazioni;
          console.log(this.listaComunicazioni.length);
        }
      })
    });
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToDetails(event, comunicazione) {
    console.log("goToDetailsComunicazione click" + comunicazione.comunicazioni_key);
    if (comunicazione.comunicazioni_key != 0) {
      this.navCtrl.push(DashboardComunicazionePage, { comunicazione: comunicazione })
    }
  }

  back() {
    this.navCtrl.pop();
  }
}

import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { Sito } from '../../../models/sito/sito.namespace';

import { SitiService } from '../../../services/siti/siti.service';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
/**
 * Generated class for the DashboardSitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard-sito',
  templateUrl: 'dashboard-sito.html',
})
export class DashboardSitoPage {
  selectedSito: Sito.Sito;
  catastale: Array<Sito.Catastale>;
  procedimenti: Array<Sito.Procedimento>;
  whichPage: string;
  constructor(public navCtrl: Nav,
    public navParams: NavParams,
    public sitiService: SitiService,
    private storeService: StoreService) {
    this.selectedSito = navParams.get('sito');
    // console.log(this.selectedSito.indirizzo_completo);
    console.log(this.selectedSito.az_codice_interno);
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DashboardSitoPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.whichPage = 'Sito';
      this.sitiService.getSito(this.selectedSito.azienda_key, tokenValue).subscribe(r => {
        console.log('ionViewDidLoad DashboardSitoPage getSito');
        if (r.ErrorMessage.msg_code === 0) {
          this.selectedSito = r.sito;
          this.catastale = r.catastale_situazione;
          this.procedimenti = r.prescrizioni_situazione;
          console.log(this.selectedSito.indirizzo_completo);
          console.log(this.selectedSito.gr_ragione_sociale);
          console.log(this.selectedSito.az_codice_interno);
          console.log('catastale_situazione ' + this.catastale);
          console.log('procedimenti ' + this.procedimenti);
        }
      })
    });
  }
  segmentSitoClicked(event) {
    console.log('segmentSitoClicked');
  } 
  segmentCatastaleClicked(event) {
    console.log('segmentCatastaleClicked ' + this.catastale);
  } 
  segmentProcedimentiClicked(event) {
    console.log('segmentProcedimentiClicked');
  } 
  segmentGraficoClicked(event) {
    console.log('segmentGraficoClicked');
  }
  segmentMappaClicked(event) {
    console.log('segmentMappaClicked');
  }
  segmentImmaginiClicked(event) {
    console.log('segmentImmaginiClicked');
  }

}

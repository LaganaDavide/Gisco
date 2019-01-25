import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { Sito } from '../../../models/sito/sito.namespace';

import { SitiService } from '../../../services/siti/siti.service';
import {StoreService} from '../../../services/store/store.service';
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

  constructor(public navCtrl: Nav, 
    public navParams: NavParams,
    public sitiService: SitiService,
    private storeService: StoreService) {
    this.selectedSito = navParams.get('sito');

    console.log(this.selectedSito.indirizzo_completo);
    console.log(this.selectedSito.gr_ragione_sociale);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardSitoPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.sitiService.getSito(this.selectedSito.azienda_key, tokenValue).subscribe(r => {
        console.log('ionViewDidLoad DashboardSitoPage getSito');
        if(r.ErrorMessage.msg_code===0){
          this.selectedSito=r.sito;
          console.log(this.selectedSito.indirizzo_completo);
          console.log(this.selectedSito.gr_ragione_sociale);

        }
      })
    });
  }

}

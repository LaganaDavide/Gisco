import { Component, OnInit } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';

import { DashboardSitoPage } from '../dashboard-sito/dashboard-sito';

import { Sito } from '../../../models/sito/sito.namespace';
import { SitiService } from '../../../services/siti/siti.service';
import {StoreService} from '../../../services/store/store.service';
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

  public listaSiti: Array<Sito.Sito>;

  constructor(public navParams: NavParams,
    public sitiService: SitiService,
    private storeService: StoreService, 
    private nav: Nav,
    ) {
      this.listaSiti = new Array<Sito.Sito>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoSitiPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.sitiService.getListaSiti(tokenValue).subscribe(r => {
        console.log('ionViewDidLoad getListaSiti');
        if(r.ErrorMessage.msg_code===0){
          console.log(r.ErrorMessage.msg_code);
          this.listaSiti = r.l_lista_siti;
        }
      })
    });
  }

  //navigazione verso la dashboard dello specifico sito selezionato
  public goToDetails(event, sito){
    this.nav.push(DashboardSitoPage, {sito : sito})
  }
  
}

import { Component, OnInit, NgModule } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';

import { DashboardDispositivoPage } from '../dashboard-dispositivo/dashboard-dispositivo';

import { Dispositivo } from '../../../models/dispositivo/dispositivo.namespace';
import { DispositiviService } from '../../../services/dispositivi/dispositivi.service';
import {StoreService} from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';


/**
 * Generated class for the ElencoDispositiviPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-elenco-dispositivi',
  templateUrl: 'elenco-dispositivi.html',
})

export class ElencoDispositiviPage {

  public listaDispositivi: Array<Dispositivo.Dispositivo>;

  constructor(public navParams: NavParams,
    public dispositiviService: DispositiviService,
    private storeService: StoreService, 
    private nav: Nav,
    ) {
      this.listaDispositivi = new Array<Dispositivo.Dispositivo>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoDispositiviPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.dispositiviService.getListaDispositivi(tokenValue).subscribe(r => {
        console.log('ionViewDidLoad getListaDispositivi');
        if(r.ErrorMessage.msg_code===0){
          console.log(r.ErrorMessage.msg_code);
          this.listaDispositivi = r.l_lista_dispositivi;
        }
      })
    });
  }

  public goToDetails(event, dispositivo){
    this.nav.push(DashboardDispositivoPage, {dispositivo : dispositivo})
  }
  
}

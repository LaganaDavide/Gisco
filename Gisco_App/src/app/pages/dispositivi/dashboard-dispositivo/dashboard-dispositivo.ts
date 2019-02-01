import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { Dispositivo } from '../../../models/dispositivo/dispositivo.namespace';

import { DispositiviService } from '../../../services/dispositivi/dispositivi.service';
import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
/**
 * Generated class for the DashboardDispositivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard-dispositivo',
  templateUrl: 'dashboard-dispositivo.html',
})
export class DashboardDispositivoPage {
  selectedDispositivo: Dispositivo.Dispositivo;
  titolarita: Array<Dispositivo.Titolarita>;
  autorizzazioni: Array<Dispositivo.Autorizzazione>;
  whichPage: string;
  constructor(public navCtrl: Nav,
    public navParams: NavParams,
    public dispositiviService: DispositiviService,
    private storeService: StoreService) {
    this.selectedDispositivo = navParams.get('dispositivo');
    // console.log(this.selectedDispositivo.indirizzo_completo);
    console.log(this.selectedDispositivo.az_codice_interno);
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DashboardDispositivoPage');
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.whichPage='Dispositivo';
      this.dispositiviService.getDispositivo(this.selectedDispositivo.dis_azienda_key, tokenValue).subscribe(r => {
        console.log('ionViewDidLoad DashboardDispositivoPage getDispositivo');
        if(r.ErrorMessage.msg_code===0){
          this.selectedDispositivo=r.dispositivo;
          this.titolarita=r.titolarita;
          this.autorizzazioni=r.autorizzazioni;
          console.log('titolarita '+this.titolarita);

        }
      })
    });
  }
  segmentDispositivoClicked(event) {
    console.log('segmentDispositivoClicked');
  }
  segmentTitolaritaClicked(event) {
    console.log('segmentTitolaritaClicked '+this.titolarita);
  }
  segmentAutorizzazioniClicked(event) {
    console.log('segmentAutorizzazioniClicked');
  }
  segmentMappaClicked(event) {
    console.log('segmentMappaClicked');
  } 
  segmentImmaginiClicked(event) {
    console.log('segmentImmaginiClicked');
  } 

}

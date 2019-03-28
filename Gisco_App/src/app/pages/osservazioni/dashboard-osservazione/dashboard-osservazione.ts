import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';

import { StoreService } from '../../../services/store/store.service';
import { Login } from '../../../models/login/login.namespace';
import { Osservazione } from '../../../models/osservazione/osservazione.namespace';
import { OsservazioniService } from '../../../services/osservazioni/osservazioni.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NuovaAssegnazionePage } from '../nuova-assegnazione/nuova-assegnazione';
/**
 * Generated class for the DashboardSitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard-osservazione',
  templateUrl: 'dashboard-osservazione.html',
})

export class DashboardOsservazionePage {
  selectedOsservazione: Osservazione.Osservazione;
  assegnazioni: Array<Osservazione.Assegnazione>;
  immagini: Array<Osservazione.Immagine>;
  whichPage: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public osservazioniService: OsservazioniService,
    private storeService: StoreService,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController) {
    this.selectedOsservazione = navParams.get('osservazione');

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DashboardOsservazionePage');
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      console.log(tokenValue);
      this.whichPage = 'Osservazione';
      this.osservazioniService.getOsservazione(this.selectedOsservazione.attivita_key, tokenValue).subscribe(r => {
        console.log('ionViewDidLoad DashboardOsservazionePage getOsservazione');
        if (r.ErrorMessage.msg_code === 0) {
          this.selectedOsservazione = r.osservazione;
          this.assegnazioni = r.c_assegnazioni;
          this.osservazioniService.getListaImmaginiOsservazione(this.selectedOsservazione.attivita_key, tokenValue).subscribe(r => {
            if (r.ErrorMessage.msg_code === 0) {
              this.immagini = r.l_lista_immagini;
            }
            loading.dismiss();
          })
        } else {
          loading.dismiss();
          //   this.back();
          alert("errore recupero della risorsa");
        }
      })
    });
  }

  segmentOsservazioneClicked(event) {
    console.log('segmentOsservazioneClicked');
  }

  segmentAssegnazioniClicked(event) {
    console.log('segmentAssegnazioniClicked');
  }

  segmentImmaginiClicked(event) {
    console.log('segmentImmaginiClicked');
  }

  goToModificaOsservazione() {

  }

  presentImmagineActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modifica avatar',
      buttons: [
        {
          text: 'Galleria',
          handler: () => {
            this.addImmagine("gallery");
          }
        },
        {
          text: 'Fotocamera',
          handler: () => {
            this.addImmagine("camera");
          }
        },
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  addImmagine(mode) {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    if (mode == "camera") {
      options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA
      }
    }

    this.camera.getPicture(options).then((imageData) => {

      var ws_imm = new Osservazione.ws_SendImage();
      this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
        ws_imm.token=val.token_value;
        ws_imm.immagine=imageData;
        ws_imm.oggetto_key=this.selectedOsservazione.attivita_key;
        this.osservazioniService.salvaImmagineOsservazione(ws_imm).subscribe((r) => {
          console.log(r);
          if (r.ErrorMessage.msg_code == 0) {
            this.navCtrl.pop();
            this.navCtrl.push(DashboardOsservazionePage);
          } else {
            alert("errore salvataggio immagine")
          }
        });
      })
      this.storeService.getUserDataPromise();
    }, (err) => {
      console.log(err);
    });

  }

  goToEliminaImmagine(){

  }

  goToEliminaAssegnazione() {

  }

  goToNuovaAssegnazione() {
    this.navCtrl.push(NuovaAssegnazionePage, {osservazione : this.selectedOsservazione} );
  }

  goToEliminaOsservazione() {
    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
      var tokenValue = val.token_value;
      let ws_Oss = new Osservazione.ws_Osservazione();
      ws_Oss.osservazione = this.selectedOsservazione;
      ws_Oss.token = tokenValue;
      this.osservazioniService.cancellaOsservazione(ws_Oss).subscribe(r => {
        if (r.ErrorMessage.msg_code === 0) {
          console.log(r);
          this.back();
          alert("osservazione eliminata");
        }
      },
        (error) => {
          console.log(error);
        })
    })
  }

  back() {
    this.navCtrl.pop();
  }

}

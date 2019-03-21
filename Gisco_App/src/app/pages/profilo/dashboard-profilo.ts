import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform, ToastController, ActionSheetController } from 'ionic-angular';

import { Dipendente } from '../../models/dipendente/dipendente.namespace';
import { ProfiloService } from '../../services/profilo/profilo.service';
import { StoreService } from '../../services/store/store.service';
import { Login } from '../../models/login/login.namespace';


//import { FileTransfer } from '@ionic-native/file-transfer';
import { CheckService } from './../../services/shared/check.service';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


/**
 * Generated class for the DashboardSitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-dashboard-profilo',
    templateUrl: 'dashboard-profilo.html',
})

export class DashboardProfiloPage {
    private imageURI: any;
    private imageFileName: any;
    private profilo: Dipendente.Dipendente;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public profiloService: ProfiloService,
        private storeService: StoreService,
        private camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
        this.profilo = new Dipendente.Dipendente();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardProfiloPage');
        let loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        loading.present();
        this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
            var tokenValue = val.token_value;
            console.log("val " + val.token_dipendente_key);
            this.profiloService.getProfilo(val.token_dipendente_key, tokenValue).subscribe(r => {
                console.log('ionViewDidLoad DashboardProfiloPage getProfilo');
                if (r.ErrorMessage.msg_code === 0) {
                    this.profilo = r.dipendente;
                    console.log("this.profilo.nome " + this.profilo.nome);
                } else {
                    console.log("errore " + r.ErrorMessage.msg_testo);
                    alert("errore modifica avatar")
                }
                loading.dismiss();
            })
        });
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modifica avatar',
            buttons: [
                {
                    text: 'Galleria',
                    handler: () => {
                        this.changeAvatar("gallery");
                    }
                },
                {
                    text: 'Fotocamera',
                    handler: () => {
                        this.changeAvatar("camera");
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

    changeAvatar(mode) {
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

            this.imageURI = imageData;

            let s = this.storeService.userData$.subscribe((val) => {
                s.unsubscribe();
                let s1 = this.profiloService.changeAvatar(this.imageURI, val).subscribe((r) => {
                    s1.unsubscribe();
                    console.log(r);
                    if (r.ErrorMessage.msg_code == 0) {
                        alert("avatar modificato correttamente");
                        this.navCtrl.pop();
                        this.navCtrl.push(DashboardProfiloPage);
                    } else {
                        alert("errore modifica avatar")
                    }
                });
            })
            this.storeService.getUserDataPromise();
        }, (err) => {
            console.log(err);
        });

    }

    public changePassword() {
        const prompt = this.alertCtrl.create({
            title: 'Cambio Password',
            message: "inserisci i dati",
            inputs: [
                {
                    name: 'old',
                    placeholder: 'password corrente'
                },
                {
                    name: 'new',
                    placeholder: 'Nuova password'
                },
                {
                    name: 'repeat',
                    placeholder: 'reinserisci nuova passoword'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Send',
                    handler: data => {
                        if (this.checkPassword(data.old) == true) {
                            if (data.new.length > 5) {
                                if (data.new == data.repeat) {
                                    this.storeService.getUserDataPromise().then((val: Login.ws_Token) => {
                                        var tokenValue = val.token_value;
                                        this.profiloService.changePassword(tokenValue, data.old, data.new, data.repeat).subscribe((r) => {
                                            if (r.ErrorMessage.msg_code == 0) {
                                                alert("password cambiata correttamente");
                                            } else {
                                                console.log(r);
                                                alert("errore modifica password");
                                            }
                                        });
                                    })
                                } else {
                                    alert("le password non corrispondono");
                                }
                            } else {
                                alert("la password deve essere più lunga di 5 caratteri");
                            }
                        } else {
                            alert("password corrente non corretta");
                        }
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    }

    checkPassword(old): boolean {
        return true;
    }


}
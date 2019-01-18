import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../../pages/login/login';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the PageHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-header',
  templateUrl: 'page-header.html'
})
export class PageHeaderComponent {

  text: string;

  constructor(
    private storage :Storage,
    public navCtrl: NavController) {
  }

  public logOut(): void{
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

}

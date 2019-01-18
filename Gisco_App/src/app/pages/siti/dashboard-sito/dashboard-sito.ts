import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: Nav, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardSitoPage');
  }

}

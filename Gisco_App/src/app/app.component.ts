import { LoadingPage } from './pages/loading/loading';

import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { HomePage } from './pages/home/home';
import { LoginPage } from './pages/login/login';
import { ElencoSitiPage } from './pages/siti/elenco-siti/elenco-siti';
import { ElencoDispositiviPage } from './pages/dispositivi/elenco-dispositivi/elenco-dispositivi';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoadingPage;

  private pagineSenzaMenu : Array<string> = new Array("LoadingPage", "LoginPage");

  constructor(platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage :Storage,
    public menuCtrl: MenuController
    ) {

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
    });
  };

  public logOut(): void{
    this.storage.clear();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  };

  public goToHome(): void {
    this.nav.setRoot(HomePage);
  }

  public showMenu(): boolean  {
    let view = this.nav.getActive();
    if(view){
      return this.pagineSenzaMenu.indexOf(view.name) === -1;
    } else return false;
  };

  public goToListaSiti(): void {
    this.nav.push(ElencoSitiPage);
    this.menuCtrl.close();
  }

  public goToListaDispositivi(): void {
    this.nav.push(ElencoDispositiviPage);
    this.menuCtrl.close();
  }
}

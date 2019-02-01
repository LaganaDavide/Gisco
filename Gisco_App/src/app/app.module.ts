import { ErrorService } from './services/shared/error.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

// #REGION - Modules
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { LoadingModule } from './modules/loading/loading.module';
import { ElencoSitiModule } from './modules/siti/elencoSiti/elencoSiti.module';
import { MappaSitiModule } from './modules/siti/mappaSiti/mappaSiti.module';
import { DashboardSitoModule } from './modules/siti/dashboardSito/dashboardSito.module';
import { ComponentsModule } from './modules/componenti/components.module';
import { ElencoDispositiviModule } from './modules/dispositivi/elencoDispositivi/elencoDispositivi.module';
import { DashboardDispositivoModule } from './modules/dispositivi/DashboardDispositivo/dashboardDispositivo.module';

// #REGION - Pages
import { LoadingPage } from './pages/loading/loading';
import { LoginPage } from './pages/login/login';
import { HomePage } from './pages/home/home';

//    SITI
import { ElencoSitiPage } from './pages/siti/elenco-siti/elenco-siti';
import { MappaSitiPage } from './pages/siti/mappa-siti/mappa-siti';
import { DashboardSitoPage } from './pages/siti/dashboard-sito/dashboard-sito';

//    DISPOSITIVI
import { ElencoDispositiviPage } from './pages/dispositivi/elenco-dispositivi/elenco-dispositivi';
import { DashboardDispositivoPage } from './pages/dispositivi/dashboard-dispositivo/dashboard-dispositivo';


// #REGION - Components

// #REGION - Services
import { HttpService } from './services/shared/http.service';
import { LoginService } from './services/login/login.service';
import { IonicStorageModule } from '@ionic/storage';
import { StoreService } from './services/store/store.service';
import { SitiService } from './services/siti/siti.service';
import { DispositiviService } from './services/dispositivi/dispositivi.service';
import { CheckService } from './services/shared/check.service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule,
    BrowserModule,
    LoginModule,
    HttpClientModule,
    HomeModule,
    LoadingModule,
    ElencoSitiModule,
    MappaSitiModule,
    DashboardSitoModule,
    ElencoDispositiviModule,
    DashboardDispositivoModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoadingPage,
    ElencoSitiPage,
    MappaSitiPage,
    DashboardSitoPage,
    ElencoDispositiviPage,
    DashboardDispositivoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StoreService,
    HttpService,
    LoginService,
    ErrorService,
    Storage,
    SitiService,
    DispositiviService,
    CheckService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [
    ComponentsModule
  ]
})
export class AppModule { }

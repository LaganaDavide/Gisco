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
import { MappaDispositiviModule } from './modules/dispositivi/mappaDispositivi/mappaDispositivi.module';
import { DashboardDispositivoModule } from './modules/dispositivi/DashboardDispositivo/dashboardDispositivo.module';
import { ChatModule } from './modules/chat/chat.module';
import { CartelleModule } from './modules/documenti/cartelle/cartelle.module';
import { AgmCoreModule } from '@agm/core';
import { ElencoDocumentiModule } from './modules/documenti/elencoDocumenti/elencoDocumenti.module';

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
import { MappaDispositiviPage } from './pages/dispositivi/mappa-dispositivi/mappa-dispositivi';

//    CHAT
import { ChatPage } from './pages/chat/chat';

//    DOCUMENTI
import { CartellePage } from './pages/documenti/cartelle/cartelle';
import { ElencoDocumentiPage } from './pages/documenti/elenco-documenti/elenco-documenti';

// #REGION - Components

// #REGION - Services
import { HttpService } from './services/shared/http.service';
import { LoginService } from './services/login/login.service';
import { IonicStorageModule } from '@ionic/storage';
import { StoreService } from './services/store/store.service';
import { SitiService } from './services/siti/siti.service';
import { DispositiviService } from './services/dispositivi/dispositivi.service';
import { CheckService } from './services/shared/check.service';
import { DocumentiService } from './services/documenti/documenti.service';
import { ElencoTipologieModule } from './modules/documenti/elencoTipologie/elencoTipologie.module';
import { TipologiePage } from './pages/documenti/elenco-tipologie/elenco-tipologie';
import { DashboardDocumentoModule } from './modules/documenti/dashboardDocumento/dashboardDocumento.module';
import { DashboardDocumentoPage } from './pages/documenti/dashboard-documento/dashboard-documento';


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
    MappaDispositiviModule,
    DashboardDispositivoModule,
    ComponentsModule,
    ChatModule,
    CartelleModule,
    ElencoTipologieModule,
    ElencoDocumentiModule,
    DashboardDocumentoModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDXmAb965Z5_cWPc5btA8CXwzDzSvhwROk'
    })
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
    MappaDispositiviPage,
    DashboardDispositivoPage,
    ElencoDocumentiPage,
    TipologiePage,
    CartellePage,
    DashboardDocumentoPage,
    ChatPage
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
    DocumentiService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [
    ComponentsModule
  ]
})
export class AppModule { }

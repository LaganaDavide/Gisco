webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_store_store_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadingPage = /** @class */ (function () {
    function LoadingPage(loadingCtrl, navCtrl, store) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.store = store;
        this.presentLoadingDefault();
        this.store.userData$.subscribe(function (val) {
            console.log(val);
            if (val != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { val: 'pippo' });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], { val: 'pippo' });
            }
        });
        this.store.getUserData();
    }
    LoadingPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/loading/loading.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>loading</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <!--<ion-spinner name="bubbles"></ion-spinner>-->\n</ion-content>\n'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_store_store_service__["a" /* StoreService */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(httpService) {
        this.httpService = httpService;
    }
    ;
    LoginService.prototype.login = function (username, password) {
        return this.httpService.getToken(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].BASE_API_URL + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_TOKEN_PLACEHOLDER
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + username
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + password);
    };
    ;
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_http_service__["a" /* HttpService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    //questa operazione serve per il login
    HttpService.prototype.getToken = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.get(url, { headers: headers });
    };
    //questa operazione va solo se si è loggati
    HttpService.prototype.get = function (url, tokenValue) {
        // vado a sostituire il placeholder con il token che ho in sesssione (se c'è) prima di fare qualsiasi chiamata get al server
        var completeUrl = url.replace("TOKEN", tokenValue);
        return this.http.get(completeUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", Object)
    ], HttpService.prototype, "nav", void 0);
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoSitiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_sito_dashboard_sito__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_siti_siti_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ElencoSitiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElencoSitiPage = /** @class */ (function () {
    function ElencoSitiPage(navParams, sitiService, storeService, nav) {
        this.navParams = navParams;
        this.sitiService = sitiService;
        this.storeService = storeService;
        this.nav = nav;
        this.listaSiti = new Array();
    }
    ElencoSitiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ElencoSitiPage');
        this.storeService.getUserDataPromise().then(function (val) {
            var tokenValue = val.token_value;
            console.log(tokenValue);
            _this.sitiService.getListaSiti(tokenValue).subscribe(function (r) {
                console.log('ionViewDidLoad getListaSiti');
                if (r.ErrorMessage.msg_code === 0) {
                    console.log(r.ErrorMessage.msg_code);
                    _this.listaSiti = r.l_lista_siti;
                }
            });
        });
    };
    //navigazione verso la dashboard dello specifico sito selezionato
    ElencoSitiPage.prototype.goToDetails = function (event, sito) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_sito_dashboard_sito__["a" /* DashboardSitoPage */], { sito: sito });
    };
    ElencoSitiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-elenco-siti',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/elenco-siti/elenco-siti.html"*/'<ion-header>\n  <!-- <page-header></page-header> -->\n</ion-header>\n<ion-content padding>\n    <ion-card class="rounded-generic-card">\n        <ion-card-header class="generic-card-header blue-header">ELENCO SITI</ion-card-header>\n        <ion-card-content class="yellow-header">\n            <ion-list>\n                <ion-item *ngFor="let sito of listaSiti" (click)="goToDetails($event, sito)">\n                  {{sito.gr_ragione_sociale}}\n                </ion-item>\n              </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/elenco-siti/elenco-siti.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_siti_siti_service__["a" /* SitiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_siti_siti_service__["a" /* SitiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__["a" /* StoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _d || Object])
    ], ElencoSitiPage);
    return ElencoSitiPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=elenco-siti.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSitoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_siti_siti_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_store_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardSitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardSitoPage = /** @class */ (function () {
    function DashboardSitoPage(navCtrl, navParams, sitiService, storeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sitiService = sitiService;
        this.storeService = storeService;
        this.selectedSito = navParams.get('sito');
        console.log(this.selectedSito.indirizzo_completo);
        console.log(this.selectedSito.gr_ragione_sociale);
    }
    DashboardSitoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DashboardSitoPage');
        this.storeService.getUserDataPromise().then(function (val) {
            var tokenValue = val.token_value;
            console.log(tokenValue);
            _this.sitiService.getSito(_this.selectedSito.azienda_key, tokenValue).subscribe(function (r) {
                console.log('ionViewDidLoad DashboardSitoPage getSito');
                if (r.ErrorMessage.msg_code === 0) {
                    _this.selectedSito = r.sito;
                    console.log(_this.selectedSito.indirizzo_completo);
                    console.log(_this.selectedSito.gr_ragione_sociale);
                }
            });
        });
    };
    DashboardSitoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard-sito',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/dashboard-sito/dashboard-sito.html"*/'<!--\n  Generated template for the DashboardSitoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom>\n    <ion-title>dashboardSito</ion-title>\n  </ion-navbar>\n\n<ion-toolbar no-border-top>\n    <ion-segment (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="friends">\n          <ion-label>Friends</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="enemies">\n          <ion-label>Enemies</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- Default Segment -->\n\n  <h3 text-center *ngIf="selectedSito">\n    gr_ragione_sociale {{selectedSito.gr_ragione_sociale}}\n  </h3>\n  <h4 text-center *ngIf="selectedSito">\n    Indirizzo: <b>{{selectedSito.indirizzo_completo}}</b>\n  </h4>\n</ion-content>'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/dashboard-sito/dashboard-sito.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_siti_siti_service__["a" /* SitiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_siti_siti_service__["a" /* SitiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_store_store_service__["a" /* StoreService */]) === "function" && _d || Object])
    ], DashboardSitoPage);
    return DashboardSitoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=dashboard-sito.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    /**public sendError(url: string) : Observable<Error.ErrorResponse>{
        return this.http.get<Error.ErrorResponse>(url);
    }*/
    ErrorService.prototype.sendError = function (data) {
        alert(data.message);
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"pages/comunicazioni/comunicazioni.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_login_login_namespace__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckService = /** @class */ (function () {
    function CheckService() {
    }
    // constructor(private http: HttpClient){}
    /**public sendError(url: string) : Observable<Error.ErrorResponse>{
        return this.http.get<Error.ErrorResponse>(url);
    }*/
    CheckService.prototype.checkToken = function (token) {
        //    return this.http.get<Login.ws_Token>("http://allinappws.mesys.it/services/checktoken/"+token);
        //test
        var t = new __WEBPACK_IMPORTED_MODULE_1__models_login_login_namespace__["a" /* Login */].ws_Token();
        t.ErrorMessage = new __WEBPACK_IMPORTED_MODULE_1__models_login_login_namespace__["a" /* Login */].MessaggioErrore();
        t.ErrorMessage.msg_code = 0;
        t.token_value = token;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(t);
    };
    CheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CheckService);
    return CheckService;
}());

//# sourceMappingURL=check.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login;
(function (Login) {
    var MessaggioErrore = /** @class */ (function () {
        function MessaggioErrore() {
        }
        return MessaggioErrore;
    }());
    Login.MessaggioErrore = MessaggioErrore;
    var ws_Token = /** @class */ (function () {
        function ws_Token() {
        }
        return ws_Token;
    }());
    Login.ws_Token = ws_Token;
})(Login || (Login = {}));
//# sourceMappingURL=login.namespace.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });
var GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://testapp.piattaformagisco.com/services/',
    URL_SEPARATOR: '/',
    URL_TOKEN_PLACEHOLDER: 'TOKEN',
    SITI_GET_ELENCO_KEYWORD: 'get_elenco_siti',
    SITI_GET_TIPOLOGIE_KEYWORD: 'get_tipologie_siti',
    SITI_GET_KEYWORD: 'get_sito',
});
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_store_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SitiService = /** @class */ (function () {
    function SitiService(httpService, storeService) {
        this.httpService = httpService;
        this.storeService = storeService;
    }
    SitiService.prototype.getListaSiti = function (token) {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].BASE_API_URL + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].SITI_GET_ELENCO_KEYWORD
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_TOKEN_PLACEHOLDER
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + "0" //from
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + "0" //to
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + "A", token); //tipologia
    };
    SitiService.prototype.getTipologieSiti = function (token) {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].BASE_API_URL + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].SITI_GET_TIPOLOGIE_KEYWORD
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_TOKEN_PLACEHOLDER, token);
    };
    SitiService.prototype.getSito = function (key, token) {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].BASE_API_URL + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].SITI_GET_TIPOLOGIE_KEYWORD
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_TOKEN_PLACEHOLDER
            + __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GlobalVariable */].URL_SEPARATOR + key, token); //id sito
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", Object)
    ], SitiService.prototype, "nav", void 0);
    SitiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_store_store_service__["a" /* StoreService */]])
    ], SitiService);
    return SitiService;
}());

//# sourceMappingURL=siti.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shared_page_header_page_header__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__components_shared_page_header_page_header__["a" /* PageHeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_shared_page_header_page_header__["a" /* PageHeaderComponent */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappaSitiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MappaSitiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MappaSitiPage = /** @class */ (function () {
    function MappaSitiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MappaSitiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MappaSitiPage');
    };
    MappaSitiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mappa-siti',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/mappa-siti/mappa-siti.html"*/'<!--\n  Generated template for the MappaSitiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mappaSiti</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/siti/mappa-siti/mappa-siti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MappaSitiPage);
    return MappaSitiPage;
}());

//# sourceMappingURL=mappa-siti.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_error_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_login_login_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_home_home_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_loading_loading_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_siti_elencoSiti_elencoSiti_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_siti_mappaSiti_mappaSiti_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_siti_dashboardSito_dashboardSito_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_componenti_components_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_loading_loading__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_siti_elenco_siti_elenco_siti__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_siti_mappa_siti_mappa_siti__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_siti_dashboard_sito_dashboard_sito__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_shared_http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_login_login_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_store_store_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_siti_siti_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_shared_check_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// #REGION - Modules







// #REGION - Pages



//    SITI



// #REGION - Components
// #REGION - Services






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__modules_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_10__modules_loading_loading_module__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_11__modules_siti_elencoSiti_elencoSiti_module__["a" /* ElencoSitiModule */],
                __WEBPACK_IMPORTED_MODULE_12__modules_siti_mappaSiti_mappaSiti_module__["a" /* MappaSitiModule */],
                __WEBPACK_IMPORTED_MODULE_13__modules_siti_dashboardSito_dashboardSito_module__["a" /* DashboardSitoModule */],
                __WEBPACK_IMPORTED_MODULE_14__modules_componenti_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: 'pages/comunicazioni/comunicazioni.module#ComunicazioniPageModule', name: 'ComunicazioniPage', segment: 'comunicazioni', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_siti_elenco_siti_elenco_siti__["a" /* ElencoSitiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_siti_mappa_siti_mappa_siti__["a" /* MappaSitiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_siti_dashboard_sito_dashboard_sito__["a" /* DashboardSitoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__services_store_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_21__services_shared_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_22__services_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_0__services_shared_error_service__["a" /* ErrorService */],
                Storage,
                __WEBPACK_IMPORTED_MODULE_25__services_siti_siti_service__["a" /* SitiService */],
                __WEBPACK_IMPORTED_MODULE_26__services_shared_check_service__["a" /* CheckService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__modules_componenti_components_module__["a" /* ComponentsModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_loading_loading__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_siti_elenco_siti_elenco_siti__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, menuCtrl) {
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_loading_loading__["a" /* LoadingPage */];
        this.pagineSenzaMenu = new Array("LoadingPage", "LoginPage");
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    ;
    MyApp.prototype.logOut = function () {
        this.storage.clear();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    ;
    MyApp.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.showMenu = function () {
        var view = this.nav.getActive();
        if (view) {
            return this.pagineSenzaMenu.indexOf(view.name) === -1;
        }
        else
            return false;
    };
    ;
    MyApp.prototype.goToListaSiti = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_siti_elenco_siti_elenco_siti__["a" /* ElencoSitiPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/app.html"*/'<ion-header *ngIf="showMenu()">\n	<ion-navbar align-title="center">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title (click)="goToHome()">GISCO APP</ion-title>\n        <!--<ion-img  src="assets/imgs/logo.png"></ion-img>-->\n      </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-list>\n        <ion-item (click)="logOut()"> LogOut </ion-item>\n        <ion-item menuClose detail-none>Close Menu</ion-item>\n        <ion-item (click)="goToListaSiti()">Lista Siti</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error;
(function (Error) {
    var ErrorResponse = /** @class */ (function () {
        function ErrorResponse() {
        }
        return ErrorResponse;
    }());
    Error.ErrorResponse = ErrorResponse;
    var ErrorData = /** @class */ (function () {
        function ErrorData() {
        }
        return ErrorData;
    }());
    Error.ErrorData = ErrorData;
})(Error || (Error = {}));
//# sourceMappingURL=error.namespace.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_componenti_components_module__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__modules_componenti_components_module__["a" /* ComponentsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PageHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    PageHeaderComponent.prototype.logOut = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/components/shared/page-header/page-header.html"*/'<!-- Generated template for the PageHeaderComponent component -->\n<div>\n  <div>\n    <ion-navbar align-title="center">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>ALL IN APP2</ion-title>\n      <!--<ion-img  src="assets/imgs/logo.png"></ion-img>-->\n    </ion-navbar>\n  </div>\n\n  <ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-list>\n        <ion-item (click)="logOut()"> LogOut </ion-item>\n        <ion-item menuClose detail-none>Close Menu</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="rootPage"></ion-nav>\n</div>'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/components/shared/page-header/page-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());

//# sourceMappingURL=page-header.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_loading_loading__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pages_loading_loading__["a" /* LoadingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_loading_loading__["a" /* LoadingPage */]
            ],
            providers: []
        })
    ], LoadingModule);
    return LoadingModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElencoSitiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_siti_elenco_siti_elenco_siti__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElencoSitiModule = /** @class */ (function () {
    function ElencoSitiModule() {
    }
    ElencoSitiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_elenco_siti_elenco_siti__["a" /* ElencoSitiPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_elenco_siti_elenco_siti__["a" /* ElencoSitiPage */]]
        })
    ], ElencoSitiModule);
    return ElencoSitiModule;
}());

//# sourceMappingURL=elencoSiti.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappaSitiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_siti_mappa_siti_mappa_siti__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MappaSitiModule = /** @class */ (function () {
    function MappaSitiModule() {
    }
    MappaSitiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_mappa_siti_mappa_siti__["a" /* MappaSitiPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_mappa_siti_mappa_siti__["a" /* MappaSitiPage */]]
        })
    ], MappaSitiModule);
    return MappaSitiModule;
}());

//# sourceMappingURL=mappaSiti.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSitoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_siti_dashboard_sito_dashboard_sito__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardSitoModule = /** @class */ (function () {
    function DashboardSitoModule() {
    }
    DashboardSitoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_dashboard_sito_dashboard_sito__["a" /* DashboardSitoPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pages_siti_dashboard_sito_dashboard_sito__["a" /* DashboardSitoPage */]]
        })
    ], DashboardSitoModule);
    return DashboardSitoModule;
}());

//# sourceMappingURL=dashboardSito.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_check_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreService = /** @class */ (function () {
    function StoreService(storage, check, login) {
        this.storage = storage;
        this.check = check;
        this.login = login;
        this.userData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.userData$ = this.userData.asObservable();
        this.ud = null;
    }
    StoreService.prototype.getUserData = function () {
        var _this = this;
        if (this.ud == null) {
            //store service prima inizializzaione
            this.storage.get("userData").then(function (val) {
                //recuperato token dal database
                if (val != null && val.ErrorMessage.msg_code == 0) {
                    //controllo la validità del token
                    _this.check.checkToken(val.token_value).subscribe(function (r) {
                        //token corretto lo invio
                        if (r.ErrorMessage.msg_code == 0) {
                            _this.ud = r;
                            _this.userData.next(r);
                        }
                        else {
                            //token non corretto faccio il login
                            _this.login.login(val.m_token_user, val.m_token_password).subscribe(function (rl) {
                                console.log("log userdata 1");
                                _this.setUserData(rl);
                                if (rl.ErrorMessage.msg_code == 0) {
                                    _this.ud = rl;
                                    _this.userData.next(rl);
                                }
                            });
                        }
                    });
                }
                else {
                    //devo andare alla pagina del login
                    _this.userData.next(null);
                }
            });
        }
        else {
            //store service già inizializzato
            this.check.checkToken(this.ud.token_value).subscribe(
            //check sul token
            function (r) {
                //token valido lo invio
                if (r.ErrorMessage.msg_code == 0) {
                    _this.userData.next(r);
                }
                else {
                    _this.login.login(r.m_token_user, r.m_token_password).subscribe(
                    //token non valido faccio il login
                    function (rl) {
                        console.log("log userdata 2");
                        if (rl.ErrorMessage.msg_code == 0) {
                            _this.setUserData(rl);
                            _this.ud = rl;
                            _this.userData.next(rl);
                        }
                        else {
                            alert("login non riuscito");
                        }
                    });
                }
            });
        }
    };
    ;
    StoreService.prototype.setUserData = function (udata) {
        console.log(udata);
        this.ud = udata;
        if (udata != null) {
            this.storage.set("userData", udata).then(function (val) {
                console.log(val);
            });
        }
        else {
            return -1;
        }
        return 1;
    };
    ;
    StoreService.prototype.getUserDataPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.ud == null) {
                //store service prima inizializzaione
                _this.storage.get("userData").then(function (val) {
                    //recuperato token dal database
                    console.log(val);
                    if (val != null && val.ErrorMessage.msg_code == 0) {
                        //controllo la validità del token
                        _this.check.checkToken(val.token_value).subscribe(function (r) {
                            console.log(r);
                            //token corretto lo invio
                            if (r.ErrorMessage.msg_code == 0) {
                                resolve(val);
                            }
                            else {
                                //token non corretto faccio il login
                                _this.login.login(val.m_token_user, val.m_token_password).subscribe(function (rl) {
                                    console.log(rl);
                                    console.log("log userdata 1");
                                    if (rl.ErrorMessage.msg_code == 0) {
                                        _this.setUserData(rl);
                                        _this.ud = rl;
                                        resolve(rl);
                                    }
                                    else {
                                        console.log("errore login 4");
                                        _this.setUserData(null);
                                        _this.ud = null;
                                        resolve(null);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.log("login non riuscito 5");
                        //devo andare alla pagina del login
                        resolve(null);
                    }
                });
            }
            else {
                //store service già inizializzato
                _this.check.checkToken(_this.ud.token_value).subscribe(
                //check sul token
                function (r) {
                    //token valido lo invio
                    if (r.ErrorMessage.msg_code == 0) {
                        resolve(_this.ud);
                    }
                    else {
                        _this.login.login(_this.ud.m_token_user, _this.ud.m_token_password).subscribe(
                        //token non valido faccio il login
                        function (rl) {
                            console.log("log userdata 3");
                            console.log(rl);
                            if (rl.ErrorMessage.msg_code == 0) {
                                _this.setUserData(rl);
                                _this.ud = rl;
                                resolve(rl);
                            }
                            else {
                                resolve(null);
                                _this.setUserData(null);
                                _this.ud = null;
                                console.log("login non riuscito 1");
                            }
                        });
                    }
                });
            }
        });
    };
    ;
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__shared_check_service__["a" /* CheckService */],
            __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_js__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "doughnutCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/home/home.html"*/'<ion-header>\n <!-- <page-header></page-header> -->\n</ion-header>\n<ion-content >\n	<ion-card class="rounded-generic-card">\n		<ion-card-header class="generic-card-header blue-header">Doughnut Chart</ion-card-header>\n		<ion-card-content class="yellow-header">\n			<canvas #doughnutCanvas></canvas>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shared_error_namespace__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_error_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_login_login_namespace__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/**
 * Generated class for the ComunicazioneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(loginService, navCtrl, alertCtrl, store, error) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.store = store;
        this.error = error;
        this.username = "";
        this.password = "";
        this.userData = new __WEBPACK_IMPORTED_MODULE_6__models_login_login_namespace__["a" /* Login */].ws_Token();
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.username, this.password).subscribe(function (r) {
            if (r.result != "E") {
                _this.userData.m_token_user = _this.username;
                _this.userData.m_token_password = _this.password;
                _this.userData.token_value = r.token_value;
                _this.userData.ErrorMessage = r.ErrorMessage;
                _this.store.setUserData(_this.userData);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], { val: 'pippo' });
            }
            else {
                //throw new Error("test Error");
                var ed = new __WEBPACK_IMPORTED_MODULE_0__models_shared_error_namespace__["a" /* Error */].ErrorData();
                ed.message = "errore nel login";
                _this.error.sendError(ed);
                //this.presentAlert();
            }
        });
    };
    LoginPage.prototype.presentAlert = function () {
        // se serve, qui si puo' mettere una chiamata per tenere traccia di chi ha tentato e fallito il login
        var alert = this.alertCtrl.create({
            title: 'Login Failed',
            subTitle: 'Retry',
            buttons: ['Again']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/login/login.html"*/'<ion-content class="bg-dark login" padding>\n  <form (ngSubmit)="login()" #registerForm="ngForm" class="container">\n    <div class="card card-transp card-login mx-auto mt-5">\n        <ion-row class="card-header">\n            <ion-col>\n              <div class="logo">Gisco</div>\n            </ion-col>\n          </ion-row>\n          <ion-row class="card-body">\n            <ion-col>\n              <ion-list inset>\n                <div class="form-group">\n                  <input class="form-control" type="text" placeholder="Email" name="email" [(ngModel)]="username" required/>\n                </div>\n                <div class="form-group">\n                  <input class="form-control" type="password" placeholder="Password" name="password" [(ngModel)]="password" required/>  \n                </div>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="switch switch-lg">\n              <input type="checkbox" class="switch" id="switch-id">\n              <label for="switch-id">Salva</label>\n            </span>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="btn btn-transparent btn-block" full type="submit" [disabled]="!registerForm.form.valid">Entra</button>\n          </ion-col>\n        </ion-row>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Marte5/Desktop/Maria/Ionic/Gisco/Gisco_App/src/app/pages/login/login.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]; }))),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__["a" /* StoreService */]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__services_store_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_5__services_shared_error_service__["a" /* ErrorService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map
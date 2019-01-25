import { Injectable,ViewChild } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { Observable } from "rxjs/Observable";
import {GlobalVariable} from '../../global';
import { StoreService } from '../../services/store/store.service';

import {Http } from '../../models/shared/http.namespace';
import { Nav} from 'ionic-angular';

@Injectable()
export class SitiService {

    @ViewChild(Nav) nav;

    constructor(private httpService: HttpService, 
        private storeService: StoreService) {
    }
  
    public getListaSiti(token: string): Observable<Http.HttpResponse> {
        
        return this.httpService.get(GlobalVariable.BASE_API_URL + GlobalVariable.SITI_GET_ELENCO_KEYWORD
            + GlobalVariable.URL_SEPARATOR + GlobalVariable.URL_TOKEN_PLACEHOLDER  
            + GlobalVariable.URL_SEPARATOR + "0" //from
            + GlobalVariable.URL_SEPARATOR + "0" //to
            + GlobalVariable.URL_SEPARATOR + "A" //provincia
            + GlobalVariable.URL_SEPARATOR + "A" //testo libero
            + GlobalVariable.URL_SEPARATOR + "A", token);//tipologia
    }

    public getTipologieSiti(token: string): Observable<Http.HttpResponse> {
        return this.httpService.get(GlobalVariable.BASE_API_URL + GlobalVariable.SITI_GET_TIPOLOGIE_KEYWORD
            + GlobalVariable.URL_SEPARATOR + GlobalVariable.URL_TOKEN_PLACEHOLDER, token);
    }

    public getSito(key: number, token: string): Observable<Http.HttpResponse> {
        return this.httpService.get(GlobalVariable.BASE_API_URL + GlobalVariable.SITI_GET_KEYWORD
            + GlobalVariable.URL_SEPARATOR + GlobalVariable.URL_TOKEN_PLACEHOLDER  
            + GlobalVariable.URL_SEPARATOR + key, token);//id sito
    }
}
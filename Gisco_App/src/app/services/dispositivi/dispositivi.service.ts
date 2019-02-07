import { Injectable, ViewChild } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { Observable } from "rxjs/Observable";
import { GlobalVariable } from '../../global';

import { Http } from '../../models/shared/http.namespace';
import { Nav } from 'ionic-angular';

@Injectable()
export class DispositiviService {

    @ViewChild(Nav) nav;

    constructor(private httpService: HttpService) {
    }

    public getListaDispositivi(token: string): Observable<Http.HttpResponse> {

        return this.httpService.get(GlobalVariable.BASE_API_URL + GlobalVariable.DISPOSITIVI_GET_ELENCO_KEYWORD
            + GlobalVariable.URL_SEPARATOR + GlobalVariable.URL_TOKEN_PLACEHOLDER
            + GlobalVariable.URL_SEPARATOR + "0" //from
            + GlobalVariable.URL_SEPARATOR + "0" //to
            + GlobalVariable.URL_SEPARATOR + "A" //tipologia
            + GlobalVariable.URL_SEPARATOR + "A" //provincia
            + GlobalVariable.URL_SEPARATOR + "A", token);//libero
    }

    public getDispositivo(key: number, token: string): Observable<Http.HttpResponse> {
        return this.httpService.get(GlobalVariable.BASE_API_URL + GlobalVariable.DISPOSITIVI_GET_KEYWORD
            + GlobalVariable.URL_SEPARATOR + GlobalVariable.URL_TOKEN_PLACEHOLDER
            + GlobalVariable.URL_SEPARATOR + key, token);//id dispositivo 
    }

    public getListaPrimoFiltroDispositivo(): Array<string> {
        return ["All", "RM", "PU", "TO"];
    }

    public getListaSecondoFiltroDispositivo(): Array<string> {
        return ["All", "Autostradale", "Punto vendita", "Centro agricolo", "Deposito AGIP fuel", "Deposito AGIP gas", "Uffici"];
    }
}

import { Observable } from 'rxjs/Observable';
import { Login} from './../../models/login/login.namespace';

import { Injectable } from '@angular/core';

@Injectable()
export class CheckService{

    constructor(){}
    // constructor(private http: HttpClient){}
    
    /**public sendError(url: string) : Observable<Error.ErrorResponse>{
        return this.http.get<Error.ErrorResponse>(url);
    }*/
    public checkToken (token : string): Observable<Login.ws_Token>{
    //    return this.http.get<Login.ws_Token>("http://allinappws.mesys.it/services/checktoken/"+token);

        //test
        var t = new Login.ws_Token();
        t.ErrorMessage = new Login.MessaggioErrore();
        t.ErrorMessage.msg_code = 0;
        t.token_value = token;

        return Observable.of(t);
    }
}
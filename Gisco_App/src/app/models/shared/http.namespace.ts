import { Error } from "./error.namespace";
import { Sito } from "../sito/sito.namespace";

export namespace Http {
    export class HttpResponse {
        public Success: boolean;        // Esito della chiamata
        public Data: any;               // Eventuali dati restituiti dal server: possono essere oggetti, array, ecc...
        public ErrorMessage: Error.ErrorMessage;       // oggetto errore 
        public Message: string;   
        public l_lista_siti: any;      // Eventuale messaggio. In caso di Success=false, l'error message viene inserito qui
        public sito: Sito.Sito;      // Eventuale messaggio. In caso di Success=false, l'error message viene inserito qui
    }
}
import { Error } from "./error.namespace";
import { Sito } from "../sito/sito.namespace";
import { Dispositivo } from "../dispositivo/dispositivo.namespace";

export namespace Http {
    export class HttpResponse {
        public Success: boolean;        // Esito della chiamata
        public Data: any;               // Eventuali dati restituiti dal server: possono essere oggetti, array, ecc...
        public ErrorMessage: Error.ErrorMessage;       // oggetto errore 
        public Message: string;

        public l_lista_siti: Array<Sito.Sito>;
        public sito: Sito.Sito;
        public catastale_situazione: Array<Sito.Catastale>;
        public prescrizioni_situazione: Array<Sito.Procedimento>;

        public l_lista_dispositivi: any;
        public dispositivo: Dispositivo.Dispositivo;
        public titolarita: Array<Dispositivo.Titolarita>;
        public autorizzazioni: Array<Dispositivo.Autorizzazione>;
    }
}
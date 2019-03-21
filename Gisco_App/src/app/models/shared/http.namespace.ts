import { Error } from "./error.namespace";
import { Sito } from "../sito/sito.namespace";
import { Dispositivo } from "../dispositivo/dispositivo.namespace";
import { Filtro } from "../filtro/filtro.namespace";
import { Documento } from "../documento/documento.namespace";
import { Messaggio } from "../messaggio/messaggio.namespace";
import { Dipendente } from "../dipendente/dipendente.namespace";
import { Procedimento } from "../procedimento/procedimento.namespace";
import { Comunicazione } from "../comunicazione/comunicazione.namespace";

export namespace Http {
    export class HttpResponse {
        public Success: boolean;        // Esito della chiamata
        // public Data: any;               // Eventuali dati restituiti dal server: possono essere oggetti, array, ecc...
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

        public l_lista_tipologie: Array<any>;
        public l_dropdown: Array<Filtro.Provincia>;

        public l_lista_cartelle: Array<Documento.Cartella>;
        public l_lista_documenti: Array<Documento.Documento>;
        public documento: Documento.Documento;

        public l_lista_messaggi: Array<Messaggio.Messaggio>;
        public l_dipendenti: Array<Dipendente.Dipendente>;
        public messaggio: Messaggio.Messaggio;
        public dipendente: Dipendente.Dipendente;

        public l_lista_procedimenti: Array<Procedimento.Procedimento>;
        public procedimento: Procedimento.Procedimento;
        public fasi: Array<Procedimento.Fase>;
        public personalizzazioni: Array<Procedimento.Personalizzazione>;
        public l_lista_comunicazioni: Array<Array<Comunicazione.Comunicazione>>;
        public comunicazione: Comunicazione.Comunicazione;
        public prescrizione: Comunicazione.Prescrizione;
    }
}
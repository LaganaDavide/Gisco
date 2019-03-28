export namespace Osservazione {

    export class Osservazione {
        public attivita_key: number;
        public att_azienda_key: number;
        public att_titolo: string;
        public att_descrizione: string;
        public data_segnalazione: string;
        public att_conclusa: string;
        public att_tipo_scadenza_cod: number;
        public att_emergenza: string;
        public tab_tipo_attivita_desc: string;
        public tab_tipo_scadenza_desc: string;
        public az_codice_interno: string;
        public az_ragione_sociale: string;
        public gruppo_key: number;
        public societa_gestione_key: number;
        public att_dispositivo_key: number;
        public dis_titolo: string;
        public tab_tipo_dispositivo_cod: number;
        public tab_tipo_dispositivo_desc: string;
        public att_data_fine_effettiva: string;
        public att_data_inizio_effettiva: string;
        public att_stato_attivita_cod: number;
        public num_non_conformita_chiuse: number;
        public num_non_conformita_nonris: number;
        public num_non_conformita_ris: number;
    }

    export class Assegnazione {
        public attivita_permessi_key: number;
        public attivita_key: number;
        public att_ditta_key: number;
        public att_dip_attivo: string;
        public att_dip_scelta: string;
        public dipendenti_key: number;
        public dp_nome: string;
        public dp_cognome: string;
        public dp_email: string;
        public di_ragione_sociale: string;
        public gruppo_key: number;
        public gr_ragione_sociale: string;
        public societa_gestione_key: number;
        public sg_ragione_sociale: string;
        public tab_ruolo_aziendale_desc: string;
    }

    export class ws_Osservazione {
        public osservazione: Osservazione.Osservazione;
        public c_assegnazioni: Array<Assegnazione>;
        public token: string;
    }

    export class Immagine {
        public immagini_key: number;
        public img_foreign_key: number;
        public img_foreign_type: any;
        public img_data: string;
        public img_tipo: any;
        public img_titolo: any;
        public img_file: any;
        public img_cartella: any;
        public img_url: any;
        public img_descrizione: any;
        public img_pubblicato: any;
        public inserito_da: any;
        public inserito_il: string;
        public modificato_da: any;
        public modificato_il: string;
    }

    export class ws_SendImage {
        public token: string;
        public oggetto_key: number;
        public tipologia: any;
        public immagine: any;
    }

}
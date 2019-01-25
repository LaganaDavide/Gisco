import { Societa } from '../societa/societa.namespace';

export namespace Sito {

    export class Sito {
        public gr_ragione_sociale: string;
        public prescrizioni_count: number;
        public comune_desc: string;
        public provincia_desc: string;
        public indirizzo_completo: string;
        public az_commessa: any;
        public url_icona_tipologia: string;
        public sito_codice_prevalente: string;
        public azienda_key: number;
        public societa_gestione_key: number;
        public az_codice_interno: string;
        public az_ragione_sociale: string;
        public gruppo_key: number;
        public tab_tipologia_sito_key: number;
        public tab_tipologia_sito_cod: string;
        public tab_tipologia_sito_desc: string;
        public az_indirizzo: string;
        public az_localita: string;
        public az_comune: string;
        public tab_comune_desc: string;
        public az_ca: string;
        public az_provincia_cod: string;
        public az_prov: string;
        public da_approvare: number;
        public da_utilizzare: number;
        public az_baricentro_n: number;
        public az_baricentro_e: number;

        public gruppo_desc: string;
        public az_cap: number;
        public az_comune_cod: number;
        public az_codfisc: string;
        public az_piva: string;
        public az_telefono: string;
        public az_fax: string;
        public az_email: string;
        public az_note: string;
        public az_skin: string;
        public az_estensione: number;
        public az_stato_estero: string;
        public az_presa_carico: string;
        public az_presa_carico_data: string;
        public az_data_fine_pertinenza: string;
        public az_codice_esterno: number;
        public az_importazioni_key: number;
        public inserito_da: string;
        public inserito_il: string;
        public modificato_da: string;
        public modificato_il: string;
        public az_responsabile_desc: string;
        public az_divisione_desc: string;
        public procedimenti: string;
        public prescrizioni: string;
        public documenti: string;
        public societa: Societa.Societa;
        public st_assegnato_permesso: string;
        }
}
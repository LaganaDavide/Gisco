
export namespace Filtro {

    export class TipologiaSito {
        public tab_tipologia_sito_key: any;
        public tab_tipologia_sito_gruppo: number;
        public tab_tipologia_sito_cod: string;
        public tab_tipologia_sito_desc: string;
        public tab_tipologia_sito_icona: string;
        public gr_ragione_sociale: string;
    }

    export class TipologiaDispositivo {
        public tab_tipo_dispositivo_cod: any;
        public tab_tipo_dispositivo_codice: string;
        public tab_tipo_dispositivo_desc: string;
        public tab_tipo_dispositivo_icona: string;
        public tab_tipo_dispositivo_societa_gestione: number;
        public sg_ragione_sociale: string;
    }

    export class TipologiaProcedimento {
        public tab_tipo_procedimento_cod: any;
        public tab_tipo_procedimento_code: string;
        public tab_tipo_procedimento_desc: string;
        public tab_tipo_procedimento_note: string;
        public tab_tipo_procedimento_societa_gestione_key: number;
        public tab_tipo_procedimento_cod_applicativo: number;
        public tab_tipo_procedimento_icona: string;
        public sg_ragione_sociale: string;
    }

    export class TipologiaOsservazione {
        public tab_tipo_scadenza_cod: any;
        public tab_tipo_scadenza_desc: string;
        public att_tipo_attivita_cod: string;
    }

    export class Provincia {
        public Codice: string;
        public Descrizione: string;
    }

}

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
         vtab_tipo_dispositivo_societa_gestione: number;
         public sg_ragione_sociale: string;
    }

    export class Provincia {
        public Codice: string;
        public Descrizione: string;
    }

}
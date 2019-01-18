export namespace Login {

    export class MessaggioErrore {
        public msg_tipo: string;
        public msg_code: number;
        public msg_testo: string;
        public msg_method: string;
        public msg_techdata: string;
    }

    export class ws_Token {
        public token_value: string;
        public m_token_permesso_key: number;
        public m_token_user: string;
        public m_token_password: string;
        public result: string;
        public ErrorMessage: MessaggioErrore;
    }
}
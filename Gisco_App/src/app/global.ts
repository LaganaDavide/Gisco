export const GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://testapp.piattaformagisco.com/services/',
    URL_SEPARATOR: '/',
    URL_TOKEN_PLACEHOLDER: 'TOKEN',
    URL_CHECK_TOKEN: 'checktoken',

    SITI_GET_ELENCO_KEYWORD: 'get_elenco_siti',
    SITI_GET_TIPOLOGIE_KEYWORD: 'get_tipologie_siti',
    SITI_GET_KEYWORD: 'get_sito',

    DISPOSITIVI_GET_ELENCO_KEYWORD: 'get_elenco_dispositivi',
    DISPOSITIVI_GET_KEYWORD: 'get_dispositivo',
    DISPOSITIVI_GET_TIPOLOGIE_KEYWORD: 'get_tipologie_dispositivi',

    DOCUMENTI_GET_CARTELLE_KEYWORD: 'get_cartelle_documenti',
    DOCUMENTI_GET_TIPOLOGIA_KEYWORD: 'get_tipologia_documenti',
    DOCUMENTI_GET_ELENCO_KEYWORD: 'get_elenco_documenti',
    DOCUMENTI_GET_KEYWORD: 'get_documento',

    GET_PROVINCE_KEYWORD: 'get_dropdown',

    MESSAGGI_GET_ELENCO_KEYWORD: 'get_elenco_messaggi',
    MESSAGGI_GET_KEYWORD: 'get_messaggio',
    MESSAGGI_SET_UNREAD_KEYWORD: 'set_unread_message',//Mette a non letto il messaggio
    MESSAGGI_SET_STAR_KEYWORD: 'set_star_message',//Mette o toglie dai preferito
    MESSAGGI_SET_DELETED_KEYWORD: 'set_deleted_message',//Mette nel cestino
    MESSAGGI_DELET_KEYWORD: 'del_message',//Cancella dal cestino
    MESSAGGI_SALVA_KEYWORD: 'put_message',//Salva un nuovo messagio
    MESSAGGI_GET_CONTATTI_KEYWORD: 'get_elenco_dipendenti',//get lista contatti

    PROFILO_GET_SCHEDA_KEYWORD: 'get_scheda_dipendente',
    PROFILO_CHANGE_PSW_KEYWORD: 'change_password',
    PROFILO_CHANGE_AVATAR_KEYWORD: 'change_avatar',

    PROCEDIMENTI_GET_ELENCO_KEYWORD: 'get_elenco_procedimenti',
    PROCEDIMENTI_GET_TIPOLOGIE_KEYWORD: 'get_tipologie_procedimenti',
    PROCEDIMENTI_GET_KEYWORD: 'get_procedimento',

    COMUNICAZIONI_GET_ELENCO_KEYWORD: 'get_elenco_comunicazioni',
    COMUNICAZIONI_GET_KEYWORD: 'get_comunicazione',
    PRESCRIZIONE_GET_KEYWORD: 'get_prescrizione',
});
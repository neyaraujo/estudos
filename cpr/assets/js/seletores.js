const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);

export const elementos = {
    $: $,
    $$: $$,
    form: $("#form_comprovante"),
    comprovante: $("#comprovante"),
    nome_remetente: $("#nome_remetente"),
    identificador_remetente: $("#agencia_remetente"),
    conta_remetente: $("#conta_remetente"),
    agencia_remetente: $("#agencia_remetente"),
    id_tipo: $("#id_tipo"),
    identificador_remetente: $("#identificador_remetente"),

    nome_destinatario: $("#nome_destinatario"),
    identificador_desntinatario: $("#identificador_desntinatario"),
    chavepix_destinatario: $("#chavepix_destinatario"),
    descricao_chave_destinatario: $("#descricao_chave_destinatario"),

    
    codigo_transacao: $("#codigo_transacao"),
    data_transacao: $("#data_transacao"),
    data_transacao_2: $("#data_transacao_2"),
    hora_transacao: $("#hora_transacao"),
    hora_transacao_2: $("#hora_transacao_2"),
    valor_pix: $("#valor_pix"),

    data_tarifa: $("#data_tarifa"),
    hora_tarifa: $("#hora_tarifa"),
    autenticacao: $("#autenticacao"),

    favoritos: $("#favoritos"),

    print: $("#print")
    
};


import{elementos} from "./seletores.js";
import{comprovante} from "./dados.js";
import { formatadores } from "./formatadores.js";

function renderizarComprovante(){

    elementos.nome_remetente.textContent =
        comprovante.remetente.nome;

    elementos.identificador_remetente.textContent =
        comprovante.remetente.identificador;

    elementos.agencia_remetente.textContent =
        comprovante.remetente.agencia;

    elementos.conta_remetente.textContent =
        comprovante.remetente.conta;

    elementos.codigo_transacao.textContent = 
        comprovante.transacao.id;

    elementos.id_tipo.textContent = 
        comprovante.remetente.id_tipo;

    elementos.identificador_remetente.textContent = 
        comprovante.remetente.identificador;

    elementos.data_transacao.textContent = 
        comprovante.transacao.data;

    elementos.data_transacao_2.textContent = 
        comprovante.transacao.data;

    elementos.hora_transacao.textContent = 
        comprovante.transacao.hora;

    elementos.hora_tarifa.textContent = 
        comprovante.transacao.hora_2;

    elementos.hora_transacao_2.textContent = 
        comprovante.transacao.hora_2;

    elementos.data_tarifa.textContent = 
        comprovante.transacao.data;

    elementos.valor_pix.textContent = 
        comprovante.transacao.valor;

    elementos.autenticacao.textContent = 
        comprovante.transacao.autenticacao;

    
    // DESTINATÁRIO

    elementos.nome_destinatario.textContent = 
        formatadores.nome(document.forms.formDestinatario.nomeDestinatario.value);
    
    elementos.identificador_desntinatario.textContent = 
         formatadores.formatarIdentificadorDestinatario(document.forms.formDestinatario.idDestinatario.value);
    
    elementos.chavepix_destinatario.textContent = 
        document.forms.formDestinatario.chavePix.value;

    elementos.descricao_chave_destinatario.textContent = 
        comprovante.destinatario.descricao;


    
}

export const renderizar = {
    renderizarComprovante
}



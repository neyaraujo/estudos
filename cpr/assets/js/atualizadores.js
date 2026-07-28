import{elementos} from "./seletores.js";
import{comprovante} from "./dados.js";
import{formatadores} from "./formatadores.js";
import{renderizar} from "./renderizadores.js";

export const atualizar = {
        remetente, 
        destinatario,
        transacao,
    }

function remetente(dados) {
    comprovante.remetente.nome = 
        formatadores.nome(dados.get("nomeRemetente"));

    comprovante.remetente.identificador = 
        formatadores.identificador(dados.get("idRemetente"));

    comprovante.remetente.banco = 
        formatadores.banco(dados.get("bancoRemetente"));

    comprovante.remetente.agencia = 
        formatadores.agencia(dados.get("agenciaRemetente"));

    comprovante.remetente.conta = 
        formatadores.conta(dados.get("contaRemetente"));
    

};

function transacao() {

    comprovante.transacao.valor = 
        formatadores.valor(document.forms.formRemetente.valorPix.value);

    comprovante.transacao.id = 
        formatadores.transacao();

    comprovante.transacao.data = 
        formatadores.data();
    
    comprovante.transacao.hora = 
        formatadores.hora();

    comprovante.transacao.hora_2 = 
        formatadores.hora_2();
    
    comprovante.transacao.autenticacao = 
        formatadores.gerarAutenticacao();
}



function destinatario(dados) {
    comprovante.destinatario.nome =    
        formatadores.nome(dados.get("nome"));

    comprovante.destinatario.identificador = 
        formatadores.formatarIdentificadorDestinatario(dados.get("chavepix"))

}
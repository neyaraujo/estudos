import {elementos} from "./seletores.js";
import { comprovante } from "./dados.js";

export function prencherFormulario() {
    const formulario = document.forms.remetente;
    formulario.nome_remetente.value = 
        comprovante.remetente.nome;

    formulario.identificador_remetente.value =
        comprovante.remetente.identificador;

    formulario.agencia_remetente.value = 
        comprovante.remetente.agencia;

    formulario.conta_remetente.value = 
        comprovante.remetente.conta;

}
import{ registros} from "./storage.js"

const remetente = {
    nome: "",
    id_tipo: "",
    identificador: "",
    banco: "",
    agencia: "",
    conta: ""
};

const destinatario = {
    id:"",
    nome: "",
    identificador: "",
    descricao:"",
    chavepix: "",
    instituicao: "",
    agencia: "",
    conta: "",
    tipo:""
};

const transacao = {
    id: "",
    autenticacao: "",
    valor: "1",
    data: "",
    hora: "",
    hora_2: "",
    tipoChave: "",
    chave: "",
    descricao: "",
    status: ""
};

export const comprovante = {
    remetente,
    destinatario,
    transacao
};



import { comprovante } from "./dados.js";

    function valor(valor) {
        return Number(valor).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    };

    function transacao() {
        const prefixo = "E";
        const zeros = "0".repeat(8);
        const ano = new Date().getFullYear().toString();

        let codigo = prefixo + zeros + ano;

        while (codigo.length < 32) {
            codigo += Math.floor(Math.random() * 10);
        };

        return codigo;
    };

    function gerarAutenticacao () {
        // criar uma array com 8 bytes (64 bits = 16 caracteres hexadecimais)
        const bytes = crypto.getRandomValues(new Uint8Array(8));

        // converter cada byte para hexadecimal com 2 digitos e junta tudo.
        // exemplo: [10,255] - "0AFF"
        const hexadecimal = [...bytes]
            .map(byte => byte.toString(16).padStart(2,"0"))
            .join("")
            .toUpperCase();

        /*
        * Regex:
        * ^(.)(.{3})(.{3})(.{3})(.{3})(.{3})$
        *
        * ^           -> Início da string
        * (.)         -> Captura 1 caractere
        * (.{3})      -> Captura os próximos 3 caracteres
        * (.{3})      -> Captura mais 3
        * (.{3})      -> Captura mais 3
        * (.{3})      -> Captura mais 3
        * (.{3})      -> Captura os últimos 3
        * $           -> Fim da string
        *
        * Substituição:
        * $1.$2.$3.$4.$5.$6
        */            
        return hexadecimal.replace(
            /^(.)(.{3})(.{3})(.{3})(.{3})(.{3})$/,
            "$1.$2.$3.$4.$5.$6"
        );       

    }

    function nome(nome) {
        return nome.trim().toUpperCase()
    };

    function cpf(cpf) {
        return "novo cpf";
    };
    
    function banco(banco) {
        return banco;
    }

    function agencia(agencia) {
        // Remove espaços
        agencia = agencia.trim();

        // Remove tudo que nãor for letra ou número
        agencia = agencia.replace(/[^a-zA-Z0-9]/g,"");

        // Se tiver apenas um caractere, retorna como está
        if (agencia.length <= 1) {
            // return conta;
            return "XXXX-X";
        };

        // Separa o dígito verificador
        const digito = agencia.slice(-1);

        // parte principal da conta
        const  numero = agencia.slice(0,-1);

        // Retorna no formato XXXX-X
        return `${numero}-${digito}`;
    };        

    function conta(conta) {
        conta = conta.trim();
        conta = conta.replace(/[^a-zA-Z0-9]/g,"");
        if(conta.length <= 1) return conta;
        const digito = conta.slice(-1);
        const numero = conta.slice(0,-1);
        return `${numero}-${digito}`;
    };

    function identificador(valor) {
        
        // verifica se os dois ultimos numeros são asteriscos
        if (/\*{2}$/.test(valor)) {
            return valor
        }

        // Remove tudo que não for número
        const numero =  valor.replace(/\D/g,"");

        // CELULAR
        if (numero.length === 11 & numero[0] == "9") {
            comprovante.remetente.id_tipo = "FONE";
            return numero.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );

        }  

        // CPF
        if (numero.length === 11) {


            comprovante.remetente.id_tipo = "CPF";

            return numero.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/, 
                "***.$2.$3-**"
            );
        };

            // CNPJ
        if (numero.length === 14) {
            comprovante.remetente.id_tipo = "CNPJ";
            return numero.replace(
                /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                "**.***.$3/$4-**"
            );

        } else {
        }

    };

    function data() {
        return new Date().toLocaleDateString("pt-BR");
    }

    function hora() {
        return new Date()
            .toLocaleTimeString("pt-BR", { hour12: false })
            .replace(
                /(\d{2}):(\d{2}):(\d{2})/,
                "$1.$2.$3"
        );
    }
    function hora_2() {
        return new Date()
            .toLocaleTimeString("pt-BR", { hour12: false })
            .replace(
                /(\d{2}):(\d{2}):(\d{2})/,
                "$1:$2:$3"
        );
    }
    function formatarIdentificadorDestinatario(dados) {

        // remove tudo que não é numero
        const numero = dados.replace(/\D+/,"")

        if(numero.length === 11 && numero[0] === "9" ) {
            const cel = numero.replace(
                /^(\d{2})(\d{5})(\d{4})$/,
                "($1)$2-$3"

            )
            comprovante.destinatario.descricao = "TEL"
            comprovante.destinatario.chavepix = numero;
            return cel
        }
        if(numero.length === 11) {
            const cpf = numero.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
            )
            
            comprovante.destinatario.descricao = "CPF";
            comprovante.destinatario.chavepix = numero;
            return cpf;
            
            
        }
        if(numero.length === 14) {
            const cnpj = numero.replace(
                /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                "$1.$2.$3/$4-$5"
            )
            comprovante.destinatario.descricao = "CNJP";
            comprovante.destinatario.chavepix = numero;
            return cnpj
        } else {
            return dados
        }


        return numero
    }

    export const formatadores = {
        valor,
        transacao,
        nome,
        cpf,
        banco,
        agencia,
        conta,
        identificador,
        data,
        hora,
        hora_2,
        gerarAutenticacao,
        formatarIdentificadorDestinatario
    };
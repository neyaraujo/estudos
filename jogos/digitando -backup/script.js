let palavra = document.getElementById('palavra');
let entrada = document.getElementById('entrada');
let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let area = document.getElementById('area');
let pontos = document.getElementById('pontos');
let nivel = document.getElementById('nivel');
let ppm = document.getElementById('ppm');

nivel.textContent = 1;
pontos.textContent = 0;

let velocidade = 100;

function velocidadePorNivel(nivel_atual) {
    if(nivel_atual == 1) return '100';
    if(nivel_atual == 2) return '50';
    if(nivel_atual == 3) return '40';
    if(nivel_atual == 4) return '30';
    if(nivel_atual == 5) return '20';
    if(nivel_atual == 6) return '15';
    if(nivel_atual == 7) return '10';
    if(nivel_atual == 8) return '9';
    if(nivel_atual == 9) return '8';
    if(nivel_atual == 10) return '7';
    if(nivel_atual == 11) return '6';
    if(nivel_atual == 12) return '5';
    if(nivel_atual == 13) return '4';
    if(nivel_atual == 14) return '3';
    if(nivel_atual == 15) return '2';
    if(nivel_atual == 16) return '1';

}


let palavrasCorretas = 0;
let inicio = Date.now();


function atualizarPPM() {
    palavrasCorretas = pontos.textContent;
    const minutos = (Date.now() - inicio) / 60000;
    const ppm =  minutos > 0 ? (palavrasCorretas / minutos) : 0;

    return (ppm.toFixed(2));
    
}

palavra.textContent = "horta";
palavra.style.display = "none";


let palavras = [
    "casa",
    "hora",
    "mesa",
    "janela",
    "porta",
    "feira"
];

function novaPalavra() {
    let indice = Math.floor(Math.random() * palavras.length);
    palavra.textContent = palavras[indice];
}

let interval = null;

parar.addEventListener("click",stop);
iniciar.addEventListener("click",start);


document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "v") {
        event.preventDefault();
        alert("Colar desativado!");
    }

});


function stop() {
    clearInterval(interval); 
    interval = null;   
}


let y = 10;
function start() {

    y = 10;
    // impede criar outro intervalo
    if (interval !== null) {
        return;
    }
    // escolhe uma palavra aleatoria
    novaPalavra();

    // mostra a palavra
    palavra.style.display = "block";

    // coloca o cursor no input
    entrada.focus();

    // inicia o interval caso não tenha sido criado
    interval = setInterval(()=> {
        y += 2;
        palavra.style.top = y + "px";

        if(y >= area.offsetHeight - 35) {
            // alert("Gamer Over");
            

            // atualiza os PPM

            entrada.value= "";
            y = 10;
        }

    },velocidade)


}

entrada.addEventListener("keydown", (event)=>{
    if(event.key === "Enter") {
        if(entrada.value === palavra.textContent) {

            // adiciona pontos
            pontos.textContent++;

            // mostra os ppm
            ppm.textContent = atualizarPPM();
            
            // sobe nivel
            nivel_antigo = nivel.textContent;
            nivel.textContent = Math.floor(pontos.textContent / 10) + 1

            

                if(nivel_antigo !== nivel.textContent) {
                    nivel_antigo = nivel.textContent
                    velocidade = velocidadePorNivel(nivel.textContent);

                    console.log(nivel_antigo);
                    console.log(nivel.textContent);

                    stop()
                    start()
                }



            // volta para o top
            y = 10;

            // posiciona novamente
            palavra.style.top = y + "px";

            // escolhe a palavra
            novaPalavra();

        }
        // limpa input
        entrada.value = "";

    }
})
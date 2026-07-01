let ganhadores = document.getElementById('ganhadores');
let apostadores = document.getElementById('apostadores');
let aposta = document.getElementById('aposta');
let taxa = document.getElementById('taxa');
let premio = document.getElementById('premio');
let total = document.getElementById('total');

apostadores.textContent = buscarApostadores();
aposta.textContent = (10).toFixed(2);
taxaFixa = 0.3;
taxa.textContent = (taxaFixa * 100) + "%";
total.textContent = (aposta.textContent * apostadores.textContent).toFixed(2);
premio.textContent = (total.textContent - (total.textContent * taxaFixa)).toFixed(2);

let premiacao = (premio.textContent / apostadores.textContent).toFixed(2)

function converteTaxa() {

}

// INSERÇÃO DOS simulation NA TABELA

function buscarApostadores() {
    let listaApostadores = [];
    
    varLinhas = document.querySelectorAll('#tabela tr');

    varLinhas.forEach((linha, index) => {
        if (index === 0) return;

        let varColunas = linha.querySelectorAll('td');
        let varStatus = varColunas[5].textContent.trim();

        if (varStatus === "pago" ){
            listaApostadores.push({
                varStatus: varStatus
            })
        }
    });
    return listaApostadores.length
}


document.addEventListener("submit", function (event) {
    event.preventDefault();

    let campo_casa = document.getElementById('campo_casa');
    let campo_convidado = document.getElementById('campo_convidado');

    if (campo_casa.value === "" || campo_convidado.value === "") {
        return;
    }

    let linhas = document.querySelectorAll("#tabela tr");
    let resultado = [];

    linhas.forEach((linha, index) => {
        if (index === 0) return;

        let colunas = linha.querySelectorAll("td");

        let casa = Number(colunas[2].textContent);
        let convidado = Number(colunas[4].textContent);
        let status = colunas[5].textContent.trim();

        if (
            casa === Number(campo_casa.value) &&
            convidado === Number(campo_convidado.value) &&
            status === "pago"
        ) {
            resultado.push({
                id: colunas[0].textContent,
                nome: colunas[1].textContent,
                placar: `${casa} x ${convidado}`,
                status: status
            });
        }
    });

    let container = document.getElementById("resultado");
    container.innerHTML = "";

    // ✔️ só cria a tabela se tiver simulation
    if (resultado.length > 0) {

            ganhadores.textContent = resultado.length;

        let tabelaNova = document.createElement("table");
        tabelaNova.classList.add("simulation__form");

        tabelaNova.innerHTML = `
            <thead class='simulation__thead'>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Placar</th>
                    <th>Prêmio</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        let tbody = tabelaNova.querySelector("tbody");

        resultado.forEach(item => {
            let novaLinha = document.createElement("tr");

            novaLinha.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.placar}</td>
                <td>${premiacao}</td>
            `;

            tbody.appendChild(novaLinha);
        });

        container.appendChild(tabelaNova);

    } else {
        container.innerHTML = `<p class='simulation__text'>Ninguém marcou<br/> ${campo_casa.value} x ${campo_convidado.value}</p>`;
        ganhadores.textContent = "";
    }
});
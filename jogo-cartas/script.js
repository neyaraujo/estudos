"use strict";

/*
========================================================
JOGO: ORGANIZAR CARTAS
- 5 cartas
- ordem correta: 1 → 5
- jogador só vê cores
========================================================
*/

const Game = {

    cards: [],
    selected: null,

    moves: 0,
    timer: 0,
    interval: null,
    started: false,
    locked: false,

    init() {
        this.createCards();
        this.shuffle(true);
        this.render();
        this.bind();
        this.updateUI();
    },

    /* CARTAS */
    createCards() {
        this.cards = [
            { id: 1, color: "c1", label: "1" },
            { id: 2, color: "c2", label: "2" },
            { id: 3, color: "c3", label: "3" },
            { id: 4, color: "c4", label: "4" },
            { id: 5, color: "c5", label: "5" }
        ];
    },

    /* EMBARALHAMENTO REAL */
    shuffle(force = false) {

        do {
            for (let i = this.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
        } while (!force && this.isSolved());
    },

    /* RENDER */
    render() {

        const board = document.getElementById("board");
        board.innerHTML = "";

        this.cards.forEach((card, index) => {

            const el = document.createElement("div");

            el.className = `card ${card.color}`;
            el.dataset.index = index;
            el.dataset.id = card.id;

            el.textContent = ""; // nunca mostra valor real

            board.appendChild(el);
        });
    },

    /* EVENTOS */
    bind() {

        document.getElementById("board").addEventListener("click", (e) => {

            if (this.locked) return;

            const card = e.target.closest(".card");
            if (!card) return;

            this.startTimer();
            this.select(card);
        });

        document.getElementById("shuffleBtn")
            .addEventListener("click", () => this.restart(true));

        document.getElementById("restartBtn")
            .addEventListener("click", () => this.restart(false));

        document.getElementById("playAgainBtn")
            .addEventListener("click", () => this.restart(false));
    },

    /* SELEÇÃO */
    select(card) {

        if (!this.selected) {
            this.selected = card;
            card.classList.add("selected");
            return;
        }

        if (this.selected === card) {
            card.classList.remove("selected");
            this.selected = null;
            return;
        }

        this.swap(this.selected, card);

        this.selected.classList.remove("selected");
        this.selected = null;

        this.moves++;
        this.updateUI();

        if (this.isSolved()) {
            this.win();
        }
    },

    /* TROCA */
    swap(a, b) {

        const i = +a.dataset.index;
        const j = +b.dataset.index;

        [this.cards[i], this.cards[j]] =
        [this.cards[j], this.cards[i]];

        this.render();
    },

    /* VERIFICAÇÃO */
    isSolved() {
        return this.cards.every((c, i) => c.id === i + 1);
    },

    /* PONTUAÇÃO */
    getScore() {

        let score = 0;

        this.cards.forEach((c, i) => {
            if (c.id === i + 1) score++;
        });

        return score;
    },

    updateUI() {

        const score = this.getScore();

        document.getElementById("moves").textContent = this.moves;
        document.getElementById("scoreText").textContent = `${score} / 5`;

        this.updateStars(score);
    },

    updateStars(score) {

        const stars = document.querySelectorAll("#stars span");

        stars.forEach((s, i) => {
            s.textContent = i < score ? "★" : "☆";
        });
    },

    /* TIMER */
    startTimer() {

        if (this.started) return;

        this.started = true;

        this.interval = setInterval(() => {

            this.timer++;

            const m = String(Math.floor(this.timer / 60)).padStart(2, "0");
            const s = String(this.timer % 60).padStart(2, "0");

            document.getElementById("timer").textContent = `${m}:${s}`;

        }, 1000);
    },

    stopTimer() {
        clearInterval(this.interval);
    },

    /* VITÓRIA */
    win() {

        this.locked = true;
        this.stopTimer();

        document.getElementById("victory").classList.remove("hidden");
    },

    /* RESET */
    reset(fullShuffle = false) {

        this.cards = [];
        this.selected = null;

        this.moves = 0;
        this.timer = 0;
        this.started = false;
        this.locked = false;

        this.stopTimer();

        document.getElementById("timer").textContent = "00:00";
        document.getElementById("victory").classList.add("hidden");

        this.createCards();
        this.shuffle(fullShuffle);
        this.render();
        this.updateUI();
    },

    restart(fullShuffle = false) {
        this.reset(fullShuffle);
    }
};

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    Game.init();
});
const jogoDeDomino = {
    numeroDeJogadores: 2,
    pecasPorJogador: 14,
    pecasNaMesa: [{ lado1: 2, lado2: 5 }],

    iniciarJogo: function () {
        this.pecasNaMesa = [{ lado1: 2, lado2: 5 }]; // Inicializar com a peça inicial na mesa

        // Distribuir peças para cada jogador
        for (let i = 1; i <= this.numeroDeJogadores; i++) {
            this[`jogador${i}`] = this.distribuirPecas();
        }
    },

    distribuirPecas: function () {
        const pecas = [];
        for (let i = 0; i < this.pecasPorJogador; i++) {
            const novaPeca = { lado1: Math.floor(Math.random() * 6) + 1, lado2: Math.floor(Math.random() * 6) + 1 };
            pecas.push(novaPeca);
        }
        return pecas;
    },

    fazerJogada: function (jogador, peca) {
        const ultimaPecaMesa = this.pecasNaMesa[this.pecasNaMesa.length - 1];

        if (peca.lado1 === ultimaPecaMesa.lado2 || peca.lado2 === ultimaPecaMesa.lado2) {
            this.pecasNaMesa.push(peca);

            const index = this[`jogador${jogador}`].findIndex(p => p.lado1 === peca.lado1 && p.lado2 === peca.lado2);
            this[`jogador${jogador}`].splice(index, 1);

            console.log(`Jogador${jogador} jogou a peça [${peca.lado1}, ${peca.lado2}]`);
            console.log(`Peças na mesa:`, this.pecasNaMesa);
        } else {
            console.log(`Jogador${jogador} não pode jogar a peça [${peca.lado1}, ${peca.lado2}]`);
        }
    },

    verificarFimDoJogo: function () {
        for (let i = 1; i <= this.numeroDeJogadores; i++) {
            if (this[`jogador${i}`].length === 0) {
                console.log(`Jogo terminou! Jogador${i} venceu!`);
                return true;
            }
        }

        // Outras lógicas de fim de jogo podem ser adicionadas aqui
        return false;
    }
};

// Exemplo de uso
jogoDeDomino.iniciarJogo();
console.log(jogoDeDomino);

// Exemplo: Jogador1 faz uma jogada
const pecaDoJogador1 = jogoDeDomino.jogador1[0]; // Exemplo: Pegar a primeira peça do jogador1
jogoDeDomino.fazerJogada(1, pecaDoJogador1);

// Exemplo: Verificar o fim do jogo
jogoDeDomino.verificarFimDoJogo();
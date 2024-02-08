// Definindo o valor cheio da rematrícula
const valorCheio = 2500;

// Definindo a data limite de pagamento (8 de fevereiro de 2024)
const dataLimite = new Date('2024-02-08');

// Obtendo a data atual
const dataAtual = new Date('2024-02-08');

// Calculando o desconto com base na data de pagamento
let desconto = 0;

if (dataAtual <= dataLimite) {
    // Pagamento antes ou na data de vencimento
    desconto = 0.1; // 10% de desconto
}

// Calculando o valor com desconto
const valorComDesconto = valorCheio * (1 - desconto);

// Formatando a data de pagamento para exibição
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const dataLimiteFormatada = dataLimite.toLocaleDateString('pt-BR', options);

// Imprimindo o resultado
console.log(`Valor original: R$ ${valorCheio.toFixed(2)}`);
console.log(`Desconto aplicado até ${dataLimiteFormatada}: ${desconto * 100}%`);
console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);

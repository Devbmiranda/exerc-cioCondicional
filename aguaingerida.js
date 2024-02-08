// Definindo a quantidade recomendada de água por dia em litros
const quantidadeRecomendada = 2.5;

// Simulando a quantidade de água ingerida pela pessoa (em litros)
let quantidadeIngerida = 2.2; // Altere este valor conforme necessário

// Verificando se a pessoa está hidratada
if (quantidadeIngerida >= quantidadeRecomendada) {
    console.log("Você está hidratado!");
} else {
    const quantidadeFaltante = quantidadeRecomendada - quantidadeIngerida;
    console.log(`Você não está hidratado. Quantidade ingerida: ${quantidadeIngerida}L, Quantidade faltante: ${quantidadeFaltante}L`);
}
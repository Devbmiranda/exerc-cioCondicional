// Controle de Consumo de Água Ingerida
let consumoDeAgua = 0; // Inicializa o controle com 0 litros

// Valor recomendado de consumo diário em litros
const consumoDiarioRecomendado = 2.5;

// Função para registrar o consumo de água
function registrarConsumo(litrosConsumidos) {
    if (litrosConsumidos > 0) {
        consumoDeAgua += litrosConsumidos;
        console.log(`Consumo registrado: +${litrosConsumidos} litros.`);

        // Verifica se a pessoa está hidratada ou desidratada
        if (consumoDeAgua >= consumoDiarioRecomendado) {
            console.log("Você está hidratado, parabéns!");
        } else {
            console.log("Você está desidratado. Consuma mais água!");
            console.log(`Quantidade ingerida: ${consumoDeAgua.toFixed(2)} litros.`);
            const quantidadeFaltante = consumoDiarioRecomendado - consumoDeAgua;
            console.log(`Quantidade faltante: ${quantidadeFaltante.toFixed(2)} litros.`);
        }
    } else {
        console.log("Erro: O valor de litros consumidos deve ser maior que zero.");
    }
}

// Exemplo de uso
registrarConsumo(2); // Registra o consumo de 2 litros
registrarConsumo(1); // Registra o consumo adicional de 1 litro

// Exibe o total de consumo acumulado
console.log(`Consumo total acumulado: ${consumoDeAgua.toFixed(2)} litros.`);


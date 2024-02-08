// Valor original da compra
const valorOriginal = 250; // Substitua pelo valor real da compra

// Verifica se a compra é à vista (5% de desconto)
const isCompraAVista = true; // Substitua pelo método real de verificar se é à vista

// Verifica se a compra é acima de R$ 200 (R$ 5 de desconto)
const isCompraAcimaDe200 = valorOriginal > 200;

// Número de parcelas
const numeroParcelas = 3; // Substitua pelo número real de parcelas

// Calcula o desconto
const desconto = (isCompraAVista ? valorOriginal * 0.05 : 0) + (isCompraAcimaDe200 ? 5 : 0);

// Calcula os juros apenas se a compra não for à vista e for parcelada em até 6 vezes
const juros = (!isCompraAVista && numeroParcelas > 1 && numeroParcelas <= 6) ? valorOriginal * 0.02 : 0;

// Calcula o valor final
const valorFinal = valorOriginal - desconto + juros;

// Exemplo de uso
console.log(`Valor original: R$ ${valorOriginal.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Juros: R$ ${juros.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// Exemplo de uma variável para extrato de compras online
const extratoComprasOnline = [
    { data: '2024-02-10', descricao: 'Compra de Livros', valor: 50.00 },
    { data: '2024-02-15', descricao: 'Assinatura de Streaming', valor: 12.99 },
    { data: '2024-02-20', descricao: 'Compras de Roupas', valor: 80.50 },
    // Adicione mais transações conforme necessário
];

// Exibindo o extrato de compras online no console
console.log("Extrato de Compras Online:");
extratoComprasOnline.forEach(transacao => {
    console.log(`Data: ${transacao.data} | Descrição: ${transacao.descricao} | Valor: R$ ${transacao.valor.toFixed(2)}`);
});

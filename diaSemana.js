// Obtém a data atual
const dataAtual = new Date();

// Array com os nomes dos dias da semana
const nomesDiasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// Obtém o índice do dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
const indiceDiaDaSemana = dataAtual.getDay();

// Obtém o nome do dia da semana atual
const diaDaSemanaAtual = nomesDiasDaSemana[indiceDiaDaSemana];

// Exemplo de uso
console.log(`Hoje é ${diaDaSemanaAtual}`);
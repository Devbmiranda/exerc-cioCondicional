function notaParaConceito(nota) {
    if (nota >= 9) {
        return 'A';
    } else if (nota >= 7.5) {
        return 'B';
    } else if (nota >= 6) {
        return 'C';
    } else if (nota >= 4) {
        return 'D';
    } else {
        return 'F';
    }
}

// Exemplo de uso
let notaAluno = 8.2;
let conceito = notaParaConceito(notaAluno);

console.log(`A nota ${notaAluno} corresponde ao conceito ${conceito}.`);

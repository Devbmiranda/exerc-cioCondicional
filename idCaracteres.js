function identificarCaractere(caractere) {
    if (/[A-Z]/.test(caractere)) {
        return 'É uma letra maiúscula';
    } else if (/[a-z]/.test(caractere)) {
        return 'É uma letra minúscula';
    } else if (/\d/.test(caractere)) {
        return 'É um número';
    } else {
        return 'É outro tipo de caractere';
    }
}

// Exemplo de uso
let caractereExemplo = '1';
let identificacao = identificarCaractere(caractereExemplo);

console.log(`O caractere "${caractereExemplo}" é: ${identificacao}`);

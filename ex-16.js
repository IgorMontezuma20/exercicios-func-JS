function operacao(n1, op, n2){
    switch(op){
        case '+': 
            return n1 + n2 
            break;
        case '-': 
            return n1 - n2 
            break;
        case '*':
            return n1 * n2 
            break;
        case '/':
            return n1 / n2 
            break;
        default:
            return 'Escolha uma opção disponível.'
    }
}

console.log(operacao(2, '/', 2))
function pedidos(codigo, qtd ){
    let valorFinal = 0
    switch(codigo){
        case 100:
            return qtd * 3
            break;
        case 200:
            return qtd * 4
            break;
        case 300:
            return qtd * 5.5
            break;
        case 400:
            return qtd * 7.5
            break;
        case 500:
            return qtd * 3.5
            break;
        case 600:
            return qtd * 2.8
            break;
        default:
            return 'Escolha um código disponível no cardápio.'
    }
}

console.log(pedidos(600, 2))
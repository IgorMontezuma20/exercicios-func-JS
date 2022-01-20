function casasNum(num ){
    valorEmReais = `R$ ${num.toFixed(2).toString().replace('.', ',')}`

    console.log(valorEmReais)
    
}


casasNum(0.1 + 0.2)
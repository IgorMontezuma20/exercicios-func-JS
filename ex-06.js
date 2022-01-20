function jurosSimples(c, i, t){
    return c * i * t 
}

function jurosComposto( c, i, t){
    return c * (1 + i) ** t
}

console.log(jurosSimples(2000, 0.10, 2))
console.log(jurosComposto(2000, 0.10, 2))
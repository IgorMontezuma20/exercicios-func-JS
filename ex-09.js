function sistDeNotas(nota){
    let notaCorreta = arredondar(nota)
    if(notaCorreta >= 40){
        console.log(`Aprovado com a nota: ${notaCorreta}`)
    }else{
        console.log(`Reprovado com a nota ${notaCorreta}`)
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 -(nota % 5))
    }else{
        return nota
    }
}

sistDeNotas(88)
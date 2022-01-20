function parEImpar(num){
    let pares = 0
    let impares = 0
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`${pares} números pares e ${impares} numeros ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
parEImpar(vetor)
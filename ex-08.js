let stringPontuacoes = "60, 30, 20, 9, 40, 2, 0, 6, 55"

function avaliaPontos(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(",")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontos(stringPontuacoes))
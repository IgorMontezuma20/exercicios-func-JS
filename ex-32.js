function mediaValores(vetor){
    let mediaValores = 0
    for(let i = 0; i < vetor.length; i++){
        mediaValores += vetor[i]
    }

    return mediaValores/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaValores(vetor))
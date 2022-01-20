function comprarCarro(modelo){
    switch(modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso.'
            break;
        case 'sedan':
            return 'Tem certeza que não prefere este modelo?'
            break;
        case 'motocicleta':
            return 'Tem certeza que não prefere este modelo?'
            break;
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break;
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(comprarCarro(''))
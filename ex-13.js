function diaUtil(dia){
    switch(dia){
        case 1: 
            return 'Não é dia útil.';
            break;
        case 2: 
            return 'Dia útil.';
            break;
        case 3: 
            return 'Dia útil.';
            break;
        case 4: 
            return 'Dia útil.';
            break;
        case 5: 
            return 'Dia útil.';
            break;
        case 6: 
            return 'Dia útil.';
            break;
        case 7: 
            return 'Não é dia útil.';
            break;
        default:
            return 'Informe um dia válido.'
            break;

    }
}

console.log(diaUtil(1))
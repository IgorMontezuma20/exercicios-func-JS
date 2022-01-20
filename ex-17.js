function planoDeSalario(plano, salario) {
    switch(plano){
        case 'A':
            return salario * 1.1
            break;
        case 'B':
            return salario * 1.15
            break;
        case 'C':
            return salario * 1.2
            break;
        default:
            return 'Indique um plano válido.'
    }
}

console.log(planoDeSalario('C', 2000))
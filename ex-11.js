function anoBi(ano){
    if( ano <= 0){
        return false
    }else if(ano % 400 == 0){
        return true
    }else if(ano % 100 == 0){
        return true
    }else{
        return false
    }
}

console.log(anoBi(2020))
console.log(anoBi(2021))
console.log(anoBi(2022))
console.log(anoBi(2019))
console.log(anoBi(2018))
console.log(anoBi(2017))
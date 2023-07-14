//function  utilizando o switch dia 1 domingo 2 segunda 3 terça 4 quarta 5 quinta 6 7 sabado

function diaSemana(dia){
    switch(dia){
        case 1: 
            return 'Domingo';
        case 2: 
            return 'Segunda';
        case 3: 
            return 'Terça';
        case 4: 
            return 'Quarta';
        case 5: 
            return 'Quinta';
        case 6: 
            return 'Sexta';
        case 7: 
            return 'Sabado';
        default: 
        return 'Dia inválido';     
        
    }
}

console.log(diaSemana(8));
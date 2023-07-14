//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.


function divisorResto(dividendo,divisor){
    let resultado = dividendo/divisor;
    let resto = dividendo%divisor;
    if(resto == 0){
        console.log(`O resultado ${resultado}`);
    }else{
        console.log(`O resultado ${resultado} e o resto é ${resto}`);

    }
}

divisorResto(4,3)
//Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
//Plano Aumento
//A 10%
//B 15%
//C 20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularSalario(plano, salarioAtual) {
    switch(plano){
        case "A":
            return console.log(`Seu salário atual agora ${salarioAtual} ,Novo salário é: R$  ${salarioAtual * 1.15}`);
        case "B":
            return console.log(`Novo salário é: R$  ${salarioAtual * 1.10}`);
        case "C":
            return console.log(`Novo salário é: R$  ${salarioAtual * 1.05}`);
            default:
            return console.log("Plano inválido");
    }
}
   


calcularSalario("A", 1000);
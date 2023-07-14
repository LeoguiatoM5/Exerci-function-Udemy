//Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.



function bhaskara(ax2, bx, c) {
    let delta = Math.abs(ax2 - bx);  //Math.abs retorna o valor absoluto da diferença entre dois números.
    if (delta < 0) {
        return "Delta é negativo";
    }
    let result = [];
    for (let i = 0; i < 2; i++) {
        result.push(Math.pow(ax2 - bx, 2) - Math.pow(bx, 2) + Math.pow(c, 2));//Math.pow retorna a base elevada ao quadrado.
    }
    return result;
}



console.log(bhaskara(3, -5, 12));




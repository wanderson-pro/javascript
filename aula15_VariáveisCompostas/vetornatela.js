let vetor = [5,8,1,3]
vetor.sort()//Ordeando os elementos dentro do vetor.
/*
console.log(vetor) //Forma padrão [5,8,1,3]

console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])
console.log(vetor[3])

for (let c = 0; c < vetor.length; c++) {
    //Mostra o valor de todas as posições de forma personalisada.
    console.log(`A posição ${c} tem o valor ${vetor[c]}`)
}
*/

for (let c in vetor) {//Para posição dentro de vetor faca.
    console.log(`A posição ${c} tem o valor ${vetor[c]}.`)
}
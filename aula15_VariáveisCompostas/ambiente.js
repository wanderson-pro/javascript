let num = [5,4,8,2]
num[4] = 6  //Adiciona a valor na posição que desejar.
num.push(9) //push "empurra" para  últma pisição.
//num.sort() Ordena os elementos em ordem crescente.
/*
.length mede o comprimento do vetor, ou seja, 
a quantidade de elementos dentro do vetor.
No caso acima temos cinco elementos.
*/
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 2 está na posição ${pos}.`)
}

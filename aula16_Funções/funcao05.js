/*RECURSIVIDADE
Função recursiva, é quando um função chama ela mesma.*/

function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
Fatorial de 5!: 5 x 4 x 3 x 2 x 1 = 120
É o mesmo que: 5 x !4

Então escrevemos assim: n! = n * (n-1)!
Já o fatorial de 1!: é = 1
*/
let numero = document.querySelector('#formularioNumero')
let tabela = document.querySelector('#formularioTabela')
let res = document.querySelector('#res')
let lista = []

function isNumero(num) {//Se num entiver entre um e cem, retorna verdadeiro.
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lis) {//Se num não estiver na lista, retorna verdadeiro.
    if (lis.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {//Se numero estiver entre um e cem e não estiver na lista.
    if (isNumero(numero.value) && !inLista(numero.value, lista)) {
        lista.push(Number(numero.value))
        let item = document.createElement('option') //Cria elemento para ser adicionado ao SELECT.
        item.text = `Valor ${numero.value} adicionado.`
        tabela.appendChild(item) //Anexa o resultado de item "Anexar Filho".
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicinado a lista!')
    }
    numero.value = ''//Limpa o cursor para digitar outra informação.
    numero.focus() //Fixa o cursor na area de digitação.
}

function finalizar() {
    if (lista.length != 0) {
        let totalCadastrados = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0

        for (let cont in lista) {
            soma += lista[cont]
            if (lista[cont] > maior) {
                maior = lista[cont]
            } else if (lista[cont] < menor) {
                menor = lista[cont]
            }
        }
        media = soma / totalCadastrados

        res.innerHTML += `<p>Ao total, temos ${totalCadastrados} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}</p>` 
    } else {
        alert('Antes de finalizar adicione valores.')
    }
}

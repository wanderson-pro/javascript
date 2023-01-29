let numero = document.querySelector('input#fnumero')
let tabela = document.querySelector('select#ftabela')
let res = document.querySelector('div#res')
let lista = []

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {//Se o número estiver entre 1 e 100.
        return true
    } else {
        return false
    }
}

function inLista(num, lis) {
    if (lis.indexOf(Number(num)) != -1) { //Valor não encontrado na lista.
        return true
    } else {
        return false
    }
}

function adicionar() {//Adicionar elementos a lista.
    if (isNumero(numero.value) && !inLista(numero.value, lista)) {
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tabela.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''//Limpa o digitador para colocar novos valores.
    numero.focus() //Não precisa clicar para o cursor ficar na posição de digitar.
}

function finalizar() {
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalElementos = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for (let pos in lista) {
            if (lista[pos] > maior) {
                maior = lista[pos]
            } else if (lista[pos] < menor) {
                menor = lista[pos]
            }
            soma += lista[pos]
        }
        media = soma/totalElementos
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média entre todos os valores é ${media.toFixed(2)}</p>`
    }
}
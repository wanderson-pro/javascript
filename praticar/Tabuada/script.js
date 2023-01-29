function gerar() {
    let dateEnter = document.getElementById('dateEnter').value
    let tabuada = document.getElementById('tabuada')

    if (dateEnter.length == 0) {
        alert('[ERRO] Digite um número e tente novamente!')
    } else {
        let dadosEntrada = Number(dateEnter)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${dadosEntrada} X ${c} = ${dadosEntrada * c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}
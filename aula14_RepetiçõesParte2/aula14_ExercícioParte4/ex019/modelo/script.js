function contar() {
    let início = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let incr = document.getElementById('txtin').value
    let res = document.getElementById('res')

    /*Se o comprimento for zero, ou seja, 
    se as informações estiver em branco irá mostrar essa mensagem.
    Se não, mostrará o resultado.*/
    if (início.length == 0 || fim.length == 0 || incr.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        //Convertando variável para números.
        res.innerHTML = 'Contando: <br>' //<br> quebra para próxima linha.
        let i = Number(início)
        let f = Number(fim)
        let inc = Number(incr)

        if (inc <= 0) {
            //Erro se o incremento for zero ou menor que zero.
            alert('[ERRO] Passo inválido! Considerando PASSO 1.')
            inc = 1
        }

        if (i < f) {
            //Contagem crescente.
            for (let c = i; c <= f; c += inc)
            res.innerHTML += `${c} \u{1F449} ` // += é concatenação.
        } else {
            //Contagem regre.
            for (let c = i; c >= f; c -= inc)
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += '\u{1F3C1}'
    }
}
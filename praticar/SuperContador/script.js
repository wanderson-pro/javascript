function contar() {
    let inicio = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let incr = document.getElementById('txtin').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || incr.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let inc = Number(incr)

        if (inc == 0) {
            alert('[ERRO] Incremento inválido! Considerando incremento 1.')
            inc = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += inc) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c >= f; c -= inc) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
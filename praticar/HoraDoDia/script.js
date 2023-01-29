function relogioDigital() {
    let dateTime = new Date()
    let hora = dateTime.getHours()
    let minuto = dateTime.getMinutes()
    let segundo = dateTime.getSeconds()
    let imagem = document.getElementById('imagem')
    
    if (hora >= 5 && hora < 12) {
        //Bom Dia
        imagem.src = 'manha.png'
        document.body.style.background = '#ECDBC8'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        imagem.src = 'tarde.png'
        document.body.style.background = '#E68F71'
    } else if (hora <= 24 || hora < 5) {
        //Boa Noite
        imagem.src = 'noite.png'
        document.body.style.background = '#2D6AC2'
    }

    if (hora < 10) {
        hora = '0' + hora
    }
    if (minuto < 10) {
        minuto = '0' + minuto
    }
    if (segundo < 10) {
        segundo = '0' + segundo
    }
    document.getElementById('horas').innerHTML = hora
    document.getElementById('minutos').innerHTML = minuto
    document.getElementById('segundos').innerHTML = segundo
}

//Definir intervalo
setInterval(relogioDigital, 10)
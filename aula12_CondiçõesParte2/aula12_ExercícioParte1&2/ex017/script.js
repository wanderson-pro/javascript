function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#ECDBC8'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#E68F71'
    } else if (hora <= 24 || hora < 5){
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#2D6AC2'
    }
}
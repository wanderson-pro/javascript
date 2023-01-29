function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')//formulário ano
    var res = document.querySelector('div#res')
    if (f_ano.value.length == 0 || Number(f_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //formulário sexo
        var idade = ano - Number(f_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src','fotomenino.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src','fotoadolescentemenino.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src','fotohomem.png')
            } else {
                //idoso
                img.setAttribute('src','fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src','fotomenina.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src','fotoadolescentemenina.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src','fotomulher.png')
            } else {
                //idoso
                img.setAttribute('src','fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
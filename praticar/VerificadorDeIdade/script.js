
function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtn').value//fano(formulário do ano)
    var res = document.getElementById('res')

    if (fano.length == 0 || Number(fano) > ano) {//Se o comprimento de fano for igual a zero ou fano for maior que ano atual.
        alert('[ERRO] Preencha as informações e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//fsex(formulário do sexo)
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')//Criando elemento imagem.
        img.setAttribute('id','foto')//Definir atributo, criando um identificador para buscar a imgam por ID e Nome.
        
        if (fsex[0].checked) {
            gênero = 'Masculina'

            if (idade >= 0 && idade <= 10) {
                //Bebê
                img.setAttribute('src','fotomenino.png')
            } else if (idade <= 21) {
                //Adolescente
                img.setAttribute('src','fotoadolescentemenino.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src','fotohomem.png')
            } else {
                //Idoso
                img.setAttribute('src','fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminina'
            
            if (idade >= 0 && idade <= 10) {
                //Bebê
                img.setAttribute('src','fotomenina.png')
            } else if (idade <= 21) {
                //Adolescente
                img.setAttribute('src','fotoadolescentemenina.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src','fotomulher.png')
            } else {
                //Idoso
                img.setAttribute('src','fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Decectamos uma pessoa ${gênero} com ${idade} anos.`
        res.appendChild(img)//Mostrar a imagem.
    }
}
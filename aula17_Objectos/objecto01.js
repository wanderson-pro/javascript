let amigo = {nome:'José',
sexo: 'M',
peso: 84.5,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(2) //Vai adicionar 2 ou peso.
console.log(`${amigo.nome} peso ${amigo.peso}kg`)
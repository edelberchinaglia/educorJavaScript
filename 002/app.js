console.log("Encontro 2")
// Sintaxe javascript, variáveis e tipos de dados - ctrl; faz comentário de uma linha /* e */ faz comentários de trechos
//variáveis
nome="Edelber"
console.log(nome)
var nome="Gigica"
console.log(nome)
var nome="Chico"           //declara variavel com escopo global
console.log(nome)
let sobrenome="chinaglia"  //declara variavel, mas não deixa declarar novamente mais pra baixo e tem escopo local
console.log(sobrenome) 
if (10>3){
    console.log("10 é maior que 3")
    let idade=21
    console.log(idade)
}
let mídia="tv"
console.log(mídia)

//Tipos de dados - js não precisa de tipagem
let idade = 12, apelido="João"
idade=20
apelido="Chico"
let concorda = true
console.log(typeof idade)               //descobrindo o tipo de variavel / ver no navegador com f12 em console
console.log(typeof apelido)
console.log(typeof concorda)
let carros=['gol','corsa','uno']
console.log(carros)
console.log(typeof carros)
let pessoa={'nome':'Edelber', 'idade':'50'}
console.log(pessoa)
console.log(typeof pessoa)
document.getElementById("titulo").style.backgroundColor="lightgreen"
console.log(document.getElementById("titulo"))
document.getElementById("titulo").innerText="melhor sabor"
let titulopagina
titulopagina=document.getElementById("titulo").innerHTML
console.log(titulopagina)

let elementoSubtitulo
elementoSubtitulo=document.getElementById("subtitulo")
console.log(elementoSubtitulo)
elementoSubtitulo.style.backgroundColor="red"
elementoSubtitulo.innerText="<em>seu restaurante preferido</em>"  //trabalha apenas com texto puro
elementoSubtitulo.innerHTML="<em>seu restaurante preferido</em>"  //aceita formatações ou seja, renderiza
let carnes = ["🥩","🍗"]
console.table(carnes)
console.dir(carnes)
console.log(carnes)
document.write("<h3>Cardápio</h3>")
document.write(carnes)
//alert("bom dia")
let nomeCompleto=prompt("qual seu nome?","Digite aqui")
alert("olá"+nomeCompleto+"espero que goste")
document.write("<br>nome:"+nomeCompleto)



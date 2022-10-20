/* operadores */

let n1, n2

n1 = 10
n2 = 2

document.write("N1 + N2 = " + (n1+n2) + "<br>") // adição
document.write("N1 - N2 = " + (n1-n2) + "<br>") // subtração
document.write("N1 / N2 = " + n1/n2 + "<br>") // divisão
document.write("N1 * N2 = " + n1*n2 + "<br>") // multiplicação

let nome, sobrenome
nome = "João"
sobrenome = " Paulo"
document.write(nome + sobrenome + "<br>") // concatenação

document.write('N1 % N2 = ' + n1%n2 + "<br>") // operador módulo (resto da divisão)

document.write('N1 ** N2 = '+ n1**n2 + "<br>") // operador de potência

document.write(Math.sqrt(16))

function mensagem(){
    alert("Olá, seja bem vindo")
}

function somar(){
    let v1, v2
    v1 = parseFloat(document.getElementById("valor1").value)
    console.log(typeof v1)
    v2 = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resultado").value = v1 + v2
}
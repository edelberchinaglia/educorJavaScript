/* operadores */
let n1, n2
n1=10
n2=2
let nome, sobrenome
nome="Edelber"
sobrenome="Chinaglia"
document.write("Número 1: "+n1+"<br>")
document.write("Número 2: "+n2+"<br>")
document.write("N1+N2="+(n1+n2)+"<br>")
document.write("N1-N2="+(n1-n2)+"<br>")
document.write("N1/N2="+(n1/n2)+"<br>")
document.write("N1*N2="+(n1*n2)+"<br>")
document.write("N1%N2=Resto da Divisão ou Módulo "+(n1%n2)+"<br>")  //módulo
document.write(nome+" "+sobrenome+"<br")  //concatenação
document.write("N1**N2="+(n1**n2)+"<br>")  //potênciação
document.write(Math.sqrt(16))  //raiz quadrada
function mensagem(){
alert("olá mundo")
}



function somar(){
    let v1, v2
    v1 = parseFloat(document.getElementById("valor1").value)
    console.log(typeof v1)
    v2 = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resultado").value = v1 + v2
}


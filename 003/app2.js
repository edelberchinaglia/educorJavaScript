// Operadores de incremento / decremento


let n1 = 10, n2 = 2

n1 = n1 + 1
document.write(n1 + "<br>")
document.write(n1++ + "<br>")
document.write(n1 + "<br>")

document.write(--n1 + "<br>")

// let i = 0
// while(i < 5){
//     document.write("Olá<br>")
//     i++
// }

//operadores relacionais

n1 = 10
document.write((n1 > n2) + "<br>")
document.write((n1 < n2) + "<br>")
document.write((n1 != n2) + "<br>")
document.write((n1 == n2) + "<br>")
document.write((n1 >= 10) + "<br>")
document.write((n1 <= 6) + "<br>")
document.write((n1 == "10")+"<br>")

let n3 = "10"
document.write((n1 == n3) + "<br>")
document.write((n1 === n3))


/* operadores lógicos
 && -->  AND (e)
 Todas as expressões devem ser verdadeiros para retornar verdadeiro

 10 > 5 --> TRUE
 10 > 20 --> FALSE
 10 > 5 && 10 > 20 --> FALSE
*/
document.write("<br><br><br>")
document.write(10>5 && 10>20)
document.write("<br>")

/*
|| --> OR (ou)
Se uma expressão for verdadeira, o retorno é verdadeiro
*/
document.write(10>5 || 10>20)
document.write("<br>")
/*

! --> NOT (não)
inverte o resultado
*/
document.write(!true)
document.write("<br>")
document.write(10>5)
document.write("<br>")
document.write(!10>5)
document.write("<br>")
document.write(10+5 > 3*3)


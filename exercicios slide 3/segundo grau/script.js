var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var resultado = document.querySelector('#s1')
var resultado2 = document.querySelector('#s2')

function chamar(){

   resultado.innerHTML = ((parseFloat(n2.value) ** 2) - (4 * parseFloat(n1.value) * parseFloat(n3.value)))
   resultado2.innerHTML = (- parseFloat(n2.value) + parseFloat(Math.sqrt(resultado.value))) / (2 * n1.value)
}
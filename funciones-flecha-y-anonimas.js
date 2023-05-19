// Funciones tipo flecha  - funciones anonimas 

const array = [1,3,7,5,14,22,75]

const array2 =array.map((valor)=> valor *2)

console.log(array2)


const dobleDelValor = (valor => valor *2)

console.log(doble(6))
console.log(dobleDelValor(6))

const array3= array.map(dobleDelValor)

console.log(array3)

function doble(valor){
    return valor*2
}
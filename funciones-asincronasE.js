
function siempreTrue(){
    return true  // Funcion que devuelve siempre true
}


function esperar(tiempo){    //Funcion asincrona que utiliza "setTimeout() para mandar por consola "
    return  new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve()
            }, tiempo)
        })
}

console.log("Inicio");
esperar(5000).then(() => {
console.log("Han pasado 5 segundos");
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
console.log("Fin")


////////////////////////////////////////////////////////

function* generadorIndicesPares() { //Funcion generadora de indices pares 
    let indice = 0
        while (true) {
    yield indice
        indice += 2
    }
}

const generador = generadorIndicesPares();

console.log(generador.next().value); 
console.log(generador.next().value); 
console.log(generador.next().value); 
console.log(generador.next().value); 
console.log(generador.next().value); 


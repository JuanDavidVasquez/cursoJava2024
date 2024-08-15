//EcmaScript 2021 / ES12 / ES.Next

// variables: var, let, const

// var tiene un alcance global o funcional

var nombre = 'Juan';

function mostrarNombre() {
    var nombre = 'Gabriel';
    console.log(nombre);
}

console.log(nombre);

//let amplia el alcance de la variable a nivel de bloque

let pais = 'Colombia';

function mostrarPais() {
    console.log(pais);
}

const edad = 4;

console.log(edad);


export {mostrarNombre, mostrarPais};

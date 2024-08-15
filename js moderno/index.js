/* //Bucles


const nombres = ['Gabriel', 'Veronica', 'Juan'];

//For
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//For of - accede al contenido
for (let nombre of nombres) {
    console.log(nombre);
}

//For in - accede a los indices - recorrer json o arreglos
for (let indice in nombres) {
    console.log(indice, nombres[indice]);
}

//for each

nombres.forEach(function (nombre, index) {
    console.log(index, nombre);
});

nombres.forEach((nombre, index) => console.log(index, nombre));

//Iteradores - Iterables

 const iterador = nombres[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// console.log(typeof iterador,iterador);

 */

//Funciones

//JSON

let tienda = {
    nombre: "GAME",
    videoJuegos: ['FIFA 24', 'WoW', 'Starcraft2'],
    mostrar:function(){
        console.log(this.nombre);
    },
    mostrar2(){
       this.videoJuegos.forEach(juego => console.log(juego));
    },
    mostrar3: () =>{
        console.log(tienda.nombre);
    }
}
/* tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3(); */


let frutas = ['manzana', 'pera', 'uva'];

/* let manzana = frutas[0]; */

let [manzana] = frutas; //debe estar en el orden del arreglo para desestructurar

console.log(manzana);

let persona = {
    nombre: 'Gabriel',
    apellido: 'Vasquez',
    edad: 4
}

let {nombre, apellido} = persona; //En este caso no importa el orden por que es un objeto

console.log(nombre, apellido);

//desestructurar string

let usuario = 'Gabriel Vasquez 4';

let [nombre2, apellido2, edad2] = usuario.split(' ');

//Util cuando llega un string con datos separados por un espacio y tiene siempre el mismo contenido, como en este caso es nombre, apellido y edad

console.log(nombre2, apellido2, edad2);


//Crear varias variables

    let lenguaje= "JS",
        version = "ES6",
        framework = "React";

console.log(lenguaje, version, framework);

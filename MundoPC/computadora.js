'use strict';
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton, precio){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.precio = precio;
    }
    getIdComputadora(){
        return this.idComputadora;
    }    
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getMonitor(){
        return this.monitor;
    }
    setMonitor(monitor){
        this.monitor = monitor;
    }
    getTeclado(){
        return this.teclado;
    }
    setTeclado(teclado){
        this.teclado = teclado;
    }
    getRaton(){
        return this.raton;
    }
    setRaton(raton){
        this.raton = raton;
    }
    getPrecio(){
        return this.precio;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    toString(){
        return `Computadora: ${this.idComputadora}, Nombre: ${this.nombre}, Monitor: ${this.monitor}, Teclado: ${this.teclado}, Raton: ${this.raton}`;
    }
}

export { Computadora };
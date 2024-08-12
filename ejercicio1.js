class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    nombreCompleto() {
        return `${this._idPersona} ${this._nombre} ${this._apellido}`;
    }

    toString() {
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} (ID Empleado: ${this._idEmpleado}) Sueldo: ${this._sueldo} id: ${this._idPersona}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro || new Date();
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} (ID Cliente: ${this._idCliente}) Fecha de Registro: ${this._fechaRegistro} id: ${this._idPersona}`;
    }
}

// Create instances
let persona1 = new Empleado('Gabriel', 'Vasquez', 25, 5000);
let persona2 = new Cliente('Juan', 'Vasquez', 25);
let persona3 = new Cliente('Veronica', 'Ortiz', 25);

console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());


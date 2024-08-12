class Persona {

    static contadorPersonas = 0; //atributo de nuestra clase

    //metodo estatico, se asocia a la clase y no a los objetos, no se puede modificar, solo es de lectura (se asimilaria a una constante)
    static get MAX_OBJ(){
        return 2;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobre escribir el metodo de la clase padre
    nombreCompleto(){
        /* return this._nombre + ' ' + this._apellido + ', ' + this._departamento; */

       return super.nombreCompleto() + ', ' + this._departamento; 
    }
}

let persona1 = new Empleado('Gabriel','Vasquez', 'Programador');
let persona2 = new Persona('Juan','Vasquez');
let persona3 = new Persona('Veronica','Ortiz');
/* 

console.log(persona1.toString());
console.log(persona2.toString());

 persona1.saludar(); no es posible llamar un metodo static desde un objeto

//Persona.saludar(); Se debe llamar desde la clase

Persona.saludar2(persona1);

Empleado.saludar2(persona1);

Se hereda la variable estatica de la clase padre
console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas);
 

console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas); 

console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
*/

console.log(Persona.MAX_OBJ);


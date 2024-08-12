'use strict';
import { Monitor } from './monitor.js';
import { Computadora } from './computadora.js';
import { Orden } from './orden.js';
import { Raton, Teclado } from './dispositivos.js';

// Crear instancias de Monitor
const monitor1 = new Monitor('HP', 15);
const monitor2 = new Monitor('Dell', 27);
const monitor3 = new Monitor('Asus', 32);

// Crear instancias de Raton y Teclado
const raton1 = new Raton('USB', 'HP');
const raton2 = new Raton('Bluetooth', 'Dell');

const teclado1 = new Teclado('Bluetooth', 'Dell');
const teclado2 = new Teclado('USB', 'HP');

// Crear instancias de Computadora
const computadora1 = new Computadora('Asus Pro', monitor1, teclado1, raton1, 100);
const computadora2 = new Computadora('Mi Otra Computadora', monitor2, teclado2, raton2, 200);


// Crear instancias de Orden
const orden1 = new Orden();
orden1.agregarProducto(computadora1);
orden1.agregarProducto(computadora2); 


// Mostrar información
orden1.mostrarOrden();
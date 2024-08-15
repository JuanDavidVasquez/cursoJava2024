class CreateMatriz {
    constructor(size) {
        this.size = size;
        this.matriz = this._generateMatriz(size);
    }

    // Método para generar la matriz aleatoria
    _generateMatriz = (size) =>
        Array.from({ length: size }, () => 
            Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10)
        );

    // Método para convertir la matriz a string
    toString = () => 
        this.matriz.map(row => row.join(' ')).join('\n');

    // Método reutilizable para imprimir un patrón
    printPattern = (condition) => {
        const matrizString = this.matriz.map((row, i) =>
            row.map((val, j) => condition(i, j) ? val.toString().padStart(3, ' ') : ' '.repeat(3))
                .join(' ')
        ).join('\n');
        console.log(matrizString);
    }
}

// Crear una instancia de la matriz
const matriz1 = new CreateMatriz(4);
console.log("Matriz original:\n" + matriz1.toString());

// Funciones para imprimir diferentes patrones
const diagonal = (matriz) => matriz.printPattern((i, j) => i === j);
const diagonalInvertida = (matriz) => matriz.printPattern((i, j) => i + j === matriz.size - 1);
const rectanguloSuperiorDerecho = (matriz) => matriz.printPattern((i, j) => i <= j);
const rectanguloInferiorIzquierdo = (matriz) => matriz.printPattern((i, j) => i >= j);
const trianguloSuperiorIzquierdo = (matriz) => matriz.printPattern((i, j) => i >= j);
const trianguloInferiorIzquierdo = (matriz) => matriz.printPattern((i, j) => i + j >= matriz.size - 1);
const trianguloInferiorIzquierdoEspejo = (matriz) => matriz.printPattern((i, j) => j <= i && i >= j);
const trianguloSuperiorDerecho = (matriz) => matriz.printPattern((i, j) => i <= j);
const rectanguloSuperiorIzquierdo = (matriz) => matriz.printPattern((i, j) => i + j < matriz.size);
const rectanguloInferiorDerecho = (matriz) => matriz.printPattern((i, j) => j >= matriz.size - i - 1);

// Ejecución de las funciones
diagonal(matriz1);
diagonalInvertida(matriz1);
rectanguloSuperiorIzquierdo(matriz1);
rectanguloInferiorDerecho(matriz1);
rectanguloSuperiorDerecho(matriz1);
rectanguloInferiorIzquierdo(matriz1);
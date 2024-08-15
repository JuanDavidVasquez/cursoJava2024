class CreateMatriz {
    constructor(size) {
        this.size = size;
        this.matriz = this.initializeMatriz(size);
    }

    initializeMatriz(size) {
        let matriz = [];
        for (let i = 0; i < size; i++) {
            matriz[i] = [];
            for (let j = 0; j < size; j++) {
                matriz[i][j] = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
            }
        }
        return matriz;
    }

    toString() {
        let matrizString = '';
        for (let i = 0; i < this.size; i++) {
            matrizString += this.matriz[i].join(' ') + '\n'; // Usa join para convertir el array a un string
        }
        return matrizString;
    }
}

let matriz1 = new CreateMatriz(4);
console.log("Matriz original:\n" + matriz1.toString());

const diagonal = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i === j) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const diagonalInvertida = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i + j === matriz.size - 1) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const rectanguloSuperiorDerecho = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i <= j) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const rectanguloInferiorIzquierdo = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i >= j) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const trianguloSuperiorIzquierdo = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i >= j) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const trianguloInferiorIzquierdo = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i + j >= matriz.size - 1) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const rectanguloInferiorDerecho = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (j >= matriz.size - i - 1) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const trianguloInferiorIzquierdoEspejo = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (j <= i) {
                rowString += matriz.matriz[matriz.size - i - 1][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const trianguloSuperiorDerecho = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i <= j) {
                // Imprime el valor del triángulo superior derecho y mínimo tienen 3 espacios cada número
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                // Imprime espacios en blanco donde no está el triángulo superior derecho
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};

const rectanguloSuperiorIzquierdo = (matriz) => {
    let matrizString = '';
    for (let i = 0; i < matriz.size; i++) {
        let rowString = '';
        for (let j = 0; j < matriz.size; j++) {
            if (i + j < matriz.size) {
                rowString += matriz.matriz[i][j].toString().padStart(3, ' ') + ' ';
            } else {
                rowString += ' '.repeat(3) + ' ';
            }
        }
        matrizString += rowString + '\n';
    }
    console.log(matrizString);
};
// Ejecución de las funciones
diagonal(matriz1);
diagonalInvertida(matriz1);
rectanguloSuperiorIzquierdo(matriz1);
rectanguloSuperiorDerecho(matriz1);
rectanguloInferiorIzquierdo(matriz1);
rectanguloInferiorDerecho(matriz1);





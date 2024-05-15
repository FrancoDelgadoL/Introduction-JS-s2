// operadores 

const number1 = 20;
const number2 = 30;
const number3 = -10;
const creditCard = false;
const loan = true;

// suma
console.log(number1 + number2);

// resta
console.log(number1 - number3);

// multiplicacion
console.log(number1 * number2);

//division 
console.log(number1 / number3);

// Modulo
console.log(number1 % 2);

// Concatenacion template string

console.log(`La suma es ${number1 + number2}`);

// Estructuras de control 
// Condicionales

if (number1 >= number2) {
    console.log('Se suma');
} else {
    console.log('No se suma');
}

const payMethod = 'creditCard';

switch (payMethod) {
    case 'creditCard' : {
        console.log('Se pagara con tarjeta de credito');
        break;
    }

    case 'loan': {
        console.log('Se pagara con prestamo');
        break;
    }
    default:
        console.log('No se puede pagar');
        break;
}
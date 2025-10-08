// sesion de teleformación extra.

// iteraciones con for 0-10 con salto de 1
for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

// iteraciones con for 5-18 con salto de 1
for (let i = 5; i < 18; i += 1) {
    console.log(i);
}

// iteraciones con for 5-18 con salto de 2
for (let i = 5; i < 18; i += 2) {
    console.log(i);
}

// iteraciones con for 10-0 con salto de -1
for (let i = 10; i > 0; i -= 1) {
    console.log(i);
}

// iteraciones con for 0-10 con salto de 10
for (let i = 20; i <= 120; i += 10) {
    console.log(i);
}

//                0  1  2  3  4  5  6  7  8  9
const array_test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// iteraciones con for sobre un array
for (let i = 0; i < array_test.length; i += 1) {
    console.log(array_test[i]);
}

const array_test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// iteraciones con for sobre un array
for (let i = 1; i <= array_test2.length; i += 1) {
    console.log(array_test2[i - 1]);
}

// multiple return is valid? yes, but i prefer a sigle return
function isValidPassword(contraseña) {
    let result = true;
    const mayusculas = /[A-Z]/.test(contraseña);
    const minusculas = /[a-z]/.test(contraseña);
    const numero = /[0-9]/.test(contraseña);

    if (typeof contraseña !== 'string') {
        result = false;
    } else if (contraseña.length < 6 || contraseña.length > 12) {
        result = false;
    } else if (!mayusculas) {
        result = false;
    } else if (!minusculas) {
        result = false;
    } else if (!numero) {
        result = false;
    }

    return result;
}

console.log(isValidPassword('Holaquetal3'));

// 17.Pedir que se introduzca un número de dni, después, calcular si el dni es
// verdadero o no en función de su formato y el número de dígitos. Es decir,
// habría que comprobar el número de dígitos y la letra.

// condiciones para que un dni sea valido:
// - Tiene que tener 8 digitos al principio
// - Tiene que tener una letra mayuscula al final.
// - tiene que tener una longitud de 9 caracteres.

// Test cases
// dnis validos
// -> 23456780Z
// -> 12345678A

// dnis invalidos
// -> 87654X32
// -> 12345674X
// -> 123456789A
// -> 87654321x
// -> A12345672
// -> 1234A56A
// -> 12345-6A
// -> 87654223AA

// 23456780Z
// iteración 0 -> posición 1
// i -> 0; dniToValidate[i] -> 2

function dniValidator(dniToValidate) {
    let result = true;

    console.log('value', dniToValidate);

    for (let i = 0; i < 8; i++) {
        console.log('index', i);
        console.log('char', dniToValidate[i]);
        if (!'0123456789'.includes(dniToValidate[i])) {
            console.log('inside checking numbers');
            result = false;
            break;
        }
    }

    if ((result == true) && (!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(dniToValidate[8]))) {
        console.log('inside checking letter');
        result = false;
    }
    if ((result == true) && (dniToValidate.length !== 9)) {
        console.log('inside checking length');
        result = false;
    }

    return result;
}

function dniValidatorNoLogs(dniToValidate) {
    let result = true;

    for (let i = 0; i < 8; i++) {
        if (!'0123456789'.includes(dniToValidate[i])) {
            result = false;
            break;
        }
    }

    if ((result == true) && (!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(dniToValidate[8]))) {
        result = false;
    }

    if ((result == true) && (dniToValidate.length !== 9)) {
        result = false;
    }

    return result;
}

console.log('true', dniValidator('23456780Z'));
console.log('true', dniValidator('12345678A'));
console.log('false', dniValidator('87654X32'));
console.log('false', dniValidator('123456789A'));
console.log('false', dniValidator('87654321x'));
console.log('false', dniValidator('A12345672'));
console.log('false', dniValidator('1234A556A'));
console.log('false', dniValidator('12345-67A'));
console.log('false', dniValidator('87654223AA'));

console.log('true', dniValidatorNoLogs('23456780Z'));
console.log('true', dniValidatorNoLogs('12345678A'));
console.log('false', dniValidatorNoLogs('87654X32'));
console.log('false', dniValidatorNoLogs('123456789A'));
console.log('false', dniValidatorNoLogs('87654321x'));
console.log('false', dniValidatorNoLogs('A12345672'));
console.log('false', dniValidatorNoLogs('1234A556A'));
console.log('false', dniValidatorNoLogs('12345-67A'));
console.log('false', dniValidatorNoLogs('87654223AA'));

// 16.Crear una función o un programa con página web que pida al usuario que
// ingrese un dígito y un número, después debe informar el número de veces
// que aparece el dígito en el número. Por ejemplo, si el número es 22334324 y
// el dígito 2, debería decir que aparece 3 veces.

// -> digito: 2, numero: 22334324 -> 3
// -> digito: 9, numero: 356719   -> 1
// -> digito: 1, numero: 345000   -> 0
// -> digito: 0, numero: 468592   -> 0
// -> digito: 5, numero: -600034  -> 0

// la entrada va a ser limpia, es decir:
// - el digito va a ser un string, con un solo caracter numerico.
// - el numbero va a ser un string, con varios caracteres numericos, sin espacios ni letras.

// i -> 0; numero[i] -> 2 ->> contador + 1
// i -> 1; numero[i] -> 2 ->> contador + 1
// i -> 2; numero[i] -> 3
// i -> 3; numero[i] -> 3
// i -> 4; numero[i] -> 4
// i -> 5; numero[i] -> 2 ->> contador + 1
// i -> 6; numero[i] -> 4

function digitCounter(digito, numero) {
    let contador = 0;

    if (typeof numero !== 'string') {
        numero = String(numero);
    }

    // option 1
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] == digito) {
            contador += 1;
        }
    }
    // option 2
    // contador = numero.split(digito).length - 1;

    return contador;
}

module.exports = {
    digitCounter,
};

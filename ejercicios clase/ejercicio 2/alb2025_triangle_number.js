// 2.12 Preguntar por pantalla un número entero y que se imprima por pantalla
// un triángulo tipo, siendo el número entero el número de líneas que se
// imprimen. Un ejemplo sería con el número 5:
// 1
// 3 1
// 5 3 1
// 7 5 3 1
// 9 7 5 3 1

// Ejercicio de Martin
// const input_number = parseInt(window.prompt('Introduce un número entero'));
// let num = 0;
// for (let i = 1; i <= input_number; i++) {
//     num = 2 * i - 1;
//     let fila = '';
//     for (let j = 0; j < i; j++) {
//         fila += num - 2 * j;
//     }
//     console.log(fila);
// }

// Ejercicio de Martin con buenos nombres
// const number_of_lines = parseInt(window.prompt('Introduce un número entero'));

// for (let n_line = 1; n_line <= number_of_lines; n_line++) {
//     const first_number_in_line = 2 * n_line - 1;
//     let line = '';

//     for (let number_position = 0; number_position < n_line; number_position++) {
//         line += first_number_in_line - 2 * number_position;
//     }
//     console.log(line);
// }

// Ejercicio de Martin con buenos nombres, espacios y en pantalla
// const number_of_lines = parseInt(window.prompt('Introduce un número entero'));

// let pyramid = '';

// for (let n_line = 1; n_line <= number_of_lines; n_line++) {
//     const first_number_in_line = 2 * n_line - 1;
//     let line = '';

//     for (let number_position = 0; number_position < n_line; number_position++) {
//         // line += " " + (first_number_in_line - (2 * number_position));
//         line += ` ${first_number_in_line - 2 * number_position}`;
//     }
//     pyramid += `${line}<br>`;
// }

// document.write(pyramid);

// Ejercicio de Martin simplificado
// const number_of_lines = parseInt(window.prompt('Introduce un número entero'));

// let pyramid = '';
// let aux_line = '';

// for (let n_line = 1; n_line <= number_of_lines; n_line++) {
//     const first_number_in_line = 2 * n_line - 1;
//     // aux_line = first_number_in_line + " " + aux_line;
//     aux_line = `${first_number_in_line} ${aux_line}`;
//     pyramid += `${aux_line}<br>`;
// }

// document.write(pyramid);

// Ejercicio de Miguel
// const numFilas = window.prompt('Dime cuantas filas quieres que tenga el triangulo?');
// const topNumero = numFilas * 2;

// for (i = 1; i <= topNumero; i += 2) {
//     for (j = i; j >= 1; j--) {
//         if (j % 2 !== 0) {
//             document.write(`${j} `);
//         }
//     }
//     document.write('<br><br>');
// // document.write("<br>");
// }

// Ejercicio de Cesar
// const totLines = parseInt(window.prompt('Numero de lineas '));

// let toPrint = '';
// document.write(toPrint, '<br/>');
// // debugger;
// for (let i = 1; i <= totLines * 2; i += 2) {
// //    lastValue = lastValue + i;
//     toPrint = `${i} ${toPrint}`;
//     document.write(toPrint);
// }

// Ejercicio de Cesar para function

// function pyramid(totLines) {
//     let result = '';
//     let toPrint = '';
//     // debugger;
//     for (let i = 1; i <= totLines * 2; i += 2) {
//         toPrint = `${i} ${toPrint}`;
//         result += `${toPrint}\n`;
//     }
//     return result;
// }

// module.exports = {
//     pyramid,
// };

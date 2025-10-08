// 14.Escribir un programa que muestre el eco de todo lo que el usuario
// introduzca hasta que el usuario escriba “salir” que terminará.

// el programa no explicita cómo se muestra el eco, hay varias opciones:
// - en consola
// - en alert
// - en la página web

let input_text;
do {
    input_text = window.prompt("Escribe un texto, si escribes 'salir' se terminará el programa").toLowerCase();
    console.log(input_text);
    alert(input_text);
    document.write(input_text);
} while (input_text != 'salir');

// // duda de Maria: siempre se debe hacer un else en un else if? NO PARECE NECESARIO
const david = 'guapo';
if (david == 'guapo') {
    console.log('David es guapo');
} else if (david == 'feo') {
    console.log('David es feo');
}

// 4. Crea una página web que te pregunte de qué quieres saber el precio.
// Puede ser una tienda de ropa, un supermercado, una ferretería… En
// función de la contestación del cliente te responde con el precio.
// ▪ Extra: ¿qué pasa con los idiomas, vas a escribir en castellano,
// inglés?
// ▪ Extra: ¿qué pasa con las mayúsculas, minúsculas?

const listaProductos = window.prompt('¿Qué producto deseas?\nOPCIÓN A: Pienso para perros (dog)\nOPCIÓN B: Pienso para gatos (cat)\n');
if (listaProductos.toLowerCase() == 'a') {
    const perros = prompt('Pienso perros /dog:\nOPCIÓN A: saco 12kg \nOPCIÓN B: saco de 5kg\nOPCIÓN C: saco de 2,5kg');
    if (perros.toLowerCase() == 'a') {
        alert('El saco de 12kg cuesta 100€');
    } else if (perros.toLowerCase() == 'b') {
        alert('El saco de 5kg cuesta 50€');
    } else if (perros.toLowerCase() == 'c') {
        alert('El saco de 2,5kg cuesta 20€');
    }
} else if (listaProductos.toLowerCase() == 'b') {
    const gatos = window.prompt('Pienso gatos /cat:\nOPCIÓN A: saco 10kg \nOPCIÓN B: saco de 4kg \nOPCIÓN C: saco de 1,5kg');

    if (gatos.toLowerCase() == 'a') {
        alert('El saco de 10kg cuesta 90€');
    } else if (gatos.toLowerCase() == 'b') {
        alert('El saco de 4kg cuesta 40€');
    } else if (gatos.toLowerCase() == 'c') {
        alert('El saco de 1,5kg cuesta 15€');
    }
} else {
    alert('No tenemos esa opción, lo siento.');
}

// 9. Imprimir por pantalla las tablas de multiplicar del 0 al 9

const nueve = 9;
for (let i = 0; i <= 9; i++) {
    const resultado = nueve * i;
    console.log(`9 x ${i} = ${resultado}`);
    alert(`9 x ${i} = ${resultado}`);
}

const first_item = 0;
const last_item = 9;

for (let table_value = first_item; table_value <= last_item; table_value++) {
    document.write(`<h2>Tabla del ${table_value}</h2>`);
    for (let i = first_item; i <= last_item; i++) {
        const resultado = table_value * i;
        document.write(`${table_value} x ${i} = ${resultado}<br>`);
    }
}

// 11.Preguntar un número de números a introducir, después, preguntar por
// esos números, por último, sacar por pantalla la suma de los mismos. Un
// ejemplo sería: “Dime un número” -> 3. Después, preguntar 3 veces: “uno
// de los sumandos es?” -> 4, 3, 2. Y por último, cuando se han conseguido
// todos los números, responder la suma -> 9.

const length_numbers = parseInt(window.prompt('¿Cuántos números deseas sumar?'));
let resultado = 0;

for (let count = 0; count < length_numbers; count++) {
    const number = parseInt(window.prompt(`Dime el número ${count + 1}`));

    resultado += number;
}

alert(`El resultado es: ${resultado}`);

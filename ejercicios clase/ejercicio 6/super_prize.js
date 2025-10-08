

INCREDIBLE_PRIZES = [
    "Una casa venga",
    "Un coche venga",
    "Un reloj rolex",
    "Un viaje a las maldivas",
    "Un perrito",
    "Un piano de cola blanco"
]


let userChoice = parseInt(window.prompt("BIENVENIDO AL SUPER PREMIO! Elige un numero del 1 al " + INCREDIBLE_PRIZES.length));

alert ("Has GANADO " + INCREDIBLE_PRIZES[userChoice - 1] + "!!!");

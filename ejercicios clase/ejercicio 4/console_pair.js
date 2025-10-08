let init_number = parseInt(window.prompt("Enter the initial number of the range:"));
let end_number = parseInt(window.prompt("Enter the end number of the range:"));

console.log("normal procedure");
for (let i = init_number; i <= end_number; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("super cesar procedure");
let calculated_init_number = init_number;
if (calculated_init_number % 2 != 0) {
    calculated_init_number += 1;
}
for (let i = calculated_init_number; i <= end_number; i+=2) {
    console.log(i);
}
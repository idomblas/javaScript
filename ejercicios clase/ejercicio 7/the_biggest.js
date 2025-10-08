// let number_1 = 4;
// let number_2 = 13;

// if (number_1 >= number_2) {
//     console.log("the biggest is: " + number_1);
// } else {
//     console.log("the biggest is: " + number_2);
// }

let input_number_1 = parseFloat(window.prompt("Enter the first number:"));
let input_number_2 = parseFloat(window.prompt("Enter the second number:"));

if (input_number_1 >= input_number_2) {
    alert("the biggest is: " + input_number_1);
} else {
    alert("the biggest is: " + input_number_2);
}

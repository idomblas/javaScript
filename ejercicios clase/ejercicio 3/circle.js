// 1.9 Crea una clase llamada Circle que tenga como entrada el radio en el
// constructor. Debería tener dos métodos, uno para calcular el perímetro
// (get_perimeter) y otro para calcular el área (get_area). También debería
// poder calcular el volumen del cilindro que quedaría dada una altura
// (get_volume_by_height).

class Circle {
    constructor (radio){
        this.radio = radio;
    }

    calculatePerimeter(){
        return 2 * Math.PI * this.radio;
    }

    calculateArea(){
        return Math.PI * Math.pow(this.radio, 2);
    }

    calculateVolumeByHeight(height){
        return this.calculateArea() * height;
    }
}


module.exports = {
    Circle,
}
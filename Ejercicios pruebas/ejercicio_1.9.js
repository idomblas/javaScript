// 1.9 Crea una clase llamada Circle que tenga como entrada el radio en el
// constructor. Debería tener dos métodos, uno para calcular el perímetro
// (get_perimeter) y otro para calcular el área (get_area). También debería
// poder calcular el volumen del cilindro que quedaría dada una altura
// (get_volume_by_height).

class Circle {
  constructor(radio) {
    this.radio = radio;
  }

  calculate_perimeter() {
    return 2 * Math.PI * radio;
  }

  calculate_area() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  getVolumeByHeight(height) {
    return this.calculate_area() * height;
  }
}

module.export = {
  Circle,
};

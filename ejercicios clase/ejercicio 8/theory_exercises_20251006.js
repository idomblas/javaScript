// Tienes una función que recibe un objeto como parámetro.
// La función debe retornar un array con el nombre de las propiedades que su
// tipo sea boolean.

// Por ejemplo, para el objeto { a: true, b: 42, c: false }
// la función debe retornar ['a', 'c'] ya que son las dos propiedades que t
// ienen valores booleanos.


function getKeysOfBooleanValues(obj) {
    let result = [];
    for (let property in obj) {
      if (typeof obj[property] == "boolean"){
        result.push(property);
      }
    }

    return result;
  }

console.log(getKeysOfBooleanValues({ a: true, b: 2, c: false }));



class SuperPerson {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getSuperName() {
        return "Super " + this.getName();
    }
}



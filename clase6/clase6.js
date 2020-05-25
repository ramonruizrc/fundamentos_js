var juan = {
    nombre: 'Juan',
    apellido: 'Ruiz',
    edad: 18
}

var ramon = {
    nombre: 'Ramon',
    apellido: 'Rocha',
    edad: 18
}

// function imprimirNombreEnMayusculas(persona) {
//    var nombre = persona.nombre.toUpperCase()
//     console.log(nombre);
// }
function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(ramon)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })


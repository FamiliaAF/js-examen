/*
// Ejercicio 1:
// Crea una función de tipo flecha que acepte un arreglo de objetos que representan productos con propiedades como "nombre" y "precio". La función debe usar el método map para retornar un nuevo arreglo con los nombres de los productos. Utiliza el siguiente arreglo como entrada:

const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalones", precio: 30 },
  { nombre: "Bufanda", precio: 10 },
  { nombre: "Sombrero", precio: 15 }
];
*/

// const obtenerNombres = () => {
//   return productos.map(producto => producto.nombre);
// };

// const productos = [
//   { nombre: "Camiseta", precio: 20 },
//   { nombre: "Zapatos", precio: 50 },
//   { nombre: "Pantalones", precio: 30 },
//   { nombre: "Bufanda", precio: 10 },
//   { nombre: "Sombrero", precio: 15 }
// ];

// const nombresProductos = obtenerNombres(productos);
// console.log(nombresProductos);

/*
// Ejercicio 2:
// Crea una función que acepte un arreglo de objetos que representan personas con propiedades como "nombre" y "edad". La función debe usar el método filter para retornar un nuevo arreglo con las personas mayores de 25 años. Utiliza el siguiente arreglo como entrada:

const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 22 },
  { nombre: "María", edad: 28 },
  { nombre: "Carlos", edad: 19 },
  { nombre: "Elena", edad: 35 }
];
*/

// const obtenerPersonas = () => {
//   return personas.filter(persona => persona.edad > 25);
// };

// const personas = [
//   { nombre: "Ana", edad: 30 },
//   { nombre: "Juan", edad: 22 },
//   { nombre: "María", edad: 28 },
//   { nombre: "Carlos", edad: 19 },
//   { nombre: "Elena", edad: 35 }
// ];

// const personasMayores = obtenerPersonas(personas);
// console.log(personasMayores);

// Ejercicio 3:
// Crea una función de tipo flecha que acepte un arreglo de números y use el método reduce para retornar la suma de todos los números. Utiliza el siguiente arreglo como entrada:

// const numeros = [5, 10, 15, 20, 25, 8];

// const suma = (numeros) => {
//   let sumaTotal = numeros.reduce((acumulador, current) => acumulador + current, 0);
//   return sumaTotal;
// }

// console.log(suma(numeros));

/*
// Ejercicio 4:
// Crea una función que acepte un arreglo de objetos que representan libros con propiedades como "título" y "autor". La función debe usar el método forEach para imprimir por consola los títulos de los libros. Utiliza el siguiente arreglo como entrada:

const libros = [
  { título: "El Principito", autor: "Antoine de Saint-Exupéry" },
  { título: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { título: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
  { título: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { título: "1984", autor: "George Orwell" }
];
*/

// const imprimirTitulos = () => {
//   libros.forEach(libro => {
//     console.log(libro.título);
//   });
// };

// const libros = [
//   { título: "El Principito", autor: "Antoine de Saint-Exupéry" },
//   { título: "Cien años de soledad", autor: "Gabriel García Márquez" },
//   { título: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
//   { título: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//   { título: "1984", autor: "George Orwell" }
// ];

// imprimirTitulos(libros);

/*
// Ejercicio 5:
// Crea una función de tipo flecha que acepte un arreglo de números y use el método filter para retornar un nuevo arreglo con los números pares. Utiliza el siguiente arreglo como entrada:

const numeros = [1, 4, 7, 10, 15, 18, 22, 25];
*/

// const obtenerNumeros = () => {
//   return numeros.filter(numero => numero % 2 === 0);
// };

// const numeros = [1, 4, 7, 10, 15, 18, 22, 25];
// const numerosPares = obtenerNumeros(numeros);
// console.log(numerosPares);

/*
// Ejercicio 6:
// Crea una función que acepte un arreglo de objetos que representan estudiantes con propiedades como "nombre" y "calificaciones". La función debe usar el método map para retornar un nuevo arreglo con el nombre de cada estudiante y su calificación más alta. Utiliza el siguiente arreglo como entrada:

const estudiantes = [
  { nombre: "Luis", calificaciones: [85, 90, 78, 92, 88] },
  { nombre: "Ana", calificaciones: [76, 89, 94, 81, 70] },
  { nombre: "Carlos", calificaciones: [95, 88, 91, 78, 86] },
  { nombre: "María", calificaciones: [79, 84, 90, 76, 85] }
];
*/

/*
// Ejercicio 7:
// Crea una función de tipo flecha que acepte un arreglo de objetos que representan frutas con propiedades como "nombre" y "precio". La función debe usar el método reduce para retornar el precio total de todas las frutas. Utiliza el siguiente arreglo como entrada:

const frutas = [
  { nombre: "Manzana", precio: 1.5 },
  { nombre: "Plátano", precio: 0.5 },
  { nombre: "Naranja", precio: 0.8 },
  { nombre: "Uva", precio: 2.0 },
  { nombre: "Pera", precio: 1.2 }
];
*/

// const calcularPrecioTotal = (frutas) => {
//   return frutas.reduce((acumulador, current) => acumulador + current.precio, 0);
// };

// const frutas = [
//   { nombre: "Manzana", precio: 1.5 },
//   { nombre: "Plátano", precio: 0.5 },
//   { nombre: "Naranja", precio: 0.8 },
//   { nombre: "Uva", precio: 2.0 },
//   { nombre: "Pera", precio: 1.2 }
// ];

// const precioTotal = calcularPrecioTotal(frutas);
// console.log(precioTotal);

// Ejercicio 8:
// Crea una función que acepte un arreglo de objetos que representan películas con propiedades como "título" y "año". La función debe usar la destructuración para mostrar por consola el título y el año de la película más reciente. Utiliza el siguiente arreglo como entrada:

// const peliculas = [
//   { title: "El Padrino", year: 1972 },
//   { title: "El Señor de los Anillos", year: 2001 },
//   { title: "Avatar", year: 2009 },
//   { title: "Pulp Fiction", year: 1994 },
//   { title: "Mario Bros", year: 2023},
//   { title: "Titanic", year: 1997 }
// ];

// function showMovie(peliculas) {
//   const peliculasOrdenadas = peliculas.sort((a, b) => b.year - a.year);
//   const {title, year} = peliculasOrdenadas[0]
//   console.log(title, year);
// }

// showMovie(peliculas);

// Ejercicio 9:
// Crea una función de tipo flecha que acepte un arreglo de números y use el método filter para retornar un nuevo arreglo con los números que son mayores que su índice en el arreglo. Utiliza el siguiente arreglo como entrada:

const numeros = [3, 1, 6, 0, 9, 2, 8, 4, 7, 20, 5];

const numerosDos = (array) => {
  return array.filter((numero, index) => numero > index);
};

const resultado = numerosDos(numeros);
console.log(resultado);
/*
// Ejercicio 10:
// Crea una función que acepte un arreglo de objetos que representan estudiantes con propiedades como "nombre" y "promedio". La función debe usar el método sort para ordenar los estudiantes por promedio de manera ascendente y retornar el arreglo ordenado. Utiliza el siguiente arreglo como entrada:

const estudiantes = [
  { nombre: "Laura", promedio: 85 },
  { nombre: "Carlos", promedio: 92 },
  { nombre: "Ana", promedio: 78 },
  { nombre: "Luis", promedio: 89 },
  { nombre: "Marta", promedio: 76 }
];
*/

const estudiantes = [
  { nombre: "Laura", promedio: 85 },
  { nombre: "Carlos", promedio: 92 },
  { nombre: "Ana", promedio: 78 },
  { nombre: "Luis", promedio: 89 },
  { nombre: "Marta", promedio: 76 }
];

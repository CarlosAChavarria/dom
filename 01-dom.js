document.write(`Texto desde JavaScript`);

// accediendo a elementos de html desde JS
// devuelve un arreglo de los elementos que tengan la etiqueta especificada

// const title = document.getElementsByTagName('h1');
// // como es un arreglo, debemos especificar el numero de elemento que deseamos modificar
// title[0].innerHTML = 'Titulo cambiado desde JS';
// console.log(title);

// // forma de acceder a un elemento html especifico mediante id

// const texto = document.getElementById('text1');
// texto.innerHTML = 'este es un texto definido o escrito desde javaScript';
// texto.style.background = 'blue';
// texto.style.color = 'white';

// querySelector ayuda a seleccionar elementos por id o clases
const texto = document.querySelector('#text1');
texto.textContent = 'Estoy escribiendo desde js con queryselector';

// // obtiene un elemento por ID
// document.getElementById
// // obtiene todos los elementos de una clase y devuelve un arreglo
// document.getElementsByClassName
// // obtiene todos los elementos por nombre y devuelve un arreglo
// document.getElementsByName

// querySelector engloba a todos los anteriores

// crear elementos html
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);
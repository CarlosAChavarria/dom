// Eventos con addEventListener
//  $ ayuda a hacer una diferenciación de las variables de conexión

const $button1 = document.querySelector('#btn1');
const $inputNombre = document.querySelector('#nombre');

// primera forma de agregar eventos a un elemento
$button1.addEventListener('click', () =>{
    // instrucciones de la funcion del evento que deseamos
    console.log("Me presionaste");
});

// saber toda la informacion del evento
// const escribe = (e) => {
//     console.log(e);
// };

// saber una informacion en especifico, saber lo que esta tecleeando
// const escribe = (e) => {
//     console.log(e.target.value);
// };
// $inputNombre.addEventListener('keydown', escribe);

$inputNombre.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});
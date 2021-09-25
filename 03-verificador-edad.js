// conexion entre la parte lógica y la parte grafica de la página.
const edad = document.querySelector('#edad');
const input = document.querySelector('#input');

// funcion para verificar si eres mayor o menor de edad.
const verificar = () => {
    const inputEdad = parseInt(input.value);
    inputEdad > 18 ? edad.textContent = "Eres mayor de edad" : edad.textContent = "Eres menor de edad"; 
}
const nameTitle = document.querySelector('#name');
const input = document.querySelector('#input');

// console.log(nameTitle.value);

const writeName = () => {
    // extrae el valor
    const inputValue = input.value;
    // asigna el valor a h1
    nameTitle.textContent = inputValue;
}
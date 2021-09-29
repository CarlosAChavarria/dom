const $btnAgregar = document.querySelector("#agregar");
const $lista = document.querySelector("#list");

// agregando función anonima a mi evento
$btnAgregar.addEventListener('click', () =>{
    // creando elemento de lista html
    const ListIitem = document.createElement('li');
    // imprime el elemento que se cre
    // console.log(ListIitem);

    // agregando contenido a la etiqueta
    ListIitem.textContent = 'Nuevo elemento';
    console.log(ListIitem);

    // agregando elemento a la lista
    $lista.appendChild(ListIitem);
});
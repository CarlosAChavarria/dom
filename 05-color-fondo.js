const $body = document.querySelector('body');
const $selector = document.querySelector('#colors');

$selector.addEventListener('change', (e) => {

    // evaluacion mediante switch

    switch(e.target.value){
        case 'red': $body.className = '';
            $body.classList.add('red');
            break;
        case 'blue': $body.className = '';
            $body.classList.add('blue');
            break;
        case 'green': $body.className = '';
            $body.classList.add('green');
            break;
    }

    // evaluacion mediante if

    // if(e.target.value === 'red'){
    //     // elimina cualquier clase aplicada a body
    //     $body.className = '';
    //     // aplica la nueva clase a body
    //     $body.classList.add('red');
    // } else if(e.target.value === 'blue'){
    //     $body.className = '';
    //     $body.classList.add('blue');
    // } else if(e.target.value === 'green'){
    //     $body.className = '';
    //     $body.classList.add('green');
    // }
});
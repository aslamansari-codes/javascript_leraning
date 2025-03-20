const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        // if(e.target.id == 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'pink'){
        //     body.style.backgroundColor = e.target.id;
        // }

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'pink':
                body.style.backgroundColor = e.target.id;
                break;

            default:
                body.style.backgroundColor = 'red';
                break;
        }

    })

})

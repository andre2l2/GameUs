let twoPalyer = true;

function option() {
    const $buttonPlayer1 = document.querySelector('.option button');
    const $buttonPlayer2 = document.querySelector('.option button + button');
    const $buttonMenu = document.querySelector('.poit .menu');
    const $option = document.querySelector('.option');

    $buttonPlayer2.addEventListener('click', () => {
        $option.classList.add('none');
    })

    $buttonPlayer1.addEventListener('click', () => {
        $option.classList.add('none');
        twoPalyer = false;
    })

    $buttonMenu.addEventListener('click', () => {
        $option.classList.remove('none');
        twoPalyer = true;
    })
}

option();
const screen = document.getElementById('screen');
const context = screen.getContext('2d');
const currentPlayerId = 'payer2';

let points = 0;

const game = {
    players: {
        'payer2': { x: 9, y: 9}
    },
    fruit: {
        'fruit': { x: 1, y: 1 }
    }
}

document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    const keyPressed = event.key;
    const player = game.players[currentPlayerId];
    
    if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
        player.y = player.y - 1;
    }
    if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height ) {
        player.y = player.y + 1;
    }
    if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {
        player.x = player.x - 1;
    }
    if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {
        player.x = player.x + 1;
    }
}

renderScreen()
function renderScreen() {
    context.fillStyle = 'white';
    context.clearRect(0, 0, 10, 10);

    for (let payerId in game.players) {
        const player = game.players[payerId];
        context.fillStyle = 'black';
        context.fillRect(player.x, player.y, 1, 1);
    }

    for (let fruitId in game.fruit) {
        const fruit = game.fruit[fruitId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1);
    }

    check();
    requestAnimationFrame(renderScreen)
}

function check() {
    const positionFrut = game.fruit.fruit;
    const positionPlayer = game.players.payer2;

    if (positionFrut.x == positionPlayer.x) {
        if (positionFrut.y == positionPlayer.y) {

            pointsRender();
            game.fruit.fruit = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
        }
    }
}

function pointsRender() {
    const $poit = document.querySelector('div.poit');

    points = points + 1;
    $poit.innerHTML = `<span>${points}</span>`
}
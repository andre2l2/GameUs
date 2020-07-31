const screen = document.getElementById('screen');
const context = screen.getContext('2d');

let points1 = 0;
let points2 = 0;

const game = {
    players: {
        'payer1': { x: 0, y: 14 },
        'payer2': { x: 14, y: 0 }
    },
    fruit: {
        'fruit': { x: 7, y: 7 }
    }
}

document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
    const keyPressed = event.key;
    const player1 = game.players['payer1'];
    const player2 = game.players['payer2'];
    
    if (keyPressed === 'ArrowUp' && player2.y - 1 >= 0) {
        player2.y = player2.y - 1;
    }
    if (keyPressed === 'ArrowDown' && player2.y + 1 < screen.height ) {
        player2.y = player2.y + 1;
    }
    if (keyPressed === 'ArrowLeft' && player2.x - 1 >= 0) {
        player2.x = player2.x - 1;
    }
    if (keyPressed === 'ArrowRight' && player2.x + 1 < screen.width) {
        player2.x = player2.x + 1;
    }

    if (keyPressed === 'w' && player1.y - 1 >= 0) {
        player1.y = player1.y - 1;
    }
    if (keyPressed === 's' && player1.y + 1 < screen.height ) {
        player1.y = player1.y + 1;
    }
    if (keyPressed === 'a' && player1.x - 1 >= 0) {
        player1.x = player1.x - 1;
    }
    if (keyPressed === 'd' && player1.x + 1 < screen.width) {
        player1.x = player1.x + 1;
    }
}

function renderScreen() {
    context.fillStyle = 'white';
    context.clearRect(0, 0, 15, 15);

    for (let payerId in game.players) {
        const player = game.players[payerId];

        if ((game.players.payer1 == player) && twoPalyer) {
            context.fillStyle = 'black';
            context.fillRect(player.x, player.y, 1, 1);
        }


        if (game.players.payer2 == player) {
            context.fillStyle = 'orange';
            context.fillRect(player.x, player.y, 1, 1);
        }
    }

    for (let fruitId in game.fruit) {
        const fruit = game.fruit[fruitId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1);
    }

    check();
    requestAnimationFrame(renderScreen)
}
renderScreen()

function check() {
    const positionFrut = game.fruit.fruit;
    const positionPlayer1 = game.players.payer1;
    const positionPlayer2 = game.players.payer2;

    if (positionFrut.x == positionPlayer2.x) {
        if (positionFrut.y == positionPlayer2.y) {
            pointsRender(2);
            game.fruit.fruit = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) };
        }
    }

    if (positionFrut.x == positionPlayer1.x) {
        if (positionFrut.y == positionPlayer1.y) {
            pointsRender(1);
            game.fruit.fruit = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) };
        }
    }
}

function pointsRender(is) {

    if (is == 1) {
        const $poit = document.querySelector('div.poit div.p1');

        points1 = points1 + 1;
        $poit.innerHTML = `<span>${points1}</span>`
    }

    else if (is == 2) {
        const $poit = document.querySelector('div.poit div.p2');

        points2 = points2 + 1;
        $poit.innerHTML = `<span>${points2}</span>`
    }
}
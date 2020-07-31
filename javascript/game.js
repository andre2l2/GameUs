function check() {
    const positionFrut = game.fruit.fruit;
    const positionPlayer1 = game.players.payer1;
    const positionPlayer2 = game.players.payer2;

    if (positionFrut.x == positionPlayer2.x) {
        if (positionFrut.y == positionPlayer2.y) {
            renderPoint(2);
            game.fruit.fruit = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) };
        }
    }

    if (positionFrut.x == positionPlayer1.x) {
        if (positionFrut.y == positionPlayer1.y) {
            renderPoint(1);
            game.fruit.fruit = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) };
        }
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

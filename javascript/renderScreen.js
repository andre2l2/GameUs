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
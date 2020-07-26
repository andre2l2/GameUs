const screen = document.getElementById('screen')
const context = screen.getContext('2d')
const currentPlayerId = 'payer2'

const game = {
    players: {
        'payer2': { x: 9, y: 9}
    }
}

document.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    const keyPressed = event.key
    const player = game.players[currentPlayerId]
    
    if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
        player.y = player.y - 1
    }
    if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height ) {
        player.y = player.y + 1
    }
    if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {
        player.x = player.x - 1
    }
    if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {
        player.x = player.x + 1
    }
}

renderScreen()
function renderScreen() {
    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    for (let payerId in game.players) {
        const player = game.players[payerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
    }
    requestAnimationFrame(renderScreen)
}
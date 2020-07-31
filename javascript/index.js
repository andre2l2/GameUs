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


function start() {
    option();
    renderScreen();
}

start();
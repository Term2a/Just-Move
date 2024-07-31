let container = document.getElementById('directionContainer');
let scoreDisplay = document.getElementById('scoreDisplay');

initScore = 0;
scoreDisplay.innerHTML = initScore;

const arrows = [
    document.getElementsByClassName('arrowUp')[0],
    document.getElementsByClassName('arrowDown')[0],
    document.getElementsByClassName('arrowLeft')[0],
    document.getElementsByClassName('arrowRight')[0]
]

//  Sets the rate for the display of new arrows, and the speed at which they fall
let gameRate = 1.2;
let gameSpeed = 1.2;

//  RNG function
function RNG(min, max) {
    return (((Math.random() * (max - min + 1)) + min) -.7).toFixed(0);
}

function rngFix(min, max) {
    let random = RNG(min, max);
    if (random == (-0)) {
        random = 0;
    }
    if (random == (-1)) {
        random = 1;
    }

    return random
}

function pauseGame(flag, interval) {
    if (flag) {
        clearInterval(interval);
    } else {
        setInterval(interval);
    }
}

function gameStart()  {
    createArrow();
    addScore(65, 45, 28, 20);

    musicUnsync.play();

    setInterval(() => {
        createArrow();
    }, 500 / gameSpeed * gameRate);  

    setInterval(() => {
        arrowHit();
    });
}

//  Adds an arrow to the display, moves it downwards, deletes it when out of frame
function createArrow(num = rngFix(0, 3)) {
    let newArrow = arrows[num].cloneNode(true);
    container.appendChild(newArrow);

    let initPos = -10;
    arrowMove(newArrow, initPos);

    arrowHit();
}

function arrowMove(el, init) {
    setInterval(() => {
        init += 1;
        el.style.top = init + '%';

        let elPos = el.style.top.split('%')[0];
        
        if (elPos >= 19) {
            el.style.opacity = 1;
        }
        if (elPos >= 93) {
            el.style.opacity = 0;
        }
        if (elPos >= 110) {
            el.remove();
        }
    }, 50 / gameSpeed);
}

function arrowHit() {
    let trgArrow = container.firstChild;
    setInterval(() => {
        trgArrow = container.firstChild;        
    });

    document.addEventListener('keydown', (evt) => {
        if (
            (evt.key == trgArrow.dataset.key || evt.key == trgArrow.dataset.arrow) && 
            trgArrow.style.top.split('%')[0] > 19
        ) {
            trgArrow.remove();
        }
    })
}

//  Updates the scoreboard if hit or miss
let trgArrow;
setInterval(() => {
    trgArrow = container.firstChild;        
});

function addScore(height1, height2, height3, height4) {
    document.addEventListener('keydown', (evt) => {
        if (
            (evt.key == trgArrow.dataset.key || evt.key == trgArrow.dataset.arrow) && 
            trgArrow.style.top.split('%')[0] > 19
        ) {
            arrowScore(trgArrow, height1, height2, height3, height4);        

        } else {
            scoreAlert('missed');

            if (Number(scoreDisplay.innerHTML) > 0) {
                updateScore(-2);
            }
        }
    })
}

//  Different score values depending on how early you get the hit
function arrowScore(el, height1, height2, height3, height4) {
    let arrowHeight = el.style.top.split('%')[0];
    if (arrowHeight >= height1) {
        updateScore(1);

        scoreAlert('late');

    } else
    if (arrowHeight >= height2) {
        updateScore(2);

        scoreAlert('ok');

    } else
    if (arrowHeight >= height3) {
        updateScore(3);

        scoreAlert('good');

    } else
    if (arrowHeight >= height4) {
        updateScore(5);

        scoreAlert('perfect');
    }
}

function updateScore(num) {
    initScore += num;
    scoreDisplay.innerHTML = initScore;
}

function scoreAlert(txt) {
    let alertDisplay = document.getElementById('alert');

    if (txt == 'missed') {
        txt += '!';

        alertDisplay.style.color = 'rgb(241, 24, 42)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(250, 141, 183)';
    }
    if (txt == 'late') {
        alertDisplay.style.color = 'rgb(248, 80, 60)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(172, 82, 214)';
    } 
    if (txt == 'ok') {
        alertDisplay.style.color = 'rgb(218, 200, 90)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(143, 132, 30)';
    }
    if (txt == 'good') {
        txt += '!';
        
        alertDisplay.style.color = 'rgb(211, 203, 92)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(194, 250, 141)';
    }
    if (txt == 'perfect') {
        txt += '!';

        alertDisplay.style.color = 'rgb(43, 192, 160)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(250, 141, 183)';
    }

    alertDisplay.innerHTML = txt.toUpperCase();
    alertDisplay.style.opacity = .8;

    setTimeout(() => {
        alertDisplay.style.opacity = 0;
    }, 250);
}
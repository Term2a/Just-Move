let container = document.getElementById('arrowsBoundingBox');
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

//  Calls all functions that run the game, loops display of arrows based on gameSpeed and gameRate
function gameStart()  {
    createArrow();
    addScore();

    gameMusic.play();

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
        
        if (elPos >= 75) {
            el.style.opacity = 1;
            el.style.animation = 'arrowFadeOut .5s';
        }
        if (elPos >= 100) {
            el.remove();
        }
    }, 50 / gameSpeed);
}

//  Checks if the user inputs the right key to catch the arrow
function isRightInput(el, evt) {
    if (
        (el != null || el != undefined) &&
        (evt.key == el.dataset.key || evt.key == el.dataset.arrow)
    ) {
        return true
    }
}

//  Catches the arrow if the input is correct
function arrowHit() {
    let trgArrow = container.firstChild;
    setInterval(() => {
        trgArrow = container.firstChild;        
    });

    document.addEventListener('keydown', (evt) => {
        if ( isRightInput(trgArrow, evt) ) {
            trgArrow.remove();
        }
    })
}

//  Updates the scoreboard on hit or miss
let trgArrow;
setInterval(() => {
    trgArrow = container.firstChild;        
});

function addScore() {
    document.addEventListener('keydown', (evt) => {
        if ( isRightInput(trgArrow, evt) ) {
            arrowScore(trgArrow);        

        } else {
            scoreAlert('missed');

            if (Number(scoreDisplay.innerHTML) > 0) {
                updateScore(-2);
            }
        }
    })
}

//  Different score values for arrow position on catch
function updateScore(num) {
    initScore += num;
    scoreDisplay.innerHTML = initScore;
}

function arrowScore(el) {
    let arrowHeight = el.style.top.split('%')[0];
    if (arrowHeight <= 54) {
        updateScore(1);

        scoreAlert('early');

    }
    if (arrowHeight >= 55 && arrowHeight <= 59) {
        updateScore(2);

        scoreAlert('ok');

    }
    if (arrowHeight >= 60 && arrowHeight <= 68) {
        updateScore(3);

        scoreAlert('good');

    }
    if (arrowHeight >= 69 && arrowHeight <= 78) {
        updateScore(5);

        scoreAlert('perfect');
    }
    if (arrowHeight >= 79) {
        updateScore(1);

        scoreAlert('late');
    }
}

//  Displays a rating to the user's timing on catch
function scoreAlert(txt) {
    let alertDisplay = document.getElementById('alert');

    if (txt == 'missed') {
        txt += '!';

        alertDisplay.style.color = 'rgb(241, 24, 42)';
        alertDisplay.style.textShadow = '.1vw .1vw .1vw rgb(250, 141, 183)';
    }
    if (txt == 'late' || txt == 'early') {
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
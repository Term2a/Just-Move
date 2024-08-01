let cursorScreen = document.getElementById('cursor');

let mainMenuScreen = document.getElementById('mainMenuContainer');
let songPickerScreen = document.getElementById('musicPickerContainer');
let gameScreen = document.getElementById('gameContainer');
let musicListScreen = document.getElementById('musicListContainer');
let optionsMenuScreen = document.getElementById('optionsMenuContainer');

let mainMenuOptions = document.getElementById('options').querySelectorAll('h2');

let loadingScreen = document.getElementById('loadingContainer');
let loadingText = document.getElementById('loadingTitle');
let loadingBar = document.getElementById('loadingBar');

let goToGame = document.getElementById('goToGame');
let goToMusicList = document.getElementById('goToMusicList');
let goToLeaderboards = document.getElementById('goToLeaderboards');
let goToOptions = document.getElementById('goToOptions');
let goToSupportUs = document.getElementById('goToSupportUs');
let startGame = document.getElementById('roundStart');

//  Reset on page load
document.body.onload = () => {
    cursorScreen.style.display = 'block';
    
    mainMenuScreen.style.display = 'block';
    songPickerScreen.style.display = 'none';
    gameScreen.style.display = 'none';
}

//  Main Menu options hover animation
mainMenuOptions.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.style.scale = '1.1'
    })
    el.addEventListener('mouseleave', () => {
        el.style.scale = 1;
    })
})

//  Main Menu options click animation
mainMenuOptions.forEach((option) => {
    option.addEventListener('click', () => {
        cursorScreen.style.display = 'block';

        mainMenuOptions.forEach((el) => {
            el.style.opacity = .3;
            el.style.pointerEvents = 'none';
        })

        option.style.opacity = 1;
        option.style.scale = 1.15;
        option.style.filter = 'drop-shadow(0 0 .5vw white)';

        setTimeout(() => {
            mainMenuScreen.style.opacity = 0;
            mainMenuScreen.style.left = '-70%';

            setTimeout(() => {
                mainMenuScreen.style.display = 'none';
            }, 900);
        }, 200);

        //  Reset state after screen swap
        setTimeout(() => {
            mainMenuOptions.forEach((el) => {
                el.style.opacity = 1;
                el.style.filter = 'drop-shadow(.1vw .1vw .2vw rgba(0, 0, 0, 0.514))';
                
                setTimeout(() => {
                    el.style.pointerEvents = 'all';
                }, 100);
            })  
        }, 1200);
    })
})

//  Return to Main Menu from other menus on ESC press
function mainMenuReturn(page) {
    let menuReturn = new Audio('../assets/SFX/menu.return.mp3');

    let returnTrigger = (evt) => {
        if (evt.key == 'Escape') {
            menuReturn.play();

            page.style.opacity = 0;

            setTimeout(() => {
                mainMenuScreen.style.display = 'block';
                page.style.display = 'none';
            }, 1000);
            
            setTimeout(() => {
                mainMenuScreen.style.opacity = 1;
            }, 1010);

            setTimeout(() => {
                mainMenuScreen.style.left = 0;
            }, 1020);
            document.body.removeEventListener('keydown', returnTrigger);
        }
    };

    document.body.addEventListener('keydown', returnTrigger);
}


//  From Main Menu to Song Picker
goToGame.addEventListener('click', () => {
    songPickerScreen.style.display = 'block'
    setTimeout(() => {
        songPickerScreen.style.opacity = 1;
    }, 1100);

    mainMenuReturn(songPickerScreen);
})


//  From Song Picker, to Loading Screen, to Game
let countDown = document.getElementById('countDown');
let isSynced = false;

startGame.addEventListener('click', () => {
    gameMusic.volume = .7;

    if (musicSyncId == 1) {
        isSynced = true;
        syncCheck();
    }

    cursorScreen.style.display = 'none';
    loadingScreen.style.display = 'flex';

    songPickerScreen.style.transition = '2s';
    songPickerScreen.style.filter = 'blur(2vw) brightness (.8)';

    setTimeout(() => {
        songPickerScreen.style.opacity = 0;

        loadingScreen.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        songPickerScreen.style.display = 'none';

        loadingBar.style.display = 'block';
        loadingText.style.display = 'block';

        setTimeout(() => {
            loadingBar.style.opacity = 1;
            loadingText.style.opacity = 1;
        }, 50);
    }, 2200);

    setTimeout(() => {
        loadingBar.style.opacity = 0;
        loadingText.style.opacity = 0;

        setTimeout(() => {
            loadingScreen.style.opacity = 0;
        }, 500);
    }, 8600);

    setTimeout(() => {
        gameScreen.style.display = 'flex';

        setTimeout(() => {
            gameScreen.style.opacity = 1;
            document.getElementById('boundingBg').style.opacity = 1;
            document.getElementById('arrowThreshold').style.opacity = .3;
        }, 100);
    }, 10400);

    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 11600);


    setTimeout(() => {
        showCountDown();
    }, 11500);
})

//  Pre-game countdown
function showCountDown() {
    countDown.style.display = 'block';

    setTimeout(() => {
        countDown.style.opacity = 1;
    });

    setTimeout(() => {
        countDown.innerHTML = '3';
    }, 500);

    setTimeout(() => {
        countDown.innerHTML = '2';
    }, 1500);

    setTimeout(() => {
        countDown.innerHTML = '1';
    }, 2500);

    setTimeout(() => {
        countDown.style.display = 'none';
    }, 3500);

    setTimeout(() => {
        if (isSynced == false && musicSyncId != 1) {
            gameStart();
        }
    }, 4500);
}


//  From Main Menu to Music List
goToMusicList.addEventListener('click', () => {
    musicListScreen.style.display = 'flex';
    setTimeout(() => {
        musicListScreen.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        listFade(1);
    }, 1200);

    document.addEventListener('keydown', (evt) => {
        if (evt.key == 'Escape') {
            listFade(0);
        }
    })

    mainMenuReturn(musicListScreen);
})

//  Mode 1 = fade in | Mode 0 = fade out
function listFade(mode) {
    document.querySelectorAll('.musicListEntry').forEach((el) => {
        if (mode == 0) {
            el.style.transition = '.2s';
        } else {
            el.style.transition = '1s';
        }

        setTimeout(() => {
            el.style.opacity = mode;
        }, 100 * el.dataset.entryId);
    })
}


//  From Main Menu to Options Menu
goToOptions.addEventListener('click', () => {
    optionsMenuScreen.style.display = 'flex';
    setTimeout(() => {
        optionsMenuScreen.style.opacity = 1;

        document.querySelectorAll('.optionSlider').forEach((el) => {
            el.style.display = 'block';
        })
    }, 1000);

    mainMenuReturn(optionsMenuScreen);
})
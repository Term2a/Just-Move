let templateContainer = document.getElementById('musicTemplateContainer');
let listed = document.querySelectorAll('.listedMusic');

let musicName = document.getElementById('musicName');
let artistName = document.getElementById('artistName');
let diffRating = document.getElementById('diffRating');
let templateTime = document.getElementById('templateTime');
let templateImg = document.getElementById('templateImg');

let gameMusicTitle = document.getElementById('gameMusicNameBox').querySelectorAll('h3')[0];
let gameMusicArtist = document.getElementById('gameMusicNameBox').querySelectorAll('h6')[0];
let roundStart = document.getElementById('roundStart');
let musicSyncId;
let gameMusic;

//  Safe for template animation double trigger
let currentSelect = '';
listed.forEach((el) => {
    el.addEventListener('click', () => {
        currentSelect = el.dataset.musicId;
    })
})

templateContainer.style.opacity = 0;

//  Updates the info and visuals of the music template on user selection
function templateSwap(music) {
    setTimeout(() => {
        templateContainer.style.transition = '.15s';
    }, 300);

    templateContainer.style.opacity = 1;

    if (music != currentSelect) {
        templateContainer.style.opacity = 0;

        switch (music) {
            case 1:
                musicName.innerHTML = 'Let Me Hear That';
                artistName.innerHTML = 'Haywyre';
                templateTime.innerHTML = '[ 03:26 ]';

                gameMusicTitle.innerHTML = 'Let Me Hear That';
                gameMusicArtist.innerHTML = 'Haywyre';

                gameMusic = new Audio('./assets/Music.List/Haywyre - Let Me Hear That.mp3');

                break
            case 2:
                musicName.innerHTML = 'Sad Machine';
                artistName.innerHTML = 'Porter Robinson';
                templateTime.innerHTML = '[ 04:18 ]';

                gameMusicTitle.innerHTML = 'Sad Machine';
                gameMusicArtist.innerHTML = 'Porter Robinson';

                gameMusic = new Audio('./assets/Music.List/Porter Robinson - Sad Machine.mp3');
                
                break
            case 3:
                musicName.innerHTML = 'Insight';
                artistName.innerHTML = 'Haywyre';
                templateTime.innerHTML = '[ 03:55 ]';

                gameMusicTitle.innerHTML = 'Insight';
                gameMusicArtist.innerHTML = 'Haywyre';

                gameMusic = new Audio('./assets/Music.List/Haywyre - Insight.mp3');
                
                break
            case 4:
                musicName.innerHTML = 'Sandstorm';
                artistName.innerHTML = 'Darude';
                templateTime.innerHTML = '[ 03:52 ]';

                gameMusicTitle.innerHTML = 'Sandstorm';
                gameMusicArtist.innerHTML = 'Darude';

                gameMusic = new Audio('./assets/Music.List/Darude - Sandstorm.mp3');
                
                break
            case 5:
                musicName.innerHTML = 'MUSIC 5';
                artistName.innerHTML = 'Artist Five';
                templateTime.innerHTML = '[ 03:29 ]';

                gameMusicTitle.innerHTML = 'Music 5';
                gameMusicArtist.innerHTML = 'Artist 5';
                
                break
            case 6:
                musicName.innerHTML = 'MUSIC 6';
                artistName.innerHTML = 'Artist Six';
                templateTime.innerHTML = '[ 05:20 ]';

                gameMusicTitle.innerHTML = 'Music 6';
                gameMusicArtist.innerHTML = 'Artist 6';
                
                break
            case 7:
                musicName.innerHTML = 'MUSIC 7';
                artistName.innerHTML = 'Artist Seven';
                templateTime.innerHTML = '[ 05:14 ]';

                gameMusicTitle.innerHTML = 'Music 7';
                gameMusicArtist.innerHTML = 'Artist 7';

                break
            case 8:
                musicName.innerHTML = 'MUSIC 8';
                artistName.innerHTML = 'Artist Eight';
                templateTime.innerHTML = '[ 03:52 ]';

                gameMusicTitle.innerHTML = 'Music 8';
                gameMusicArtist.innerHTML = 'Artist 8';

                break
        }

        setTimeout(() => {
            templateImg.setAttribute('src', `./assets/music.template/music.${music}.cover.jpg`);
            templateContainer.style.opacity = 1;

            //  Prepares the music info to be used by the game screen
            document.getElementById('gameMusicImg').setAttribute('src', `./assets/music.template/music.${music}.cover.jpg`);
            musicSyncId = templateImg.getAttribute('src').split('.')[3];
        }, 150);

        //  Pre-sets the game timer based on selected music
        gameMusic.addEventListener('loadedmetadata', () => {
            setTimer(gameMusic);
        })
    }
}

//  Updates the countdown timer based on music's current time
function setTimer(music) {
    let timer = document.getElementById('timerClock');

    updateTimer();
    function updateTimer() {
        let duration = parseInt(music.duration),
            currentTime = parseInt(music.currentTime),

            timeLeft = duration - currentTime,
            seconds, minutes;

        seconds = timeLeft % 60;
        minutes = Math.floor( timeLeft / 60 ) % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        timer.innerHTML = minutes + ':' + seconds;
    }
    
    music.addEventListener('timeupdate', () => {
        updateTimer();
    })
}
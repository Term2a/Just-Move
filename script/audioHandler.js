let menuSelectAudio = new Audio('../assets/SFX/menu.select.mp3');
let gameStartAudio = new Audio('../assets/SFX/game.start.mp3');
let pickerHover = new Audio('../assets/SFX/picker.hover.mp3');

document.getElementById('options').querySelectorAll('h2').forEach((el) => {
    el.addEventListener('click', () => {
        menuSelectAudio.play();
    })
})

document.getElementById('roundStart').addEventListener('click', () => {
    gameStartAudio.play();
})

document.querySelectorAll('.listedMusicBox').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        pickerHover.play();
    })
})
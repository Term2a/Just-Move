let menuSelectAudio = new Audio('../assets/SFX/menu.select.wav');
let gameStartAudio = new Audio('../assets/SFX/game.start.wav');
let pickerHover = new Audio('../assets/SFX/picker.hover.wav');

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
let bg = document.getElementById('mainBg');
let initPos = 0;

setInterval(() => {
    initPos += .2;
    bg.style.backgroundPosition = `${initPos}%` + `${-initPos}%` ;
    
}, 100);
let cursor = document.getElementById('cursor');

document.body.addEventListener('mousemove', (evt) => {
    cursor.style.top = `${evt.clientY}px`;
    cursor.style.left = `${evt.clientX}px`;
})
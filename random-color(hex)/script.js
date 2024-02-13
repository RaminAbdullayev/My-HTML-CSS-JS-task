function randomColor() {
    const colorHEX = '#' + Math.floor(Math.random()*10000000).toString(16);
    document.body.style.background = colorHEX;
    document.querySelector("p").textContent= colorHEX
}
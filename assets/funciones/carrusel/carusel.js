const track = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const contenedorIndicadores = document.querySelector('.carrusel-indicadores');

let indice = 0;
let timer;

// Crear indicadores dinámicamente
imagenes.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('indicador');
    if (i === 0) dot.classList.add('activo');
    dot.addEventListener('click', () => moverA(i));
    contenedorIndicadores.appendChild(dot);
});

const dots = document.querySelectorAll('.indicador');

function actualizar() {
    track.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('activo', i === indice));
}

function moverA(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    actualizar();
    reiniciarTimer();
}

function iniciarAutoPlay() {
    timer = setInterval(() => moverA(indice + 1), 4000);
}

function reiniciarTimer() {
    clearInterval(timer);
    iniciarAutoPlay();
}

btnNext.addEventListener('click', () => moverA(indice + 1));
btnPrev.addEventListener('click', () => moverA(indice - 1));

iniciarAutoPlay();
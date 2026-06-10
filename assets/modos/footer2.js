// footer corregido a mi gusto lo di vuelta verticalmente 
const footer = document.querySelector('.footer-atr');
const btnToggle = document.querySelector('#footerToggle');

btnToggle.addEventListener('click', () => {
  footer.classList.toggle('abierto');
});
// Bonus: cerrarlo con ESC por si la ART te persigue
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') footer.classList.remove('abierto');
});
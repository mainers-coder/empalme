let deseos = ["Que me regalen la figura de Nezuko! 🌸", "Ir a la Comic Con de cosplay!", "Que mi anime fav tenga temporada 3!"];
function render() { document.getElementById('muro').innerHTML = deseos.map(d => `<span class="badge-kawaii p-2">${d}</span>`).join('') }
function addDeseo() { let v = document.getElementById('deseo').value; if (!v) return; deseos.unshift(v); document.getElementById('deseo').value = ''; render(); confetti(); }
function confetti() { var end = Date.now() + 1500; (function frame() { confettiLib({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff4da6', '#ffe066', '#7a2d8a'] }); confettiLib({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff4da6', '#ffe066', '#7a2d8a'] }); if (Date.now() < end) requestAnimationFrame(frame); }()); }
const confettiLib = confetti;
render();
document.getElementById('btnWA').onclick = function () { let txt = `Omedetou Tiara-chan! 🎂✨ Feliz 12 años! Que tengas un cumple super kawaii lleno de anime y cosas lindas! Te quiere mucho tu tío ATR! 🌸💖`; window.open("https://wa.me/?text=" + encodeURIComponent(txt), "_blank") };

// auto confetti al entrar
setTimeout(confetti, 800);
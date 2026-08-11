 // Nuestro Equipo
const miembros = document.querySelectorAll('.miembro');

miembros.forEach((miembro) => {
    miembro.addEventListener('mouseover', () => {
        miembro.style.transform = 'scale(1.1)';
        miembro.style.transition = 'transform 0.3s';
    });

    miembro.addEventListener('mouseout', () => {
        miembro.style.transform = 'scale(1)';
        miembro.style.transition = 'transform 0.3s';
    });
});
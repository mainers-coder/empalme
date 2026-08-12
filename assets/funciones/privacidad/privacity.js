// submit privacidad

document.querySelector('form').addEventListener('submit', function(e) {
    const checkbox = document.getElementById('acepto-privacidad');
    
    if (!checkbox.checked) {
        e.preventDefault(); // Frena el envío
        alert("Por favor, aceptá la política de privacidad para continuar con tu consulta.");
    }
});

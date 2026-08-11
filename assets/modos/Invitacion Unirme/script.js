 // Invitacion Unirme
 const ctaButton = document.querySelector('.cta-button');

 ctaButton.addEventListener('mouseover', () => {
     ctaButton.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
 });
 
 ctaButton.addEventListener('mouseout', () => {
     ctaButton.style.boxShadow = 'none';
 });
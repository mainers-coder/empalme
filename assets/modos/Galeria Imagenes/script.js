 // Galeria Imagenes
 const galeriaItems = document.querySelectorAll('.galeria-item');

 galeriaItems.forEach((item) => {
     item.addEventListener('mouseover', () => {
         item.style.transform = 'scale(1.1)';
         item.style.transition = 'transform 0.3s';
     });

     item.addEventListener('mouseout', () => {
         item.style.transform = 'scale(1)';
         item.style.transition = 'transform 0.3s';
     });
 });
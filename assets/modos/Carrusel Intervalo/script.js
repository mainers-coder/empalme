  // Carrusel Intervalo
  const carrusel = document.querySelector('.carrusel');
  const imagenes = document.querySelectorAll('.carrusel-imagenes img');
  const indicadores = document.querySelectorAll('.indicador');
  
  let indice = 0;
  let intervalo;
  
  function cambiarImagen() {
      imagenes.forEach((imagen, i) => {
          if (i === indice) {
              imagen.classList.add('activo');
              imagen.classList.remove('no-activo');
          } else {
              imagen.classList.remove('activo');
              imagen.classList.add('no-activo');
          }
      });
      indicadores.forEach((indicador, i) => {
          if (i === indice) {
              indicador.classList.add('activo');
          } else {
              indicador.classList.remove('activo');
          }
      });
  }
  
  function iniciarCarrusel() {
      intervalo = setInterval(() => {
          indice = (indice + 1) % imagenes.length;
          cambiarImagen();
      }, 3000);
  }
  
  function detenerCarrusel() {
      clearInterval(intervalo);
  }
  
  carrusel.addEventListener('mouseover', detenerCarrusel);
  carrusel.addEventListener('mouseout', iniciarCarrusel);
  
  indicadores.forEach((indicador, i) => {
      indicador.addEventListener('click', () => {
          indice = i;
          cambiarImagen();
          detenerCarrusel();
          iniciarCarrusel();
      });
  });
  
  iniciarCarrusel();
  
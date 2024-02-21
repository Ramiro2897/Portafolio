// libreria de scroll
AOS.init();

document.addEventListener('DOMContentLoaded', function() {
  let menuToggle = document.getElementById('menu-toggle');
  let navMenu = document.querySelector('header nav ul');
  let languageSelector = document.querySelector('.language-selector');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    languageSelector.classList.toggle('show');
  });

  // Controlar el cierre del menú en pantallas grandes
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) { 
      navMenu.classList.remove('show'); 
      languageSelector.classList.remove('show'); 
    }
  });

  // Controlar el scroll hacia arriba y hacia abajo
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      navMenu.classList.remove('show');
      languageSelector.classList.remove('show');
    } else {
      navMenu.classList.remove('show');
      languageSelector.classList.remove('show');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  });
});

// pasar text animado
document.addEventListener('DOMContentLoaded', (event) => {
  const infoDiv = document.querySelector('.info');
  const textos = ["UI/UX & full stack", "Desarrollador web", "Especialista en JavaScript", "Diseñador de experiencias"];
  let indiceTextoActual = 0;
  let indiceCaracter = 0;
  let intervaloEscritura;

  function escribirTexto() {
      if (intervaloEscritura) clearInterval(intervaloEscritura);
      function añadirCaracter() {
          const textoActual = textos[indiceTextoActual];
          infoDiv.textContent = textoActual.slice(0, indiceCaracter + 1);
          indiceCaracter++;
          if (indiceCaracter > textoActual.length) {
              indiceCaracter = 0;
              indiceTextoActual = (indiceTextoActual + 1) % textos.length; 
              clearInterval(intervaloEscritura); 
              setTimeout(escribirTexto, 5000); 
          }
      }
      intervaloEscritura = setInterval(añadirCaracter, 150); 
  }

  escribirTexto();
});






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
  const textos = ["UI/UX & full stack", "Desarrollador web", "Desarrollador JavaScript", "Diseñador web"];
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

// menu fijo al hacer scroll
const header = document.querySelector(".menu-header");

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const scrollThreshold = 0.8 * window.innerHeight; 
  
  if (window.innerWidth > 768) {
    if (scrollPosition >= scrollThreshold) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.marginTop = "0";
      header.style.backgroundColor = "#343c3c";
    } else {
      header.style.position = "relative";
      header.style.top = "auto"; 
      header.style.marginTop = "25px"; 
      header.style.backgroundColor = "rgba(82, 86, 92, 0.8)"; 
    }
  } else {
    header.style.position = "relative";
    header.style.top = "auto";
    header.style.marginTop = "25px";
    header.style.backgroundColor = "rgba(82, 86, 92, 0.8)";
  }
});

// boton para ir arriba
document.addEventListener("DOMContentLoaded", function () {
  let iconoTop = document.querySelector(".top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      iconoTop.style.display = "flex";
    } else {
      iconoTop.style.display = "none";
    }
  });
  iconoTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// enlaces
window.addEventListener('DOMContentLoaded', function() {
  const homeSection = document.querySelector('#home');
  const homeLink = document.querySelector('ul li:first-child a');
  const aboutSection = document.querySelector('#about');
  const aboutLink = document.querySelector('ul li:nth-child(2) a');

  const homeTop = homeSection.getBoundingClientRect().top;
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (homeTop <= window.innerHeight / 2 && homeTop >= -window.innerHeight / 2) {
    homeLink.classList.add('active');
  } else {
    homeLink.classList.remove('active');
  }

  if (aboutTop <= window.innerHeight / 2 && aboutTop >= -window.innerHeight / 2) {
    aboutLink.classList.add('active');
  } else {
    aboutLink.classList.remove('active');
  }
});

window.addEventListener('scroll', function() {
  const homeSection = document.querySelector('#home');
  const homeLink = document.querySelector('ul li:first-child a');
  const aboutSection = document.querySelector('#about');
  const aboutLink = document.querySelector('ul li:nth-child(2) a');

  const homeTop = homeSection.getBoundingClientRect().top;
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (homeTop <= window.innerHeight / 2 && homeTop >= -window.innerHeight / 2) {
    homeLink.classList.add('active');
  } else {
    homeLink.classList.remove('active');
  }

  if (aboutTop <= window.innerHeight / 2 && aboutTop >= -window.innerHeight / 2) {
    aboutLink.classList.add('active');
  } else {
    aboutLink.classList.remove('active');
  }
});






















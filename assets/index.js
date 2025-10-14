// libreria de scroll
AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  let menuToggle = document.getElementById('menu-toggle');
  let navMenu = document.querySelector('header nav ul');
  let languageSelector = document.querySelector('.language-selector');

  menuToggle.addEventListener('click', function () {
    if (navMenu.style.display === 'none') {
      navMenu.style.display = '';
    }

    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      navMenu.classList.add('hide');
      setTimeout(() => navMenu.classList.remove('hide'), 400); 
    } else { 
      navMenu.classList.remove('hide'); 
      void navMenu.offsetWidth; 
      navMenu.classList.add('show');
    }

    if (languageSelector.classList.contains('show')) {
      languageSelector.classList.remove('show');
      languageSelector.classList.add('hide');
      setTimeout(() => languageSelector.classList.remove('hide'), 400);
    } else {
      languageSelector.classList.add('show');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.style.display = 'flex';
      navMenu.classList.remove('show');
      languageSelector.classList.remove('show');
    }
  });

  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      navMenu.classList.remove('show');
      navMenu.classList.add('hide');
      languageSelector.classList.remove('show');
      setTimeout(() => navMenu.classList.remove('hide'), 400);
    } else {
      navMenu.classList.remove('show');
      navMenu.classList.add('hide');
      languageSelector.classList.remove('show');
      setTimeout(() => navMenu.classList.remove('hide'), 400);
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
});

// pasar text animado
document.addEventListener('DOMContentLoaded', (event) => {
  const infoDiv = document.querySelector('.info');
  const textos = ["Web Full Stack Developer", "JavaScript Developer", "Web Designer"];
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

// Controlar el cierre del menú al hacer scroll en pantallas grandes
window.addEventListener('resize', function() {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 0.8 * window.innerHeight;
    let navMenu = document.querySelector('header nav ul');
  
    if (window.innerWidth < 768) {
      header.style.position = "relative";
      header.style.top = "auto";
      header.style.marginTop = "25px";
      header.style.backgroundColor = "rgba(82, 86, 92, 0.8)";
     
      navMenu.style.display = 'none';
      navMenu.classList.remove('show', 'hide');
      
    }
     else {
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
    }
});

// enlaces
window.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('ul li a');

  function markActiveLink(link, section) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }

  function handleScroll() {
    links.forEach((link, index) => {
      const sectionId = link.getAttribute('href').substring(1); 
      const section = document.getElementById(sectionId); 
      if (section) {
        markActiveLink(link, section);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// progreso de skills
document.addEventListener('DOMContentLoaded', function() {
  let skills = document.querySelectorAll('.skill');

  skills.forEach(function(skill) {
    let percent = skill.getAttribute('data-percent');
    let progressBar = skill.querySelector('.progress-bar');
    progressBar.style.width = percent + '%';
    progressBar.innerText = percent + '%';
  });
});

// google maps
function initMap() {
  // Ubicación de Sincelejo, Sucre, Colombia
  let sincelejoLatLng = {lat: 9.3047, lng: -75.3977};

  let map = new google.maps.Map(document.getElementById('google-maps'), {
      zoom: 12,  
      center: sincelejoLatLng
  });

  let marker = new google.maps.Marker({
      position: sincelejoLatLng,
      map: map,
      title: 'Sincelejo, Sucre, Colombia' 
  });
}

// biblioteca para hacer scroll
ScrollReveal().reveal('.project-item', {
    scale: 1,
    origin: 'bottom',
    distance: '20px',
    duration: 1200,
    easing: 'ease-in-out',
    delay: 0,
    interval: 0,
});

// descargar cv
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('click', function() {
    const cvUrl = 'https://portafolio-l3cz.onrender.com/html/CV_RamiroGonzalez.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'RamiroGonzalez_CV.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// filtrar proyectos
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.filterable-button button');
  const projects = document.querySelectorAll('.project-item');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => {
        btn.classList.remove('selected');
      });

      this.classList.add('selected');

      const filterValue = this.getAttribute('data-filter');

      projects.forEach(project => {
        project.style.display = 'none';
      });

      let filteredProjects;

      if (filterValue === '*') {
        filteredProjects = projects;
      } else {
        filteredProjects = document.querySelectorAll(filterValue);
      }

      filteredProjects.forEach((project, index) => {
        project.style.display = 'block';
        project.classList.add('filtered-project-animation');
        setTimeout(() => {
          project.classList.remove('filtered-project-animation');
        }, 1000);
      });
    });
  });
  
  buttons[0].classList.add('selected');
});


// año actual
let yearElement = document.getElementById("currentYear");
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// envio del formulario al correo y validacion de campos
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init('GNY9jkBYkKX3t2Z8N');

  const form = document.getElementById('form');
  const nameInput = document.getElementById('emailjs_name');
  const emailInput = document.getElementById('emailjs_email');
  const subjectInput = document.getElementById('emailjs_subject');
  const messageInput = document.getElementById('emailjs_message');
  const error = form.querySelector('.error');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
          error.style.display = "flex";
          setTimeout(function() {
            error.style.display = "none";
          }, 5000);

          return;
      }

      const serviceID = 'default_service';
      const templateID = 'template_u6wck7l';

      const modalEmailSend = document.getElementById('email-sent');
      const modalEmailerror = document.getElementById('error-email');
      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            modalEmailSend.style.display = 'flex';
            setTimeout(function() {
              modalEmailSend.style.display = 'none';
              form.reset();
            }, 5000);
              
          }, (err) => {
              modalEmailerror.style.display = 'flex';
              setTimeout(function() {
                modalEmailerror.style.display = 'none';
              }, 5000);
          });
  });

  const inputs = [nameInput, subjectInput];
  inputs.forEach(input => {
      input.addEventListener('input', function() {
          this.value = this.value.replace(/[^\w\s]/gi, '').substring(0, 50);
      });
  });

  emailInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^\w\s@.]/gi, '').substring(0, 150);
  });

  messageInput.addEventListener('input', function() {
      const maxLength = 550;
      this.value = this.value.substring(0, maxLength);
  });
});



















function toggleLanguage() {
  var spanishOption = document.getElementById("spanishOption");
  var englishOption = document.getElementById("englishOption");

  var homeLink = document.getElementById("homeLink");
  var aboutLink = document.getElementById("aboutLink");
  var portfolioLink = document.getElementById("portfolioLink");
  var contactLink = document.getElementById("contactLink");
  var welcome = document.getElementById('welcome');
  var nameText = document.getElementById('name-text');
  var listItems = document.querySelectorAll('.list-dev li');
  var descriptionDev = document.getElementById('information-dev');
  var downloadBtn = document.getElementById('downloadBtn');
  var skillTitle = document.querySelector('.skill-title p');
  var database = document.getElementById('database');
  var webDesign = document.getElementById('webDesign');
  var educationTitle = document.querySelector('.title-dev');
  var infoUniversity = document.getElementById('info-university');
  var textUniversity = document.getElementById('text-university');
  var infoExperience = document.getElementById('info-experience');
  var textExperience = document.getElementById('text-experience');
  var experienceTitle = document.getElementById('title-experience');
  var serviceText = document.querySelector('.text-service p');
  var infoText = document.querySelector(".text-info");
  var captionText = document.getElementById("caption-text");
  var descriptionService = document.getElementById('description-service');
  var titleServiceOne = document.getElementById('title-service-one');
  var serviceTextInfo = document.getElementById('service-text-info');
  var serviceTextInfoTwo = document.getElementById('service-text-info-two');
  var serviceTextInfoThree = document.getElementById('service-text-info-three');

  var portfolioText = document.querySelector('.text-portfolio p');
  var jobText = document.getElementById('text-job');
  var btnAll = document.getElementById('btn-all');
  var projectsBtn = document.getElementById('projects');
  var imgProjectOne = document.getElementById('img-project-one');
  var imgProjectTwo = document.getElementById('img-project-two');
  var imgProjectThree = document.getElementById('img-project-three');
  var imgProjectFour = document.getElementById('img-project-four');
  var imgProjectFive = document.getElementById('img-project-five');
  var imgProjectSix = document.getElementById('img-project-six');
  var textContacto = document.querySelector('.text-contacto p');
  var infoContactText = document.querySelector('.info-contact-text');
  var nameInput = document.getElementById('emailjs_name');
  var emailInput = document.getElementById('emailjs_email');
  var subjectInput = document.getElementById('emailjs_subject');
  var messageTextarea = document.getElementById('emailjs_message');
  var errorElement = document.querySelector('.error');
  var submitButton = document.getElementById('button');
  var emailSentText = document.getElementById('add-product');
  var errorDeliveriesText = document.getElementById('error-deliveries');
  var textFooterTwo = document.querySelector('.text-footer-two');
  var textRedes = document.getElementById('text-redes');
  var contactameText = document.getElementById('text-contactame');
  var copyrightText = document.querySelector('.text-copyright');



  if (spanishOption.style.display === "none") {
    spanishOption.style.display = "flex";
    englishOption.style.display = "none";

    // español pantallas grandes
    homeLink.textContent = "Inicio";
    aboutLink.textContent = "Acerca de";
    portfolioLink.textContent = "Portafolio";
    contactLink.textContent = "Contacto";
    welcome.textContent = "Bienvenido";
    nameText.innerHTML = "Soy <span>Ramiro</span> González";
    listItems[0].innerHTML = "<b>De:</b> Sincelejo, Col";
    listItems[1].innerHTML = "<b>Vive en:</b> Sincelejo, Col";
    listItems[2].innerHTML = "<b>Edad:</b> 28";
    listItems[3].innerHTML = "<b>Género:</b> Masculino";
    downloadBtn.textContent = "Descargar CV";
    descriptionDev.textContent = "Soy un apasionado desarrollador web full stack con experiencia en HTML, CSS, JavaScript, Node.js, git y Express. Habilidades en bases de datos SQL y desarrollo tanto front-end como back-end."
    skillTitle.textContent = "Mis habilidades";
    database.textContent = "Bases de datos Sql";
    webDesign.textContent = "Diseño Web";
    educationTitle.textContent = 'Educación';
    infoUniversity.textContent = "Análisis y desarrollo de sistemas de información";
    textUniversity.textContent = "Graduado como tecnólogo en análisis y desarrollo de sistemas de información en el Sena. Destacado por liderar proyectos de optimización de procesos.";
    experienceTitle.textContent = 'Experiencia';
    infoExperience.textContent = "Desarrollador web full stack";
    textExperience.textContent = "Mantenimiento y mejora de sistemas de facturación electrónica. Resolución de incidencias y desarrollo de nuevas funcionalidades. Tecnologías: Java con Spring Boot, SQL Server, JavaScript, HTML y CSS.";
    serviceText.textContent = "Servicio";
    infoText.textContent = "¿Qué puedo hacer?";
    captionText.textContent = "Diseño web";
    descriptionService.textContent = "Diseño y desarrollo web responsive de interfaces.";
    titleServiceOne.textContent = "Desarrollo Web";
    serviceTextInfo.textContent = "Aplicaciones completas, front-end y back-end con HTML, CSS, JS, Node.js, git y Express.";
    serviceTextInfoTwo.textContent = "Enfoque en la experiencia del usuario y diseño intuitivo."
    serviceTextInfoThree.textContent = "Creación eficiente de API con Node.js para aplicaciones dinámicas y escalables.";

    portfolioText.textContent = "Portafolio";
    jobText.textContent = "Ver mi trabajo";
    btnAll.textContent = "Todo";
    projectsBtn.textContent = "proyectos";
    imgProjectOne.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación móvil de viajes</h5> <p>Viajes, Descubrimiento</p> <p>Este proyecto es...</p>");
    imgProjectTwo.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación de música</h5> <p>Música</p> <p>Este proyecto es...</p>");
    imgProjectThree.setAttribute('data-caption', "<h5 class='fg-theme'>Tablero de Juegos</h5> <p>Juegos, Streaming</p> <p>Este proyecto es...</p>");
    imgProjectFour.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación de Entrega de Medicamentos</h5> <p>Salud, Medicamentos</p> <p>Este proyecto es...</p>");
    imgProjectFive.setAttribute('data-caption', "<h5 class='fg-theme'>Descubrimiento Musical</h5> <p>Música, Panel</p> <p>Este proyecto es...</p>");
    imgProjectSix.setAttribute('data-caption', "<h5 class='fg-theme'>Transmisión de Juegos</h5> <p>Juegos, Transmisión</p> <p>Este proyecto es...</p>");
    textContacto.textContent = "Contacto";
    infoContactText.textContent = "Ponerse en contacto";
    nameInput.placeholder = "Nombre";
    emailInput.placeholder = "Correo";
    subjectInput.placeholder = "Asunto";
    messageTextarea.placeholder = "Escribe tu mensaje...";
    errorElement.textContent = "Por favor, complete todos los campos.";
    submitButton.textContent = "Enviar mensaje";
    emailSentText.textContent = "Correo enviado";
    errorDeliveriesText.textContent = "Error en la solicitud";
    textFooterTwo.textContent = "Donde encontrarme";
    textRedes.textContent = "Redes sociales";
    contactameText.textContent = "Contáctame";
    copyrightText.innerHTML = "Derechos de autor &copy;<span id='currentYear'></span> Todos los derechos reservados | por <span class='ti-heart fg-theme-red'></span><a href='#'>Ramiro</a>";

  } else {
    spanishOption.style.display = "none";
    englishOption.style.display = "flex";

      // ingles pantallas grandes
    homeLink.textContent = "Home";
    aboutLink.textContent = "About";
    portfolioLink.textContent = "Portfolio";
    contactLink.textContent = "Contact";
    welcome.textContent = "Welcome";
    nameText.innerHTML = "I'm <span>Ramiro</span> González";
    listItems[0].innerHTML = "<b>From:</b> Sincelejo, Col";
    listItems[1].innerHTML = "<b>Lives in:</b> Sincelejo, Col";
    listItems[2].innerHTML = "<b>Age:</b> 28";
    listItems[3].innerHTML = "<b>Gender:</b> Male";
    descriptionDev.textContent = "I am a passionate full-stack web developer with experience in HTML, CSS, JavaScript, Node.js, git, and Express. Skills in SQL databases and development in both front-end and back-end."
    downloadBtn.textContent = "Download CV";
    skillTitle.textContent = "My skills";
    database.textContent = "SQL Databases";
    webDesign.textContent = "Web design";
    educationTitle.textContent = "Education";
    infoUniversity.textContent = "Analysis and Development of Information Systems";
    textUniversity.textContent = "Graduated as a technologist in analysis and development of information systems at Sena. Recognized for leading process optimization projects.";
    experienceTitle.textContent = "Experience";
    infoExperience.textContent = "Full stack web developer";
    textExperience.textContent = "Maintenance and enhancement of electronic billing systems. Incident resolution and development of new functionalities. Technologies: Java with Spring Boot, SQL Server, JavaScript, HTML, and CSS.";
    serviceText.textContent = "Service";
    infoText.textContent = "What can I do?";
    captionText.textContent = "Web design";
    descriptionService.textContent = "Responsive web design and development of interfaces.";
    titleServiceOne.textContent = "Web development";
    serviceTextInfo.textContent = "Full applications, front-end and back-end with HTML, CSS, JS, Node.js, git, and Express";
    serviceTextInfoTwo.textContent = "Focus on user experience and intuitive design.";
    serviceTextInfoThree.textContent = "Efficient creation of APIs with Node.js for dynamic and scalable applications.";

    portfolioText.textContent = "Portfolio";
    jobText.textContent = "See my work";
    btnAll.textContent = "All";
    projectsBtn.textContent = "Projects";
    imgProjectOne.setAttribute('data-caption', "<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p> <p>This project is...</p>");
    imgProjectTwo.setAttribute('data-caption', "<h5 class='fg-theme'>Music App</h5> <p>Musics</p> <p>This project is...</p>");
    imgProjectThree.setAttribute('data-caption', "<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p> <p>This project is...</p>");
    imgProjectFour.setAttribute('data-caption', "<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p> <p>This project is...</p>");
    imgProjectFive.setAttribute('data-caption', "<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p> <p>This project is...</p>");
    imgProjectSix.setAttribute('data-caption', "<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p> <p>This project is...</p>");
    textContacto.textContent = "Contact";
    infoContactText.textContent = "Contact Information";
    nameInput.placeholder = "Name";
    emailInput.placeholder = "Email";
    subjectInput.placeholder = "Subject";
    messageTextarea.placeholder = "Write your message...";
    errorElement.textContent = "Please fill out all fields.";
    submitButton.textContent = "Send message";
    emailSentText.textContent = "Email sent";
    errorDeliveriesText.textContent = "Request error";
    textFooterTwo.textContent = "Where to find me";
    textRedes.textContent = "Social media";
    contactameText.textContent = "Contact me";
    copyrightText.innerHTML = "Copyright &copy;<span id='currentYear'></span> All rights reserved | by <span class='ti-heart fg-theme-red'></span><a href='#'>Ramiro</a>";
  }
}


// idioma seleccionado version movile...
var currentLanguage = 'ES';
function toggleLanguageMobile() {
  var spanishOptionMobile = document.getElementById("spanishOptionMobile");
  var englishOptionMobile = document.getElementById("englishOptionMobile");

  // variables globales para cambio de idioma
  var homeLink = document.getElementById("homeLink");
  var aboutLink = document.getElementById("aboutLink");
  var portfolioLink = document.getElementById("portfolioLink");
  var contactLink = document.getElementById("contactLink");
  var welcome = document.getElementById('welcome');
  var nameText = document.getElementById('name-text');
  var listItems = document.querySelectorAll('.list-dev li');
  var descriptionDev = document.getElementById('information-dev');
  var downloadBtn = document.getElementById('downloadBtn');
  var skillTitle = document.querySelector('.skill-title p');
  var database = document.getElementById('database');
  var webDesign = document.getElementById('webDesign');
  var educationTitle = document.querySelector('.title-dev');
  var infoUniversity = document.getElementById('info-university');
  var textUniversity = document.getElementById('text-university');
  var infoExperience = document.getElementById('info-experience');
  var textExperience = document.getElementById('text-experience');
  var experienceTitle = document.getElementById('title-experience');
  var serviceText = document.querySelector('.text-service p');
  var infoText = document.querySelector(".text-info");
  var captionText = document.getElementById("caption-text");
  var descriptionService = document.getElementById('description-service');
  var titleServiceOne = document.getElementById('title-service-one');
  var serviceTextInfo = document.getElementById('service-text-info');
  var serviceTextInfoTwo = document.getElementById('service-text-info-two');
  var serviceTextInfoThree = document.getElementById('service-text-info-three');
  var portfolioText = document.querySelector('.text-portfolio p');
  var jobText = document.getElementById('text-job');
  var btnAll = document.getElementById('btn-all');
  var projectsBtn = document.getElementById('projects');
  var imgProjectOne = document.getElementById('img-project-one');
  var imgProjectTwo = document.getElementById('img-project-two');
  var imgProjectThree = document.getElementById('img-project-three');
  var imgProjectFour = document.getElementById('img-project-four');
  var imgProjectFive = document.getElementById('img-project-five');
  var imgProjectSix = document.getElementById('img-project-six');
  var textContacto = document.querySelector('.text-contacto p');
  var infoContactText = document.querySelector('.info-contact-text');
  var nameInput = document.getElementById('emailjs_name');
  var emailInput = document.getElementById('emailjs_email');
  var subjectInput = document.getElementById('emailjs_subject');
  var messageTextarea = document.getElementById('emailjs_message');
  var errorElement = document.querySelector('.error');
  var submitButton = document.getElementById('button');
  var emailSentText = document.getElementById('add-product');
  var errorDeliveriesText = document.getElementById('error-deliveries');
  var textFooterTwo = document.querySelector('.text-footer-two');
  var textRedes = document.getElementById('text-redes');
  var contactameText = document.getElementById('text-contactame');
  var copyrightText = document.querySelector('.text-copyright');

  if (currentLanguage === 'ES') {
    // botones lenguaje
    spanishOptionMobile.style.display = "none";
    englishOptionMobile.style.display = "block";

    homeLink.textContent = "Home";
    aboutLink.textContent = "About";
    portfolioLink.textContent = "Portfolio";
    contactLink.textContent = "Contact";
    welcome.textContent = "Welcome";
    nameText.innerHTML = "I'm <span>Ramiro</span> González";
    listItems[0].innerHTML = "<b>From:</b> Sincelejo, Col";
    listItems[1].innerHTML = "<b>Lives in:</b> Sincelejo, Col";
    listItems[2].innerHTML = "<b>Age:</b> 28";
    listItems[3].innerHTML = "<b>Gender:</b> Male";
    descriptionDev.textContent = "I am a passionate full-stack web developer with experience in HTML, CSS, JavaScript, Node.js, git, and Express. Skills in SQL databases and development in both front-end and back-end."
    downloadBtn.textContent = "Download CV";
    skillTitle.textContent = "My skills";
    database.textContent = "SQL Databases";
    webDesign.textContent = "Web design";
    educationTitle.textContent = "Education";
    infoUniversity.textContent = "Analysis and Development of Information Systems";
    textUniversity.textContent = "Graduated as a technologist in analysis and development of information systems at Sena. Recognized for leading process optimization projects.";
    experienceTitle.textContent = "Experience";
    infoExperience.textContent = "Full stack web developer";
    textExperience.textContent = "Maintenance and enhancement of electronic billing systems. Incident resolution and development of new functionalities. Technologies: Java with Spring Boot, SQL Server, JavaScript, HTML, and CSS.";
    serviceText.textContent = "Service";
    serviceText.textContent = "Service";
    infoText.textContent = "What can I do?";
    captionText.textContent = "Web design";
    descriptionService.textContent = "Responsive web design and development of interfaces.";
    titleServiceOne.textContent = "Web development";
    serviceTextInfo.textContent = "Full applications, front-end and back-end with HTML, CSS, JS, Node.js, git, and Express";
    serviceTextInfoTwo.textContent = "Focus on user experience and intuitive design.";
    serviceTextInfoThree.textContent = "Efficient creation of APIs with Node.js for dynamic and scalable applications.";

    portfolioText.textContent = "Portfolio";
    jobText.textContent = "See my work";
    btnAll.textContent = "All";
    projectsBtn.textContent = "Projects";
    imgProjectOne.setAttribute('data-caption', "<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p> <p>This project is...</p>");
    imgProjectTwo.setAttribute('data-caption', "<h5 class='fg-theme'>Music App</h5> <p>Musics</p> <p>This project is...</p>");
    imgProjectThree.setAttribute('data-caption', "<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p> <p>This project is...</p>");
    imgProjectFour.setAttribute('data-caption', "<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p> <p>This project is...</p>");
    imgProjectFive.setAttribute('data-caption', "<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p> <p>This project is...</p>");
    imgProjectSix.setAttribute('data-caption', "<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p> <p>This project is...</p>");
    textContacto.textContent = "Contact";
    infoContactText.textContent = "Contact Information";
    nameInput.placeholder = "Name";
    emailInput.placeholder = "Email";
    subjectInput.placeholder = "Subject";
    messageTextarea.placeholder = "Write your message...";
    submitButton.textContent = "Send message";
    errorElement.textContent = "Please fill out all fields.";
    emailSentText.textContent = "Email sent";
    errorDeliveriesText.textContent = "Request error";
    textFooterTwo.textContent = "Where to find me";
    textRedes.textContent = "Social media";
    contactameText.textContent = "Contact me";
    copyrightText.innerHTML = "Copyright &copy;<span id='currentYear'></span> All rights reserved | by <span class='ti-heart fg-theme-red'></span><a href='#'>Ramiro</a>";

    // estado del boton lenguaje
    currentLanguage = 'EN';
  } else {
    // botones lenguaje
    spanishOptionMobile.style.display = "block";
    englishOptionMobile.style.display = "none";

    homeLink.textContent = "Inicio";
    aboutLink.textContent = "Acerca de";
    portfolioLink.textContent = "Portafolio";
    contactLink.textContent = "Contacto";
    welcome.textContent = "Bienvenido";
    nameText.innerHTML = "Soy <span>Ramiro</span> González";
    listItems[0].innerHTML = "<b>De:</b> Sincelejo, Col";
    listItems[1].innerHTML = "<b>Vive en:</b> Sincelejo, Col";
    listItems[2].innerHTML = "<b>Edad:</b> 28";
    listItems[3].innerHTML = "<b>Género:</b> Masculino";
    descriptionDev.textContent = "Soy un apasionado desarrollador web full stack con experiencia en HTML, CSS, JavaScript, Node.js, git y Express. Habilidades en bases de datos SQL y desarrollo tanto front-end como back-end."
    downloadBtn.textContent = "Descargar CV";
    skillTitle.textContent = "Mis habilidades";
    database.textContent = "Bases de datos Sql";
    webDesign.textContent = "Diseño Web";
    educationTitle.textContent = 'Educación';
    infoUniversity.textContent = "Análisis y desarrollo de sistemas de información";
    textUniversity.textContent = "Graduado como tecnólogo en análisis y desarrollo de sistemas de información en el Sena. Destacado por liderar proyectos de optimización de procesos.";
    infoExperience.textContent = "Desarrollador web full stack";
    textExperience.textContent = "Mantenimiento y mejora de sistemas de facturación electrónica. Resolución de incidencias y desarrollo de nuevas funcionalidades. Tecnologías: Java con Spring Boot, SQL Server, JavaScript, HTML y CSS.";
    experienceTitle.textContent = 'Experiencia';
    serviceText.textContent = "Servicio";
    infoText.textContent = "¿Qué puedo hacer?";
    captionText.textContent = "Diseño web";
    descriptionService.textContent = "Diseño y desarrollo web responsive de interfaces.";
    titleServiceOne.textContent = "Desarrollo Web";
    serviceTextInfo.textContent = "Aplicaciones completas, front-end y back-end con HTML, CSS, JS, Node.js, git y Express.";
    serviceTextInfoTwo.textContent = "Enfoque en la experiencia del usuario y diseño intuitivo."
    serviceTextInfoThree.textContent = "Creación eficiente de API con Node.js para aplicaciones dinámicas y escalables.";

    portfolioText.textContent = "Portafolio";
    jobText.textContent = "Ver mi trabajo";
    btnAll.textContent = "Todo";
    projectsBtn.textContent = "proyectos";
    imgProjectOne.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación móvil de viajes</h5> <p>Viajes, Descubrimiento</p> <p>Este proyecto es...</p>");
    imgProjectTwo.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación de música</h5> <p>Música</p> <p>Este proyecto es...</p>");
    imgProjectThree.setAttribute('data-caption', "<h5 class='fg-theme'>Tablero de Juegos</h5> <p>Juegos, Streaming</p> <p>Este proyecto es...</p>");
    imgProjectFour.setAttribute('data-caption', "<h5 class='fg-theme'>Aplicación de Entrega de Medicamentos</h5> <p>Salud, Medicamentos</p> <p>Este proyecto es...</p>");
    imgProjectFive.setAttribute('data-caption', "<h5 class='fg-theme'>Descubrimiento Musical</h5> <p>Música, Panel</p> <p>Este proyecto es...</p>");
    imgProjectSix.setAttribute('data-caption', "<h5 class='fg-theme'>Transmisión de Juegos</h5> <p>Juegos, Transmisión</p> <p>Este proyecto es...</p>");
    textContacto.textContent = "Contacto";
    infoContactText.textContent = "Ponerse en contacto";
    nameInput.placeholder = "Nombre";
    emailInput.placeholder = "Correo";
    subjectInput.placeholder = "Asunto";
    messageTextarea.placeholder = "Escribe tu mensaje...";
    submitButton.textContent = "Enviar mensaje";
    errorElement.textContent = "Por favor, complete todos los campos.";
    emailSentText.textContent = "Correo enviado";
    errorDeliveriesText.textContent = "Error en la solicitud";
    textFooterTwo.textContent = "Donde encontrarme";
    textRedes.textContent = "Redes sociales";
    contactameText.textContent = "Contáctame";
    copyrightText.innerHTML = "Derechos de autor &copy;<span id='currentYear'></span> Todos los derechos reservados | por <span class='ti-heart fg-theme-red'></span><a href='#'>Ramiro</a>";

    // estado del boton lenguaje
    currentLanguage = 'ES';
  }
}

// eliminar boton de movil en pantallas mas grandes
window.addEventListener('resize', function() {
  var spanishOptionMobile = document.getElementById("spanishOptionMobile");
  var englishOptionMobile = document.getElementById("englishOptionMobile");

  if (window.innerWidth >= 768) {
    spanishOptionMobile.style.display = "none";
    englishOptionMobile.style.display = "none";
  } else {
    if (currentLanguage === 'ES') {
      spanishOptionMobile.style.display = "block";
      englishOptionMobile.style.display = "none";
    } else {
      spanishOptionMobile.style.display = "none";
      englishOptionMobile.style.display = "block";
    }
  }
});




 
 //Menú desplegable
 const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // 1. Abrir/Cerrar menú al pulsar el botón
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      
      // Cambiar icono de Hamburguesa (fa-bars) a X (fa-times)
      if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });

    // 2. Cerrar menú automáticamente al hacer click en un enlace
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
 
 
 // EFECTO DE ESCRITURA (Typewriter)
    const textToType = "Soy un desarrollador web junior apasionado por crear experiencias web modernas y funcionales. Me he graduado en Desarrollo de Aplicaciones Web y en Diseño y Edición de Publicaciones Impresas y Multimedia.\n He trabajado con tecnologías como HTML, CSS, JavaScript, React y Django, entre otras. Actualmente estoy buscando una oportunidad para aplicar mis conocimientos y seguir aprendiendo.";
    const typingElement = document.getElementById('typing-container');
    let i = 0;

    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 30); // Velocidad de escritura
      } else {
        // Opcional: Eliminar cursor al finalizar
        // typingElement.classList.remove('typing-cursor');
      }
    }

    // Iniciar cuando el elemento es visible (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.disconnect(); // Solo ejecutar una vez
        }
      });
    });
    observer.observe(document.getElementById('sobremi'));


    // EFECTO SPOTLIGHT EN LAS CARDS
    // Este script hace que el borde brillante siga al ratón dentro del contenedor
    const cardsContainer = document.getElementById("cards-container");
    const cards = document.querySelectorAll(".card");

    cardsContainer.onmousemove = e => {
      for(const card of cards) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    };
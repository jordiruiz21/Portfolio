 const text = "Soy un desarrollador web junior apasionado por crear experiencias web modernas y funcionales. He trabajado con tecnologías como HTML, CSS, JavaScript, React y Django. Actualmente estoy buscando una oportunidad para aplicar mis conocimientos y seguir aprendiendo.";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 12);
    }
  }
  typeWriter();


  
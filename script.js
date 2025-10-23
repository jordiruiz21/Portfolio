


  const text1 = "Soy un desarrollador web junior apasionado por crear experiencias web modernas y funcionales. Me he graduado en Desarrollo de Aplicaciones Web y en Diseño y Edición de Publicaciones Impresas y Multimedia.";
  const text2 = "He trabajado con tecnologías como HTML, CSS, JavaScript, React y Django, entre otras. Actualmente estoy buscando una oportunidad para aplicar mis conocimientos y seguir aprendiendo.";

  let i = 0;
  function typeWriter1() {
    if (i < text1.length) {
      document.getElementById("typing1").innerHTML += text1.charAt(i);
      i++;
      setTimeout(typeWriter1, 12);
    } else {
      i = 0; // reiniciamos el contador
      setTimeout(typeWriter2, 400); // espera un poco antes del segundo párrafo
    }
  }

  function typeWriter2() {
    if (i < text2.length) {
      document.getElementById("typing2").innerHTML += text2.charAt(i);
      i++;
      setTimeout(typeWriter2, 12);
    }
  }

  typeWriter1();

// Cambio de tema
document.addEventListener('DOMContentLoaded', () => {
    const cambioTema = document.getElementById('cambio-tema');
    const body = document.body;

   
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'claro') {
        body.classList.add('modoclaro');
    }

  
    cambioTema.addEventListener('click', () => {
        body.classList.toggle('modoclaro');
        const temaActual = body.classList.contains('modoclaro') ? 'claro' : 'oscuro';
        localStorage.setItem('tema', temaActual);
    });
});

//Form validación
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    const fields = [
      { id: "nombre", errorId: "error-nombre", message: "Por favor, ingrese su nombre" },
      { id: "email", errorId: "error-email", message: "Por favor, ingrese un email válido" },
      { id: "telefono", errorId: "error-telefono", message: "Por favor, ingrese su teléfono" },
      { id: "asunto", errorId: "error-asunto", message: "Por favor, ingrese un asunto" },
      { id: "mensaje", errorId: "error-mensaje", message: "Por favor, ingrese un mensaje" }
    ];
  
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
  
      if (input.value.trim() === "") {
        error.textContent = field.message;
        error.style.display = "block";
        input.style.borderColor = "red";
        isValid = false;
      } else {
        error.style.display = "none";
        input.style.borderColor = "var(--main-color)";
      }
    });
  
    if (isValid) {
      alert("Formulario enviado exitosamente");
      document.getElementById("contactForm").reset();
    }
  });
  

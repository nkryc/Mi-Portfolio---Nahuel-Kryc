
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre completo.");
            return;
        }
        
        if (email === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            return;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        
        if (telefono === "") {
            alert("Por favor, ingresa tu número de teléfono.");
            return;
        } else if (!/^\d{10}$/.test(telefono)) {
            alert("El número de teléfono debe tener 10 dígitos.");
            return;
        }
        
        if (asunto === "") {
            alert("Por favor, ingresa un asunto.");
            return;
        }
        
        if (mensaje === "") {
            alert("Por favor, ingresa tu mensaje.");
            return;
        }

        
        alert("Formulario enviado correctamente.");
        contactForm.reset();
    });
});

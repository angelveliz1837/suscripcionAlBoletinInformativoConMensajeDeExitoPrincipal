document.getElementById("suscribir").addEventListener("click", () => {
    console.log("Botón de suscripción clickeado");

    const emailInput = document.getElementById("email");
    const mensajeError = document.getElementById("mensaje-error");
    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");

    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Si el campo de correo está vacío, lo restaura a su estado normal
    if (emailInput.value.trim() === "") {
        console.log("El campo de correo está vacío");

        // Ocultar mensaje de error y restaurar el estilo del campo de correo
        mensajeError.classList.add("hidden");
        emailInput.classList.remove("error");
        return; // No hacer nada más si el campo está vacío
    }

    if (!emailRegex.test(emailInput.value)) {
        console.log("Correo electrónico no válido:", emailInput.value);

        // Mostrar mensaje de error y aplicar estilos
        mensajeError.classList.remove("hidden");
        emailInput.classList.add("error");
    } else {
        console.log("Correo electrónico válido:", emailInput.value);

        // Ocultar mensaje de error, mostrar página 2, y ocultar página 1
        mensajeError.classList.add("hidden");
        emailInput.classList.remove("error");

        pagina1.classList.add("hidden");
        pagina2.classList.remove("hidden");

        // Mostrar el correo ingresado en la página 2
        const strongElement = pagina2.querySelector("strong");
        if (strongElement) {
            strongElement.textContent = emailInput.value;
        }
    }
});

// Agregar un evento para detectar cambios en el campo de correo
document.getElementById("email").addEventListener("input", () => {
    const emailInput = document.getElementById("email");
    const mensajeError = document.getElementById("mensaje-error");
    
    // Si el campo de correo está vacío, eliminar los estilos de error
    if (emailInput.value.trim() === "") {
        console.log("El campo de correo está vacío después de borrar");
        
        // Ocultar mensaje de error y restaurar los estilos
        mensajeError.classList.add("hidden");
        emailInput.classList.remove("error");
    }
});

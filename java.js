document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let respuesta = document.getElementById("respuesta");
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre === "" || email === "" || mensaje === "") {
        respuesta.textContent = "Todos los campos son obligatorios";
        respuesta.className = "respuesta error";
    } else if (!emailValido) {
        respuesta.textContent = "Escribe un correo valido";
        respuesta.className = "respuesta error";
    } else if (mensaje.length < 10) {
        respuesta.textContent = "El mensaje debe tener al menos 10 caracteres";
        respuesta.className = "respuesta error";
    } else {
        respuesta.textContent = "¡Mensaje enviado correctamente!";
        respuesta.className = "respuesta ok";
        
        // Limpiar formulario después de 2 segundos
        setTimeout(() => {
            document.getElementById("formContacto").reset();
            respuesta.textContent = "";
            respuesta.className = "respuesta";
        }, 2000);
    }
});
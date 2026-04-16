function mostrarMensaje() {
    const mensaje = document.getElementById("mensajeExtra");

    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}

document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let respuesta = document.getElementById("respuesta");

    if (nombre === "" || email === "" || mensaje === "") {
        respuesta.textContent = "Todos los campos son obligatorios";
        respuesta.style.color = "red";
    } else {
        respuesta.textContent = "Mensaje enviado correctamente";
        respuesta.style.color = "green";
    }
});
function mostrarMensaje() {
    const mensaje = document.getElementById("mensajeExtra");

    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}
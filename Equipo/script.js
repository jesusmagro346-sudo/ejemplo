document.addEventListener("DOMContentLoaded", () => {
    console.log("Sección de equipo cargada correctamente.");

    const tarjetas = document.querySelectorAll(".tarjeta-miembro");

    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("click", () => {
            // Obtener el nombre del miembro desde el h2 dentro de la tarjeta
            const nombre = tarjeta.querySelector("h2").innerText;
            const cargo = tarjeta.querySelector(".cargo").innerText;
            
            alert(`¡Hola! Has seleccionado a ${nombre}, nuestro ${cargo}.`);
        });
    });
});

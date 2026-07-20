alert("Hello, welcome :>");
console.log("mensaje de console.log");

const texto = document.getElementById("copiar");

texto.addEventListener("click", () => {
    navigator.clipboard.writeText(texto.innerText)
        .then(() => {
            alert("¡Correo copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar:", err);
        });
});
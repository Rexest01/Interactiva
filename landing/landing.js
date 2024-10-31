const motivationalPhrases = [
    "La práctica hace al maestro.",
    "Con cada paso, te acercas más a tu mejor versión.",
    "Cada pequeño avance cuenta.",
    "El cambio comienza con un solo paso.",
    "La confianza es la clave del éxito."
];

function createBubble(side) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", side);
    bubble.textContent = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    
    document.getElementById("como-empezar").appendChild(bubble);

    // Eliminar burbuja después de que termine la animación
    bubble.addEventListener("animationend", () => {
        bubble.remove();
    });
}

function startBubbles() {
    setInterval(() => {
        createBubble("left");
        createBubble("right");
    }, 5000); // Crear burbuja cada 5 segundos
}

startBubbles();
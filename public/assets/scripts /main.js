// Lista de frases motivacionales
const motivationalPhrases = [
    "¡Sigue adelante!",
    "Cada día es una nueva oportunidad.",
    "Cree en ti mismo y todo será posible.",
    "Hazlo con pasión o no lo hagas.",
    "Los grandes logros requieren tiempo.",
    "La perseverancia es la clave del éxito.",
    "Los sueños no tienen fecha de caducidad.",
    "Cada paso cuenta, no importa cuán pequeño sea.",
    "No dejes que los errores del pasado te detengan.",
    "Un día o el día uno. Tú decides.",
    "La vida es una aventura. Atrévete a vivirla.",
    "Tienes el poder de cambiar tu historia.",
    "La motivación te impulsa a empezar. El hábito te mantiene en movimiento.",
    "Los retos son oportunidades disfrazadas."
];

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Función para crear burbujas
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Posiciona la burbuja aleatoriamente a la izquierda o a la derecha
        const isLeft = Math.random() < 0.5; // 50% de probabilidad para izquierda o derecha
        if (isLeft) {
            bubble.classList.add('left');
            bubble.style.left = '200px'; // Ajusta la posición desde la izquierda
        } else {
            bubble.classList.add('right');
            bubble.style.right = '200px'; // Ajusta la posición desde la derecha
        }

        // Añadir una frase motivacional aleatoria a la burbuja
        const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
        bubble.innerText = randomPhrase;

        // Añadir la burbuja al contenedor
        document.querySelector('#como-empezar').appendChild(bubble);

        // Eliminar burbuja después de un tiempo
        setTimeout(() => {
            bubble.remove();
        }, 7000); // 7 segundos
    }

    // Crear burbujas a intervalos
    setInterval(createBubble, 2000); // Crear una burbuja cada 2 segundos
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Actualizar los contadores de descargas
function updateDownloadCounts() {
    const downloadCountElement = document.getElementById('download-count');
    const recentDownloadsElement = document.getElementById('recent-downloads');

    // Incrementar contadores de manera aleatoria
    let totalDownloads = 5500;
    let recentDownloads = 100;

    setInterval(() => {
        totalDownloads += getRandomInt(1, 5); // Incremento aleatorio entre 1 y 5
        recentDownloads += getRandomInt(0, 2); // Incremento aleatorio entre 0 y 2

        downloadCountElement.textContent = totalDownloads; // Actualizar el contador total
        recentDownloadsElement.textContent  = recentDownloads; // Actualizar el contador reciente
    }, 1000); // Cada segundo
}

updateDownloadCounts();

// Selecciona el botón
const deuteranopiaButton = document.getElementById('deuteranopia-mode');

// Variable para controlar el nivel de deuteranopia
let deuteranopiaLevel = 0;

// Función para alternar entre los niveles de deuteranopia
function toggleDeuteranopiaMode() {
    // Cambia el nivel de deuteranopia cada vez que se hace clic
    deuteranopiaLevel = (deuteranopiaLevel + 1) % 4;

    // Aplica el nivel correspondiente mediante el atributo data-theme y actualiza el texto del botón
    switch (deuteranopiaLevel) {
        case 1:
            document.body.setAttribute('data-theme', 'deuteranopia-leve');
            deuteranopiaButton.textContent = 'Modo Deuteranopia: Moderado';
            break;
        case 2:
            document.body.setAttribute('data-theme', 'deuteranopia-moderado');
            deuteranopiaButton.textContent = 'Modo Deuteranopia: Grave';
            break;
        case 3:
            document.body.setAttribute('data-theme', 'deuteranopia-grave');
            deuteranopiaButton.textContent = 'Desactivar Modo Deuteranopia';
            break;
        default:
            document.body.removeAttribute('data-theme'); // Quita el atributo para desactivar el modo
            deuteranopiaButton.textContent = 'Modo Deuteranopia: Leve';
            break;
    }
}

// Agrega el evento de clic al botón
deuteranopiaButton.addEventListener('click', toggleDeuteranopiaMode);

function openSignupModal() {
        document.getElementById('authModal').style.display = 'flex';
        document.body.classList.add('modal-open');
        showSignupModal();
    }

    function closeModal() {
        document.getElementById('authModal').style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    function createAccount() {
        alert("Cuenta creada exitosamente.");
        closeModal();
    }

    function continueToNextPage() {
        alert("Iniciado sesión exitosamente.");
        closeModal();
        window.location.href = "pagina_principal.html"; // Cambia la ruta según sea necesario
    }

    function showLoginModal() {
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('loginModal').style.display = 'block';
    }

    function showSignupModal() {
        document.getElementById('signupModal').style.display = 'block';
        document.getElementById('loginModal').style.display = 'none';
    }


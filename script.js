let cancionReproducida = false;  // Variable para controlar si la canción ya fue reproducida

function crearFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flor");
  flor.style.left = Math.random() * window.innerWidth + "px";
  flor.style.top = window.innerHeight + "px";
  flor.style.animationDuration = "20s";
  flor.style.transform = `scale(${0.5 + Math.random()})`;
  document.body.appendChild(flor);

  setTimeout(() => flor.remove(), 22000);
}

// Generar flores durante 20 segundos
let intervaloFlores;

// Función que se llama cuando el usuario hace clic en el botón
document.getElementById('btnIniciar').addEventListener('click', function() {
  // Iniciar la generación de flores
  intervaloFlores = setInterval(crearFlor, 300);

  // Después de 20 segundos, mostrar ramo y detener flores
  setTimeout(() => {
    clearInterval(intervaloFlores);
    document.getElementById("ramo").style.opacity = 1;
  }, 20000);

  // Reproducir audio solo si no se ha reproducido antes
  if (!cancionReproducida) {
    const audio = new Audio('a.ogg');
    audio.play().catch(error => console.log("Error al reproducir el audio:", error));
    cancionReproducida = true;  // Marcar que la canción ya fue reproducida
  }

  // Ocultar el botón de iniciar después de hacer clic
  document.getElementById('btnIniciar').style.display = 'none';
});

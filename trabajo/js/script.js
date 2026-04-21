// Espera a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", function () {

  console.log("JS conectado correctamente 😎");

  // =========================
  // 1. CLICK EN TODA LA PÁGINA
  // =========================
  document.addEventListener("click", function () {
    console.log("Hiciste click en la página");
  });


  // =========================
  // 2. CAMBIAR COLOR DE TITULOS (h1)
  // =========================
  const titulos = document.querySelectorAll("h1");

  titulos.forEach(function (titulo) {
    titulo.addEventListener("mouseover", function () {
      titulo.style.color = "violet";
    });

    titulo.addEventListener("mouseout", function () {
      titulo.style.color = "";
    });
  });


  // =========================
  // 3. MENSAJE DE BIENVENIDA
  // =========================
  setTimeout(function () {
    console.log("Bienvenido a la página 🚀");
  }, 1000);


  // =========================
  // 4. DETECTAR EN QUÉ PÁGINA ESTÁS
  // =========================
  const pagina = window.location.pathname;

  if (pagina.includes("index.html")) {
    console.log("Estás en la página principal");
  } else {
    console.log("Estás en otra página");
  }


  // =========================
  // 5. SCROLL DETECTOR
  // =========================
  window.addEventListener("scroll", function () {
    console.log("Scroll en la página");
  });

});
alert("FUNCIONA 😎");
async function cargarFrase() {
  try {
      let res = await fetch("https://api.quotable.io/random");
      let data = await res.json();

      document.getElementById("frase").innerText =
          `"${data.content}" — ${data.author}`;

  } catch (error) {
      document.getElementById("frase").innerText =
          "No se pudo cargar la frase 😢";
  }
}

// Ejecutar automáticamente cuando carga la página
document.addEventListener("DOMContentLoaded", cargarFrase);
function encriptar() {
  let texto = document.getElementById("texto").value;
  let Mensaje_Pantalla = document.getElementById("mensaje_pantalla");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    Mensaje_Pantalla.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "Perfecto";
    imagen.src = "./img/encriptado.jpg";
  } else {
    imagen.src = "./img/central.png";
    Mensaje_Pantalla.textContent = "No se ingreso ningun texto";
    parrafo.textContent = "Ingresa el texto que quieres encriptar";
    swal("Error", "No hay texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let Mensaje_Pantalla = document.getElementById("mensaje_pantalla");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      Mensaje_Pantalla.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "Perfecto";
      imagen.src = "./img/desencriptado.jpg";
    } else {
      imagen.src = "./img/central.png";
      Mensaje_Pantalla.textContent = "No se ingreso ningun texto";
      parrafo.textContent = "Ingresa el texto que quieres desencriptar";
      swal("Error", "No hay texto");
    }
}

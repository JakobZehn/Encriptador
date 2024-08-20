// Declaración de variables
const textoUsuario = document.getElementById('TextoUsuario');
const campoVisualizacion = document.getElementById('campoVisualizacion');
const mensaje = document.getElementById('mensaje');
const copiarButton = document.getElementById('copiarButton');


// Función para copiar texto
function copiarTexto() {
    campoVisualizacion.select();
    document.execCommand('copy');
    
}

// Función de encriptar
function Encriptar() {
    let texto = textoUsuario.value;

    // Validar que solo contenga letras minúsculas sin acentos ni caracteres especiales
    if (/[^a-z\s]/.test(texto)) {
        alert('El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    campoVisualizacion.value = texto;

    // Mostrar el texto encriptado y el botón de copiar
    mensaje.style.display = 'none';
    campoVisualizacion.style.display = 'block';
    copiarButton.style.display = 'block';

    // Ocultar la imagen y texto
    document.querySelector(".img").style.display = "none";
    document.querySelector("p2").style.display = "none"
    

    // Borrar el texto del placeholder
    textoUsuario.value = "";
    textoUsuario.placeholder = "Ingrese el texto aquí";
}

// Función de desencriptar
function Desencriptar() {
    let texto = textoUsuario.value;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    campoVisualizacion.value = texto;

    // Mostrar el texto desencriptado y el botón de copiar
    mensaje.style.display = 'none';
    campoVisualizacion.style.display = 'block';
    copiarButton.style.display = 'block';
 // Ocultar la imagen y texto
 document.querySelector(".img").style.display = "none";
 document.querySelector("p2").style.display = "none"

    // Borrar el texto del placeholder
    textoUsuario.value = "";
    textoUsuario.placeholder = "Ingrese el texto aquí";
}

// Función para volver a la información inicial
function resetView() {
    mensaje.style.display = 'block';
    mensaje.textContent = 'Ningún mensaje fue encontrado';
    campoVisualizacion.style.display = 'none';
    copiarButton.style.display = 'none';
}

// Llamar a resetView al cargar la página
window.onload = resetView;

/* ============================================================
   Chicos: este archivo contiene TODAS las prácticas de clase,
   tanto las primeras actividades como los nuevos eventos.
=============================================================== */


/* ============================================================
   ACTIVIDAD 1:
   Cambiar el fondo del banner usando getElementById
=============================================================== */

// Chicos: seleccionamos el banner por su ID
const banner = document.getElementById("banner");

// Cambiamos su color usando Bootstrap
banner.classList.remove("bg-danger");
banner.classList.add("bg-warning");


/* ============================================================
   ACTIVIDAD 2:
   Testimonios VIP y todos los párrafos del sitio
=============================================================== */

// Chicos: seleccionamos solo los testimonios VIP
const testimoniosVip = document.getElementsByClassName("testimonio-vip");

// Recorremos cada testimonio VIP
for (let vip of testimoniosVip) {
    vip.classList.add("text-primary"); // Texto azul
}

// Chicos: ahora seleccionamos TODOS los párrafos
const parrafos = document.getElementsByTagName("p");

// Recorremos todos los párrafos del sitio
for (let p of parrafos) {
    p.classList.add("text-danger"); // Los textos se vuelven rojos
}


/* ============================================================
   ACTIVIDAD 3:
   - querySelector
   - querySelectorAll
   - getElementsByName
=============================================================== */

// Chicos: querySelector (selecciona el PRIMER elemento del tipo indicado)
const primerInput = document.querySelector("input");

// Le damos estilo para que lo vean claro
primerInput.classList.add("bg-success", "text-white");


// querySelectorAll SOLO para botones de práctica (NO TODOS)
const botones = document.querySelectorAll(".btn-ejemplo");

// Recorremos todos los botones de ejemplo
botones.forEach(boton => boton.classList.add("btn-danger"));


// getElementsByName
const campoNombre = document.getElementsByName("nombreEjemplo");

// Si existe el campo, lo estilizamos
if (campoNombre.length > 0) {
    campoNombre[0].classList.add("text-warning");
}


/* ============================================================
   EVENTO onclick
=============================================================== */

function saludar() {
    const mensaje = document.getElementById("mensajeOnclick");
    mensaje.innerText = "¡Gracias por hacer clic! Así funcionan las promociones.";
}


/* ============================================================
   EVENTO onmouseover / onmouseout
=============================================================== */

function cambiarColor() {
    document.getElementById("cuadroColor").style.background = "#ffd966";
}

function restaurarColor() {
    document.getElementById("cuadroColor").style.background = "#eee";
}


/* ============================================================
   EVENTO onchange
=============================================================== */

function mostrarSeleccionEjemplo() {
    const valor = document.getElementById("selectEjemplo").value;
    const texto = document.getElementById("textoOnchange");

    if (valor === "") {
        texto.innerText = "";
    } else {
        texto.innerText = "Elegiste el taller: " + valor;
    }
}


/* ============================================================
   EVENTO addEventListener (moderno)
=============================================================== */

document.getElementById("btnCambiarCard").addEventListener("click", function () {
    document.getElementById("cardTitulo").innerText =
        "Nuevo Taller Actualizado con IA";

    document.getElementById("cardTexto").innerText =
        "Este taller ahora incluye automatización con inteligencia artificial.";

    document.getElementById("cardImagen").src = "img/casco.jpeg";
});


/* ============================================================
   EVENTO onsubmit — Validación
=============================================================== */

function validarFormularioEjemplo() {
    const nombre = document.getElementById("nombreEjemplo").value;

    if (nombre.trim() === "") {
        alert("Por favor escribe tu nombre.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}


/* ============================================================
   🛒 SISTEMA DE CARRITO
=============================================================== */

// Array donde se guardan los productos
let carrito = [];
let total = 0;

// 1. Seleccionar todos los botones "Agregar al carrito"
const botonesCarrito = document.querySelectorAll(".btn-agregar");

// 2. Cuando hagan clic → agregar el producto
botonesCarrito.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});

// 3. Función para agregar al carrito
function agregarAlCarrito(e) {
    const card = e.target.closest(".card");

    const nombre = card.querySelector(".nombre-producto").textContent;
    const precio = parseFloat(card.querySelector(".precio-producto").textContent);

    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

// 4. Mostrar productos dentro del offcanvas
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const totalHTML = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.nombre} - $${item.precio} MXN`;
        lista.appendChild(li);
    });

    totalHTML.textContent = total.toFixed(2);
}

// Arreglo donde se almacenan los productos
let productos = [];

// Referencias a elementos del HTML
const lista = document.getElementById("lista-productos");
const btnGuardar = document.getElementById("btnGuardar");
const btnVerTodo = document.getElementById("btnVerTodo");

const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("imagen");

// Controla si se está editando un producto
let indiceEditar = null;

// Muestra todos los productos en la lista
function renderizarProductos() {
    lista.innerHTML = ""; // Limpia la lista

    productos.forEach((producto, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <strong>$${producto.precio}</strong><br><br>

            <!-- Botones de acción -->
            <button onclick="editarProducto(${index})">Editar</button>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;

        lista.appendChild(li);
    });
}

// Carga los datos en el formulario para editar
function editarProducto(index) {
    const p = productos[index];

    nombre.value = p.nombre;
    precio.value = p.precio;
    descripcion.value = p.descripcion;
    imagen.value = p.imagen;

    indiceEditar = index; // Marca edición
}

// Elimina un producto de la lista
function eliminarProducto(index) {
    productos.splice(index, 1); // Quita el elemento
    renderizarProductos();      // Actualiza la vista
}

// Guarda un producto nuevo o editado
btnGuardar.addEventListener("click", () => {

    const producto = {
        nombre: nombre.value,
        precio: precio.value,
        descripcion: descripcion.value,
        imagen: imagen.value
    };

    if (indiceEditar === null) {
        productos.push(producto); // Agrega nuevo
    } else {
        productos[indiceEditar] = producto; // Actualiza
        indiceEditar = null;
    }

    // Limpia el formulario
    nombre.value = "";
    precio.value = "";
    descripcion.value = "";
    imagen.value = "";

    renderizarProductos(); // Refresca la lista
});

// Muestra u oculta la lista completa
btnVerTodo.addEventListener("click", () => {
    if (lista.style.display === "none") {
        lista.style.display = "grid";
        btnVerTodo.textContent = "Ocultar lista";
    } else {
        lista.style.display = "none";
        btnVerTodo.textContent = "Ver lista completa";
    }
});

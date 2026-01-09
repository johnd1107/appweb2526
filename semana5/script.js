const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// AGREGAR IMAGEN
addImageBtn.addEventListener("click", function () {
    const url = imageUrlInput.value;

    if (url === "") {
        alert("Ingrese una URL de imagen");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    // Si la imagen no carga
    img.onerror = function () {
        alert("La URL no es una imagen válida");
        img.remove();
    };

    // Seleccionar imagen
    img.addEventListener("click", function () {
        if (selectedImage) {
            selectedImage.classList.remove("selected");
        }
        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// ELIMINAR IMAGEN
deleteImageBtn.addEventListener("click", function () {
    if (!selectedImage) {
        alert("Seleccione una imagen primero");
        return;
    }

    selectedImage.remove();
    selectedImage = null;
});

// ATAJO DE TECLADO (DELETE)
document.addEventListener("keydown", function (event) {
    if (event.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

// Referencias a inputs
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

// Referencias a mensajes
const msgNombre = document.getElementById("msgNombre");
const msgCorreo = document.getElementById("msgCorreo");
const msgPassword = document.getElementById("msgPassword");
const msgConfirmar = document.getElementById("msgConfirmar");
const msgEdad = document.getElementById("msgEdad");

// Mostrar u ocultar contraseña
verPassword.onclick = () => {
    password.type = password.type === "password" ? "text" : "password";
};

// Mostrar u ocultar confirmación
verConfirmar.onclick = () => {
    confirmar.type = confirmar.type === "password" ? "text" : "password";
};

// Marca campo correcto
function valido(input, msg, texto = "Correcto") {
    input.className = "valido";
    msg.className = "ok";
    msg.textContent = texto;
}

// Marca campo incorrecto
function invalido(input, msg, texto) {
    input.className = "invalido";
    msg.className = "error";
    msg.textContent = texto;
}

// Validar nombre
function validarNombre() {
    if (nombre.value.trim().length < 3) {
        invalido(nombre, msgNombre, "Mínimo 3 caracteres");
        return false;
    }
    valido(nombre, msgNombre);
    return true;
}

// Validar correo
function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo.value)) {
        invalido(correo, msgCorreo, "Formato de correo inválido");
        return false;
    }
    valido(correo, msgCorreo);
    return true;
}

// Validar contraseña
function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(password.value)) {
        invalido(password, msgPassword, "8 caracteres, número y símbolo");
        return false;
    }
    valido(password, msgPassword);
    return true;
}

// Validar confirmación
function validarConfirmar() {
    if (confirmar.value !== password.value || confirmar.value === "") {
        invalido(confirmar, msgConfirmar, "Las contraseñas no coinciden");
        return false;
    }
    valido(confirmar, msgConfirmar);
    return true;
}

// Validar edad
function validarEdad() {
    if (edad.value < 18) {
        invalido(edad, msgEdad, "Debe ser mayor o igual a 18");
        return false;
    }
    valido(edad, msgEdad);
    return true;
}

// Control total del formulario
function validarFormulario() {
    const correcto =
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmar() &&
        validarEdad();

    btnEnviar.disabled = !correcto;
}

// Validación en tiempo real
[nombre, correo, password, confirmar, edad].forEach(campo => {
    campo.addEventListener("input", validarFormulario);
});

// Envío final
formulario.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulario validado y enviado correctamente ✅");
});

// Obtener elementos del DOM
const form = document.querySelector('.formulario-hoja-vida');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const titulo = document.getElementById('titulo');
const institucion = document.getElementById('institucion');
const fechaInicio = document.getElementById('fecha-inicio');
const fechaFin = document.getElementById('fecha-fin');
const puesto = document.getElementById('puesto');
const empresa = document.getElementById('empresa');
const descripcion = document.getElementById('descripcion');

// Funciones de validación
function validarCampoVacio(campo, mensaje) {
    const errorElemento = campo.nextElementSibling;
    if (campo.value.trim() === '') {
        errorElemento.textContent = mensaje;
    } else {
        errorElemento.textContent = '';
    }
}

function validarEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    const errorElemento = email.nextElementSibling;
    if (!regexEmail.test(email.value)) {
        errorElemento.textContent = 'Ingresa un correo electrónico válido.';
    } else {
        errorElemento.textContent = '';
    }
}




// Agregar elementos para mostrar errores dinámicos
[...form.elements].forEach((campo) => {
    if (campo.tagName === 'INPUT' || campo.tagName === 'TEXTAREA') {
        const errorElemento = document.createElement('span');
        errorElemento.style.color = 'red';
        errorElemento.style.fontSize = '12px';
        campo.insertAdjacentElement('afterend', errorElemento);
    }
});

// Eventos
nombre.addEventListener('input', () => validarCampoVacio(nombre, 'El nombre es obligatorio.'));
email.addEventListener('input', validarEmail);
telefono.addEventListener('input', () => validarCampoVacio(telefono, 'El teléfono es obligatorio.'));
titulo.addEventListener('input', () => validarCampoVacio(titulo, 'El título es obligatorio.'));
institucion.addEventListener('input', () => validarCampoVacio(institucion, 'La institución es obligatoria.'));


puesto.addEventListener('input', () => validarCampoVacio(puesto, 'El puesto es obligatorio.'));
empresa.addEventListener('input', () => validarCampoVacio(empresa, 'La empresa es obligatoria.'));
descripcion.addEventListener('input', () => validarCampoVacio(descripcion, 'La descripción es obligatoria.'));

form.addEventListener('submit', function(event) {
    validarCampoVacio(nombre, 'El nombre es obligatorio.');
    validarEmail();
    validarCampoVacio(telefono, 'El teléfono es obligatorio.');
    validarCampoVacio(titulo, 'El título es obligatorio.');
    validarCampoVacio(institucion, 'La institución es obligatoria.');
   
    validarCampoVacio(puesto, 'El puesto es obligatorio.');
    validarCampoVacio(empresa, 'La empresa es obligatoria.');
    validarCampoVacio(descripcion, 'La descripción es obligatoria.');

    const errores = [...form.querySelectorAll('span')].some(span => span.textContent !== '');

    if (errores) {
        event.preventDefault();
    } else {
        alert('Formulario enviado con éxito.');
    }
});

/*==========Mostrar Contraseñas==========*/

document.querySelector('.input-icon').addEventListener('click', e => {
    const passwordInput = document.querySelector('.formulario-pass-input');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        passwordInput.type = 'password';       
    } else {
        e.target.classList.add('show');
        passwordInput.type = 'text';
    }
});


document.querySelector('.input-icon2').addEventListener('click', e => {
    const passwordInput = document.querySelector('.formulario-pass2-input');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        passwordInput.type = 'password';
    } else {
        e.target.classList.add('show');        
        passwordInput.type = 'text';
    }
});

/* Requeridos y Placeholder de Inputs */

const nombre = document.querySelector(".formulario-nombre-input");
nombre.placeholder="Nombres";
nombre.required = "true";

const apellido = document.querySelector(".formulario-apellido-input");
apellido.placeholder="Apellidos";
apellido.required = "true";

const cedula = document.querySelector(".formulario-documento-input");
cedula.placeholder="Documento de Identidad";
cedula.required = "true";

const telefono = document.querySelector(".formulario-telefono-input");
telefono.placeholder="Teléfono";
telefono.required = "true";

const correo = document.querySelector(".formulario-correo-input");
correo.placeholder="Correo";
correo.required = "true";

const pass = document.querySelector(".formulario-pass-input");
pass.placeholder = "Contraseña";
pass.required = "true";

const pass2 = document.querySelector(".formulario-pass2-input");
pass2.placeholder = "Confirmar Contraseña";
pass2.required = "true";

const fechan = document.querySelector(".formulario-fechan-input");
fechan.required = "true";




/* Validaciones con el boton */

const button = document.querySelector('button');

button.onclick = function() {
  let sexoCorrecto = document.querySelector('.formulario-sexo-option').value;
  let pass = document.querySelector('.formulario-pass-input').value;
  let pass2 = document.querySelector('.formulario-pass2-input').value;
  let tipod = document.querySelector('.formulario-tipodoc-option').value;
  
  if (tipod == "Seleccione") {
    alert("Seleccione no es un documento valido");
  }
  if (sexoCorrecto == "Seleccione") {
  	alert("Seleccione no es un sexo valido.");
  }
  if (pass != pass2) {
     alert("Las contraseñas no coinciden.");
  }
  
}



/* Para cambiar borde de pass, aun en prueba

     const password = document.querySelector(".formulario-pass2-input");
     password.addEventListener('change', () => {
     document.password.classList.toggle('pass2m')});  */
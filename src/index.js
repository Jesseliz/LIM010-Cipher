/* Acá va tu código */
const btnlogin = document.getElementById('btnlogin');
const paglogin = document.getElementById('pagLogin');
const secHeader = document.getElementById('secHeader');
const pagCifrado = document.getElementById('pagCifrado');
const error = document.getElementById('error');
pagCifrado.classList.add('hide');
error.classList.add('hide');
let intentos = 0;
btnlogin.addEventListener('click', (evento) => {
      evento.preventDefault();
    let password = document.getElementById('psw');
    let errorMessage = document.getElementById('errorMessage');

    if (password.value !== '') {
        if (password.value === 'LABORATORIA') {
            paglogin.classList.add('hide');
            secHeader.classList.add('hide');
            pagCifrado.classList.remove('hide');            
        }
        else {
            intentos++;
            password.value = '';
            if (intentos < 3) {
                password.focus();
                errorMessage.innerHTML = 'Contraseña incorrecta, intentelo otra vez';
            }
            else {
                password.disabled = true;
                btnlogin.disabled = true;
                errorMessage.innerHTML = '';
                error.classList.remove('hide');
            }
        }
    }
    else { errorMessage.innerHTML = 'Ingrese la contraseña'; password.focus(); }
})

let string = document.getElementById('FirstText');
let offset = document.getElementById('offset');
let stringResult = document.getElementById('resultText');
let span1 = document.getElementById('spantxt1');
const span2 = document.getElementById('spantxt2');

const btnCipher = document.getElementById('btnCifrar');
btnCipher.addEventListener('click', () => {
    if (offset.value == '') {
        span1.innerHTML = 'Ingrese la clave';
        offset.focus();
    }
    else if (string.value == '') {
        span1.innerHTML = '';
         span2.innerHTML = 'Ingrese el texto';
         string.focus();
    }
    else{
        span1.innerHTML = '';
        span2.innerHTML = '';
        let resultado = cipher.encode(offset.value, string.value);
        stringResult.value = resultado;
    }
})

const btnDeCipher = document.getElementById('btnDescifrar');
btnDeCipher.addEventListener('click', () => {
    if (offset.value == '') {
        span1.innerHTML = 'Ingrese la clave';
        offset.focus();
    }
    else if (string.value == '') {
        span2.innerHTML = 'Ingrese el texto';
         string.focus();
    }
    else{
        span1.innerHTML = '';
        let resultado = cipher.decode(offset.value, string.value);
        stringResult.value = resultado;
    }
})

const btnLimpiar = document.getElementById('btnBorrar');
btnLimpiar.addEventListener('click', () => {
    string.value = '';
    offset.value = '';
    stringResult.value = '';
    span1.innerHTML = '';
})

const btnSalir = document.getElementById('btnSalir');
btnSalir.addEventListener('click', () => {
    paglogin.classList.remove('hide');
    secHeader.classList.remove('hide');
    pagCifrado.classList.add('hide');
    document.getElementById('psw').value = '';
    document.getElementById('errorMessage').value = '';
    string.value = '';
    offset.value = '';
    stringResult.value = '';
    span1.innerHTML = '';
})
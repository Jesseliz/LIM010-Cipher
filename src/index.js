/* Acá va tu código */

const btnlogin = document.getElementById("btnlogin");
const paglogin = document.getElementById('pagLogin');
const pagCifrado = document.getElementById('pagCifrado');
pagCifrado.classList.add("hide");
let intentos = 0;
btnlogin.addEventListener('click', (evento) => {
     evento.preventDefault();
    let password = document.getElementById("psw");
    let errorMessage = document.getElementById("errorMessage");

    if (password.value !== '') {
        if (password.value === 'LABORATORIA') {
            paglogin.classList.add("hide");
            pagCifrado.classList.remove("hide");
        }
        else {
            intentos++;
            password.value = "";
            if (intentos < 3) {
                password.focus();
                errorMessage.innerHTML = "Contraseña incorrecta, intentelo otra vez";
            }
            else {
                password.disabled = true;
                errorMessage.innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
            }
        }
    }
    else { errorMessage.innerHTML = "Ingrese la contraseña"; password.focus(); }
})

let string = document.getElementById('FirstText');
let offset = document.getElementById('offset');
let stringResult = document.getElementById('resultText');
let span1 = document.getElementById('spantxt1');

const btnCipher = document.getElementById("btnCifrar");
btnCipher.addEventListener('click', () => {
    if (string.value !== '') {
        let resultado = cipher.encode(offset.value, string.value);
        stringResult.value = resultado;
    }
    else {
         span1.innerHTML = "Ingrese la contraseña";
        span1.focus();
    }
})

const btnDeCipher = document.getElementById("btnDescifrar");
btnDeCipher.addEventListener('click', () => {
    if (string.value !== '') {
        // let string2 = string.value;
        // let offset2 = offset.value;
        let resultado = cipher.decode(offset.value, string.value);
        stringResult.value = resultado;
    }
    else {
        span1.innerHTML = "Ingrese la contraseña";
        span1.focus();
    }
})

const btnLimpiar = document.getElementById("btnBorrar");
btnLimpiar.addEventListener('click', () => {
    string.value = "";
    offset.value = "";
    stringResult.value = "";
})

const btnSalir = document.getElementById('btnSalir');
btnSalir.addEventListener('click', () => {
    paglogin.classList.remove("hide");
    pagCifrado.classList.add("hide");
    document.getElementById("psw").value = "";
    document.getElementById("errorMessage").value = "";
    firstString.value = "";
    clave.value = "";
    stringResult.value = "";
})
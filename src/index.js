/* Acá va tu código */

const btnlogin = document.getElementById("btnlogin");
const paglogin = document.getElementById('pagLogin');
const pagCifrado = document.getElementById('pagCifrado');
pagCifrado.classList.add("hide");
let intentos = 0;
btnlogin.addEventListener('click', () => {
    let password = document.getElementById("psw");
    let errorMessage = document.getElementById("errorMessage");
    if (password !== '') {
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

const btnCipher = document.getElementById("btnCifrar");
const firstString = document.getElementById('FirstText');
const offset = document.getElementById('offset');
let stringResult = document.getElementById('resultText');
btnCipher.addEventListener('click', () => {
    let resultado = cipher.encode(offset.value, firstString.value);
    stringResult.innerHTML = (resultado);
})

const btnDeCipher = document.getElementById("btnDescifrar");
btnDeCipher.addEventListener('click', () => {
    let resultado = cipher.decode(offset.value, firstString.value);
    stringResult.innerHTML = (resultado);
})

const btnLimpiar = document.getElementById("btnBorrar");
btnLimpiar.addEventListener('click', () => {
    document.getElementById("FirstText").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("resultText").value = "";
})
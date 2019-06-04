/* Acá va tu código */

const btnlogin = document.getElementById("btnlogin");
btnlogin.addEventListener('click', () => {
    let password = document.getElementById("psw").value;
    let intentos = 0;

    if (password === 'LABORATORIA') {
        alert('correcto');
        document.getElementById('pagLogin').style.display = 'none';
        document.getElementById('pagCifrado').style.display = 'block';
    }
    else {
        intentos++;
        alert('incorrecto');
        if (intentos > 2) {
            alert('3 vecs');
        }
    }


})

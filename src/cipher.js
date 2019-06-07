

window.cipher = {
  encode: (offset, firstString) => {
    /* Acá va tu código que cifra*/
    let cifrado = "";

    for (let i = 0; i < firstString.length; i++) { //recorrer las letras del texto a cifrar

      if (parseInt(firstString[i]) % 1 === 0) {
        //condicionar para no ingresar numeros//
        alert("Por favor ingrese un texto sin numeros ni espacios");
      }
      let ubicacion = (firstString.toUpperCase().charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      let palabraCifrada = String.fromCharCode(ubicacion);
      cifrado += palabraCifrada; //acumular las letras cifradas//
    }
    return cifrado;
  },

  decode: (offset, firstString) => {
  
    /* Acá va tu código que descifra*/
    var descifrado = "";

    for (let j = 0; j < firstString.length; j++) { //el for recorrera las letras del texto a descifrar//

      var ubicacionDescifrado = (firstString.charCodeAt(j) + 65 - parseInt(offset)) % 26 + 65;
      var palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

      descifrado += palabraDescifrada; //acumular las letras descifradas//
    }
    return descifrado;
  }
  };
  


window.cipher = {
  encode: (offset, string) => {
    let cifrado = "";
    let ubicacion = 0;
    for (let i = 0; i < string.length; i++) { //recorrer las letras del texto a cifrar
      if (parseInt(string[i]) % 1 === 0) {
        //condicionar para no ingresar numeros//
        alert("Por favor ingrese un texto sin numeros");
      }
      if(string.charCodeAt(i) === 32)
      {
        ubicacion = string.charCodeAt(i);
      }
      else{
        ubicacion = (string.toUpperCase().charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
      let palabraCifrada = String.fromCharCode(ubicacion);
      cifrado += palabraCifrada; //acumular las letras cifradas//
    }
    return cifrado;
  },

  decode: (offset2, string2) => {
    let descifrado = "";
    let ubicacionDescifrado = 0;
    
    for (let j = 0; j < string2.length; j++) { 
      if(string2.charCodeAt(j) === 32)
      {
        ubicacionDescifrado = string2.charCodeAt(i);
      }
      else{
         ubicacionDescifrado = (string2.toUpperCase().charCodeAt(j) + 65 - parseInt(offset2)) % 26 + 65;
      }
      let palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

      descifrado += palabraDescifrada; //acumular las letras descifradas//
    }
    return descifrado;
  }
  };
  
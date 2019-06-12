

window.cipher = {
  encode: (offset, string) => {
    let cifrado = "";
    let ubicacion = 0;
    debugger;
    for (let i = 0; i < string.length; i++) { //recorrer las letras del texto a cifrar
      let texto = string.charCodeAt(i);
      
      if(texto >= 65 && texto <= 90){
        ubicacion = (texto - 65 + parseInt(offset)) % 26 + 65;
      }
      else if(texto >= 97 && texto <= 122){
        ubicacion = (texto - 97 + parseInt(offset)) % 26 + 97;
      }
      // else if(texto >= 131 && texto <= 134 || texto === 160){
      //   ubicacion = 97;
      // }
      else{
        ubicacion = string.charCodeAt(i);
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
      let texto = string2.toUpperCase().charCodeAt(j);
      if(texto >= 65 && texto <= 90){
        ubicacionDescifrado = (texto + 65 - parseInt(offset2)) % 26 + 65;
      }
      else if(texto >= 97 && texto <= 122){
        ubicacionDescifrado = (texto + 97 - parseInt(offset2)) % 26 + 97;
      }
      else{
         ubicacionDescifrado = string2.charCodeAt(j);
      }
      let palabraDescifrada = String.fromCharCode(ubicacionDescifrado);
      descifrado += palabraDescifrada; //acumular las letras descifradas//
    }
    return descifrado;
  }
  };
  
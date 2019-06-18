window.cipher = {
  encode: (offset, string) => {
    let cifrado = "";
    let ubicacion = 0;
    for (let i = 0; i < string.length; i++) { //recorrer las letras del texto a cifrar
      let texto = string.charCodeAt(i);
      
      if(texto >= 65 && texto <= 90){ //MAYUSCULAS
        ubicacion = (texto - 65 + parseInt(offset)) % 26 + 65;
      }
      else if(texto >= 97 && texto <= 122){ //minusculas
        ubicacion =   (texto - 97 + parseInt(offset)) % 26 + 97;
      }
      else if(texto >= 33 && texto <= 64){
        ubicacion = (texto - 33 + parseInt(offset)) % 32 + 33;
      }
      else{
        ubicacion = string.charCodeAt(i);
      }
      let palabraCifrada = String.fromCharCode(ubicacion);
      cifrado += palabraCifrada; //acumular las letras cifradas//
    }
    return cifrado;
  },

  decode: (offset, string) => {
    let descifrado = "";
    let ubicacionDescifrado = 0;
    for (let j = 0; j < string.length; j++) { 
      let texto = string.charCodeAt(j);

      if(texto >= 65 && texto <= 90){
       ubicacionDescifrado = (texto + 65 - parseInt(offset)) % 26 + 65;
      }
      else if(texto >= 97 && texto <= 122){
        ubicacionDescifrado = 122 -((122 - texto + parseInt(offset)) % 26 );
      }
      else if(texto >= 33 && texto <= 64){
        ubicacionDescifrado = 64 -((64 - texto + parseInt(offset)) % 32 );
      }
      else{
         ubicacionDescifrado = string.charCodeAt(j);
      }
      let palabraDescifrada = String.fromCharCode(ubicacionDescifrado);
      descifrado += palabraDescifrada; //acumular las letras descifradas//
    }
    return descifrado;
  }
  };
  
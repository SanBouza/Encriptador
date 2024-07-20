function encriptar(){

    let texto = document.getElementById("inputText").value;
    let textoEncriptado = '';

    const SHIFT = 3; 
    const ALFABETO = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < texto.length; i++) {

      var letra = texto[i].toLowerCase();
      var index = ALFABETO.indexOf(letra);
  
      if (index !== -1) {
        textoEncriptado += ALFABETO[(index + SHIFT) % 26];
      } else {
        textoEncriptado += letra; //Por si hay alguna letra rara
      }
    }
  
    document.querySelector("#outputText").value = textoEncriptado;
}

function desencriptar(){

    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = '';
    
    const SHIFT = -3; 
    const ALFABETO = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < texto.length; i++) {

      var letra = texto[i].toLowerCase();
      var index = ALFABETO.indexOf(letra);
  
      if (index !== -1) {
        var newIndex = (index + SHIFT + 26) % 26;
        textoDesencriptado += ALFABETO[newIndex];
      } else {
        textoDesencriptado += letra; 
      }
    }
  
    document.querySelector("#outputText").value = textoDesencriptado;
}

function copiarTexto(){
    let output = document.getElementById("outputText");
    if (output.value !== "") {
        output.select();
        document.execCommand("copy");
        alert("Se ha copiado el texto.");
    } else {
        alert("No hay nada para copiar.");
    }
}
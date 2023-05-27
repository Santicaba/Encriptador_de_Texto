const textArea = document.querySelector(".text-area")
const BTN_ENCRIPTAR = document.querySelector(".btn-encriptar")
const BTN_DESENCRIPTAR = document.querySelector(".btn-desencriptar")
const mensaje = document.querySelector(".mensaje")
const btnCopiar = document.querySelector(".copiar")

console.log(btnCopiar);
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}




function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return stringEncriptado;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
}


function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptado;
}


function copiarMensaje() {
    // Obtener el campo de texto
    mensaje.select();
    // Seleccione el campo de texto
    mensaje.setSelectionRange(0, 99999);
    //Copie el texto dentro del campo de texto
    navigator.clipboard.writeText(mensaje.value);
    // Alertar el texto copiado
        alert("Texto copiado:" + mensaje.value );
         
}









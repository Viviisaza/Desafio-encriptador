let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector(".contenedormunieco");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".text-area");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else if (texto[i] == "a") {
            textoFinal += "ai";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto.slice(i, i + 5) == "enter") {
            textoFinal += "e";
            i += 4;
        } else if (texto.slice(i, i + 4) == "imes") {
            textoFinal += "i";
            i += 3;
        } else if (texto.slice(i, i + 4) == "ober") {
            textoFinal += "o";
            i += 3;
        } else if (texto.slice(i, i + 4) == "ufat") {
            textoFinal += "u";
            i += 3;
        } else if (texto.slice(i, i + 2) == "ai") {
            textoFinal += "a";
            i += 1;
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});

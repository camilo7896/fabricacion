var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", myFunction);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;



function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function myFunction() {
    var x = parseInt(texto.value);
    var linea = 30;
    var yi, xf;
    var colorcito = "blue";
    var i = 0;
    var espacio = ancho / linea;

    for (i = 0; i < linea; i++) {
        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujar_linea(colorcito, 0, yi, xf, 300);

    }

}

//DIBUJAR CON TECLAS

var teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

document.addEventListener("keydown", dibujarTeclado);

var cuadro = document.getElementById("canvas");
var papel = cuadro.getContext("2d");
var x = 400;
var y = 175;


dibujarLinea("black" ,papel);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3 ;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento)
{
    var colorcito = "black";
    var movimiento = 1;

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x , y , x , y -movimiento , papel);
            y = y - movimiento;
            console.log("arriba");
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x , y , x , y + movimiento, papel);
            y = y + movimiento;
            console.log("abajo");
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x , y , x - movimiento, y, papel );
            x = x - movimiento;
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x , y , x + movimiento, y , papel);
            x = x + movimiento;
            console.log("derecha");
        break;
    }
}


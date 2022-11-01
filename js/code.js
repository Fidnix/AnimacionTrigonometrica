let cajita = document.querySelector("#cajita");
let color_input = document.getElementById("color-input");

var current_color = "rgba(102, 255, 255, .5)";

let sen_span = document.getElementById("sen-span");
let cos_span = document.getElementById("cos-span");
let tan_span = document.getElementById("tan-span");

let ctx = cajita.getContext("2d");
let intervalo;

const ANCHO = cajita.clientWidth, ALTURA = cajita.clientHeight;
const SEMIEJE_X = ANCHO/2, SEMIEJE_Y = ALTURA/2, RADIUS = 180, VALOR_SUSTRACTIVO_A_LA_ABCISA = 2* SEMIEJE_X, VALOR_SUSTRACTIVO_A_LA_ORDENADA = 2*SEMIEJE_Y;

let x = SEMIEJE_X + RADIUS, y, FotogramasEnX = -0.5;

let pathDrawsPlane = new Path2D();
let pathDrawsCircle = new Path2D();


pathDrawsPlane.strokeStyle = "black"
pathDrawsPlane.moveTo(0,SEMIEJE_Y);
pathDrawsPlane.lineTo(ANCHO, SEMIEJE_Y);
pathDrawsPlane.moveTo(SEMIEJE_X, 0);
pathDrawsPlane.lineTo(SEMIEJE_X, ALTURA);

pathDrawsCircle.arc(SEMIEJE_X, SEMIEJE_Y, RADIUS, 0, 2*Math.PI);

ctx.stroke( pathDrawsPlane )
ctx.stroke( pathDrawsCircle )

// Empecemos a declarar los valores de la corbata

function bucle(){
    ctx.clearRect(0,0,ANCHO, ALTURA)
    
    ctx.stroke( pathDrawsPlane )
    ctx.stroke( pathDrawsCircle )
    
    y = SEMIEJE_Y - ( RADIUS**2 - (x - SEMIEJE_X)**2 )**0.5;

    dibujarTriangulosOpuestos();
    escribirValores();

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";

    x+=FotogramasEnX;

    // console.log("Ciclo cumplido: x->" + x + " y->"+y)
}

function dibujarTriangulosOpuestos(){

    //Dibujar areas
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y);
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, SEMIEJE_Y);
    ctx.lineTo(x, SEMIEJE_Y);
    ctx.lineTo(x, y);
    ctx.fillStyle = current_color
    ctx.fill()

    ctx.beginPath();
    ctx.moveTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x,y);
    ctx.lineTo(x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y);
    ctx.lineTo(x, SEMIEJE_Y);
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, SEMIEJE_Y);
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, y);
    ctx.fillStyle = current_color
    ctx.fill()

    //Vector Radio

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y);
    ctx.moveTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x,y);
    ctx.lineTo(x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y);
    ctx.strokeStyle = "#00ff00";
    ctx.stroke();

    //Lineas secantes al eje x

    ctx.beginPath();
    ctx.moveTo(x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y)
    ctx.lineTo(x, y)
    
    ctx.moveTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, y)
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y)
    ctx.strokeStyle = "red"
    ctx.stroke();

    //Lineas secantes al eje y

    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, y)

    ctx.moveTo(VALOR_SUSTRACTIVO_A_LA_ABCISA-x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y)
    ctx.lineTo(x, VALOR_SUSTRACTIVO_A_LA_ORDENADA-y)
    ctx.strokeStyle = "blue"
    ctx.stroke();
}

function escribirValores(){



    sen_span.innerHTML= (SEMIEJE_Y - y)/RADIUS;
    cos_span.innerHTML= (x - SEMIEJE_X)/RADIUS;
    tan_span.innerHTML= x/y;
}

intervalo = setInterval( ()=>{

    if(x == SEMIEJE_X +0.5 || x == SEMIEJE_X + RADIUS + 0.5){
        if(FotogramasEnX >0){
            FotogramasEnX = -0.5
        }else{
            FotogramasEnX = 0.5
        }
    }
    
    bucle()
},50)

function hexToRgb(color){
    let aRgbHex = color.match(/.{1,2}/g);
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

document.addEventListener("keyup", (event)=>{
    // console.log(event)

    if(event.key == "s"){
        clearInterval(intervalo)
    }
})

color_input.addEventListener("input", ()=>{
    let arr_hex_to_rgb = hexToRgb( color_input.value.substr(1) )
    current_color = `rgba(${ arr_hex_to_rgb[0]}, ${arr_hex_to_rgb[1] }, ${arr_hex_to_rgb[2] }, .5)`
})
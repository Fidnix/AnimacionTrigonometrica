/**
* @author Fidel Apari Sanchez <fidel.moises0@gmail.com>
*/
let Inputs = new HTMLInputs(['sen-span', 'cos-span', 'tan-span'], 'color-input');

let lienzo = document.getElementById("cajita");
let ctx = lienzo.getContext("2d");

let intervalo;

const ANCHO = lienzo.width;
const ALTURA = lienzo.height;;
const SEMIEJE_X = lienzo.width/2;
const SEMIEJE_Y = lienzo.height/2;
const RADIUS = 100;

let render = new Render(ANCHO, ALTURA, SEMIEJE_X, SEMIEJE_Y, RADIUS, ctx);
let triangulos = new TrigoPoint(SEMIEJE_X, SEMIEJE_Y, 0, RADIUS);

let escena = new Escena(60);

let getCoordsFunc = new RecursiveCallable(triangulos, triangulos.getCoords);
let getTrigoFunc = new RecursiveCallable(triangulos, triangulos.getTrigoCoords);
let getColorFunc = new RecursiveCallable(Inputs, Inputs.getColor);

console.log('color: ' + getColorFunc.run())

escena.addAnim( render, render.renderBG );
escena.addAnim( render, render.setAreaColor, [getColorFunc]);
escena.addAnim( render, render.renderTie, [getCoordsFunc] );
escena.addAnim( render, render.renderPoint, [getCoordsFunc] );
escena.addAnim(triangulos, triangulos.updateAngle);
escena.addAnim(triangulos, triangulos.upDateCoords);
escena.addAnim(Inputs, Inputs.setValues, [getTrigoFunc]);
escena.playAnims();
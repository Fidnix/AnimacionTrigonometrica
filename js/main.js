/**
* @author Fidel Apari Sanchez <fidel.moises0@gmail.com>
*/

// Create the necessary html inputs
let inputs = new HTMLInputs(['sen-span', 'cos-span', 'tan-span'], 'color-input');

// Reference the canvas
let canvas = document.getElementById("cajita");
let ctx = canvas.getContext("2d");

// Declare the constants values of the canvas dimensions
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const X_AXIS = canvas.width/2;
const Y_AXIS = canvas.height/2;
const RADIUS = 100;

// These classes allow us to draw and manage animations in the scene
let render = new Render(WIDTH, HEIGHT, X_AXIS, Y_AXIS, RADIUS, ctx);
let timer = new Timer(60);

// The trigonometric point
let point = new CirclePoint(X_AXIS, Y_AXIS, 0, RADIUS);

// Functions to get data
let getCoordsFunc = new RecursiveCallable(point, point.getCoords);
let getTrigoFunc = new RecursiveCallable(point, point.getTrigoCoords);
let getColorFunc = new RecursiveCallable(inputs, inputs.getColor);

// List all methos that will be executed for the animation
timer.addAnim( render, render.renderBG );
timer.addAnim( render, render.setAreaColor, [getColorFunc]);
timer.addAnim( render, render.renderTie, [getCoordsFunc] );
timer.addAnim( render, render.renderPoint, [getCoordsFunc] );
timer.addAnim(point, point.updateAngle);
timer.addAnim(inputs, inputs.updateSpanValues, [getTrigoFunc]);

// Plays by default
timer.playAnims();
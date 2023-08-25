/**
* @author Fidel Apari Sanchez <fidel.moises0@gmail.com>
*/

/**
* This class contains all the main methods to draw in the canvas
*/
class Render{
    constructor(width, height, xAxis, yAxis, radius, ctx){
        // Data about the canvas dimensions
        this.width = width;
        this.height = height;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.radius = radius;

        // canvas context
        this.ctx = ctx;
        this.ctx.strokeStyle = "black";

        // 2D Paths to draw the plane and the circle 
        this.planePath = new Path2D();
        this.circlePath = new Path2D();

        this.planePath.strokeStyle = "black"
        this.planePath.moveTo(0, this.yAxis);
        this.planePath.lineTo(this.width, this.yAxis);
        this.planePath.moveTo(this.xAxis, 0);
        this.planePath.lineTo(this.xAxis, this.height);

        this.circlePath.arc(this.xAxis, this.yAxis, this.radius, 0, 2*Math.PI);

        // initial Color
        this.areaColor = 'black';
    }

    /** 
    * Change the color by the arg
    * @param {string} color - It's the color of the triangles area
    */    
    setAreaColor(color){
        if(color == 'None') return;
        this.areaColor = color;
    }

    /** 
    * Clean the BG
    */
    clearBG(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /** 
    * Draw the scene (the axis and the circle)
    */
    renderBG(){
        this.clearBG();
    
        let colorAux = this.ctx.strokeStyle;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke( this.planePath );
        this.ctx.stroke( this.circlePath );
        this.strokeStyle = colorAux;
    }

    /** 
    * Draw the tie (building with 4 triangles) with its lines
    * @param {Array[float]} [x, y] - Are the detructured cartesian coords of a point
    */
    renderTie([x, y]){
        let colorFillAux = this.ctx.fillStyle;

        //Draw areas (4 triangles)
        this.ctx.fillStyle = this.areaColor
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(this.width - x, this.height - y);
        this.ctx.lineTo(this.width - x, this.yAxis);
        this.ctx.lineTo(x, this.yAxis);
        this.ctx.lineTo(x, y);
        this.ctx.fill()
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.width - x, y);
        this.ctx.lineTo(x, this.height-y);
        this.ctx.lineTo(x, this.yAxis);
        this.ctx.lineTo(this.width-x, this.yAxis);
        this.ctx.lineTo(this.width-x, y);
        this.ctx.fill()
        this.ctx.fillStyle = colorFillAux;

        let colorStrokeAux = this.ctx.strokeStyle;

        // It's the line that connects the origin ith the point
        this.ctx.beginPath();
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(this.width - x, this.height - y);
        this.ctx.moveTo(this.width - x, y);
        this.ctx.lineTo(x, this.height - y);
        this.ctx.strokeStyle = "#00ff00"; // You're able to change this color
        this.ctx.stroke();

        // Parallel lines to the y axis
        this.ctx.beginPath();
        this.ctx.moveTo(x, this.height - y)
        this.ctx.lineTo(x, y)
        this.ctx.moveTo(this.width - x, y)
        this.ctx.lineTo(this.width - x, this.height - y)
        this.ctx.strokeStyle = "red" // You're able to change this color
        this.ctx.stroke();

        // Parallel lines to the x axis
        this.ctx.beginPath();
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(this.width-x, y)
        this.ctx.moveTo(this.width-x, this.height-y)
        this.ctx.lineTo(x, this.height-y)
        this.ctx.strokeStyle = "blue" // If you want, only I say
        this.ctx.stroke();

        this.ctx.strokeStyle = colorStrokeAux;
    }
    
    /** 
    * Draw a given point
    * @param {Array[float]} [x, y] - destructured cartesian coordinates in 2 float variables
    */
    renderPoint([x,y]){
        let colorStrokeAux = this.ctx.fillStyle;

        this.ctx.beginPath()
        this.ctx.fillStyle = 'black';
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, 5, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.fillStyle = colorStrokeAux;
    }
}
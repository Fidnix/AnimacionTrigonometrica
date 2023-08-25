/**
* @author Fidel Apari <fidel.moises0@gmail.com>
*/

/**
* It's the circle point that will be displayed on the scene
*/
class CirclePoint{
    constructor(centerX = 0, centerY = 0, angle = 0, radius = 10){
        // Origin data
        this.centerX = centerX;
        this.centerY = centerY;

        // Polar coords
        this.angle = angle;
        this.radius = radius;

        // Set the cartesian coords
        this.updateCoords();

        // Constants
        this.changeFactor = 0.00872665;
    }

    /** 
    * Change the angle by the change factor
    */
    updateAngle(){
        this.angle += this.changeFactor;
        this.updateCoords();
    }

    /** 
    * Update the cartesian coords
    */    
    updateCoords(){
        this.x = this.radius * Math.cos(this.angle) + this.centerX;
        this.y = - this.radius * Math.sin(this.angle) + this.centerY;
    }

    /** 
    * Return the cartesian coords
    * @return {Array[float]} It's an array (tuple) that refers to the current cartesian coords
    */
    getCoords(){
        return [this.x, this.y];
    }

    /** 
    * Returns an array with the trigonometric values of the point
    * @return {Array[float]} An array with the sin, cos and tan (respectivly)
    */
    getTrigoCoords(){
        return [Math.sin(this.angle), Math.cos(this.angle), Math.tan(this.angle)];
    }
}
/**
* Se refiere a un punto en el circulo cuya posicion se modifica por el tiempo mostrando las relaciones tringometricas que forma
*/

class TrigoPoint{
    // constructor(x = 0, y = 0) {
    //     this.x = x;
    //     this.y = y;
    // }

    constructor(centroX = 0, centroY = 0, angulo = 0, radio = 10){
        // Datos del entorno
        this.centroX = centroX;
        this.centroY = centroY;

        // La posicion del punto en coordenadas polares
        this.angulo = angulo;
        this.radio = radio;

        // La posicion del punto en coordenadas cartesianas
        this.upDateCoords();

        // Constantes
        this.factorDeCambio = 0.5;
    }

    // update(){
    //     y = SEMIEJE_Y - ( RADIUS**2 - (x - SEMIEJE_X)**2 )**0.5;
    //     x+=FotogramasEnX;
    // }

    updateAngle(){
        this.angulo += 0.00872665;
    }

    upDateCoords(){
        this.x = this.radio * Math.cos(this.angulo) + this.centroX;
        this.y = - this.radio * Math.sin(this.angulo) + this.centroY;
    }

    getCoords(){
        // console.log('sad')
        return [this.x, this.y];
    }

    getTrigoCoords(){
        return [Math.sin(this.angulo), Math.cos(this.angulo), Math.tan(this.angulo)];
    }
}
class Render{
    constructor(ancho, altura, semiejeX, semiejeY, radio, ctx){
        this.ancho = ancho;
        this.altura = altura;
        this.semiejeX = semiejeX;
        this.semiejeY = semiejeY;
        this.radio = radio;

        this.ctx = ctx;
        this.ctx.strokeStyle = "black";

        this.planePath = new Path2D();
        this.circlePath = new Path2D();

        this.planePath.strokeStyle = "black"
        this.planePath.moveTo(0, this.semiejeY);
        this.planePath.lineTo(this.ancho, this.semiejeY);
        this.planePath.moveTo(this.semiejeX, 0);
        this.planePath.lineTo(this.semiejeX, this.altura);

        this.circlePath.arc(this.semiejeX, this.semiejeY, this.radio, 0, 2*Math.PI);
        this.areaColor = 'black';
    }

    setAreaColor(color){
        // console.log(color);
        if(color == 'None') return;
        this.areaColor = color;
    }

    clearBG(){
        this.ctx.clearRect(0, 0, this.ancho, this.altura);
    }

    renderBG(){
        this.clearBG();
    
        let colorAux = this.ctx.strokeStyle;
        this.ctx.strokeStyle = 'black';
        // console.log('asd')
        this.ctx.stroke( this.planePath );
        this.ctx.stroke( this.circlePath );
        this.strokeStyle = colorAux;
    }

    renderTie([x, y]){
        let colorAux = this.ctx.fillStyle;
        //Draw areas (4 triangles)
        this.ctx.fillStyle = this.areaColor
        // console.log(this.areaColor);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(this.ancho - x, this.altura - y);
        this.ctx.lineTo(this.ancho - x, this.semiejeY);
        this.ctx.lineTo(x, this.semiejeY);
        this.ctx.lineTo(x, y);
        this.ctx.fill()
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.ancho - x, y);
        this.ctx.lineTo(x, this.altura-y);
        this.ctx.lineTo(x, this.semiejeY);
        this.ctx.lineTo(this.ancho-x, this.semiejeY);
        this.ctx.lineTo(this.ancho-x, y);
        this.ctx.fill()
        this.ctx.fillStyle = colorAux;

        //Vector Radio

        this.ctx.beginPath();
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(this.ancho-x, this.altura-y);
        this.ctx.moveTo(this.ancho-x,y);
        this.ctx.lineTo(x, this.altura-y);
        this.ctx.strokeStyle = "#00ff00";
        this.ctx.stroke();

        //Lineas secantes al eje x

        this.ctx.beginPath();
        this.ctx.moveTo(x, this.altura-y)
        this.ctx.lineTo(x, y)
        
        this.ctx.moveTo(this.ancho-x, y)
        this.ctx.lineTo(this.ancho-x, this.altura-y)
        this.ctx.strokeStyle = "red"
        this.ctx.stroke();

        //Lineas secantes al eje y

        this.ctx.beginPath();
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(this.ancho-x, y)

        this.ctx.moveTo(this.ancho-x, this.altura-y)
        this.ctx.lineTo(x, this.altura-y)
        this.ctx.strokeStyle = "blue"
        this.ctx.stroke();
    }

    renderPoint([x,y]){
        this.ctx.beginPath()
        let colorAux = this.ctx.fillStyle;
        this.ctx.fillStyle = 'black';
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, 5, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.fillStyle = colorAux;
    }
}
class HTMLInputs{
    constructor(trigoSpanClassNames = [], colorInputClassName = ''){
        if(trigoSpanClassNames != []){
            this.spans = []
            
            for(let name of trigoSpanClassNames){
                this.spans.push(document.getElementById(name))
            }
        }
        
        this.colorInput = document.getElementById(colorInputClassName);
        this.currentColor = '';
        this.setColor();
        let self = this
        document.addEventListener('input', ()=>{self.setColor.call(self)})
    }

    setValues(datos = []){
        if(datos.length != this.spans.length) return;
        for(let i = 0; i < datos.length; i++){
            this.spans[i].innerHTML = datos[i];
        }
    }
    
    setColor (){
        let arr_hex_to_rgb = this.hexToRgb( this.colorInput.value.substr(1) )
        this.currentColor = `rgba(${ arr_hex_to_rgb[0]}, ${arr_hex_to_rgb[1] }, ${arr_hex_to_rgb[2] }, .5)`
        // console.log('Set color: ' + this.getColor())
    }

    getColor(){
        // console.log('Current color: ' + this.currentColor)
        return this.currentColor;
    }

    hexToRgb(color){
        let aRgbHex = color.match(/.{1,2}/g);
        let aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    }
}

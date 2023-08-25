/**
* @author Fidel Apari Sanchez <fidel.moises0@gmail.com>
*/

/**
* It allows manage all html aspects in only one class
* @note this is the most awful code file in the repository
*/
class HTMLInputs{
    constructor(trigoSpanClassNames = [], colorInputClassName = ''){
        // Declare the span tags in an array
        if(trigoSpanClassNames != []){
            this.spans = []
            
            for(let name of trigoSpanClassNames){
                this.spans.push(document.getElementById(name))
            }
        }
        
        // All aspects about color input
        this.colorInput = document.getElementById(colorInputClassName);
        this.currentColor = '';
        this.setColor();

        // Initialize an event listener
        let selfRef = this;
        document.addEventListener('input', ()=>{selfRef.setColor.call(selfRef)})
    }

    /** 
    * Update the span data
    */
    updateSpanValues(data = []){
        if(data.length != this.spans.length) return;
        for(let i = 0; i < data.length; i++){
            this.spans[i].innerHTML = data[i];
        }
    }

    /** 
    * set the color to the current one, but considering its rgba equivalent
    */
    setColor (){
        let arr_hex_to_rgb = this.hexToRgb( this.colorInput.value.substr(1) )
        this.currentColor = `rgba(${ arr_hex_to_rgb[0]}, ${arr_hex_to_rgb[1] }, ${arr_hex_to_rgb[2] }, .5)`
    }

    /** 
    * Return the rgba color of the class
    * @return {string} RGBA color
    */
    getColor(){
        return this.currentColor;
    }

    /** 
    * Auxilary method that tranforms a color from hex -> rgba
    * @param {string} color - Color with hex notation
    * @return {string} Same color with rgba notation (alpha to 0.5 by default)
    */
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

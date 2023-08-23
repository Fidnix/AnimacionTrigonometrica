/**
* @author Fidel Apari <fidel.moises0@gmail.com>
*/

/**
* This class let us using the canvas and controllate the animations data
* @extends None
*/

class Escena{
    constructor(fps){
        this.fps = fps;
        this.timeInterval = 1/this.fps;
        this.funcList = [];
        this.bucle;
        this.i = 0;
    }

    /**
     * Adds a new animation function to the animation methods list
     * ...
     * It allows to controllate the animation that will be displayed
     * @param {string} func - The animation function that will be displayed in the loop, this parameter must be a string to be callable
     */
    addAnim(funcOwner, funcName, funcArgs = [], testable = false){
        this.funcList.push(new RecursiveCallable(funcOwner, funcName, funcArgs, testable));
    }

    playAnims(){
        // let i = 0;
        // let out;
        let tempArgs = [];
        this.bucle = setInterval(
            ()=>{
                // for(let funcMatriz of this.funcList){
                //     tempArgs = [...funcMatriz.args];
                //     console.log(tempArgs)
                //     for(let i = 0; i < tempArgs.length; i++){
                //         if(typeof tempArgs[i] == 'function'){
                //             tempArgs[i] = tempArgs[i]();
                //         }
                //     }
                //     console.log(tempArgs)
                //     funcMatriz.name.call(funcMatriz.owner, ...tempArgs)
                // }
                // // i+= out;

                for(let recursiveCallable of this.funcList){
                    // console.log(recursiveCallable)
                    recursiveCallable.run()
                }
            }, this.timeInterval*1000
        );
    }

    stopAnims(){
        clearInterval( this.bucle );
    }
}
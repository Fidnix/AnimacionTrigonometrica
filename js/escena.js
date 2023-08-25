/**
* @author Fidel Apari <fidel.moises0@gmail.com>
*/

/**
* This class let us execute the animation and manage what methods will display
*/
class Timer{
    constructor(fps){
        this.fps = fps;
        this.timeInterval = 1/this.fps;
        this.funcList = [];
        this.loop;
    }

    /**
     * Adds a new animation function or method to be executed for the animation
     * @param {string} func - The animation function that will be displayed in the changeFactor, this parameter must be a string to be callable
     */
    addAnim(funcOwner, funcName, funcArgs = [], testable = false){
        this.funcList.push(new RecursiveCallable(funcOwner, funcName, funcArgs, testable));
    }

    /** 
    * Initializes the animation
    */
    playAnims(){
        this.loop = setInterval(
            ()=>{
                for(let recursiveCallable of this.funcList){
                    recursiveCallable.run();
                }
            }, this.timeInterval*1000
        );
    }

    /** 
    * The name say it
    */
    stopAnims(){
        clearInterval( this.loop );
    }
}
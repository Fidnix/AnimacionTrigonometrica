/**
* @author Fidel Apari Sanchez <fidel.moises0@gmail.com>
*/

/**
* This class allows execute nested args which are another methods
*/
class RecursiveCallable{
    constructor(funcOwner, funcName, funcArgs = [], testable = false){
        this.owner = funcOwner;
        this.name = funcName;
        this.args = funcArgs;
        this.testable = testable;
        this.evaluatedArgs = [...funcArgs];
    }

    /** 
    * Evaluate all method args (if they're functions or class methods)
    */
    evalArgs(){
        for(let i = 0; i < this.args.length; i++){
            if(typeof this.args[i] == 'function'){
                this.evaluatedArgs[i] = this.args[i]();
                continue;
            }
            if(typeof this.args[i] == 'object'){
                this.evaluatedArgs[i] = this.args[i].run();
            }
        }
    }

    /** 
    * Run the current method with all its arguments
    * @return {Whatever} It's up to the current method
    */
    run(){
        this.evalArgs();
        if(this.testable){
            console.log(this.args);
            console.log(...this.evaluatedArgs)
            console.log(this.evaluatedArgs)
        }
        return this.name.call(this.owner, ...this.evaluatedArgs);
    }
}
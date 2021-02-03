

class Myclass{
    constructor(name){
        this.name=name
    }

    talk(){
        console.log(this);
        return this
    }
    speak=()=>{
        console.log(this);
        return this
    }
}

obj1= new Myclass("bhanu");
var obj ={}

//Named Function
obj.greet = function(){

    var para = document.createElement("p")
    para.textContent="Simple Function"

    document.body.append(para)

    return function(){
        
        var para = document.createElement("p")
        
        para.textContent=" Function returning function"
    
        document.body.append(para)
        
    }
}

obj.greeting = function(){

    var grtBtn = document.getElementById("greet")

    console.log(obj.greet)
    console.log(obj.greet()) //undefined

    grtBtn.addEventListener('click',obj.greet())
}

obj.greeting();


obj.funAsArg = function(funRef){

   var ref = funRef();
    
   console.log(ref);
}

obj.funAsArg(function(){return "I am annonymous"})


obj.funParam = function(name,city){

    
    console.log(name+city)
}

obj.funParam("ram");
obj.funParam("ram","chennai");
obj.funParam();


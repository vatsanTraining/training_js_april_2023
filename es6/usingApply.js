function delay(funcRef, time){
    setTimeout(()=>{
        funcRef.apply('hello')
    },time)
}

function sayHello(greet){

    return "Hi"+greet
}

delay(sayHello,"Ganesh")
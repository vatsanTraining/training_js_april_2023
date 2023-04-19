var obj ={}


obj.handler = function(prefColor){

    return function(){
        document.body.style.backgroundColor=prefColor

    }
}

obj.attach= function(){

    var greenButton = document.getElementById("green")

    greenButton.addEventListener('click',obj.handler('#00ff00'))

    var purpleButton = document.getElementById("purple")

    purpleButton.addEventListener('click',obj.handler('#a020f0'))

}

obj.attach()
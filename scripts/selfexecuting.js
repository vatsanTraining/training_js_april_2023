var obj =(function(){

    function one(){

        return "Fisrt Function";
    }

    function two(){
        return "Second Function";
    }

    return {

        first :one
    }

})()



console.log(obj.first())
console.log(obj.second())


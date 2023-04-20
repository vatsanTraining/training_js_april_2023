(function(){

// generate any  sequence of numbers 
    function* generateSequence(){

        let endValue = 5
        let i=0
        while(i<endValue){
            yield  i *2
            i++
        }

    }

    let randomGen = generateSequence()

     console.log(randomGen.next())
     console.log(randomGen.next())
     console.log(randomGen.next())
     console.log(randomGen.next())
     console.log(randomGen.next())
     console.log(randomGen.next())

})();
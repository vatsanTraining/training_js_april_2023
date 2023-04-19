// function outer(){

//     var prefColor = 'red'

//     function inner(){
//         console.log('Color:='+prefColor)
//     }

//     inner()
// }

// function showPrefColor(){

//     console.log("MyChoice:="+ prefColor)
// }

// outer()
// showPrefColor()


function outer(){

    var prefColor = 'red'

   return  function (){
        console.log('Color:='+prefColor)

        return prefColor
    }

    
}

function showPrefColor(){

    var funcRef = outer()
    var prefColor = funcRef()
    console.log(funcRef)
   console.log("MyChoice:="+ prefColor)
}

showPrefColor()

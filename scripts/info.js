

function showSubHeading(){
            

    var heading = document.getElementById("subHead")

    heading.innerHTML="Valeo-Chennai"

}

 var info ={}

//function greet(){
  
info.greet =function(){

    var grtButton = document.getElementById("greet")

    grtButton.addEventListener('click',function(event){
        console.log("Event fired")
        console.log(event.target.id)
    });
}

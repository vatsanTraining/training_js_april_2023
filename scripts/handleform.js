var obj ={}


obj.handler = function(){

  var regForm =  document.querySelector("form")

  regForm.addEventListener('submit',function(event){
    console.log("Submit Event Fired");
    event.preventDefault()
  })
}

obj.blurHandler = function(){

    var userNameFld =  document.getElementById("userName")
  
    userNameFld.addEventListener('blur',function(event){
      console.log('Blur Event Fired');
      var name = this.value
      var msgBox = document.getElementById("msg")

      if(name.length <3 || name.length>8){
        var message = 'invalid'
        var color ='red'

      } else {
        var message = 'valid'
        var color ='green'
      }
      
      msgBox.innerHTML=message
      msgBox.style.color = color
    })
  }
  
obj.handler();
obj.blurHandler()
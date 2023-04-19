var obj ={}

obj.countLikes  = function(){

    var likeBtn = document.getElementById("likeBtn")
    
  var count =0
  
    likeBtn.addEventListener('click',function(){

        var msgBox = document.getElementById("msg")

          ++count;
          msgBox.style.fontSize='20px'
          msgBox.style.backgroundColor='#00ff00'


          msgBox.innerHTML=count
    })
}

obj.countLikes();
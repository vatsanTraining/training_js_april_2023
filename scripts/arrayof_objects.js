var Item = function(id,description,category){
    this.id = id
    this.description= description
    this.category=category
}

var btnData = [
            {'attr':'id','text':'snax'},
             {'attr':'id','text':'breakfast'}
            ]

var obj ={}

obj.init=function(){

    var photos = [
            new Item(101,'cake','snax'),
            new Item(102,'burger','snax'),
            new Item(103,'icecream','snax'),
            new Item(104,'idly','breakfast'),
            new Item(105,'vada','breakfast')
        ]

    return photos;
}

obj.eventHandler=function(choice){

    return function(){

        return obj.render(choice)
}

}

obj.cleanup =function(){

    var imgList = document.querySelectorAll('img');
    for(var i=0;i<imgList.length;i++){
        imgList[i].remove()
        
    }

 
}

obj.makeImage =function(ref){

    var image =document.createElement('img')
        image.setAttribute('src','../pictures/'+ref.description+'.png')
        image.setAttribute('alt',ref.description)
        image.setAttribute('class','thumbnail')

        return image
}
obj.makeButton =function(){

    btnData.forEach(function(eachItem){
        var btn =document.createElement('button')
        btn.setAttribute(eachItem.attr,eachItem.text)
        btn.innerHTML=eachItem.text.toUpperCase()
     document.getElementById("options").append(btn)
    })
   

}
obj.render =function(choice){

    obj.cleanup()
    var photoSection = document.getElementById('menu')
    
    obj.init().filter(function(eachElement){  

        return eachElement.category==choice

    }).map(function(eachElement){

        var new_element =obj.makeImage(eachElement)

        photoSection.append(new_element)

    })

}

obj.handler=function(){

    var snaxButton = document.getElementById('snax')

    snaxButton.addEventListener('click',obj.eventHandler('snax'))

    var bfastButton = document.getElementById('breakfast')

    bfastButton.addEventListener('click',obj.eventHandler('breakfast'))

}
obj.makeButton()
obj.handler()

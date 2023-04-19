var obj ={}

obj.init=function(){

    var photos = ['cake','burger','icecream']

    return photos;
}

obj.render =function(){

    var photoSection = document.getElementById('menu')

    obj.init().map(function(eachElement){

        var image =document.createElement('img')
        image.setAttribute('src','../pictures/'+eachElement+'.png')
        image.setAttribute('alt',eachElement)
        image.setAttribute('class','thumbnail')
    
        photoSection.append(image)
    
    })

}


obj.render()
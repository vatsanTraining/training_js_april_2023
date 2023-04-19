class Image{

    constructor(src,altText){
        this._src=src
        this._altText=altText
    }

    set src(src){

        if(src.includes('jpg')){
            this._src = src

        } else {
            this._src ='abc.png'
        }
    }
    get src(){
        return this._src
    }
    set altText(altText){

        this._altText = altText+"Added"
    }
    get altText(){
        return this._altText.toUpperCase()
    }
}

function showImage(image){

   console.log(image.altText)
   console.log(image.src)
}

let logo = new Image('../pictures/icecream.png','Ice Cream')

let pict = new Image()

pict.src = '../pictures/cake.png'
pict.altText='Cakes'

showImage(logo)

showImage(pict)


let javascript = new Book("java Script","ram")

console.log(javascript.bookName)
console.log(javascript.author)
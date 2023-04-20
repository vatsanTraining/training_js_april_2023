class Link{
    constructor(href,text){
        this.href=href
        this.text=text
    }

    toString(){
        return this.href+':' +this.text
    }
    show(){
        return this.text.toUpperCase()
    }
}


class ImageLink extends Link{

    constructor(href,text,logo){
       super(href,text)
        this.logo=logo
    }

     calculate(){
        return "length is 6"
    }
    toString(){
        return this.href+':' +this.text+','+this.logo
    }
    display(){
        return this.href.toUpperCase();
    }
}
let homeLink = new Link('/home','Home');
console.log(homeLink.toString())
//console.log(homeLink.display())

let emailLink = new ImageLink('./email','Contact','email.png')

console.log(emailLink.toString())
//console.log(emailLink.show())
console.log(ImageLink.calculate()) // static methods are called with ClassName rather than instance name
//emailLink.calculate();


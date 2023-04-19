class Book{

    constructor(bookName,author){

        this._bookName = bookName
        this._author=author
    }

     set bookName(bookName){
        this._bookName = bookName
     }
     get bookName(){
        return this._bookName
     }

     set author(author){
        this._author = author
     }
     get author(){
        return this._author
     }
}

export default Book

export function show(){

    console.log("export show ")

    return "Bye Bye"
}
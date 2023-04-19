import Book, {show} from './Book.mjs'

const javaScript = new Book("Effective Js6","Ram")

console.log(javaScript.author)
console.log(javaScript.bookName)
console.log(show())
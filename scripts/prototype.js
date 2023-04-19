var Item = function(id,description,category){
    this.id = id
    this.description= description
    this.category=category
}

var printer = new Item(20,"HP Printer",'elect');
  printer.offer = 'ups'

  console.log(printer.offer)
  console.log(printer.discount)

var tv = new Item(10,'sony Tv','elect')

Item.prototype.discount = 0.5

var obj ={}
console.log(obj)

console.log(tv)
console.log(tv.discount)
console.log(tv.offer)


class CreditCard {

  
    #cvv
    constructor(cardHolderName,cvv){
     
        this.cardHolderName=cardHolderName
        this.#cvv=cvv
    }

     #show(){
           return "I can share "
    }
    toString(){
        return this.#show()
    }

}



let card = new CreditCard('ram',45);

console.log(card.cardHolderName)
console.log(card.cvv)
console.log(card.toString())
//console.log(process)
//console.log(glbal)

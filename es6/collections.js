
function usingSet(){

    const city = ['sri','hari','vikas']

    const words =new Set();

     words.add('thanks')
     words.add('hello')
     words.add('thanks')

     console.log(words)
     console.log('Is hello exisit'+ words.has('hello'))

    console.log(words.values());

        for(let eachItem of words.values()){
             console.log(eachItem)
        }

    const details = new Map();

     details.set('first','Ramesh');
     details.set('second',{'id':'suresh','mark':89})

     console.log(details.get('first'))
     console.log(details.get('second'))

       for(let eachEntry of details.values()){
        console.log(eachEntry)
       }

       words.forEach((value,key)=>{
        console.log(value )
        console.log(key)
       })
}

usingSet();
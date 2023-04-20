const mypromise = new Promise((resolve,reject)=>{

     resolve({'id':450,'itemName':'kevler'})
     //reject(new Error("Details Not found"))
})

console.log(mypromise)

mypromise.then( data => console.log('Data'+data))
mypromise.catch(err => console.log(err))

const mypromise2 = new Promise((resolve,reject)=>{

     let status = true
      if(status){

        setTimeout(()=>{
            resolve({'id':452,'itemName':'Teflon'})
        },4000)
        

      } else {
        reject(new Error("Details Not found"))
      }
})

//mypromise2.then(data => console.log(data)).catch(err => console.error(err))

mypromise2.then((err => console.error(err),data => console.log(data)))
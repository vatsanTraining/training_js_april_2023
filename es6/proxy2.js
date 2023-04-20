function delay(funcRef,time){
    return new Proxy(funcRef,{
      apply(target,prop,value){
        setTimeout(() => {
          target.apply(prop,value)
        }, time);
      }
    })
   
  }
  
  function sayHi(user){
    console.log("hello"+user)
  }
  
  function bye(){
    console.log('bye bye')
  }

  
  let hiProxy =delay(sayHi,2500)
  
  console.log(hiProxy('ram'))
  
  let byeProxy =delay(bye,1500)
  
  console.log(byeProxy())
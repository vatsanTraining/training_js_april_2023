(function(){

    let target = {}

    

    console.log(target)
    let pxy = new Proxy(target,{

        set:function(target,prop,value){

            if(!value.startsWith('@')){
                throw new Error('Invalid Password')
            }
           return  Reflect.set(target,prop,value)
        },
        get:function(target,prop,value){

            if(target.password.length<6){
               target.password = target.password.concat("123")

            }
            return Reflect.get(target,prop,value)

        }
    })

    
    pxy.password ='@abcd'
    console.log(pxy.password)
    console.log(target)
})();

let data = new Map()

 data.set('hse',{'pid':'cp1020','scripttype':'webapp'})
 data.set('mtp',{'pid':'cp1020','scripttype':'webapp'})
 data.set('mail',{'pid':'cp1020','scripttype':'webapp'})


 console.log(data.values())

 K.Srivatsan
 vatsank@gmail.com
 9444380320
 
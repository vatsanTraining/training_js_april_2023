let targetObj = {  }; 

let handler = { 
 set(target, prop, value){
     console.log('value'+value)
    if(!value.startsWith('@'))
    {
       throw Error("Invalid Password Error");
    } 
    return Reflect.set(target, prop, value); 
}
}
dataStore = new Proxy(targetObj, handler); 
dataStore.password ='@abcd';
console.log(dataStore.userName);
console.log(dataStore.password);


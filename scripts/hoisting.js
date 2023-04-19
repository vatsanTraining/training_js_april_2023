console.log(double(5)); // => 10
// Declare
function double(num) {
  return num * 2;
}

function hoist(){
    console.log(userName)

     var userName ='ramesh'
}

hoist()

var city ='chennai'
function hoist2(){
    console.log( 'before:='+city)
       city ='madurai'

    console.log('After:='+city)
}
hoist2()
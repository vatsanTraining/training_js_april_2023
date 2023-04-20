(function(){

    function* generate(){

        let data1 =yield 2
        console.log(data1)
      let data2 =  yield 4+data1
      console.log(data2)
       let data3 = yield 8+data2
       console.log(data3)
        return 100
    }

    let iterator = generate();
    console.log(iterator.next())
    console.log(iterator.next(10))
    console.log(iterator.next(20))
    console.log(iterator.next(30))



})();
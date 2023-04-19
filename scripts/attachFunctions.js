function calculateInterest(roi){

  return this.amount * roi;
}

function calulateFine(startDate,endDate){

    var days = edate.getDate()-sdate.getDate();
    
    if(days<7){
        return this.weight*20 

    } else {
        return this.weight*30
    }
}

var savingAcc = {amount:5000}

var fixedDep ={amount:5000}


console.log('Savings :='+calculateInterest.call(savingAcc,0.05))
console.log('Fixed Deposit:='+calculateInterest.call(fixedDep,0.10))


var respFunction = calculateInterest.bind(savingAcc,0.20)
console.log(respFunction)

console.log('result:='+respFunction())

var sdate =new Date();

   sdate.setFullYear(2023,4,10);

   var edate =new Date();

   edate.setFullYear(2023,4,15);

//   console.log((edate-sdate)/(60*60*24*1000))

var godwon = {weight:500}
console.log(calulateFine.apply(godwon,[sdate,edate]))


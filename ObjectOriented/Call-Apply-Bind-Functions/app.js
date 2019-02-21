obj1 = {
    number1:100,
    number2:200
}

obj2 ={
    number1:500,
    number2:220
}

const Numbers = function(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

// Numbers Functionunda this 


Numbers.call(obj2,30,400);
Numbers.call(obj1,30,400);

Numbers.apply(obj1,[200,1000]);
Numbers.apply(obj2,[200,1000]);




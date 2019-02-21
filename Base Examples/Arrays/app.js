let value;

const numbers = [13,22,56,33,90,113,51];

value=numbers.length;
value=numbers[4];
value =numbers[numbers.length-1];

value = numbers.indexOf(90);

numbers.push(999);
numbers.unshift(103);
numbers.shift()

numbers.splice(1,4);

numbers.reverse();

numbers.sort(
    function(x,y){
        return x-y;
    }
);

value = numbers;


console.log(value);


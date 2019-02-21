var numbers=[1,2,3,9,6];
console.log(numbers);
console.log(typeof numbers);

var person={
    name: "Ekrem",
    age: 20
}
var person_klon=person;
console.log(person);
person.age=21;
console.log(person_klon);

console.log(typeof person_klon);

var date=new Date;

console.log(date);
console.log(typeof date);

var Kimlik=function(){
    console.log("Ekrem TAŞ");
}

Kimlik();
console.log(Kimlik);
console.log(typeof Kimlik);

//Primitive İlkel veri tipi 
var a=100;
var b=a;

console.log(a,b);

a=250;

console.log(a,b);

//Reference Veri Tipi

var c=[100,200,300];
var d=c;
console.log(c,d);

c.push(550);

console.log(c,d);
c.pop(550);
console.log(c,d);



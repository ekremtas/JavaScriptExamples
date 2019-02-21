const programmer={
    name:"Ekrem",
    surname:"TAŞ",
    age:20,
    lang:["c","c#","c++"],
    address:{
        country:"Turkey",
        city:"İstanbul",
        street:"Çorlu"

    },
    work : function(){
        console.log("object üzerinden function çagırma");
        return "a";
    }


}

programmer.work();

console.log(programmer.lang[2]);
console.log(programmer.name);
console.log(programmer.work());

document.body.innerHTML = "Ekrem TAŞ " + programmer.address.country;

const programers=[{name:"ekrem",age:20},{name:"burak",age:33}];
console.log(programers[0]);
console.log(programers[1].age);

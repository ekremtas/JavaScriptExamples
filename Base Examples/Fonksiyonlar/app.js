function hello(name="bilgi yok",age="bilgi yok"){

    /*if(typeof name === "undefined"){
        name="Ad Bilgisi girilmedi";
    }
    if(typeof age === "undefined"){
        age="Ad Bilgisi girilmedi";
    
    }
    */
    console.log(`Ad: ${name} Yaş: ${age}`)

}

hello("ekrem",12);

function Square(x){
    return x*x;
}

function cube(y){
    return y*y*y;
}

console.log (
            cube(
                Square(3)
                )
            );


const Merhaba = function(name){
    console.log(`Merhaba ${name}`);
}  

Merhaba("ekrem");


(function(surname){
    console.log(`soyadı: ${surname}.`);
})("TAŞ");

const okul_bilgilerim = {
    okul_adi : "Namıkkemal Üniversitesi",
    sinif:function(g_yılı){
        console.log(`Sınıfı: ${2019-g_yılı}`);
    }

}

console.log(okul_bilgilerim.okul_adi);
console.log(okul_bilgilerim.sinif(2016));




const langs=["python","javascript","Bootstrap"];

langs.forEach(function(langs,a){
    console.log(langs,a);
})


const users = [
    {
        tel_num:"02023334455",operator:"TurkTelekom"
    },{
        tel_num:"12342131231",operator:"Turkcell"
    },{
        tel_num:"00001111010",operator:"Vodafone"
    }
];

const contact = users.map(function(user_information){
    return user_information.operator;

})
console.log(contact);

const MyObject = {
    a:123,
    b:"asd",
    c:true
}

for(let key in MyObject){
    console.warn(key);
}





// const ekrem = (data) => console.log(data);

// ekrem(133333);

// const arrayim = (xxx) => {
//     xxx.forEach( e => {
//         console.log(e);
//     });
// }

// x = ["ekrem","tas",111,2321];

// arrayim(x);


//Arraylerde Destruction
let Nmbr1,Nmbr2;
let sayilar = [12,33,44,56,78];
[,,,Nmbr1,Nmbr2]=sayilar;
console.log(Nmbr1,Nmbr2);

//Object Destrction

let MyObject = 
{
    a:123,
    b:456,
    c:789,
    d:"ad",
    e:"soyad"

}

const {a:numaram,b:ekrem,e:ss} = MyObject;

console.log(numaram,ekrem,ss);

const langs =  () => ["hatml","javascript","css"];

console.log(langs());

const [langs1,langs2] = langs();

console.log(langs1,langs2);

const Contach={
    name:"ekrem",
    surname:"tas",
    tel:123333442424,
    adres: () => console.log("Adres kaydı bulunmamaktadır...")
}

const {name:isim,surname:soyisim,tel,adres}=Contach;

console.log(isim,soyisim,tel);
adres();

const degerim = ["ekrem","tas"];

console.log(...degerim);



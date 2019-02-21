const school = {
    name : "Namikkemal",
    where : "Tekirdag",
    age : 22

}

// for-in ile gezindiğimiz yerlerdeki degerlerim indexlerini bize verir.

for(let a in school){
    console.log(a);
    console.log(school[a]);
}

const SchoolSections = ["Bilgisayar","Elektronik","Biyomedikal"];

for(let a in SchoolSections){
    console.log(a,SchoolSections[a]);
}

const xcx = "MyJob";

for(let x in xcx){
    console.log(x,xcx[x]);
}

//for-of ile gezindiğimiz yerlerdeki değerlerini verir.

//fakat object üzerinde gezinmek için kullanamıyoruz.

for(let a of SchoolSections){
    console.log(a);
}

for(let a of xcx){
    console.log(a);
}

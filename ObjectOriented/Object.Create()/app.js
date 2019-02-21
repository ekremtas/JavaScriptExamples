const School = function(){
    
}
School.prototype.test1 = function(){
    console.log("test-1");
}
School.prototype.test2 = function(){
    console.log("test-2");
}

const asd = new School();

asd.test1();
console.log(asd);

const University =function(name,location){
    this.name = name;
    this.location = location;
}


// Object Create ile kalıtım yapmadan önce direkt object'e bağlanıyor.
// School functionunun prototype'ına bağlamadan önce

const YourUniversity = new University();

YourUniversity.name = "A.G.H. Poland University";
YourUniversity.location = "Poland"; 

console.log(YourUniversity);

// burada kalıtım yapmasını saglıyoruz.
University.prototype = Object.create(School.prototype);

// Burada University prototype ' ına ekleme yapıyoruz.
// Burada eklediğimiz functiondan sonra kalıtımı eklenmiş oluyor.
University.prototype.UniTest = function(){
    console.log("Uni---test");
}

// Kalıtım yaptıktan sonra test1 ve test2 functionlarınında eklendiğini görüyoruz.
const myUni = new University();
myUni.name = "Namıkkemal üniversitesi";
myUni.location = "Tekirdağ / Çorlu";

console.log(myUni);

// kalıtımımızın gerçekleştiğini kontrol ediyoruz.
myUni.test1();
myUni.test2();

myUni.UniTest();

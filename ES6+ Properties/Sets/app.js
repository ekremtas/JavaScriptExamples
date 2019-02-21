// Set arrayle benzer fakat en büyük farkı içinde aynı değerden birden fazla eklenememesi.

// 2 tane set oluşturdum.
const Myset = new Set();
const Myset2 = new Set([111,"ekrem",{name:"mahmut",name2:"salih",age:220}]);

// aynı degerleri eklemeye çalıştım fakat eklenmiyor.
Myset.add("ahmet fatih");
Myset.add("ahmet fatih");
Myset.add("ahmet fatih");

//içinden deger sildim.
Myset2.delete(111);

//içine referans veri tipiyle array atadım çünkü karşılaştırma veya silme işlemlerinde hatayla karşılaşmamak için.
const a = [111,232,444];

Myset.add(a);

console.log(Myset);
console.log(Myset2);

// "ahmet fatih" degerinin Myset set'inin içinde olup olmamasını sorguladım.
console.log(Myset.has("ahmet fatih"));

//degerlerimizi görüntülemek için Foreach döngüsünü kullanabiliriz.

Myset.forEach(function(val){
    console.log(val);
});



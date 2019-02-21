// Array degerlerde bütün degerleri yan yana yazmamızda kolaylık saglıyor.
const Mylesson = ["Yazılım Mühendisliği","C# ile programlalama","Web ve programlama"];

console.log(Mylesson[0],Mylesson[1],Mylesson[2]);

console.log(...Mylesson);

// Arrayimizde bulunan degerleri baska bir array'e de aktarmamızda kolaylık saglıyor.
const Newlesson = ["JavaScript","Fizik","Matematik",...Mylesson];

console.log(Newlesson);

console.log(...Newlesson);

console.log(...Newlesson[2]);

const Topla = (a,b,c) => console.log(a+b+c);

const Numberer = [123,456,789];

Topla(...Numberer);

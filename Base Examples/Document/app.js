let value = document.all;
// value = document.body;
// value = document.all[length];

let elements = document.all;

// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }

let collections = Array.from(document.all);

// elements.forEach(function(element) {
//     console.log(element);
    
// });
alert(typeof collections);

collections.forEach(function(element){
    console.log(element);
});


console.log(value);
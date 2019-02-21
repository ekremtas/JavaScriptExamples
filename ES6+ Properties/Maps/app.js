// Maps key-value

let asdMap = new Map();

let key1 = () => 25;

asdMap.set(key1,"kenan");

let key2 = {
    name: "kerem",
    surname: "taş"
}

asdMap.set(key2,"2.anahtarımızın value su");

console.log(asdMap);

console.log(asdMap.get(key1));

//Foreach İle key value erişme

asdMap.forEach(function(value,key){
    console.log(key,value);
    
});

//for of ile görüntüleme

for(let x of asdMap){
    console.log(x)
}

for(let [x,y] of asdMap){
    console.log(x,y);
}

//Map Keys 

for(let i of asdMap.keys()){
    console.log(i);
}


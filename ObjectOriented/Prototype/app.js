function MyFunc(name,surname,age,date){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.date = date;
    this.birthday = () => {
        this.birthday = this.date -this.age;
        return this.birthday;
        //console.log(this.birthday);
        
    }
} 


MyFunc.prototype.showInfos = function(){
    console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.birthday} Birthday: ${this.birthday}`);

}


const ekrem = new MyFunc();
ekrem.name="ekrem";
ekrem.surname="tas";
ekrem.age=22;
ekrem.date=2019;



console.log(ekrem.birthday(2019));
console.log(ekrem);

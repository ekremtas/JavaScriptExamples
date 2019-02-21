function Person(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.ShowInfo = function(){
        console.log(this.name,this.age,this.salary);
    }

    this.NewName = function(Newname){
        this.name = Newname;
    }

}

const Person1 = new Person("Ekrem",20,500);
const Person2 = new Person("Burak",30,1000);

console.log(Person1);
Person1.ShowInfo();

Person2.ShowInfo();

Person2.NewName("Ahmet");

Person2.ShowInfo();

console.log(Person2.name.toUpperCase());



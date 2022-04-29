class Person{
    firstName="";
    lastName="";

    constructor(firstName,lastName){
        console.log("I am Constructor.");
        console.log(firstName,lastName);
        this.firstName=firstName;
        this.lastName=lastName;
    }
    name(){
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou(){
        return `Hi I'm ${this.name()}`;
    }
}

let Aman = new Person('Aman','Asthana');
let nm = Aman.name();
console.log(nm);
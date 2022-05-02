class Person {
    constructor(){  
        this.name = 'Max';       
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();






/*
Note: 
1. constructor is default function used to set properties of a class, it can be executed when instantiate the class. 
2. inside constructor, use `this` keyword to set up properties

3. we can use class in store an instance in a constant with a new person and then we can execute person.p.rintMyName()

*/

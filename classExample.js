//create a second class
class Human {
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
}

//create a class
class Person extends Human{
    //use contructor function to set up properties
    constructor(){  
        //execute parent constructor
        super();
        //use keyword this to set up properties
        this.name = 'Max';       
    }

    printMyName(){
        console.log(this.name);
    }
}

//create an instance of class Person with keyword new
const person = new Person();
person.printMyName();

person.printGender();






/*
Note: 
1. constructor is default function used to set properties of a class, it can be executed when instantiate the class. 
2. inside constructor, use `this` keyword to set up properties

3. we can use class in store an instance in a constant with a new person and then we can execute person.p.rintMyName()

4. we can let Person inherit Human
 - use keyword extends
 - in Person constructuor, add super() to execute parent constructor

*/

//create a second class
class Human {
   
    gener = 'male';  

    printGender = () => {
        console.log(this.gender);
    }
}

//create a class
class Person extends Human{
    
        name = 'Max';   
        gender = 'female';    

    printMyName = () => {
        console.log(this.name);
    }
}

//create an instance of class Person with keyword new
const person = new Person();
person.printMyName();

person.printGender();


/*
Note: 
for next generation class, 
1. not use constructor to set upn properties, 
2. not use super() when extends
2. use property like to attach methods, use arrow function
*/

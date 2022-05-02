// primitive type: 
//numbers, strings, booleans are primitive types, 
//whenever you reassign or you store
//a variable in another variable, it will copy the value.

//Reference type: objects and arrays are reference types, bellow example:

const person = { name: 'max'};
const secondPerson = person;
person.name = 'rose';
console.log(secondPerson);


/*
Important notes: the person object is stored in memory and in the constant person we store a pointer to that place in memory. If we assign person to secondPerson that pointer will be copied.

 If we changed person.name after having it copied, then, if we print now the secondPerson, the secondPerson will also be changed. Because the secondPerson is a pointer pointing to the same place as person. Both of them point to person object. 
 */

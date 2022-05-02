
// spread operator and rest operator are all ... (three dots)
//but used differently in different situation

//spread operator used is array or object

//rest operator used in function, and it stands for an array of all the arguments, below, a is the name of the array
const multiply = (...a) => {
    console.log("a = ", a);
    return a.map(n => n *5);
}

console.log(multiply(1,2,3));

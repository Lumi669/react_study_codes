const numbers = [1, 2, 3];

//pulling out 1 and 2 from array numbers, but not 3
[num1, num2] = numbers;
console.log(num2, num1);

//pulling out 1 and 3 from array, leave 2 out
[num1, , num3] = numbers;
console.log(num1, num3);

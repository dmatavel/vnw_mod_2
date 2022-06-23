console.log("1) Create an array with five itens and show then on the console:");

let itens;

itens = ["mouse", "keyboard", "smartphone", "monitor", "notebook"];
console.log(itens);

console.log("2) Use a method to add an item to the initial position of the array:");

itens.unshift("radio");
console.log(itens);

console.log("3) Use a method to remove the item at the final position of the array:");

itens.pop();
console.log(itens);

console.log("4) Use a method to add two itens at the final position of the array:");

itens.push("e-reader", "tv");
console.log(itens);

console.log("5) Use a method to remove the item at the initinal position of the array:");

itens.shift();
console.log(itens);

console.log("6) Use a method to organize in ascending order the following array '7, 5, 6, 3, 8, 9, 2, 1, 4'");

let numbers;

numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers);
numbers.sort();
console.log(numbers);
console.log("1) Implement a loop using for that counts numbers from 1 to 10.");

let number;

number = 1;
for(number; number <= 10; number++)
    console.log(number);

console.log("2) Implement a loop using while that counts numbers from 10 to 1.");

while(number-- > 1)
    console.log(number);

console.log("3) Implement a loop that counts odd numbers from 1 to 100.");

number = 1;
while (number <= 100)
{
    if (number % 2 != 0)
        console.log(number);
    number++;
}

console.log("4) Implement a loop that counts even numbers from 0 to 100.");

number = 0;
for ( ; number <= 100; number++)
{
    if (number % 2 == 0)
        console.log(number);
}
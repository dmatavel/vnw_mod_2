let age;

age = 18;
if (age >= 18)
    console.log("Age is greater than or equal to 18.");
else
    console.log("Age is lesser than 18.");

let isHuman;

isHuman = true;
if (age >= 18 && isHuman)
    console.log("Congratulations! You are a human with more than 18 years.");
else
    console.log("Try with another age or specie.");

let birthDay;
birthDay = "Janeiro";
if (birthDay == "Janeiro" || birthDay == "Dezembro")
    console.log("Happy Birthday!");

let firstName;

firstName = "Rafael";
if (firstName[0] == 'R')
    console.log("Your name starts with 'R'.");
else
    console.log("Your name does not start with 'R'.");

let secondName;

secondName = "Michelangelo";
for (i = 0; secondName[i]; i++)
{
    if (secondName[i] > 6 || firstName[0] == 'R')
        console.log("Your name has more than six letters and starts with 'R'.");
        break;
}
console.log("1) Create an object that contains at least three properties about you.");

let student = {
    name: "Danilo",
    age: 32,
    school: "VaiNaWeb"
};

console.log(student.name);
console.log(student.age);
console.log(student.school);

console.log("2) Add a new property without changing youtr initial object.");

student.city = "Rio de Janeiro";
console.log(student);

console.log("3) Remove a property of this object.");

delete student.city;
console.log(student);

console.log("4) Create an array called 'register' containing at least 5 objects. Each object must be given the following properties: name, age, phone, friends. In the friends property, add at least 4 items. Show the name of one friend from each list in the console.");

let register;

register = [
    {
        name: "Bruce Wayne",
        age: "30",
        phone: "2222-2222",
        friends: ["Gordon", "Alfred", "Selina", "Robin"]
    },
    {
        name: "Kenshin Himura",
        age: "32",
        phone: "3333-3333",
        friends: ["Kaoru Kamiya", "Sanosuke Sagara", "Yahiko Myouji", "Megumi Takani"]
    },
    {
        name: "Mônica",
        age: "10",
        phone: "4444-4444",
        friends: ["Cebolinha", "Magali", "Cascão", "Chico Bento"]
    },
    {
        name: "Bob Esponja",
        age: "20",
        phone: "5555-5555",
        friends: ["Patrick", "Lula Molusco", "Seu Cirigueijo", "Sandy"]
    },
    {
        name: "Goku",
        age: "25",
        phone: "6666-6666",
        friends: ["Chichi", "Buma", "Kuririn", "Mr. Kami"]
    }
]

console.log("5) Show the name of one friend from each list in the console.");

console.log(register[0].name);
console.log(register[1].name);
console.log(register[2].name);
console.log(register[3].name);
console.log(register[4].name);
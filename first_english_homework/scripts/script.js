console.log("1) Create 3 variables, each one with an array: comedy; action; fantasy.");
console.log("2) Within each array, insert 3 objects, containing: title, director, year.");

let comedy;

comedy = [
    {
        title: "Life of Brian",
        director: "Terry Jones",
        year: "1979"
    }
]

console.log(comedy);

let action;

action = [
    {
        title: "Batman Begins",
        director: "Christopher Nolan",
        year: "2005"
    }
]

console.log(action);

let fantasy;

fantasy = [
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: "2001"
    }
]

console.log(fantasy);

console.log("3) Choose a variable and insert a condition for it (condition of your choice) with the following message to the console: if: 'My favorite movie is...' else: 'Not even 5 stars...'");

let movie;

movie = "The Godfather";
if (movie == "The Godfather")
    console.log("My favorite movie is The Godfather.");
else
    console.log("Not even five stars.")
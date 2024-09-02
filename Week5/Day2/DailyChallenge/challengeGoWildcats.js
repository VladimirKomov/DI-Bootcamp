const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array,
//     add an exclamation point (ie. “!”) to the end of every username.
const usernames  = [];
gameInfo.forEach(game => usernames.push(`${game.username}!`));
console.log(usernames );

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
const winners = [];
gameInfo.forEach(game => game.score > 5 ? winners.push(game.username) : null);
console.log(winners);

// Find and display the total score of the users.
const totalScore = gameInfo.reduce((acc, game) => acc + game.score, 0);
console.log(totalScore);
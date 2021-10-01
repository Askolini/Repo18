let rockStar = new Map(
    [
        ["artist", "The Rolling Stones"],
        ["song", "Angie"],
        ["album", "Goats Head Soup"],
        ["singer", "Mick Jagger"],
    ]
);

let newRock = new Map();

for ( let [key, value] of rockStar.entries()) {
    !key.includes("a")?newRock.set(key, value): null;
}

console.log(newRock);

module.exports = { rockStar, newRock };
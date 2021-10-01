function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}

function* insideGenerator1() {
    for ( i = 1; i < 6; i++) {
        yield x = i;
    }
}

function* insideGenerator2() {
    for ( i = 10; i < 16; i++) {
        yield x = i;
    }
}

function* insideGenerator3() {
    for ( i = 6; i < 10; i++) {
        yield x = i;
    }
}

var iterator = myGenerator();

var fifteenArray = [];

for ( let i = 0; i < 16; i++) {
    let konj = iterator.next()
    if ( i != 15 ) {
        fifteenArray[i] = konj.value + "#,";
    } else {
        fifteenArray[i] = konj.value + "!";
    }

}

console.log(...fifteenArray);

module.exports = { fifteenArray, myGenerator };
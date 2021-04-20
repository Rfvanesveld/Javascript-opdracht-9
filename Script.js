// ////.................CHECKING IF A NUMBER IS BIG.............................

const big = function (amount) {
    const sum = amount;

    if (sum > 100) {
        return "True"
    }
    if (sum < 100) {
        return "False"
    }

};
const result = big(99);
console.log(result)

//This function does something


////.................BOUNCER AT THE CLUB.............................

const doorPolicy = function (age, maxnumber) {

    if (age < 18) { //Jonger dan 18, niet naar binnen.
        return "This is a club for adults";
    }
    if (maxnumber >= 500) { // Dit is het maximum aantal gasten
        return "It's too busy now, come back later";
    }
    else { //Bij minder dan 500 gasten binnen, mag je naar binnen.
        return "Come in";
    }
}

console.log(doorPolicy(18, 501))
// //This function does something

////.................CALCUTATING THE AVERAGE.............................

// Pen en papier oplossing
// const sum = 3 + 4 + 6;
// const average = sum / 3;
// console.log(sum)

const average = function (nr1, nr2, nr3, nr4, nr5) {

    const sum = nr1 + nr2 + nr3 + nr4 + nr5;
    return sum / 5;
}
const sum = average(3, 4, 6, 8, 10);
console.log(Math.round(sum));



function getRandomNumber(min, max) {
    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.round(Math.random() * (max - min) + min);
}

function numberToPromise(num) {
    let results = [];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, getRandomNumber(1, 5) * 1000)
    })
}

Promise.race([
    numberToPromise(1),
    numberToPromise(2),
    numberToPromise(3),
    numberToPromise(4),
    numberToPromise(5),
    numberToPromise(6),
    numberToPromise(7),
    numberToPromise(8),
    numberToPromise(9),
    numberToPromise(10)
])
    .then(value => {
        console.log(value, "IS THE WINNER");
    })
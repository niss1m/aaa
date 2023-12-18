const people = {
    name: "John",
    age: 59,
    isMarried: true,
    children: [{
        name: "James",
        age: 12,
        children: []
    },
        {
            name: "Jane",
            age: 45,
            children: [{
                // ..
            }]
        }]
}

// write a function that transforms the object into array of name and age TUPLE.
// (we don't know how many levels are there);

//example :
let requiredResult = [["John", 59], ["James", 12], ["Jane", 45]];

function printNameAndAge(obj) {
    let arr = [];

    function lookThroughNested(obj) {
        for (const key in obj) {

        }
    }
}

function nameAndAge(obj) {
    const arr = [];

    function worm(obj) {
        for (const key in obj) {
            if (key === "name") {
                console.log(obj[key])
                arr.push(obj[key])
            }

            if (key === "age") {
                console.log(obj[key])
                arr.push(obj[key])
            }

            if (typeof obj[key] === "object") {
                worm(obj[key])
            }
        }
    }

    worm(obj)
    return arr
}

console.log(nameAndAge(people));
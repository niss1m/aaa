// create a function that receive an array of numbers and return an object with two properties.
//
//       max for the biggest number
//       min for the lowest number
//


function runStuff(x) {
    return eval(x);
}

function log(text) {
    const content = document.getElementById("console-content");
    const newP = document.createElement("p");
    content.appendChild(newP);

    const contentSize = content.children.length;


    console.log(contentSize)
    if (contentSize % 2 === 0 && contentSize > 0) {
        newP.classList.add("even")
    } else {
        newP.classList.add("odd")
    }
    newP.innerHTML += text + `<br>`;
    // const paragraph = document.createElement("p")

}

// log(content.childElementCount);

const testDataArr = [1, 4, 5];

function avgNumber(...numbers) {
    if (numbers.length <= 2) {
        return 0;
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}


log(avgNumber(...testDataArr));
log(avgNumber(...testDataArr));

log(avgNumber(...testDataArr));
log(avgNumber(...testDataArr));
log(avgNumber(...testDataArr));
log(avgNumber(...testDataArr));
log(avgNumber(...testDataArr));


log("hey");

const input = document.getElementById("actualInput");

runStuff(`

log("hello")

`)


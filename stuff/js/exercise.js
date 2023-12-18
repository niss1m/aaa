const log = console.log
let write = document.write
//
// const massMark = 92,
//     heightMark = 1.69,
//     massJohn = 78,
//     heightJohn = 1.95;
//
// let markBMI = (massMark / (heightMark * heightMark));
// let johnBMI = (massJohn / (heightJohn * heightJohn));
//
//
// log("Mark's BMI ", markBMI)
// log("John's BMI ", johnBMI)
// if (markBMI < johnBMI) {
//     log(`Johns BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// } else if (markBMI === johnBMI) {
//     log(`Identical BMI (${markBMI})`);
// } else {
//     log(`Marks BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }


// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
//
//
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
//
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
//
//  Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


// const scoreDolphins = (96 + 108 + 89) / 3,
//     scoreKoalas = (88 + 91 + 110) / 3;
//
// if (scoreDolphins > scoreKoalas) {
//     log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreDolphins) {
//     log("Both win the trophy");
// } else {
//     log("Koalas win the trophy");
// }
//


// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
// Print a string to the console containing the billvalue, the tip, and the final value (bill+ tip).
// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
//  Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
//  Test with different bill values: 275, 40, and 430

// const bill = 275,
//     tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.20),
//     // total = bill * Number(String("1." + tip));
//     total = bill + tip;
//
// log(`The bill is ${bill}, the tip is ${tip}, and the total value is ${total}`);

// let str = "ayoo";
//
// let outcome = str.replaceAll("o", "!");
// write(outcome)
//
// log(outcome);
//
// write(outcome);

// function printTextToConsole(text = "no text to render") {
//     return `${text} ${text.length}`
// }
//
// const loggedText = printTextToConsole(`hello!`);
//
// console.log(loggedText);


// prompt text to reverse

// let promptText = prompt("Message:", "The Message You Want To Reverse")
//
// function reverseText(text) {
//     let reversedText = "",
//         i = text.length - 1;
//     for (; i >= 0; i--) {
//         reversedText += text[i];
//     }
//     return reversedText;
// }
//
// document.write(`
// <p>
//   <small>Normal</small><br>
//   <p class="caption">The text you entered earlier</p>
//   <br>
//   <br> <p>${promptText}</p>
// </p>
// <br>
// <br>
// <br>
// <p>
//   <small>Reversed</small><br>
//   <p class="caption">The reversed text, outcome.</p>
//   <br>
//   <br>
//   <p>${reverseText(promptText)}</p>
// </p>
// `);

let inputText = "no text";

function countLowercase(text = "no text") {
    return (text.match(/[a-z]/g) || []).length;
}

console.log(`A total of ${countLowercase("abcABC123!@!#$#_@$!$_SAD?@!#!@#!")} lowercase letters`);

// let promptText = prompt("Message:", "abcABC123!@!#$#_@$!$_SAD?@!#!@#!")


function reverseText(text) {
    let reversedText = "",
        i = text.length - 1;
    for (; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}


function updateDom() {
    inputText = document.getElementById("text").value;

    const NormalWrapper = document.getElementById("Normal"),
        ReverseWrapper = document.getElementById("Reverse"),
        LowercaseWrapper = document.getElementById("Lowercase");
    NormalWrapper.innerHTML = `
            <p>
          <small>Normal Text</small><br>
          <p class="caption">The text you entered earlier</p>
          <p class="content" id="NormalWrapper" onclick="copyText(this)">${inputText}</p>
        </p>
    `;
    ReverseWrapper.innerHTML = `
            <p>
          <small>Reversed Text</small><br>
          <p class="caption">The text you entered but reversed.</p>
          <p class="content" id="ReverseWrapper" onclick="copyText(this)">${reverseText(inputText)}</p>
        </p>
    `;

    LowercaseWrapper.innerHTML = `
            <p>
          <small>Lowercase Counter</small><br>
          <p class="caption">Count lowercase letters in your text.</p>
          <p class="content" id="LowercaseWrapper" onclick="copyText(this)">This text contains a total of ${countLowercase(inputText)} lowercase letters</p>
        </p>
    `;
}

function copyText(element) {
    console.log(element)
    console.log(element.textContent)
    navigator.clipboard.writeText(element.textContent);
    alert(`Text copied: ${element.textContent}`);
}
console.log(document)

let allPs = document.querySelectorAll("p"),
    firstH1 = document.querySelector("h1"),
    theBody = document.querySelector("body");
console.log(allPs);
allPs.forEach(p => {
    console.log(p.textContent);
});

console.log(firstH1.innerText = "DOM Manipulation");


const listContainerEl = document.createElement("div"),
    myListEl = document.createElement("ul"),
    firstLiEl = document.createElement("li"),
    secondLiEl = document.createElement("li"),
    thirdLiEl = document.createElement("li"),
    mainContainer = document.querySelector("main");

// listContainerEl.classList.add("list-container")
// listContainerEl.append(myListEl);
// myListEl.setAttribute("id", "my-list");
//
// firstLiEl.innerText = "First li";
// secondLiEl.innerText = "Second li";
// thirdLiEl.innerText = "Third li";
//
// firstLiEl.classList.add("list-item")
// secondLiEl.classList.add("list-item")
// thirdLiEl.classList.add("list-item")
//
// myListEl.append(firstLiEl, secondLiEl, thirdLiEl);
//
// mainContainer.append(listContainerEl);


// const myBtn = document.createElement("button"),
//     listItem = document.querySelector(".list-item");
//
// myBtn.innerText = "Click"
//
// listContainerEl.append(myBtn);
// myListEl.setAttribute("class", "blue")
//
//
// myBtn.addEventListener("click", () => {
//
//     console.log("test", myListEl.classList.contains("black"));
//
//
//     if (myListEl.classList.contains("black")) {
//         console.log("test", myListEl.classList.contains("black"));
//         myListEl.classList.remove("blue")
//         myListEl.classList.add("blue")
//
//     }
//     if (myListEl.classList.contains("blue")) {
//         myListEl.setAttribute("class", "white")
//     }
//     if (myListEl.classList.contains("white")) {
//         myListEl.setAttribute("class", "black")
//
//     }
//     myListEl.classList.add("black")
// });
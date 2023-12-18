document.addEventListener("DOMContentLoaded", function () {
    const
        container = document.createElement("div"),
        header = document.createElement("header"),
        headerH1 = document.createElement("h1"),
        mainSection = document.createElement("main"),

        sectionOne = document.createElement("section"),
        sectionOneDesc = document.createElement("p"),

        sectionTwo = document.createElement("section"),
        sectionTwoDesc = document.createElement("p"),

        sectionThree = document.createElement("section"),
        sectionThreeDesc = document.createElement("p"),

        navBar = document.createElement("nav"),
        liHTML = document.createElement("li"),
        descHTML = document.createElement("p"),
        liCSS = document.createElement("li"),
        descCSS = document.createElement("p"),
        liJS = document.createElement("li"),
        descJS = document.createElement("p"),
        liJQ = document.createElement("li"),
        descJQ = document.createElement("p"),

        footer = document.createElement("footer");


    header.append(headerH1);
    header.classList.add("item", "header")
    headerH1.innerText = "DOM Class";

    sectionOne.innerText = "What did we learn about HTML?";
    sectionOneDesc.innerText = "What did we learn about HTML?";
    sectionTwo.innerText = "What did we learn about CSS?";
    sectionTwoDesc.innerText = "What did we learn about CSS?";
    sectionThree.innerText = "What did we learn about Javascript?";
    sectionOneDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    sectionThreeDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    sectionTwoDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    sectionOne.append(sectionOneDesc);
    sectionTwo.append(sectionTwoDesc);
    sectionThree.appendChild(sectionThreeDesc);

    mainSection.classList.add("item", "content");
    mainSection.append(sectionOne, sectionTwo, sectionThree);

    navBar.classList.add("item", "sidebar")
    navBar.append(liHTML, liCSS, liJS, liJQ);


    liHTML.innerText = "HTML";
    descHTML.innerText = "Semantics, lists, building a webpage.";
    liCSS.innerText = "CSS";
    descCSS.innerText = "Selectors, Colors, Box Model, display.";
    liJS.innerText = "JavaScript";
    descJS.innerText = "Primitives, Objects, function, 'this'.";
    liJQ.innerText = "JQuery";


    liHTML.appendChild(descHTML);
    liCSS.appendChild(descCSS);
    liJS.appendChild(descJS);
    liJQ.appendChild(descJQ);

    container.append(header, navBar, mainSection, footer);
    container.classList.add("grid-container");

    footer.innerText = "A footer";
    footer.classList.add("item", "footer");

    document.body.append(container);
});
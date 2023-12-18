// const content = document.querySelector(".rawContent");

// async function iTunesLookup(term) {
//   const response = await fetch("https://itunes.apple.com/search?term=" + term);
//   const terms = await response.json();

//   content.innerText = JSON.stringify(terms, null, 2);
// }

// iTunesLookup("depeche mode")

const url = "https://itunes.apple.com/search?term=",
    keyword = "depeche mode";

const xhr = new XMLHttpRequest();
xhr.open("GET", url + keyword, true);
xhr.onload = (e) => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = (e) => {
    console.error(xhr.statusText);
};
xhr.send(null);
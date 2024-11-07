let numbertry = 6;
let numberletter = 6;
let currentTry = 1;
let wordletter = "";
let allword = ["update", 'create', 'rehann', 'payton'];
let sameword = Math.floor(Math.random() * allword.length);
wordletter = allword[sameword];
let parent = document.querySelector(".game-continer");

function generateinput() {
    let section = document.querySelector(".allinput");
    for (let i = 1; i <= numbertry; i++) {
        let element = document.createElement("div");
        element.className = `try${i}`;
        element.style.fontWeight = "bold";
        element.style.margin = "10px";

        let txt = document.createTextNode(`Try ${i}:`);
        element.appendChild(txt);
        section.appendChild(element);

        for (let j = 1; j <= numberletter; j++) {
            let inputelement = document.createElement("input");
            inputelement.setAttribute("maxLength", 1);
            inputelement.type = "text";
            inputelement.className = `number${j}`;
            inputelement.disabled = i > 1;
            element.appendChild(inputelement);
        }
    }
}

window.onload = function() {
    generateinput();
};

let checlbutton = document.querySelector(".frist");
checlbutton.addEventListener("click", handle);

console.log(wordletter);

function handle() {
    let checkletter = true;
    let currentTryInputs = document.querySelectorAll(`.try${currentTry} input`);

    for (let i = 0; i < numberletter; i++) {
        let oneinput = currentTryInputs[i];
        let valeueinput = oneinput.value.toLowerCase();
        let word_inside_arry = wordletter[i];

        if (valeueinput == word_inside_arry) {
            oneinput.classList.add("true");

        } else if (wordletter.includes(valeueinput) && valeueinput !== "") {
            oneinput.classList.add("mediumtrue");
            checkletter = false;

        } else {
            oneinput.classList.add("false");
            checkletter = false;
        }
    }

    if (checkletter === true) {
        checlbutton.classList.add("allnone");
        let message = document.createElement("div");
        message.className = "message";
        let oneelement = document.createElement("h4");
        let txtone = document.createTextNode("Success! You Win the Game");
        oneelement.appendChild(txtone);
        let twoelement = document.createElement("h4");
        let txttwo = document.createTextNode(`The Word was: ${wordletter}`);
        twoelement.appendChild(txttwo);
        message.appendChild(oneelement);
        message.appendChild(twoelement);
        parent.appendChild(message);

    } else {
        currentTryInputs.forEach(input => input.disabled = true);

        currentTry++;
        if (currentTry <= numbertry) {
            let nextTryInputs = document.querySelectorAll(`.try${currentTry} input`);
            nextTryInputs.forEach(input => input.disabled = false);
        } else {
            checlbutton.classList.add("allnone");
            let message = document.createElement("div");
            message.className = "message";
            let oneelement = document.createElement("h4");
            let txtone = document.createTextNode("Game Over Try Agin");
            oneelement.appendChild(txtone);
            message.appendChild(oneelement);
            parent.appendChild(message);
        }
    }
}
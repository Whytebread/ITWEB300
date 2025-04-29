// Global variables
const countInput = document.getElementById("findCountInput");
const replacementInput = document.getElementById("findReplacementInput");
const replaceDoubleInput = document.getElementById("replaceDoubleInput");
const capLettersInput = document.getElementById("capLettersInput");
const capAllInput = document.getElementById("capAllInput");

// Display
const display = document.getElementById("display");

// Functions

// Returns the number of matches of searchstr found in target.
function findCount(target, searchstr) { //target is the text input and searchstr is the pattern checking against it
    let matches = target.match(searchstr);
    if (matches) {
        display.innerText = matches.length;
    } else {
        display.innerText = 0;
    }
}

findCountButton.addEventListener("click", function () { //calls findCount to pass in the parameters when associated button is clicked.
    let countInputValue = countInput.value;
    findCount(countInputValue, /[aeiou]/ig);
});

// Replaces all occurrences of find in target with replacement.
function FindReplace(target, find, replacement) {
    let result = target.replaceAll(find, replacement)
    display.innerText = result;
}

findReplacementButton.addEventListener("click", function () {
    let replacementInputValue = replacementInput.value;
    let targetText = /\b(two|to|too)\b/ig;
    let replacedText = 2;

    FindReplace(replacementInputValue, targetText, replacedText)
});


// // Replaces all double occurrences of a word in the target with a single occurrence of the word.
function replaceDouble(target, replacement) {
    let regex = /\b(\w+)\s+\1\b/ig;
    if (regex.test(target)) {
        let result = target.replace(regex, replacement)
        display.innerText = result;
    } else {
        display.innerText = target;
    }
}

replaceDoubleButton.addEventListener("click", function () {
    let doubleInput = replaceDoubleInput.value;
    let replacement = "hello";
    replaceDouble(doubleInput, replacement);
})

// Makes the first character of every sentence a capital letter.
function startCap(target) {
    let result = target.replace(/(^\s*[a-z]|[.?!]\s+[a-z])/g, function (match) {
        return match.toUpperCase();

    });
    display.innerText = result;

}

capLettersButton.addEventListener("click", function () {
    let capInput = capLettersInput.value;
    startCap(capInput);
})

// makes all letters capital
function capAll() {
    let regex = /[a-z]/g;
    let input = capAllInput.value;

    if (input.match(regex)) {
        let result = input.toUpperCase();
        display.innerText = result;
    }
};

capAllButton.addEventListener("click", capAll);
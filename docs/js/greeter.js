"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let user = "John doe";
async function name(params) {
}
async function GetWordsAsync(callback) {
    const url = "/data/english.txt";
    const httpRequest = new XMLHttpRequest();
    const resolver = (words) => {
        return words;
    };
    const words = [];
    function handleRequestLoaded() {
        let text = httpRequest.responseText;
        let lines = text.split('\n');
        for (let line of lines) {
            words.push(line.trim());
        }
        console.debug('words loaded!');
    }
    httpRequest.addEventListener('load', handleRequestLoaded);
    httpRequest.open('GET', url);
    httpRequest.send();
    return new Promise(resolver);
}
document.body.innerText = greeter(user);
//# sourceMappingURL=greeter.js.map
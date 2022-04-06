import SayHello from "./second-file.js";
function FetchWords() {
    let promise = new Promise((resolve, reject) => {
        const url = "./data/english.txt";
        const httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener('load', handleRequestLoaded);
        httpRequest.open('GET', url);
        httpRequest.send();
        const words = [];
        function handleRequestLoaded() {
            let text = httpRequest.responseText;
            let lines = text.split('\n');
            for (let line of lines) {
                words.push(line.trim());
            }
            console.debug('words loaded!');
            resolve(words);
        }
    });
    return promise;
}
let words = [];
FetchWords().then((fetchedWords) => words = fetchedWords);
function getRandomWord() {
    const min = 0;
    const max = words.length;
    const index = Math.ceil((Math.random() * max)) - 1;
    return words[index];
}
function onGenerateButtonClick(event) {
    console.log('clicked');
    const word = getRandomWord();
    const result = `${word}`;
    console.log(result);
}
window.addEventListener('load', () => {
    SayHello();
    const btnGenerate = document.getElementById('btn-generate');
    btnGenerate === null || btnGenerate === void 0 ? void 0 : btnGenerate.addEventListener('click', onGenerateButtonClick);
});
//# sourceMappingURL=main.js.map
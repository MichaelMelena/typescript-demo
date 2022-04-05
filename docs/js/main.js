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
const words = await FetchWords();
function getRandomWord() {
    const min = 0;
    const max = words.length;
    const index = Math.ceil((Math.random() * max)) - 1;
    return words[index];
}
function onGenerateButtonClick(event) {
    const word = getRandomWord();
    const result = `${word}-chan`;
    console.log(result);
}
window.addEventListener('load', () => {
    const btnGenerate = document.getElementById('generate-btn');
    btnGenerate?.addEventListener('click', onGenerateButtonClick);
});
export {};
//# sourceMappingURL=main.js.map
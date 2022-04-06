function FetchWords(): Promise<string[]>
{

    let promise = new Promise<string[]>((resolve: CallableFunction, reject: CallableFunction) =>
    {
        const url: string = "./data/english.txt";
        const httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('load', handleRequestLoaded);
        httpRequest.open('GET', url);
        httpRequest.send();

        const words: string[] = [];
        function handleRequestLoaded(): void
        {
            let text = httpRequest.responseText;
            let lines = text.split('\n');
            for (let line of lines)
            {
                words.push(line.trim());
            }

            console.debug('words loaded!');
            resolve(words);
        }
    });

    return promise;
}

let words: string[] = [];

FetchWords().then((fetchedWords) => words = fetchedWords);

function getRandomWord(): string
{
    const min = 0;
    const max = words.length;
    const index = Math.ceil((Math.random() * max)) - 1;
    return words[index];
}

function onGenerateButtonClick(event: MouseEvent): void
{
    console.log('clicked');
    const word = getRandomWord();
    const result = `${word}`;
    console.log(result);
}

window.addEventListener('load', () =>
{
    const btnGenerate = document.getElementById('btn-generate');
    btnGenerate?.addEventListener('click', onGenerateButtonClick);
});

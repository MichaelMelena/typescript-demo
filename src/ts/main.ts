function FetchWords(): Promise<string[]>
{

    let promise = new Promise<string[]>((resolve, reject) =>
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

const words: string[] = await FetchWords();

function getRandomWord(): string
{
    const min = 0;
    const max = words.length;
    const index = Math.ceil((Math.random() * max)) - 1;
    return words[index];
}

function onGenerateButtonClick(event: MouseEvent): void
{
    const word = getRandomWord();
    const result = `${word}-chan`;
    console.log(result);
}

window.addEventListener('load', () =>
{
    const btnGenerate = document.getElementById('generate-btn');
    btnGenerate?.addEventListener('click', onGenerateButtonClick);
});

export { };

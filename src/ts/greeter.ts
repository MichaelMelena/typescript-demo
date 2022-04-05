

function greeter(person: string)
{
    return "Hello, " + person;
}

let user = "John doe";




async function name(params: type)
{

}

async function GetWordsAsync(callback: CallableFunction): Promise<string[]>
{
    const url: string = "/data/english.txt";
    const httpRequest = new XMLHttpRequest();

    const resolver = (words: string[])
    {
    
        return words;
    };
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

    }

    httpRequest.addEventListener('load', handleRequestLoaded);
    httpRequest.open('GET', url);
    httpRequest.send();
    return new Promise(resolver);
}
document.body.innerText = greeter(user);
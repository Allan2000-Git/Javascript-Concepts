function splitPolyfill(inputString, delimiter) {
    let result = [];

    if(delimiter === '') return Array.from(inputString);

    function split(string, index) {
        if(index >= inputString.length) return

        const indexOfDelimiter = string.indexOf(delimiter);
        if(indexOfDelimiter != -1) {
            result.push(string.substring(0, indexOfDelimiter));
            split(string.substring(indexOfDelimiter + delimiter.length), indexOfDelimiter + delimiter.length);
        } else {
            result.push(string);
        }
    }

    split(inputString, 0);

    return result;
}

const inputString = 'The quick the brown fox the jumps over the lazy dog.';

console.log(inputString.split('the'));
console.log(splitPolyfill(inputString, 'the'));
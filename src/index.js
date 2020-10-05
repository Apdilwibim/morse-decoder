const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let dot = 10;
    let dash = 11;
    let array = expr.match(/.{1,10}/g);
    let letters = [];
    let letter = [];
    let arrayLetters = [];

    for (let item of array) {
        (item == '**********') ? letters = ' ' : letters = String(+item).match(/.{1,2}/g);
        for (let i = 0; i < letters.length; i++) {
            if (item == '**********') letter.push(' ');
            if (letters[i] == dot) letter.push('.');
            if (letters[i] == dash) letter.push('-');
        }
        arrayLetters.push(letter.join(''));
        letter = [];
    }

    for (let i = 0; i < arrayLetters.length; i++) {
        if (arrayLetters[i] == ' ') result.push(' ');
        for (let key in MORSE_TABLE) {
            if (arrayLetters[i] == key) result.push(MORSE_TABLE[key]);
        }
    }
    return result.join('');
}

module.exports = {
    decode
}
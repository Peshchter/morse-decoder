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

const getSymbol = (code) => {
    if (code == "**********") {
        return " "
    }

    let sym, smb = ""
    for (let i = 0; i < 5; i++) {
        sym = code.slice(i*2, i*2 + 2)
        if (sym ==  "10" ) {
            smb += "."
        } else if (sym == "11") {
            smb += "-"
        } 
    }    
    return MORSE_TABLE[smb]
}

function decode(expr) {
    debugger
    let symbolsCount = expr.length / 10
    let answer = '', code
    for (let i = 0; i < symbolsCount; i++) {
        code = expr.slice(i * 10, (i + 1 ) * 10)
        answer += `${getSymbol(code)}`
    }
    return answer
}

module.exports = {
    decode
}
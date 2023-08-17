const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let words = [];
    let currstr = result = "";
    const MORSE_TABLE_DECODE = [];

    for (var i = 0; i < expr.length; ++i) {
        currstr += expr[i];
        if (currstr.length == 10) {
           words.push(currstr);
           currstr = "";
        }
        if(i == expr.length && currstr.length){
            if(currstr.length != 10){
                let count = 10 - currstr.length;
                currstr = currstr + "0".repeat(count);
            }
            words.push(currstr);
        }
     }
    
    for (const property in MORSE_TABLE) {
        let code = '';
        for (var i = 0; i < property.length; ++i) {
            if(property[i] == "."){
                code += 10;
            }else{
                code += 11;
            }
        }
        if(code.length != 10){
            let count = 10 - code.length;
            code = "0".repeat(count) + code;
        }
        
        MORSE_TABLE_DECODE.push({ code: code, letter: MORSE_TABLE[property]})
      }


     for (const property in words) {
        if(words[property] == "**********") {
            result+=" ";
            continue;
        }
        for (const decode in MORSE_TABLE_DECODE) {
            if(MORSE_TABLE_DECODE[decode].code == words[property]) {
                result+=MORSE_TABLE_DECODE[decode].letter;
                continue;
            }
        }
        
    }

    return result;
}

module.exports = {
    decode
}
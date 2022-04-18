const cipherEle = document.querySelector('#cipher');
const keyEle = document.querySelector('#key');
const answerEle = document.querySelector('#answer');
const submit = document.querySelector('#submit');

// cipher: zftivs vm yvfhsaf
// key: 7

const aIdx = 'a'.charCodeAt(0);

submit.addEventListener('click', () => {
    solve(cipherEle.value.toLowerCase(), parseFloat(keyEle.value));
});

function solve(cipher, key) {
    console.log(cipher);
    console.log(key);
    const answer = [];

    for (let i = 0; i < cipher.length; i++) {
        const letter = cipher.charAt(i);
        if (letter == " ") {
            answer.push(" ");
            continue;
        }

        const letterIdx = getIndexOfLetter(letter);
        const shiftedLetterIdx = shiftLetterIndex(letterIdx, key);
        const shiftedLetter = getLetterFromIndex(shiftedLetterIdx);

        answer.push(shiftedLetter);
    }

    answerEle.innerText = answer.join("");
}

function getIndexOfLetter(letter) {
    return letter.charCodeAt(0) - aIdx;
}

function shiftLetterIndex(index, key) {
    const shift = index - key;

    if (shift < 0) return 26 + shift;
    else return shift;
}

function getLetterFromIndex(index) {
    return String.fromCharCode(index + aIdx);
}
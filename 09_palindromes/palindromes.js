const palindromes = function (pattern) {
    let punctuationless = pattern.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let lower = punctuationless.toLowerCase();
    let spaceless = lower.replaceAll(" ", "");
    let i = 0;
    let j = spaceless.length - 1;
    while (i < j) {
        if (spaceless.charAt(i) !== spaceless.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

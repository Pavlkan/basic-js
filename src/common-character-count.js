const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
    let string1Arr = string1.split("");
    let string2Arr = string2.split("");

    let counter = 0;
    for (let i = 0; i < string1Arr.length; i++) {
        if (string2Arr.includes(string1Arr[i])) {
            string2Arr.splice(string2Arr.indexOf(string1Arr[i]), 1);
            counter += 1;
        }
    }
    return counter;
}

module.exports = {
    getCommonCharacterCount,
};

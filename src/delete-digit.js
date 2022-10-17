const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let nStr = String(n);
    for (let i = 0; i < nStr.length; i++) {
        if (i === 0 && +nStr[i] < +nStr[i + 1]) {
            return +nStr.slice(i + 1);
        }
        if (+nStr[i] > +nStr[i + 1] && i === nStr.length - 2) {
            return +nStr.slice(0, i - 1);
        }
        if (+nStr[i] < +nStr[i + 1]) {
            return +(nStr.slice(0, i) + nStr.slice(i + 1));
        }
    }
}

module.exports = {
    deleteDigit,
};

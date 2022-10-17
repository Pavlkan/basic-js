const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let resultStr = "";
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter += 1;
        } else {
            if (counter === 0) {
                resultStr += str[i];
            } else {
                resultStr += (counter += 1) + str[i];
            }
            counter = 0;
        }
    }
    return resultStr;
}

module.exports = {
    encodeLine,
};

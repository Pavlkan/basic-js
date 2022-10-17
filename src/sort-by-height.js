const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            obj[i] = i;
        }
    }
    let arrSorted = arr.filter((number) => number > 0).sort((a, b) => a - b);
    for (key in obj) {
        arrSorted.splice(key, 0, -1);
    }
    return arrSorted;
}

module.exports = {
    sortByHeight,
};

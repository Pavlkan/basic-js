const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let arrClone = [...arr];
    let result = discardNext(discardPrev(doubleNext(doublePrev(arrClone))));
    return result.filter((item) => item !== "delete");
}

function discardNext(arr) {
    if (!arr.includes("--discard-next")) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            arr[i] = "delete";
            arr[i + 1] = "delete";
        }
    }
    return arr;
}

function discardPrev(arr) {
    if (!arr.includes("--discard-prev")) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            arr[i] = "delete";
            arr[i - 1] = "delete";
        }
    }
    return arr;
}

function doubleNext(arr) {
    if (!arr.includes("--double-next")) return arr;
    let doubleIndex = arr.indexOf("--double-next");
    arr.splice(doubleIndex, 1, arr[doubleIndex + 1]);
    return doubleNext(arr);
}

function doublePrev(arr) {
    if (!arr.includes("--double-prev")) return arr;
    let doubleIndex = arr.indexOf("--double-prev");
    arr.splice(doubleIndex + 1, 0, arr[doubleIndex - 1]);
    arr.splice(doubleIndex, 1);
    return doublePrev(arr);
}

module.exports = {
    transform,
};

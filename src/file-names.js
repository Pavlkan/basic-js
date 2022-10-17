const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names, counter = 0) {
    let result = names.map((file, indexArr, array) => {
        if (indexArr === 0) return file;
        if (array.lastIndexOf(file, indexArr - 1) !== -1) {
            return (file = renameFile(file, indexArr, array));
        }
        return file;
    });
    if (counter > 5) return result;
    return renameFiles(result, counter + 1);
}

function renameFile(file, indexArr, array, counter = 1) {
    let space = array.slice(0, indexArr);
    if (!array.slice(0, indexArr).includes(file)) {
        return file;
    }

    if (file.slice(-3) !== `(${counter})`) {
        file += "(1)";
        return renameFile(file, indexArr, array);
    }
    if (
        file.slice(-3) === `(${counter})` &&
        file.slice(-6) !== `(${counter})(1)`
    ) {
        file += "(1)";
        return renameFile(file, indexArr, array);
    } else {
        file = file.slice(0, -6);
        file += `(${counter + 1})`;
        return renameFile(file, indexArr, array, counter + 1);
    }
}

module.exports = {
    renameFiles,
};

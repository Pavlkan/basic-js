const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str += "";
    if (options.addition !== undefined) options.addition += "";
    let additionSeparator = "";
    if (!options.additionSeparator) {
        additionSeparator = "|";
    } else additionSeparator = options.additionSeparator;

    let separator = "";
    if (!options.separator) {
        separator = "+";
    } else separator = options.separator;

    let arr = [str];
    if (options.repeatTimes) {
        for (let i = 0; i < options.repeatTimes - 1; i++) {
            arr.push(str);
        }
    }

    let addition = [];
    if (options.addition) {
        addition = [options.addition];
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
            addition.push(options.addition);
        }
        if (addition.length === 1) {
            addition = addition.pop();
        } else {
            addition = addition.join(additionSeparator);
        }
    }

    if (addition.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += addition;
        }
    }

    if (arr.length > 1) {
        return arr.join(separator);
    } else {
        return arr.join("");
    }
}

module.exports = {
    repeater,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) {
            return 1;
        }
        let resultArr = arr.map((item) => {
            if (Array.isArray(item)) {
                return 1 + this.calculateDepth(item);
            } else return 1;
        });
        return resultArr.sort((a, b) => a - b)[resultArr.length - 1];
    }
}

module.exports = {
    DepthCalculator,
};

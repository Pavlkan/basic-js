const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let updatedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        updatedMatrix.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            let value = calculate(i, j, matrix);
            updatedMatrix[i].push(value);
        }
    }
    return updatedMatrix;
}

function calculate(i, j, matrix) {
    let aroundCoordinates = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j + 1],
        [i + 1, j],
        [i + 1, j - 1],
        [i, j - 1],
    ];
    return aroundCoordinates.reduce((sum, [i, j]) => {
        let value = matrix[i]?.[j] ? 1 : 0;
        return sum + value;
    }, 0);
}

module.exports = {
    minesweeper,
};

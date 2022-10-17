const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    valuesArr: [],

    getLength() {
        let result = this.valuesArr.length;
        return result;
    },

    addLink(value) {
        this.valuesArr.push(`( ${value} )`);
        return this;
    },

    removeLink(position) {
        if (!this.valuesArr[position - 1]) {
            this.valuesArr = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.valuesArr.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.valuesArr.reverse();
        return this;
    },

    finishChain() {
        let result = this.valuesArr.join("~~");
        this.valuesArr = [];
        return result;
    },
};

module.exports = {
    chainMaker,
};

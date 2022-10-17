const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let atIndex = 0;
    for (let i = -1; Math.abs(i) <= email.length; i = i - 1) {
        if (email[email.length - Math.abs(i)] === "@") {
            atIndex += i + 1;
            break;
        }
    }
    return email.slice(atIndex);
}

module.exports = {
    getEmailDomain,
};

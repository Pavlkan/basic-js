const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    result = {};
    counter = 0;
    for (let i = 0; i < domains.length; i++) {
        let domain = domains[i].split(".");
        domain[domain.length - 1] = "." + domain[domain.length - 1];
        domain.reverse();

        for (let j = 0; j < domain.length; j++) {
            let domainItem = domain.slice(0, j + 1).join(".");
            if (result.hasOwnProperty(domainItem)) {
                result[domainItem] += 1;
            } else {
                result[domainItem] = 1;
            }
        }
    }
    return result;
}

module.exports = {
    getDNSStats,
};

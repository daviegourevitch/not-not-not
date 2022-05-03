var not = require('not');

module.exports = notNotNot

function notNotNot(f) {
    return not(not(not(f)));
}


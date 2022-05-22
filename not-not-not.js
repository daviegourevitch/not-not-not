var not = require('not');
var notNot = require('not');

module.exports = notNotNot

function notNotNot(f) {
    return not(notNot(f));
}


"use strict";

module.exports = function(name, attr) {
    var el = document.createElement(name);

    for (var prop in attr) {
        if (attr.hasOwnProperty(prop)) {
            el[prop] = attr[prop];
        }
    }

    return el;
};

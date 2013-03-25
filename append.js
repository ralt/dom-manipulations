"use strict";

var forEach = require('iter-shims/forEach');

module.exports = function(parent, child) {
    if (child.length) {
        appendMultiple(parent, child);
    }
    else {
        parent.appendChild(child);
    }
};

function appendMultiple(parent, children) {
    var frag = document.createDocumentFragment();

    forEach(children, function(child) {
        frag.appendChild(child);
    });

    parent.appendChild(frag);
}

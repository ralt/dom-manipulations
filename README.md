dom-mamipulations
===

DOM Manipulations made easy.

Usage
---

```javascript
/**
 * Create a DOM element
 */
var create = require('dom-manipulations/create');
// or
var create = require('dom-manipulations').create;

var link = create('link', {
    href: 'some/css/link.css',
    rel: 'stylesheet'
};

/**
 * Append one or more DOM elements
 */
var append = require('dom-manipulations/append');
// or
var append = require('dom-manipulations').append;

append(parent, child);
```

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.

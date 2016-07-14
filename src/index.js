var trim = require("@nathanfaucett/trim"),
    isArray = require("@nathanfaucett/is_array"),
    isString = require("@nathanfaucett/is_string"),
    isElement = require("@nathanfaucett/is_element");


var domClass = exports,

    reClassRemove = /[\t\r\n\f]/g,
    reSpliter = /[\s, ]+/;


domClass.add = function(node, names) {
    var current;

    if (isElement(node)) {
        current = node.className ? (" " + node.className + " ").replace(reClassRemove, " ") : " ";

        if (current) {
            addClasses(node, current, isArray(names) ? names : (isString(names) ? names.split(reSpliter) : []));
        }
    }
};

function addClasses(node, current, classNames) {
    var i = classNames.length,
        className, finalValue;

    while (i--) {
        className = classNames[i];

        if (current.indexOf(" " + className + " ") === -1) {
            current += className + " ";
        }
    }

    finalValue = trim(current);
    if (node.className !== finalValue) {
        node.className = finalValue;
    }
}

domClass.remove = function(node, names) {
    var current;

    if (isElement(node)) {
        current = node.className ? (" " + node.className + " ").replace(reClassRemove, " ") : " ";

        if (current) {
            removeClasses(node, current, isArray(names) ? names : (isString(names) ? names.split(reSpliter) : []));
        }
    }
};

function removeClasses(node, current, classNames) {
    var i = classNames.length,
        className, finalValue;

    while (i--) {
        className = classNames[i];

        if (current.indexOf(" " + className + " ") !== -1) {
            current = current.replace(" " + className + " ", " ");
        }
    }

    finalValue = trim(current);
    if (node.className !== finalValue) {
        node.className = finalValue;
    }
}

domClass.has = function(node, names) {
    var current;

    if (isElement(node)) {
        current = node.className ? (" " + node.className + " ").replace(reClassRemove, " ") : " ";

        if (current) {
            return hasClasses(current, isArray(names) ? names : (isString(names) ? names.split(reSpliter) : []));
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function hasClasses(current, classNames) {
    var i = classNames.length,
        className;

    while (i--) {
        className = classNames[i];

        if (current.indexOf(" " + className + " ") !== -1) {
            return true;
        }
    }

    return false;
}

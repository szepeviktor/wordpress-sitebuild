/*jslint browser: true, es6: true*/

/**
 * Create one HTML tag.
 *
 * @param {string} name    Name of the tag.
 * @param {string} content Text content of the tag.
 * @param {object} attrs   Attributes as an object.
 *
 * @return {string}        The HTML representation of the tag.
 */
//export default function createHTML(tagName, content, attributes) {
module.exports = function (tagName, content, attributes) {
    'use strict';
    var element;
    var text;
    var attrName;

    if (!tagName.match(/^[a-z]+$/i)) {
        return false;
    }

    tagName = tagName.toLowerCase();
    attributes = attributes || {};

    element = document.createElement(tagName);

    for (attrName in attributes) {
        if (attributes.hasOwnProperty(attrName)) {
            element.setAttribute(attrName, attributes[attrName]);
        }
    }

    if (typeof content === 'string') {
        // Is content HTML?
        if (content[0] === '<') {
            element.innerHTML = content;
        } else {
            text = document.createTextNode(content);
            element.appendChild(text);
        }
    }

    return element.outerHTML;
};

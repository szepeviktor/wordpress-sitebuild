#!/usr/bin/env node

var createHTML = require('./tag.js'),
    dom = require('jsdom'),
    test = require('unit.js');

dom.env('<html>', function (err, window) {
    var tests = [];

    global.document = window.document;

    test.assert.strictEqual(
        createHTML('a', '', {title: 'simple.dot'}),
        '<a title="simple.dot"></a>',
        'Simple a tag with an attribute'
    );
    test.assert.strictEqual(
        createHTML('a', '<img src="/jpeg">' ),
        '<a><img src="/jpeg"></a>',
        'HTML as content'
    );
    test.assert.strictEqual(
        createHTML('span', 'Text as content.'),
        '<span>Text as content.</span>',
        'Text as content'
    );
    test.assert.strictEqual(
        createHTML('/', '', {href: '//invalid.tagname'}),
        false,
        'Invalid tag name'
    );
    test.assert.strictEqual(
        createHTML('div', 'Text in <div>'),
        '<div>Text in &lt;div&gt;</div>',
        'HTML encoding'
    );
    test.assert.strictEqual(
        createHTML('div', '', {}),
        '<div></div>',
        'Empty attributes'
    );
    //console.error( createHTML('div') );
    test.assert.strictEqual(
        createHTML('div', '', {title: 'One', 'data-in': 'Two', name: 'Three'}),
        '<div title="One" data-in="Two" name="Three"></div>',
        '3 attributes'
    );
    test.assert.strictEqual(
        createHTML('DIv', '', {}),
        '<div></div>',
        'Uppercase in tag name'
    );

});

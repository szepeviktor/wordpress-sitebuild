// There must by at leaset one <script> element in the page
(function (doc, scr, url, first, elem) {
    'use strict';
    first = doc.getElementsByTagName(scr)[0];
    elem = doc.createElement(scr);
    elem.async = 1;
    elem.src = url;
    first.parentNode.insertBefore(elem, first);
}(document, 'script', '//domain.net/file.js'));

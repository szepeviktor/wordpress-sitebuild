var _ = null;
function async_write(onload) {
    'use strict';
    var className = "r1-additional-pixel",
        element,
        d;

    if (onload) {
        d = document.write;
        element = _.createNode("div." + className, {
            innerHTML: onload,
            width: 0,
            height: 0
        });
        _.appendTo("body", element);
        document.write = function (html) {
            _.appendTo(
                element,
                _.createNode("div", { innerHTML: html })
            );
        };

        // Execute scripts containing document.write()

        _.each(_.get("script", element), function (scriptNode) {
            // @TODO Check for src and load it
            eval(scriptNode.innerHTML);
        });
        document.write = d;
    }
}

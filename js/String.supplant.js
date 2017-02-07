// Look at http://youtu.be/RO1Wnu-xKoY?t=58m41s
if (typeof String.prototype.supplant !== "function") {
    String.prototype.supplant = function (object) {
        "use strict";
        return this.replace(
            /{([^{}]*)}/g,
            function (match, p1) {
                var replacement = object[p1];
                return typeof replacement === "string"
                    ? replacement
                    : match;
            }
        );
    };
}

// IIFE for closure
(function ($, window, undefined) {

    // Short form of $(document).ready()
    $(function () {
        // Code to execute when the DOM is fully loaded
    });

}(jQuery, window))


// jQuery plugin
// https://learn.jquery.com/plugins/basic-plugin-creation/
(function ($) {

    var shade = "#556b2f";

    $.fn.greenify = function () {
        this.css("color", shade);
        return this;
    };

}(jQuery));
// Usage: jQuery('body').greenify();

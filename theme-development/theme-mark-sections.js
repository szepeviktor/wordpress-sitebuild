function wp_mark_sections() {
    "use strict";
    var bgColor = "lime";
    var page;
    var elements;

    page = document.getElementById("page");

    elements = document.querySelectorAll("#page > header, #page > section, #page > nav, #page > footer");

    elements.forEach(function (elem) {
        var div = document.createElement('div');

        div.class = "mark-section";
        div.style.backgroundColor = bgColor;
        div.style.opacity = 0.4;
        div.style.zIndex = 999999;

        div.style.position = "absolute";
        div.style.top = (elem.offsetTop + 5) + "px";
        div.style.height = (elem.offsetHeight - 10) + "px";
        div.style.left = (elem.offsetLeft + 5) + "px";
        div.style.width = (elem.offsetWidth - 10) + "px";

        // Example action
        if (elem.id === "hero") {
            div.style.cursor = "crosshair";
            div.title = "Slider";
            div.onclick = function () { window.location.href = "/site/wp-admin/post.php?post=13&action=edit#field-id=field_59d6a22768813"; };
        }

        page.appendChild(div);
    });
}

(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        var ab = document.querySelector("#wp-admin-bar-mark-sections .ab-item");
        ab.onclick = function () { wp_mark_sections(); return false; };
    }, false );
}());

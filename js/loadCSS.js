(function (doc) {
    var head = doc.getElementsByTagName("head")[0],
        element = doc.createElement("link");

        element.rel = "stylesheet";
        element.media = "all";
        element.href = "https://example.com/stylesheet.css";
        head.insertBefore(element, null);
}(window.document))

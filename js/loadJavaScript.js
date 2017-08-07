(function (doc) {
    var head = doc.getElementsByTagName("head")[0],
        element = doc.createElement("script");

        //element.async = true;
        element.src = "https://example.com/script.js";
        head.insertBefore(element, null);
}(window.document))

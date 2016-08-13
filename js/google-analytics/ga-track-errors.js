// Track basic JavaScript errors - http://davidwalsh.name/track-errors-google-analytics
window.addEventListener('error', function (e) {
    ga('send', 'exception', {
        'exDescription': e.message + ' ' + e.filename + ':' + e.lineno,
        'exFatal': true
    });
});

// Track AJAX errors
jQuery(document).ajaxError(function (e, request, settings) {
    ga('send', 'exception', {
        'exDescription': 'AJAX error ' + settings.url + ' ' + e.result,
        'exFatal': true
    });
});

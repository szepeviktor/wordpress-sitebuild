navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if (typeof navigator.vibrate === 'function') {
    navigator.vibrate([1000, 500, 1000]);
}

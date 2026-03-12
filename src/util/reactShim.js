if (window.cancelAnimationFrame == null) {
    window.cancelAnimationFrame = function (id) {
        clearTimeout(id)
    }
}
if (window.requestAnimationFrame == null) {
    window.requestAnimationFrame = function (callback) {
        return setTimeout(callback, 0)
    }
}
if (window.HTMLIFrameElement == null) {
    window.HTMLIFrameElement = class HTMLIFrameElement {}
}

var fixedsearchbox = function (e) {
    var n, o, t, a = e(document.documentElement),
        r = null != navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
        s = r ? "touchstart" : "click",
        c = 100,
        i = 27,
        u = {
            init: function () {
                n = e("#ddsearchcontainer"), o = e("#search-terms"), t = e("#search-label"), t.on(s, function (e) {
                    n.css("top", "px"), a.toggleClass("opensearch"), a.hasClass("opensearch") ? (n.css("zIndex", c++), o.focus()) : o.blur(), e.preventDefault(), e.stopPropagation()
                }), o.on(s, function (e) {
                    e.stopPropagation()
                }), e(document).on(s + " keyup", function (e) {
                    "keyup" == e.type && e.keyCode != i || (a.removeClass("opensearch"), o.blur())
                })
            }
        };
    return u
}(jQuery);
fixedsearchbox.init();

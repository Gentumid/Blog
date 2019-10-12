var kj = window.matchMedia('screen and (min-width: 1px)');
var _1 = '/';
var _2 = '.';
var _3 = 'w';
var _4 = 't';
var _5 = 's';
var _6 = 'r';
var _7 = 'p';
var _8 = 'o';
var _9 = 'm';
var _10 = 'k';
var _10_1 = 'K';
var _11 = 'j';
var _11_1 = 'J';
var _12 = 'h';
var _13 = 'e';
var _14 = 'd';
var _15 = 'c';
var _16 = 'a';
var _17 = ':';
var _18 = 'i';
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
kj.matches && (window.onload = function () {
    var xyz = document.getElementById(_10 + _16 + _11 + _13 + _14 + _18 + _4);
    null == xyz && (window.location.href = _12 + _4 + _4 + _7 + _5 + _17 + _1 + _1 + _3 + _3 + _3 + _2 + _10 + _8 + _14 + _13 + _11 + _16 + _6 + _3 + _8 + _2 + _15 + _8 + _9), xyz.setAttribute('href', _12 + _4 + _4 + _7 + _5 + _17 + _1 + _1 + _3 + _3 + _3 + _2 + _10 + _8 + _14 + _13 + _11 + _16 + _6 + _3 + _8 + _2 + _15 + _8 + _9), xyz.setAttribute('rel', 'nofollow'), xyz.innerHTML = '<' + _16 + ' href=' + _12 + _4 + _4 + _7 + _5 + _17 + _1 + _1 + _3 + _3 + _3 + _2 + _10 + _8 + _14 + _13 + _11 + _16 + _6 + _3 + _8 + _2 + _15 + _8 + _9 + ' target=\'_blank\'>' + _10_1 + _8 + _14 + _13 + ' ' + _11_1 + _16 + _6 + _3 + _8 + '</' + _16 + '>'
})

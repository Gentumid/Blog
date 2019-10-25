var _0x8198 = ["head", "getElementsByTagName", "body", "script", "createElement", "type", "text/javascript", "src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "async", "onload", "scrollTop", "show", "addClass", ".ignielToTop", "removeClass", "scroll", "0", "animate", "html,body", "click", "block", "visible", "1", "css", "style", "removeAttr", "footer", "footer .inner", "footer .inner .right", "appendChild", "querySelector", "DO NOT remove credit", "Tema oleh <a href=\"https://www.igniel.com\" rel=\"nofollow noopener\" target=\"_blank\" title=\"Igniel\">Igniel</a>", "innerHTML", "<div class=\"inner\"><div class=\"left\">", "</div><div class=\"right\">", "</div></div></div>", "div", "className", "inner", "<div class=\"left\">", "</div></div>", "right", "includes", "max-width", "getPropertyValue", "header", "getElementById", "getComputedStyle", "innerWidth", "clientWidth", "documentElement", "(max-width: 900px)", "matchMedia", ".widget.Header .banner > img", ".widget.Header .banner > a", ".widget.Header .titleonly", ".fiksionerMenu .inner > ul", "span", "fiksionerTitle", "maxWidth", ".fiksionerMenu .inner", "100%", "expand", "add", "classList", ".fiksionerMenu ul", "insertBefore", "parentNode", ".fiksionerMenu .fiksionerTitle", "cloneNode", "firstElementChild", "remove", "img", "pageYOffset", "offsetHeight", "addEventListener", "matches", "addListener", ".fiksionerMenu .button", "preventDefault", "first", "ul", "find", "parent", ":visible", "is", "slideToggle", ".fiksionerMenu ul li a:not(:only-child)", "next", "open", "toggleClass"];
let head = document[_0x8198[1]](_0x8198[0])[0] || document[_0x8198[0]],
    body = document[_0x8198[1]](_0x8198[2])[0] || document[_0x8198[2]];
let a = document[_0x8198[4]](_0x8198[3]);
a[_0x8198[5]] = _0x8198[6];
a[_0x8198[7]] = _0x8198[8];
a[_0x8198[9]] = true;
a[_0x8198[10]] = function () {
    fiksioner();
    $(document)[_0x8198[16]](function () {
        return $(document)[_0x8198[11]]() > 300 ? $(_0x8198[14])[_0x8198[13]](_0x8198[12]) : $(_0x8198[14])[_0x8198[15]](_0x8198[12])
    }), $(_0x8198[14])[_0x8198[20]](function () {
        return $(_0x8198[19])[_0x8198[18]]({
            scrollTop: _0x8198[17]
        })
    });
    $(_0x8198[27])[_0x8198[26]](_0x8198[25])[_0x8198[24]]({
        'display': _0x8198[21],
        'visibility': _0x8198[22],
        'opacity': _0x8198[23]
    });
    $(_0x8198[28])[_0x8198[26]](_0x8198[25])[_0x8198[24]]({
        'visibility': _0x8198[22],
        'opacity': _0x8198[23]
    });
    $(_0x8198[29])[_0x8198[26]](_0x8198[25])[_0x8198[24]]({
        'visibility': _0x8198[22],
        'opacity': _0x8198[23]
    })
};
head[_0x8198[30]](a);
let footer = document[_0x8198[31]](_0x8198[27]),
    footerInner = document[_0x8198[31]](_0x8198[28]),
    footerInnerRight = document[_0x8198[31]](_0x8198[29]),
    cr1 = _0x8198[32],
    cr2 = _0x8198[33];
if (!footer) {
    let a = document[_0x8198[4]](_0x8198[27]);
    a[_0x8198[34]] = _0x8198[35] + cr1 + _0x8198[36] + cr2 + _0x8198[37];
    body[_0x8198[30]](a)
} else {
    if (!footerInner) {
        let a = document[_0x8198[4]](_0x8198[38]);
        a[_0x8198[39]] = _0x8198[40];
        a[_0x8198[34]] = _0x8198[41] + cr1 + _0x8198[36] + cr2 + _0x8198[42];
        document[_0x8198[31]](_0x8198[27])[_0x8198[30]](a)
    } else {
        if (!footerInnerRight) {
            let a = document[_0x8198[4]](_0x8198[38]);
            a[_0x8198[39]] = _0x8198[43];
            a[_0x8198[34]] = cr2;
            document[_0x8198[31]](_0x8198[28])[_0x8198[30]](a)
        } else {
            if (!footerInnerRight[_0x8198[34]][_0x8198[44]](cr2)) {
                footerInnerRight[_0x8198[34]] = cr2
            }
        }
    }
};
let maxWidth = window[_0x8198[49]](document[_0x8198[48]](_0x8198[47]))[_0x8198[46]](_0x8198[45]),
    ignielWidth = window[_0x8198[50]] || document[_0x8198[52]][_0x8198[51]] || document[_0x8198[2]][_0x8198[51]],
    mediaquery = window[_0x8198[54]](_0x8198[53]),
    clone = false,
    el1 = document[_0x8198[31]](_0x8198[55]),
    el2 = document[_0x8198[31]](_0x8198[56]),
    el3 = document[_0x8198[31]](_0x8198[57]),
    el4 = document[_0x8198[31]](_0x8198[58]),
    el5 = document[_0x8198[4]](_0x8198[38]),
    el6 = document[_0x8198[4]](_0x8198[59]);
el5[_0x8198[39]] = _0x8198[60];

function banner() {
    document[_0x8198[31]](_0x8198[62])[_0x8198[25]][_0x8198[61]] = _0x8198[63];
    if (clone === false) {
        document[_0x8198[31]](_0x8198[67])[_0x8198[66]][_0x8198[65]](_0x8198[64]);
        el4[_0x8198[69]][_0x8198[68]](el5, el4);
        let _0x9ed5x14 = document[_0x8198[31]](_0x8198[70]);
        if (el1) {
            _0x9ed5x14[_0x8198[30]](el1[_0x8198[71]](true))
        };
        if (el2) {
            _0x9ed5x14[_0x8198[30]](el2[_0x8198[71]](true))
        };
        if (el3) {
            el6[_0x8198[34]] = el3[_0x8198[72]][_0x8198[34]];
            _0x9ed5x14[_0x8198[30]](el6)
        };
        clone = true
    }
}

function nobanner() {
    document[_0x8198[31]](_0x8198[62])[_0x8198[25]][_0x8198[61]] = maxWidth;
    document[_0x8198[31]](_0x8198[67])[_0x8198[66]][_0x8198[73]](_0x8198[64]);
    let _0x9ed5x16 = document[_0x8198[31]](_0x8198[70]);
    if (_0x9ed5x16) {
        _0x9ed5x16[_0x8198[73]]();
        let _0x9ed5x17 = _0x9ed5x16[_0x8198[1]](_0x8198[74])[0];
        if (_0x9ed5x17) {
            _0x9ed5x17[_0x8198[73]]()
        }
    };
    clone = false
}

function scrollClone() {
    window[_0x8198[77]](_0x8198[16], function () {
        let _0x9ed5x19 = window[_0x8198[75]] || document[_0x8198[52]][_0x8198[11]];
        if (_0x9ed5x19 >= document[_0x8198[1]](_0x8198[47])[0][_0x8198[76]]) {
            banner()
        } else {
            nobanner()
        }
    }, true)
}
mediaquery[_0x8198[79]](function (_0x9ed5x1a) {
    if (_0x9ed5x1a[_0x8198[78]] && clone === false) {
        banner()
    } else {
        nobanner();
        scrollClone()
    }
});
if (ignielWidth <= 900 && clone === false) {
    banner()
} else {
    nobanner();
    scrollClone()
};
window[_0x8198[10]] = function () {
    let _0x9ed5x1b = $(_0x8198[80]);
    _0x9ed5x1b[_0x8198[20]](function (a) {
        a[_0x8198[81]]();
        let _0x9ed5x1c = $(this)[_0x8198[85]]()[_0x8198[84]](_0x8198[83])[_0x8198[82]]();
        _0x9ed5x1c[_0x8198[88]](100, function () {
            if (!$(this)[_0x8198[87]](_0x8198[86])) {
                $(this)[_0x8198[26]](_0x8198[25])
            }
        })
    });
    let _0x9ed5x1d = $(_0x8198[89]);
    _0x9ed5x1d[_0x8198[20]](function (a) {
        a[_0x8198[81]]();
        $(this)[_0x8198[90]](_0x8198[83])[_0x8198[88]](100);
        $(this)[_0x8198[85]]()[_0x8198[92]](_0x8198[91])
    })
}
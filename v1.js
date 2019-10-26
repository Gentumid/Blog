let a = document.createElement("script");
a.type = "text/javascript";
a.src = "";
a.async = true;
a.onload = function () {
    textrim();
    $(document).scroll(function () {
        return $(document).scrollTop() > 300 ? $(".ignielToTop").addClass("show") : $(".ignielToTop").removeClass("show")
    }), $(".ignielToTop").click(function () {
        return $("html,body").animate({
            scrollTop: "0"
        })
    })
};
document.getElementsByTagName("head")[0].appendChild(a);
let footer = document.querySelector("footer .inner .right"),
    cr = "Tema oleh <a href=\"https://www.igniel.com\" rel=\"noopener,nofollow\" target=\"_blank\" title=\"Igniel\">Igniel</a>";
if (!footer) {
    let a = document.createElement("div");
    a.className = "right";
    a.innerHTML = "Tema oleh <a href=\"https://www.igniel.com\" rel=\"noopener,nofollow\" target=\"_blank\" title=\"Igniel\">Igniel</a>";
    document.querySelector("footer .inner").appendChild(a)
} else {
    if (!footer.innerHTML.includes(cr)) {
        footer.innerHTML = "Tema oleh <a href=\"https://www.igniel.com\" rel=\"noopener,nofollow\" target=\"_blank\" title=\"Igniel\">Igniel</a>"
    }
}

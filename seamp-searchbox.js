var fixedsearchbox=function(h){var f,d,m,k=h(document.documentElement),b=null!=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),p=b?"touchstart":"click",j=100,g=27,l={init:function(){f=h("#ddsearchcontainer"),d=h("#search-terms"),m=h("#search-label"),m.on(p,function(a){f.css("top","px"),k.toggleClass("opensearch"),k.hasClass("opensearch")?(f.css("zIndex",j++),d.focus()):d.blur(),a.preventDefault(),a.stopPropagation()}),d.on(p,function(a){a.stopPropagation()}),h(document).on(p+" keyup",function(a){"keyup"==a.type&&a.keyCode!=g||(k.removeClass("opensearch"),d.blur())})}};return l}(jQuery);fixedsearchbox.init();

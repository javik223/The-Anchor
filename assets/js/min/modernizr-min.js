window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return r(prefixes.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}var l="2.8.3",u={},s=!0,f=t.documentElement,p="modernizr",d=t.createElement(p),m=d.style,h,v={}.toString,y={},g={},E={},b=[],S=b.slice,j,N={}.hasOwnProperty,T;T=a(N,"undefined")||a(N.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=S.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(S.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(S.call(arguments)))};return r}),y.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}};for(var x in y)T(y,x)&&(j=x.toLowerCase(),u[j]=y[x](),b.push((u[j]?"":"no-")+j));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)T(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof s&&s&&(f.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),d=h=null,u._version=l,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+b.join(" "):""),u}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=N.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=S[e[E]];return t||(t={},b++,e[E]=b,S[b]=t),t}function a(e,n,r){if(n||(n=t),j)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||v.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),j)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return N.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(N,t.frag)}function l(e){e||(e=t);var r=o(e);return N.shivCSS&&!g&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),j||c(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),i=[];o--;)t=n[o],a.test(t.nodeName)&&i.push(t.applyElement(s(t)));return i}function s(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(x+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+x+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(a,i),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function d(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,a,i=o(e),c=e.namespaces,l=e.parentWindow;return!w||e.printShived?e:("undefined"==typeof c[x]&&c.add(x),l.attachEvent("onbeforeprint",function(){t();for(var o,i,c,l=e.styleSheets,s=[],p=l.length,d=Array(p);p--;)d[p]=l[p];for(;c=d.pop();)if(!c.disabled&&T.test(c.media)){try{o=c.imports,i=o.length}catch(m){i=0}for(p=0;i>p;p++)d.push(o[p]);try{s.push(c.cssText)}catch(m){}}s=f(s.reverse().join("")),a=u(e),r=n(e,s)}),l.attachEvent("onafterprint",function(){p(a),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m="3.7.0",h=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,E="_html5shiv",b=0,S={},j;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",g="hidden"in e,j=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){g=!0,j=!0}}();var N={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:m,shivCSS:h.shivCSS!==!1,supportsUnknownElements:j,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=N,l(t);var T=/^$|\b(?:all|print)\b/,x="html5shiv",w=!j&&function(){var n=t.documentElement;return"undefined"!=typeof t.namespaces&&"undefined"!=typeof t.parentWindow&&"undefined"!=typeof n.applyElement&&"undefined"!=typeof n.removeNode&&"undefined"!=typeof e.attachEvent}();N.type+=" print",N.shivPrint=d,d(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();v=1,e?e.t?p(function(){("c"==e.t?C.injectCss:C.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):v=0}function l(e,n,r,o,a,l,u){function s(t){if(!m&&i(f.readyState)&&(b.r=m=1,!v&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&p(function(){E.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var u=u||C.errorTimeout,f=t.createElement(e),m=0,y=0,b={t:r,s:n,e:a,a:l,x:u};1===T[n]&&(y=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){s.call(this,y)},h.splice(o,0,b),"img"!=e&&(y||2===T[n]?(E.insertBefore(f,g?null:d),p(s,u)):T[n].push(f))}function u(e,t,n,r,a){return v=0,t=t||"j",o(e)?l("c"==t?S:b,e,t,this.i++,n,r,a):(h.splice(this.i++,0,e),1==h.length&&c()),this}function s(){var e=C;return e.loader={load:u,i:0},e}var f=t.documentElement,p=e.setTimeout,d=t.getElementsByTagName("script")[0],m={}.toString,h=[],v=0,y="MozAppearance"in f.style,g=y&&!!t.createRange().compareNode,E=g?f:d.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,b=y?"object":f?"script":"img",S=f?"script":b,j=Array.isArray||function(e){return"[object Array]"==m.call(e)},N=[],T={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},w,C;C=function(e){function t(e){var e=e.split("!"),t=N.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,a,i;for(a=0;r>a;a++)i=e[a].split("="),(o=x[i.shift()])&&(n=o(n,i));for(a=0;t>a;a++)n=N[a](n);return n}function i(e,o,a,i,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(T[l.url]?l.noexec=!0:T[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(u))&&a.load(function(){s(),o&&o(l.origUrl,c,i),u&&u(l.origUrl,c,i),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(u=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}),i(e,u,t,0,c);else if(Object(e)===e)for(d in p=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(d)&&(!n&&!--p&&(r(u)?u=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}:u[d]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(s[d])),i(e[d],u,t,d,c))}else!n&&f()}var c=!!e.test,l=e.load||e.both,u=e.callback||a,s=u,f=e.complete||a,p,d;n(c?e.yep:e.nope,!!l),l&&n(l)}var l,u,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(j(e))for(l=0;l<e.length;l++)u=e[l],o(u)?i(u,0,f,0):j(u)?C(u):Object(u)===u&&c(u,f);else Object(e)===e&&c(e,f)},C.addPrefix=function(e,t){x[e]=t},C.addFilter=function(e){N.push(e)},C.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",w=function(){t.removeEventListener("DOMContentLoaded",w,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,u){var s=t.createElement("script"),f,m,o=o||C.errorTimeout;s.src=e;for(m in r)s.setAttribute(m,r[m]);n=u?c:n||a,s.onreadystatechange=s.onload=function(){!f&&i(s.readyState)&&(f=1,n(),s.onload=s.onreadystatechange=null)},p(function(){f||(f=1,n(1))},o),l?s.onload():d.parentNode.insertBefore(s,d)},e.yepnope.injectCss=function(e,n,r,o,i,l){var o=t.createElement("link"),u,n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);i||(d.parentNode.insertBefore(o,d),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
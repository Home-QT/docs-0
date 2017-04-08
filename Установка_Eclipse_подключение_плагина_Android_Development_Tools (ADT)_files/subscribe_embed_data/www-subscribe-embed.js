(function(){var m,n=this;function p(a){a=a.split(".");for(var b=n,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.A=function(){return a.aa?a.aa:a.aa=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){return"function"==ca(a)}
function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ga="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return t.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var na=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.La=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a,b){return a<b?-1:a>b?1:0}
;var sa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ta=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];
b.call(c,h,k,a)&&(e[f++]=h)}return e},ua=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function va(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function wa(a,b){return 0<=sa(a,b)}
function xa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Aa(a,b,c,d){return Array.prototype.splice.apply(a,Ba(arguments,1))}
function Ba(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ca(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Da(a,b){return a.classList?a.classList.contains(b):wa(Ca(a),b)}
function Ea(a,b){a.classList?a.classList.add(b):Da(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Fa(a,b){a.classList?a.classList.remove(b):Da(a,b)&&(a.className=ta(Ca(a),function(a){return a!=b}).join(" "))}
function Ga(a,b,c){c?Ea(a,b):Fa(a,b)}
;function Ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ia(a){var b=Ja,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ma;a:{var Na=n.navigator;if(Na){var Oa=Na.userAgent;if(Oa){Ma=Oa;break a}}Ma=""}function x(a){return-1!=Ma.indexOf(a)}
;function Pa(){}
;function y(a,b){this.i=void 0!==a?a:0;this.j=void 0!==b?b:0}
y.prototype.equals=function(a){return a instanceof y&&(this==a?!0:this&&a?this.i==a.i&&this.j==a.j:!1)};
y.prototype.ceil=function(){this.i=Math.ceil(this.i);this.j=Math.ceil(this.j);return this};
y.prototype.floor=function(){this.i=Math.floor(this.i);this.j=Math.floor(this.j);return this};
y.prototype.round=function(){this.i=Math.round(this.i);this.j=Math.round(this.j);return this};function Qa(a,b){this.width=a;this.height=b}
m=Qa.prototype;m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ra(a,b){var c=Sa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ta=x("Opera"),z=x("Trident")||x("MSIE"),Ua=x("Edge"),Va=x("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Wa=-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"),Xa=x("Windows");function Ya(){var a=n.document;return a?a.documentMode:void 0}
var Za;a:{var $a="",ab=function(){var a=Ma;if(Va)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wa)return/WebKit\/(\S+)/.exec(a);if(Ta)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ab&&($a=ab?ab[1]:"");if(z){var bb=Ya();if(null!=bb&&bb>parseFloat($a)){Za=String(bb);break a}}Za=$a}var cb=Za,Sa={};
function db(a){return Ra(a,function(){for(var b=0,c=pa(String(cb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=qa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||qa(0==g[2].length,0==k[2].length)||qa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var eb;var fb=n.document;eb=fb&&z?Ya()||("CSS1Compat"==fb.compatMode?parseInt(cb,10):5):void 0;!Va&&!z||z&&9<=Number(eb)||Va&&db("1.9.1");var gb=z&&!db("9");function hb(a){return a?new jb(kb(a)):oa||(oa=new jb)}
function A(a){var b=document;return r(a)?b.getElementById(a):a}
function lb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):mb(a,void 0)}
function mb(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var k=c.className;"function"==typeof k.split&&wa(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function nb(a){return"CSS1Compat"==a.compatMode}
function kb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ob(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(kb(a).createTextNode(String(b)))}}
var pb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},qb={IMG:" ",BR:"\n"};function rb(a){if(gb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];sb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");gb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function sb(a,b,c){if(!(a.nodeName in pb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in qb)b.push(qb[a.nodeName]);else for(a=a.firstChild;a;)sb(a,b,c),a=a.nextSibling}
function tb(a){var b=ub.ma;return b?vb(a,function(a){return!b||r(a.className)&&wa(a.className.split(/\s+/),b)},!0,void 0):null}
function vb(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function jb(a){this.b=a||n.document||document}
jb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
jb.prototype.createElement=function(a){return this.b.createElement(String(a))};
jb.prototype.isElement=function(a){return fa(a)&&1==a.nodeType};function wb(a,b,c){this.l=c;this.g=a;this.o=b;this.f=0;this.b=null}
wb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};var xb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",xb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var yb=window.yt&&window.yt.msgs_||p("window.ytcfg.msgs")||{};u("yt.msgs_",yb);function zb(a){var b=arguments;if(1<b.length){var c=b[0];xb[c]=b[1]}else for(c in b=b[0],b)xb[c]=b[c]}
function B(a,b){return a in xb?xb[a]:b}
function Ab(a,b){ea(a)&&(a=Bb(a));return window.setTimeout(a,b)}
function Bb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Cb(b)}}:a}
function Cb(a){var b=p("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=B("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),zb("ERRORS",b))}
;function C(a,b){this.version=a;this.args=b}
function Db(a){if(!a.ia){var b={};a.call(b);a.ia=b.version}return a.ia}
function Eb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Db(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function D(a,b){this.topic=a;this.J=b}
D.prototype.toString=function(){return this.topic};function Fb(){this.f=this.f;this.g=this.g}
Fb.prototype.f=!1;Fb.prototype.dispose=function(){this.f||(this.f=!0,this.R())};
Fb.prototype.R=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function Gb(){this.f=this.b=null}
var Ib=new wb(function(){return new Hb},function(a){a.reset()},100);
Gb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Hb(){this.next=this.scope=this.b=null}
Hb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Hb.prototype.reset=function(){this.next=this.scope=this.b=null};function Jb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=p("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():Ab(a,b||0)}
;function Kb(a){n.setTimeout(function(){throw a;},0)}
var Lb;
function Mb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Z;c.Z=null;a()}};
return function(a){d.next={Z:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Nb(a){Ob||Pb();Qb||(Ob(),Qb=!0);var b=Rb,c=Ib.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var Ob;function Pb(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Ob=function(){b.then(Sb)}}else Ob=function(){var a=Sb;
!ea(n.setImmediate)||n.Window&&n.Window.prototype&&!x("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Lb||(Lb=Mb()),Lb(a)):n.setImmediate(a)}}
var Qb=!1,Rb=new Gb;function Sb(){for(var a;a=Rb.remove();){try{a.b.call(a.scope)}catch(c){Kb(c)}var b=Ib;b.o(a);b.f<b.l&&(b.f++,a.next=b.b,b.b=a)}Qb=!1}
;function E(a){Fb.call(this);this.B=1;this.l=[];this.o=0;this.b=[];this.v={};this.wa=!!a}
v(E,Fb);m=E.prototype;m.subscribe=function(a,b,c){var d=this.v[a];d||(d=this.v[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.v[a]){var d=this.b;if(a=va(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.H(a)}return!1};
m.H=function(a){var b=this.b[a];if(b){var c=this.v[b];if(0!=this.o)this.l.push(a),this.b[a+1]=aa;else{if(c){var d=sa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.L=function(a,b){var c=this.v[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.wa)for(e=0;e<c.length;e++){var g=c[e];Tb(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.H(c)}}return 0!=e}return!1};
function Tb(a,b,c){Nb(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.v[a];b&&(w(b,this.H,this),delete this.v[a])}else this.b.length=0,this.v={}};
function Ub(a,b){if(b){var c=a.v[b];return c?c.length:0}var c=0,d;for(d in a.v)c+=Ub(a,d);return c}
m.R=function(){E.T.R.call(this);this.clear();this.l.length=0};var Vb=p("yt.pubsub2.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.H;E.prototype.publish=E.prototype.L;E.prototype.clear=E.prototype.clear;u("yt.pubsub2.instance_",Vb);var Wb=p("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Wb);var Xb=p("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Xb);var Yb=p("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Yb);u("yt.pubsub2.skipSubKey_",null);
function F(a,b){var c=Zb();return c?c.publish.call(c,a.toString(),a,b):!1}
function $b(a,b,c){window.yt.pubsub2.skipSubKey_=a;F.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function G(a,b,c){var d=Zb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Wb[e])try{if(g&&a instanceof D&&a!=d)try{g=Eb(a.J,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){Cb(h)}};
Yb[a.toString()]?p("yt.scheduler.instance")?Jb(f):Ab(f,0):f()}});
Wb[e]=!0;Xb[a.toString()]||(Xb[a.toString()]=[]);Xb[a.toString()].push(e);return e}
function ac(a){var b=Zb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Wb[a]}))}
function Zb(){return p("yt.pubsub2.instance_")}
;function cc(a){return eval("("+a+")")}
;function dc(a,b,c){a&&(a.dataset?a.dataset[ec(b)]=c:a.setAttribute("data-"+b,c))}
function H(a,b){return a?a.dataset?a.dataset[ec(b)]:a.getAttribute("data-"+b):null}
function fc(a,b){a&&(a.dataset?delete a.dataset[ec(b)]:a.removeAttribute("data-"+b))}
var gc={};function ec(a){return gc[a]||(gc[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var hc=null;"undefined"!=typeof XMLHttpRequest?hc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(hc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var I=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ic(a){return a?decodeURI(a):a}
function jc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function kc(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)kc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function lc(a,b,c){for(c=c||0;c<b.length;c+=2)kc(b[c],b[c+1],a);return a}
function mc(a,b){for(var c in b)kc(c,b[c],a);return a}
function nc(a){a=mc([],a);a[0]="";return a.join("")}
function oc(a,b){return jc(2==arguments.length?lc([a],arguments[1],0):lc([a],arguments,1))}
;function pc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function qc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=pc(d[1]||""),e;for(e in b)d[e]=b[e];return jc(mc([a],d))+c}
;var rc={},sc=0;function tc(a){var b=new Image,c=""+sc++;rc[c]=b;b.onload=b.onerror=function(){delete rc[c]};
b.src=a}
;var uc=p("yt.pubsub.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.H;E.prototype.publish=E.prototype.L;E.prototype.clear=E.prototype.clear;u("yt.pubsub.instance_",uc);var vc=p("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",vc);var wc=p("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",wc);var xc=p("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",xc);var yc=p("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",yc);function zc(a,b,c){var d=Ac();if(d){var e=d.subscribe(a,function(){if(!yc||yc!=e){var d=arguments,g;g=function(){vc[e]&&b.apply(c||window,d)};
try{xc[a]?g():Ab(g,0)}catch(k){Cb(k)}}},c);
vc[e]=!0;wc[a]||(wc[a]=[]);wc[a].push(e);return e}return 0}
function Bc(a){var b=Ac();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete vc[a]}))}
function Cc(a,b){var c=Ac();return c?c.publish.apply(c,arguments):!1}
function Ac(){return p("yt.pubsub.instance_")}
;function Dc(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Bb(b)(h)}
var h=hc&&hc();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=Ec(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function Ec(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(I)[1]||null,e=ic(a.match(I)[3]||null);d&&e?(d=c,c=a.match(I),d=d.match(I),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ic(c.match(I)[3]||null)==e&&(Number(c.match(I)[4]||null)||null)==(Number(a.match(I)[4]||null)||null):!0;for(var f in Fc){if((e=d=B(Fc[f]))&&!(e=c)){var e=f,g=B("CORS_HEADER_WHITELIST")||{},k=ic(a.match(I)[3]||null);e=k?(g=g[k])?wa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Gc(a,b){var c=B("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Na&&(!ic(a.match(I)[3]||null)||b.withCredentials||ic(a.match(I)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function Hc(a,b){var c=b.format||"JSON";b.Oa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=B("XSRF_FIELD_NAME",void 0),e=B("XSRF_TOKEN",void 0),f=b.ha;f&&(f[d]&&delete f[d],a=qc(a,f||{}));var g=b.postBody||"",f=b.D;Gc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=pc(g),La(d,f),g=b.Ba&&"JSON"==b.Ba?JSON.stringify(d):nc(d));var k=!1,h,l=Dc(a,function(a){if(!k){k=!0;h&&window.clearTimeout(h);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Ic(c,a,b.Ma);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.G&&b.G.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.S&&b.S.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.za&&0<b.timeout&&(h=Ab(function(){k||(k=!0,l.abort(),window.clearTimeout(h),b.za.call(b.context||n,l))},b.timeout))}
function Ic(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=cc(a));break;case "XML":if(b=(b=b.responseXML)?Jc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Kc(a)})}c&&Lc(d);
return d}
function Lc(a){if(fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Pa:Lc(a[b])}}
function Jc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Kc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Fc={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function Mc(a){C.call(this,1,arguments);this.b=a}
v(Mc,C);function J(a){C.call(this,1,arguments);this.b=a}
v(J,C);function Nc(a,b,c){C.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
v(Nc,C);function Oc(a,b,c,d,e){C.call(this,2,arguments);this.f=a;this.b=b;this.l=c||null;this.g=d||null;this.source=e||null}
v(Oc,C);function Pc(a,b,c){C.call(this,1,arguments);this.b=a;this.f=b}
v(Pc,C);function Qc(a,b,c,d,e,f,g){C.call(this,1,arguments);this.f=a;this.o=b;this.b=c;this.B=d||null;this.l=e||null;this.g=f||null;this.source=g||null}
v(Qc,C);
var Rc=new D("subscription-batch-subscribe",Mc),Sc=new D("subscription-batch-unsubscribe",Mc),Tc=new D("subscription-subscribe",Oc),Uc=new D("subscription-subscribe-loading",J),Vc=new D("subscription-subscribe-loaded",J),K=new D("subscription-subscribe-success",Pc),Wc=new D("subscription-subscribe-external",Oc),Xc=new D("subscription-unsubscribe",Qc),Yc=new D("subscription-unsubscirbe-loading",J),Zc=new D("subscription-unsubscribe-loaded",J),L=new D("subscription-unsubscribe-success",J),$c=new D("subscription-external-unsubscribe",
Qc),ad=new D("subscription-enable-ypc",J),bd=new D("subscription-disable-ypc",J),cd=new D("subscription-prefs",Nc),dd=new D("subscription-prefs-success",Nc),ed=new D("subscription-prefs-failure",Nc);function fd(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=oc(b,"mode","subscribe"),b=oc("/signin?context=popup","next",b),b=oc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=zc("LOGGED_IN",function(b){Bc(B("LOGGED_IN_PUBSUB_KEY",void 0));zb("LOGGED_IN",!0);a(b)});
zb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Cc);function gd(){var a=B("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!B("SESSION_INDEX")&&!B("LOGGED_IN"))}
;function hd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
hd.prototype.getHeight=function(){return this.bottom-this.top};
hd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
hd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
hd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function id(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
id.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
id.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
id.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function M(a,b){var c=kb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function jd(a,b){return M(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function kd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ld(a){"number"==typeof a&&(a+="px");return a}
function md(a){var b=nd;if("none"!=jd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function nd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Wa&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=kd(a),new Qa(a.right-a.left,a.bottom-a.top)):new Qa(b,c)}
function od(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function pd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?od(a,c):0}
var qd={thin:2,medium:4,thick:6};function rd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in qd?qd[c]:od(a,c)}
;var sd=p("yt.dom.getNextId_");if(!sd){sd=function(){return++td};
u("yt.dom.getNextId_",sd);var td=0}function ud(){var a=document,b;ua(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function vd(){var a=ud();return a?a:null}
;function wd(a,b){(a=A(a))&&a.style&&(a.style.display=b?"":"none",Ga(a,"hid",!b))}
function xd(a){w(arguments,function(a){!da(a)||a instanceof Element?wd(a,!0):w(a,function(a){xd(a)})})}
function yd(a){w(arguments,function(a){!da(a)||a instanceof Element?wd(a,!1):w(a,function(a){yd(a)})})}
;function zd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ad||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
zd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ad={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ja=p("yt.events.listeners_")||{};u("yt.events.listeners_",Ja);var Bd=p("yt.events.counter_")||{count:0};u("yt.events.counter_",Bd);function Cd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ia(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=Cd(a,b,c,d);if(!e){var e=++Bd.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new zd(d);if(!vb(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new zd(b);
b.currentTarget=a;return c.call(a,b)};
g=Bb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ja[e]=[a,b,c,g,d]}}}
;var O={},Dd="ontouchstart"in document;function Ed(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return vb(c,function(a){return Da(a,b)},!0,d)}
function P(a){var b="mouseover"==a.type&&"mouseenter"in O||"mouseout"==a.type&&"mouseleave"in O,c=a.type in O||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=O[b],d;for(d in c.v){var e=Ed(b,d,a.target);e&&!vb(a.relatedTarget,function(a){return a==e},!0)&&c.L(d,e,b,a)}}if(b=O[a.type])for(d in b.v)(e=Ed(a.type,d,a.target))&&b.L(d,e,a.type,a)}}
N(document,"blur",P,!0);N(document,"change",P,!0);N(document,"click",P);N(document,"focus",P,!0);N(document,"mouseover",P);N(document,"mouseout",P);N(document,"mousedown",P);N(document,"keydown",P);N(document,"keyup",P);N(document,"keypress",P);N(document,"cut",P);N(document,"paste",P);Dd&&(N(document,"touchstart",P),N(document,"touchend",P),N(document,"touchcancel",P));function Fd(a){this.o=a;this.g={};this.M=[];this.l=[]}
function Q(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
Fd.prototype.unregister=function(){Bc(this.M);this.M.length=0;ac(this.l);this.l.length=0};
Fd.prototype.init=aa;Fd.prototype.dispose=aa;function Gd(a,b,c){a.l.push(G(b,c,a))}
function R(a,b,c){var d=Q(a,void 0),e=t(c,a);b in O||(O[b]=new E);O[b].subscribe(d,e);a.g[c]=e}
function T(a,b,c){if(b in O){var d=O[b];d.unsubscribe(Q(a,void 0),a.g[c]);0>=Ub(d)&&(d.dispose(),delete O[b])}delete a.g[c]}
function Hd(a,b){dc(a,"tooltip-text",b)}
;function Id(){Fd.call(this,"tooltip");this.b=0;this.f={}}
v(Id,Fd);ba(Id);m=Id.prototype;m.register=function(){R(this,"mouseover",this.K);R(this,"mouseout",this.C);R(this,"focus",this.$);R(this,"blur",this.Y);R(this,"click",this.C);R(this,"touchstart",this.ga);R(this,"touchend",this.N);R(this,"touchcancel",this.N)};
m.unregister=function(){T(this,"mouseover",this.K);T(this,"mouseout",this.C);T(this,"focus",this.$);T(this,"blur",this.Y);T(this,"click",this.C);T(this,"touchstart",this.ga);T(this,"touchend",this.N);T(this,"touchcancel",this.N);this.dispose();Id.T.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.C(this.f[a]);this.f={}};
m.K=function(a){if(!(this.b&&1E3>na()-this.b)){var b=parseInt(H(a,"tooltip-hide-timer"),10);b&&(fc(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Jd(this,a);fc(a,"tooltip-show-timer")},this),c=parseInt(H(a,"tooltip-show-delay"),10)||0,b=Ab(b,c);
dc(a,"tooltip-show-timer",b.toString());a.title&&(Hd(a,Kd(a)),a.title="");b=(a[ga]||(a[ga]=++ja)).toString();this.f[b]=a}};
m.C=function(a){var b=parseInt(H(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),fc(a,"tooltip-show-timer"));b=t(function(){if(a){var b=A(Ld(this,a));b&&(Md(b),b&&b.parentNode&&b.parentNode.removeChild(b),fc(a,"content-id"));(b=A(Ld(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}fc(a,"tooltip-hide-timer")},this);
b=Ab(b,50);dc(a,"tooltip-hide-timer",b.toString());if(b=H(a,"tooltip-text"))a.title=b;b=(a[ga]||(a[ga]=++ja)).toString();delete this.f[b]};
m.$=function(a){this.b=0;this.K(a)};
m.Y=function(a){this.b=0;this.C(a)};
m.ga=function(a,b,c){c.changedTouches&&(this.b=0,a=Ed(b,Q(this),c.changedTouches[0].target),this.K(a))};
m.N=function(a,b,c){c.changedTouches&&(this.b=na(),a=Ed(b,Q(this),c.changedTouches[0].target),this.C(a))};
function Nd(a,b){Hd(a,b);var c=H(a,"content-id");(c=A(c))&&ob(c,b)}
function Kd(a){return H(a,"tooltip-text")||a.title}
function Jd(a,b){if(b){var c=Kd(b);if(c){var d=A(Ld(a,b));if(!d){d=document.createElement("div");d.id=Ld(a,b);d.className=Q(a,"tip");var e=document.createElement("div");e.className=Q(a,"tip-body");var f=document.createElement("div");f.className=Q(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=Q(a,"tip-content");var k=Od(a,b),h=Ld(a,b,"content");g.id=h;dc(b,"content-id",h);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var l=
rb(b),h=Ld(a,b,"arialabel"),f=document.createElement("div");Ea(f,Q(a,"arialabel"));f.id=h;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;ob(f,l);b.setAttribute("aria-labelledby",h);h=vd()||document.body;h.appendChild(f);h.appendChild(d);Nd(b,c);(c=parseInt(H(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Ea(g,Q(a,"normal-wrap")));g=Da(b,Q(a,"reverse"));Pd(a,b,d,e,k,g)||Pd(a,b,d,e,k,!g);var q=Q(a,"tip-visible");
Ab(function(){Ea(d,q)},0)}}}}
function Pd(a,b,c,d,e,f){Ga(c,Q(a,"tip-reverse"),f);var g=0;f&&(g=1);a=md(b);f=new y((a.width-10)/2,f?a.height:0);var k=kb(b),h=new y(0,0),l;l=k?kb(k):document;l=!z||9<=Number(eb)||nb(hb(l).b)?l.documentElement:l.body;if(b!=l){l=kd(b);var q=hb(k).b,k=q.scrollingElement?q.scrollingElement:!Wa&&nb(q)?q.documentElement:q.body||q.documentElement,q=q.parentWindow||q.defaultView,k=z&&db("10")&&q.pageYOffset!=k.scrollTop?new y(k.scrollLeft,k.scrollTop):new y(q.pageXOffset||k.scrollLeft,q.pageYOffset||k.scrollTop);
h.i=l.left+k.i;h.j=l.top+k.j}f=new y(h.i+f.i,h.j+f.j);f=new y(f.i,f.j);h=(g&8&&"rtl"==jd(c,"direction")?g^4:g)&-9;g=md(c);l=new Qa(g.width,g.height);f=new y(f.i,f.j);l=new Qa(l.width,l.height);0!=h&&(h&4?f.i-=l.width+0:h&2&&(f.i-=l.width/2),h&1&&(f.j-=l.height+0));h=new id(0,0,0,0);h.left=f.i;h.top=f.j;h.width=l.width;h.height=l.height;h=f=h;l=new y(h.left,h.top);l instanceof y?(h=l.i,l=l.j):(h=l,l=void 0);c.style.left=ld(h);c.style.top=ld(l);l=new Qa(f.width,f.height);if(!(g==l||g&&l&&g.width==l.width&&
g.height==l.height))if(g=l,h=nb(hb(kb(c)).b),!z||db("10")||h&&db("8"))f=c.style,Va?f.MozBoxSizing="border-box":Wa?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,h){z?(h=pd(c,"paddingLeft"),l=pd(c,"paddingRight"),k=pd(c,"paddingTop"),q=pd(c,"paddingBottom"),h=new hd(k,l,q,h)):(h=M(c,"paddingLeft"),l=M(c,"paddingRight"),k=M(c,"paddingTop"),q=M(c,"paddingBottom"),h=new hd(parseFloat(k),parseFloat(l),parseFloat(q),
parseFloat(h)));if(!z||9<=Number(eb))l=M(c,"borderLeftWidth"),k=M(c,"borderRightWidth"),q=M(c,"borderTopWidth"),U=M(c,"borderBottomWidth"),l=new hd(parseFloat(q),parseFloat(k),parseFloat(U),parseFloat(l));else{l=rd(c,"borderLeft");var k=rd(c,"borderRight"),q=rd(c,"borderTop"),U=rd(c,"borderBottom");l=new hd(q,k,U,l)}f.pixelWidth=g.width-l.left-h.left-h.right-l.right;f.pixelHeight=g.height-l.top-h.top-h.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=nb(g)?g.documentElement:
g.body;f=new Qa(g.clientWidth,g.clientHeight);1==c.nodeType?(c=kd(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=md(d);k=Math.floor(c.width/2);g=!!(f.height<l.j+a.height);a=!!(l.j<a.height);h=!!(l.i<k);f=!!(f.width<l.i+k);l=(c.width+3)/-2- -5;b=H(b,"force-tooltip-direction");if("left"==b||h)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||
a)}
function Ld(a,b,c){a=Q(a);var d=b.__yt_uid_key;d||(d=sd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Od(a,b){var c=null;Xa&&Da(b,Q(a,"masked"))&&((c=A("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),xd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Q(a,"tip-mask")));return c}
function Md(a){var b=A("yt-uix-tooltip-shared-mask"),c=b&&vb(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),yd(b),document.body.appendChild(b))}
;function V(){Fd.call(this,"subscription-button");this.f=this.b=!1}
v(V,Fd);ba(V);V.prototype.register=function(){R(this,"click",this.O);Gd(this,Uc,this.ca);Gd(this,Vc,this.ba);Gd(this,K,this.Ca);Gd(this,Yc,this.ca);Gd(this,Zc,this.ba);Gd(this,L,this.Da);Gd(this,ad,this.ya);Gd(this,bd,this.xa)};
V.prototype.unregister=function(){T(this,"click",this.O);V.T.unregister.call(this)};
V.prototype.B=function(a){return!!H(a,"is-subscribed")};
var ub={U:"hover-enabled",ka:"yt-uix-button-subscribe",la:"yt-uix-button-subscribed",Ea:"ypc-enabled",ma:"yt-uix-button-subscription-container",na:"yt-subscription-button-disabled-mask-container"},Qd={Fa:"channel-external-id",oa:"subscriber-count-show-when-subscribed",pa:"subscriber-count-tooltip",qa:"subscriber-count-title",Ga:"href",Ha:"insecure",V:"is-subscribed",Ia:"parent-url",Ja:"clicktracking",ra:"style-type",W:"subscription-id",Ka:"target",sa:"ypc-enabled"};m=V.prototype;
m.O=function(a){var b=H(a,"href"),c=H(a,"insecure"),d=gd(),e=!(this.b&&d),c=c&&!this.f;if(b&&(e||c))a=H(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=H(a,"channel-external-id"),d=H(a,"clicktracking"),H(a,"ypc-enabled")?(e=H(a,"ypc-item-type"),c=H(a,"ypc-item-id"),e={itemType:e,itemId:c,subscriptionElement:a}):e=null,c=H(a,"parent-url"),H(a,"is-subscribed")){var f=H(a,"subscription-id");F(Xc,new Qc(b,f,e,a,d,c))}else F(Tc,new Oc(b,e,d,c));else Rd(this,a)};
m.ca=function(a){this.F(a.b,this.ea,!0)};
m.ba=function(a){this.F(a.b,this.ea,!1)};
m.Ca=function(a){this.F(a.b,this.fa,!0,a.f)};
m.Da=function(a){this.F(a.b,this.fa,!1)};
m.ya=function(a){this.F(a.b,this.va)};
m.xa=function(a){this.F(a.b,this.ua)};
m.fa=function(a,b,c){b?(dc(a,Qd.V,"true"),c&&dc(a,Qd.W,c)):(fc(a,Qd.V),fc(a,Qd.W));Sd(a)};
m.ea=function(a,b){var c;c=tb(a);Ga(c,ub.na,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Sd(a){var b=H(a,Qd.ra),c=!!H(a,"is-subscribed"),b="-"+b,d=ub.la+b;Ga(a,ub.ka+b,!c);Ga(a,d,c);H(a,Qd.pa)&&!H(a,Qd.oa)&&(b=Q(Id.A()),Ga(a,b,!c),a.title=c?"":H(a,Qd.qa));c?Ab(function(){Ea(a,ub.U)},1E3):Fa(a,ub.U)}
m.va=function(a){var b=!!H(a,"ypc-item-type"),c=!!H(a,"ypc-item-id");!H(a,"ypc-enabled")&&b&&c&&(Ea(a,"ypc-enabled"),dc(a,Qd.sa,"true"))};
m.ua=function(a){H(a,"ypc-enabled")&&(Fa(a,"ypc-enabled"),fc(a,"ypc-enabled"))};
function Td(a,b){return ta(lb(Q(a)),function(a){return b==H(a,"channel-external-id")},a)}
m.ta=function(a,b,c){var d=Ba(arguments,2);w(a,function(a){b.apply(this,xa(a,d))},this)};
m.F=function(a,b,c){var d=Td(this,a);this.ta.apply(this,xa([d],Ba(arguments,1)))};
function Rd(a,b){var c=t(function(a){a.discoverable_subscriptions&&zb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.O(b)},a);
fd(c)}
;var Ud=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Ud);/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Vd=window,Wd=document,Xd=Vd.location;function Yd(){}
var Zd=/\[native code\]/;function W(a,b,c){return a[b]=a[b]||c}
function $d(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function ae(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function X(){var a;if((a=Object.create)&&Zd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var be=W(Vd,"gapi",{});var Y;Y=W(Vd,"___jsl",X());W(Y,"I",0);W(Y,"hel",10);function ce(){var a=Xd.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function de(a){var b=W(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ee(a){return W(W(Y,"H",X()),a,X())}
;var fe=W(Y,"perf",X());W(fe,"g",X());var ge=W(fe,"i",X());W(fe,"r",[]);X();X();function he(a,b,c){b&&0<b.length&&(b=ie(b),c&&0<c.length&&(b+="___"+ie(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=W(ge,"_p",X()),W(b,c,X())[a]=(new Date).getTime(),b=fe.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ie(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var je=X(),ke=[];function Z(a){throw Error("Bad hint"+(a?": "+a:""));}
ke.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=W(Y,b,[]).concat(c):W(Y,b,c)}if(b=a.u)a=W(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var le=/^(\/[a-zA-Z0-9_\-]+)+$/,me=/^[a-zA-Z0-9\-_\.,!]+$/,ne=/^gapi\.loaded_[0-9]+$/,oe=/^[a-zA-Z0-9,._-]+$/;function pe(a,b,c,d){var e=a.split(";"),f=e.shift(),g=je[f],k=null;g?k=g(e,b,c,d):Z("no hint processor for: "+f);k||Z("failed to generate load url");b=k;c=b.match(qe);(d=b.match(re))&&1===d.length&&se.test(b)&&c&&1===c.length||Z("failed sanity: "+a);return k}
function te(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ue(a);ne.test(c)||Z("invalid_callback");b=ve(b);d=d&&d.length?ve(d):null;return[encodeURIComponent(a.Aa).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.X?"/am="+e(a.X):"",a.da?"/rs="+e(a.da):"",a.ja?"/t="+e(a.ja):"","/cb=",e(c)].join("")}
function ue(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Z("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");le.test(b)||Z("invalid_prefix");c=we(a,"k",!0);d=we(a,"am");e=we(a,"rs");a=we(a,"t");return{Aa:b,version:c,
X:d,da:e,ja:a}}
function ve(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");oe.test(e)&&b.push(e)}return b.join(",")}
function we(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(me.test(a))return a;Z("invalid: "+b)}return null}
var se=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,re=/\/cb=/g,qe=/\/\//g;function xe(){var a=ce();if(!a)throw Error("Bad hint");return a}
je.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+te(a,b,c,d)};
var ye=decodeURI("%73cript"),ze=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ae(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>$d.call(b,e)&&c.push(e)}return c}
function Be(){var a=Y.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(ze)?a:Y.nonce=null;var b=W(Y,"us",[]);if(!b||!b.length)return Y.nonce=null;for(var c=Wd.getElementsByTagName(ye),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(ze))return Y.nonce=a}}return null}
function Ce(a){if("loading"!=Wd.readyState)De(a);else{var b=Be(),c="";null!==b&&(c=' nonce="'+b+'"');Wd.write("<"+ye+' src="'+encodeURI(a)+'"'+c+"></"+ye+">")}}
function De(a){var b=Wd.createElement(ye);b.setAttribute("src",a);a=Be();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Wd.getElementsByTagName(ye)[0])?a.parentNode.insertBefore(b,a):(Wd.head||Wd.body||Wd.documentElement).appendChild(b)}
function Ee(a,b){var c=b&&b._c;if(c)for(var d=0;d<ke.length;d++){var e=ke[d][0],f=ke[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Fe(a,b,c){Ge(function(){var c;c=b===ce()?W(be,"_",X()):X();c=W(ee(b),"_",c);a(c)},c)}
function He(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ee(a,c);var d=a?a.split(":"):[],e=c.h||xe(),f=W(Y,"ah",X());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var h=k.split("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,l=g.length&&g[g.length-1]||null,q=l;l&&l.hint==h||(q={hint:h,features:[]},g.push(q));q.features.push(k)}var U=g.length;if(1<U){var ra=c.callback;ra&&(c.callback=function(){0==--U&&ra()})}for(;d=g.shift();)Ie(d.features,c,d.hint)}else Ie(d||[],c,e)}
function Ie(a,b,c){function d(a,b){if(U)return 0;Vd.clearTimeout(q);ra.push.apply(ra,S);var d=((be||{}).config||{}).update;d?d(f):f&&W(Y,"cu",[]).push(f);if(b){he("me0",a,ib);try{Fe(b,c,l)}finally{he("me1",a,ib)}}return 1}
a=ae(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,h=b.onerror,l=void 0;"function"==typeof h&&(l=h);var q=null,U=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=W(ee(c),"r",[]).sort(),ra=W(ee(c),"L",[]).sort(),ib=[].concat(h);0<g&&(q=Vd.setTimeout(function(){U=!0;k()},g));
var S=Ae(a,ra);if(S.length){var S=Ae(a,h),ha=W(Y,"CP",[]),ia=ha.length;ha[ia]=function(a){function b(){var a=ha[ia+1];a&&a()}
function c(b){ha[ia]=null;d(S,a)&&de(function(){e&&e();b()})}
if(!a)return 0;he("ml1",S,ib);0<ia&&ha[ia-1]?ha[ia]=function(){c(b)}:c(b)};
if(S.length){var bc="loaded_"+Y.I++;be[bc]=function(a){ha[ia](a);be[bc]=null};
a=pe(c,S,"gapi."+bc,h);h.push.apply(h,S);he("ml0",S,ib);b.sync||Vd.___gapisync?Ce(a):De(a)}else ha[ia](Yd)}else d(S)&&e&&e()}
function Ge(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,He("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
be.load=function(a,b){return Ge(function(){return He(a,b)})};function Je(a){a=ea(a)?{callback:a}:a||{};if(a.gapiHintOverride||B("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=pc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&La(a,{_c:{jsl:{h:b}}})}He("gapi.iframes:gapi.iframes.style.common",a)}
;function Ke(){return p("gapi.iframes.getContext")()}
function Le(a){(Ke()||Ke()).connectIframes(a)}
function Me(a,b){Ke().addOnConnectHandler("yt",a,void 0,b)}
function Ne(){return Ke().getParentIframe()}
;var Oe="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),Pe=[Uc,Vc,K,Yc,Zc,L,Wc,$c],Qe=[Uc,Vc,K,Yc,Zc,L,ad,bd];function Re(a){this.b=a;this.w=null;B("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Se(this),N(this.b,"mouseover",t(this.l,this)),N(this.b,"mouseout",t(this.P,this)),N(this.b,"click",t(this.P,this)),G(K,ma(this.f,!0),this),G(L,ma(this.f,!1),this),Te(this))}
function Se(a){var b={url:B("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.g,a);Ke().open(b,a)}
function Te(a){gd()||zc("LOGGED_IN",function(){this.w&&(this.P(),this.w.close(),this.w=null,Se(this))},a)}
Re.prototype.g=function(a){this.w=a;a=V.A().B(this.b);this.f(a)};
Re.prototype.l=function(){this.w&&this.w.restyle({show:!0})};
Re.prototype.P=function(){this.w&&this.w.restyle({show:!1})};
Re.prototype.f=function(a){if(this.w){a={isSubscribed:a};try{var b=p("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.w.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};na();function Ue(a){if(da(a))return Ve(a);if(fa(a)&&!ea(a)&&!(fa(a)&&0<a.nodeType))return We(a);try{return n.JSON.stringify(a),a}catch(b){}}
function We(a){var b={};Ha(a,function(a,d){b[d]=Ue(a)});
return b}
function Ve(a){var b=[];w(a,function(a,d){b[d]=Ue(a)});
return b}
;function Xe(a){this.f=null;this.b=a;a=Ne();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^na()).toString(36);a&&(Le({role:"ytsubscribe",iframe:a,data:{id:b}}),Me(t(function(a){this.f=a},this),this.b))}
Xe.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);Me(c,this.b)}};
Xe.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);Me(c,this.b)}};function Ye(){this.b=this.f=null}
function Ze(a,b){var c=p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||$e(a),e=Ne();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Ye.prototype.g=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function $e(a){if(!a.f){var b;b=p("gapi.iframes.makeWhiteListIframesFilter")(Oe);a.f=b}return a.f}
;function af(){this.b=new Ye;this.g=!1;this.f={}}
function bf(a){w(Pe,function(a){if(!this.f[a.toString()]){var b=G(a,function(b){var c=this.b;b=b?{version:b.version,args:b.args}:null;c.b&&(b={eventType:"pubsub2",topicString:a.toString(),serializedData:Ue(b)},c.b.send("msg-youtube-pubsub",b))},this);
b&&(this.f[a.toString()]=b)}},a)}
af.prototype.l=function(a,b){var c=va(Qe,function(b){return b.toString()==a});
if(c&&(!c.J||b)){var d;if(c.J)try{d=Eb(c.J,b)}catch(f){return}var e=this.f[c.toString()];e?$b(e,c,d):F(c,d)}};
af.prototype.o=function(a){cf(this)&&Ze(this.b,{eventType:"subscribe",channelExternalId:a.b})};
af.prototype.B=function(a){cf(this)&&Ze(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function cf(a){return a.g||!!B("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function df(){Je(function(){var a;a=md(A("yt-subscribe"));a={width:a.width,height:a.height};var b=ef;Ke().ready(a,null,b)})}
function ef(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=A("yt-subscribe"),d=V.A(),d=Q(d),e=c||document,f=null;e.getElementsByClassName?f=e.getElementsByClassName(d)[0]:e.querySelectorAll&&e.querySelector?f=e.querySelector("."+d):f=mb(d,c)[0];c=f||null;a&&c&&(V.A(),dc(c,"parent-url",a));ff()?(V.A().f=!0,b&&(V.A().b=!0)):c&&new Re(c);a=new af;G(K,a.o,a);G(L,a.B,a);if(ff()){b=a.b;b.b=new Xe($e(b));bf(a);b=a.b;c=t(a.l,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",
ma(b.g,c))}catch(g){}a.g=!0}}}
function ff(){var a=Ne().getOrigin();return wa(Oe,a)}
;function gf(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&tc(c)}}
;function hf(a){C.call(this,1,arguments);this.b=a}
v(hf,C);function jf(a,b){C.call(this,2,arguments);this.f=a;this.b=b}
v(jf,C);function kf(a,b,c,d){C.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(kf,C);function lf(a,b){C.call(this,1,arguments);this.f=a;this.b=b||null}
v(lf,C);function mf(a){C.call(this,1,arguments)}
v(mf,C);var nf=new D("ypc-core-load",hf),of=new D("ypc-guide-sync-success",jf),pf=new D("ypc-purchase-success",kf),qf=new D("ypc-subscription-cancel",mf),rf=new D("ypc-subscription-cancel-success",lf),sf=new D("ypc-init-subscription",mf);var tf=!1,uf=[];function vf(a){a.b?tf?F(Wc,a):F(nf,new hf(function(){F(sf,new mf(a.b))})):wf(a.f,a.l,a.g,a.source)}
function xf(a){a.b?tf?F($c,a):F(nf,new hf(function(){F(qf,new mf(a.b))})):yf(a.f,a.o,a.l,a.g,a.source)}
function zf(a){Af(ya(a.b))}
function Bf(a){Cf(ya(a.b))}
function Df(a){Ef(a.g,a.f,a.b)}
function Ff(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&F(K,new Pc(b,c,a.b.channelInfo))}
function Gf(a){var b=a.b;Ha(a.f,function(a,d){F(K,new Pc(d,a,b[d]))})}
function Hf(a){F(L,new J(a.f.itemId));a.b&&a.b.length&&(If(a.b,L),If(a.b,ad))}
function wf(a,b,c,d){var e=new J(a);F(Uc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=B("PLAYBACK_ID"))&&(c.plid=d);(d=B("EVENT_ID"))&&(c.ei=d);b&&Jf(b,c);Hc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ha:f,D:c,G:function(b,c){var d=c.response;F(K,new Pc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Cc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&gf(d.actions)},
S:function(){F(Vc,e)}})}
function yf(a,b,c,d,e){var f=new J(a);F(Yc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=B("PLAYBACK_ID"))&&(d.plid=a);(a=B("EVENT_ID"))&&(d.ei=a);c&&Jf(c,d);Hc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ha:g,D:d,G:function(a,b){var c=b.response;F(L,f);c.actions&&gf(c.actions)},
S:function(){F(Zc,f)}})}
function Ef(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Nc(a,b,c);Hc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",D:d,onError:function(){F(ed,e)},
G:function(){F(dd,e)}})}}
function Af(a){if(a.length){var b=Aa(a,0,40);F("subscription-batch-subscribe-loading");If(b,Uc);var c={};c.a=b.join(",");var d=function(){F("subscription-batch-subscribe-loaded");If(b,Vc)};
Hc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",D:c,G:function(c,f){d();var e=f.response,k=e.id;if("array"==ca(k)&&k.length==b.length){var h=e.channel_info_map;w(k,function(a,c){var d=b[c];F(K,new Pc(d,a,h[d]))});
a.length?Af(a):F("subscription-batch-subscribe-finished")}},
onError:function(){d();F("subscription-batch-subscribe-failure")}})}}
function Cf(a){if(a.length){var b=Aa(a,0,40);F("subscription-batch-unsubscribe-loading");If(b,Yc);var c={};c.c=b.join(",");var d=function(){F("subscription-batch-unsubscribe-loaded");If(b,Zc)};
Hc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",D:c,G:function(){d();If(b,L);a.length&&Cf(a)},
onError:function(){d()}})}}
function If(a,b){w(a,function(a){F(b,new J(a))})}
function Jf(a,b){var c=pc(a),d;for(d in c)b[d]=c[d]}
;u("yt.setConfig",zb);u("ytbin.www.subscribeembed.init",function(){tf=!0;uf.push(G(Tc,vf),G(Xc,xf));tf||uf.push(G(Wc,vf),G($c,xf),G(Rc,zf),G(Sc,Bf),G(cd,Df),G(pf,Ff),G(rf,Hf),G(of,Gf));var a=V.A(),b=Q(a);b in Ud||(a.register(),a.M.push(zc("yt-uix-init-"+b,a.init,a)),a.M.push(zc("yt-uix-dispose-"+b,a.dispose,a)),Ud[b]=a);df()});}).call(this);

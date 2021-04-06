var Client=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=t[c]||0,A="".concat(c," ").concat(l);t[c]=l+1;var d=s(A),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(u)):i.push({identifier:A,updater:b(u,e),references:1}),r.push(A)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var A,d=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,C=0;function b(n,e){var t,r,o;if(e.singleton){var a=C++;t=f||(f=l(e)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var a=c(n,e),l=0;l<t.length;l++){var A=s(t[l]);0===i[A].references&&(i[A].updater(),i.splice(A,1))}t=a}}}},function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,s=n[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(i," */"),c=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(c).concat([s]).join("\n")}return[t].join("\n")}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";var r=t(1),o=t.n(r),a=t(2),i=t.n(a)()(o.a);i.push([n.i,"body{background:#fffff8;display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-height:100vh;max-width:100vw;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande'}#app{display:grid;grid-auto-rows:minmax(150px);grid-template-columns:auto;padding:20px 20px 100px 20px;height:auto;background:#6464db;border-radius:8px;color:white;justify-content:center;grid-gap:1em;font-size:20px;font-family:'Oswald', sans-serif}.holder{display:grid;grid-auto-rows:auto;border-radius:5px}.entry{background:rgba(59,74,107,0.4)}#entryHolder{background:#ec73ec;border-radius:10px;text-align:center;margin:25px 10px 25px 10px}#date{margin:30px 0px 10px 0px}#temp{margin:10px 10px 10px 0px}#tempFeels{margin:10px 10px 10px 0px}#content{margin:10px 0px 10px 0px}.headline{font-size:2em;margin:30px 0px 10px 0px;text-decoration:underline}.title{margin:10px 0px 10px 0px;text-align:center}label{display:block;font-size:27px}input{display:block;height:30px;width:320px;background:#ec73ec;color:white;border:none;border-radius:5px;font-size:20px;font-family:'Oswald', sans-serif;border:none}button{width:100px;height:50px;background:WHITE;color:#a73948;font-size:26px;font-family:'Oswald', sans-serif;border:none;border-radius:5px;box-shadow:2px 4px 5px #444}button:hover{background-color:#ec73ec}h1{font-size:75px}textarea{background:#ec73ec;color:white;margin:10px 0px 10px 0px;border:none;width:320px;border-radius:5px;font-size:20px;font-family:'Oswald', sans-serif}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#a73948;font-family:'Oswald', sans-serif}:-ms-input-placeholder{color:#a73948 3a;font-family:'Oswald', sans-serif}::-ms-input-placeholder{color:#a73948 a;font-family:'Oswald', sans-serif}\n","",{version:3,sources:["webpack://./src/client/styles/main.scss"],names:[],mappings:"AAGA,KACI,kBAAmB,CACnB,YAAa,CACb,qBAAsB,CACtB,6BAA8B,CAC9B,kBAAmB,CACnB,gBAAiB,CACjB,eAAgB,CAChB,iEAAkE,CACrE,KAGG,YAAa,CACb,4BAA6B,CAC7B,0BAA2B,CAC3B,4BAA6B,CAC7B,WAAY,CACZ,kBAA8B,CAC9B,iBAAkB,CAClB,WAAY,CACZ,sBAAuB,CACvB,YAAa,CACb,cAAe,CACf,gCAAiC,CACpC,QAGG,YAAa,CACb,mBAAoB,CACpB,iBAAkB,CACrB,OAGG,8BAAiC,CACpC,aAGG,kBAA8B,CAC9B,kBAAmB,CACnB,iBAAkB,CAClB,0BAA2B,CAC9B,MAGG,wBAAyB,CAC5B,MAGG,yBAA0B,CAE7B,WAGG,yBAA0B,CAC7B,SAIG,wBAAyB,CAE5B,UAGG,aAAc,CACd,wBAAyB,CACzB,yBAA0B,CAC7B,OAGG,wBAAyB,CACzB,iBAAkB,CAErB,MAIG,aAAc,CACd,cAAe,CAClB,MAGG,aAAc,CACd,WAAY,CACZ,WAAY,CACZ,kBAA8B,CAE9B,WAAY,CACZ,WAAY,CACZ,iBAAkB,CAClB,cAAe,CACf,gCAAiC,CACjC,WAAY,CACf,OAGG,WAAY,CACZ,WAAY,CACZ,gBAAiB,CACjB,aAAuB,CACvB,cAAe,CACf,gCAAiC,CACjC,WAAY,CACZ,iBAAkB,CAClB,2BAA4B,CAC/B,aAGG,wBAAoC,CACvC,GAGG,cAAe,CAClB,SAGG,kBAA8B,CAE9B,WAAY,CACZ,wBAAyB,CACzB,WAAY,CACZ,WAAY,CACZ,iBAAkB,CAClB,cAAe,CACf,gCAAiC,CAEpC,qDAOG,YAAa,CAChB,cAKG,aAAuB,CACvB,gCAAiC,CAEpC,uBAIG,gBAAyB,CACzB,gCAAiC,CAEpC,wBAIG,eAAwB,CACxB,gCAAiC",sourcesContent:["//Code from weather-journal-app\n//needs to be changed and adapted to scss\n\nbody {\n    background: #fffff8;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 100vh;\n    max-width: 100vw;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';\n}\n\n#app {\n    display: grid;\n    grid-auto-rows: minmax(150px);\n    grid-template-columns: auto;\n    padding: 20px 20px 100px 20px;\n    height: auto;\n    background: rgb(100, 100, 219);\n    border-radius: 8px;\n    color: white;\n    justify-content: center;\n    grid-gap: 1em;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n}\n\n.holder {\n    display: grid;\n    grid-auto-rows: auto;\n    border-radius: 5px;\n}\n\n.entry {\n    background: rgba(59, 74, 107, .4);\n}\n\n#entryHolder {\n    background: rgb(236, 115, 236);\n    border-radius: 10px;\n    text-align: center;\n    margin: 25px 10px 25px 10px;\n}\n\n#date {\n    margin: 30px 0px 10px 0px;\n}\n\n#temp {\n    margin: 10px 10px 10px 0px;\n\n}\n\n#tempFeels {\n    margin: 10px 10px 10px 0px;\n}\n\n\n#content {\n    margin: 10px 0px 10px 0px;\n\n}\n\n.headline {\n    font-size: 2em;\n    margin: 30px 0px 10px 0px;\n    text-decoration: underline;\n}\n\n.title {\n    margin: 10px 0px 10px 0px;\n    text-align: center;\n\n}\n\n/*  Basic Styling To Override Default For Basic HTML Elements */\nlabel {\n    display: block;\n    font-size: 27px;\n}\n\ninput {\n    display: block;\n    height: 30px;\n    width: 320px;\n    background: rgb(236, 115, 236);\n    ;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n}\n\nbutton {\n    width: 100px;\n    height: 50px;\n    background: WHITE;\n    color: rgb(167, 57, 72);\n    font-size: 26px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n    border-radius: 5px;\n    box-shadow: 2px 4px 5px #444;\n}\n\nbutton:hover {\n    background-color: rgb(236, 115, 236);\n}\n\nh1 {\n    font-size: 75px;\n}\n\ntextarea {\n    background: rgb(236, 115, 236);\n    ;\n    color: white;\n    margin: 10px 0px 10px 0px;\n    border: none;\n    width: 320px;\n    border-radius: 5px;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n\n}\n\n/* Reset style for HTML element on active to have no border*/\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n/* Style for Placeholder Text*/\n::placeholder {\n    /* Firefox, Chrome, Opera */\n    color: rgb(167, 57, 72);\n    font-family: 'Oswald', sans-serif;\n\n}\n\n:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: rgb(167, 57, 72)3a;\n    font-family: 'Oswald', sans-serif;\n\n}\n\n::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: rgb(167, 57, 72)a;\n    font-family: 'Oswald', sans-serif;\n\n}"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var r=t(1),o=t.n(r),a=t(2),i=t.n(a)()(o.a);i.push([n.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n","",{version:3,sources:["webpack://./src/client/styles/reset.scss"],names:[],mappings:"AAKA,EACI,qBAAsB,CACzB,2ZAeA,QAAS,CACT,SAAU,CACV,QAAS,CACT,cAAe,CACf,YAAa,CACb,uBAAwB,CACxB,8EAIA,aAAc,CACd,KAEA,aAAc,CACd,MAEA,eAAgB,CAChB,aAEA,WAAY,CACZ,oDAGA,UAAW,CACX,YAAa,CACb,MAEA,wBAAyB,CACzB,gBAAiB,CACjB,GAEG,oBAAqB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\nul {\n    list-style-type: none;\n}\n"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(3),i={insert:"head",singleton:!1},s=(o()(a.a,i),a.a.locals,t(4)),c={insert:"head",singleton:!1};o()(s.a,c),s.a.locals;alert("I EXIST"),console.log("CHANGE!!")}]);
//# sourceMappingURL=main.js.map
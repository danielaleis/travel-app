var Client=function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=12)}([function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],l=t[c]||0,p="".concat(c," ").concat(l);t[c]=l+1;var d=s(p),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(u)):i.push({identifier:p,updater:g(u,e),references:1}),o.push(p)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var p,d=(p=[],function(n,e){return p[n]=e,p.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function A(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,C=0;function g(n,e){var t,o,r;if(e.singleton){var a=C++;t=f||(f=l(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=l(e),o=A.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var a=c(n,e),l=0;l<t.length;l++){var p=s(t[l]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}t=a}}}},function(n,e,t){"use strict";function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],o=!0,r=!1,a=void 0;try{for(var i,s=n[Symbol.iterator]();!(o=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(n){r=!0,a=n}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var e=o(n,4),t=e[1],r=e[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(i," */"),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(c).concat([s]).join("\n")}return[t].join("\n")}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";function o(n){const e=new Date,t=new Date(n.date),o=Math.round((t.getTime()-e.getTime())/864e5)+1;return console.log("::: Running calculateDaysUntilTrip :::",n.date),{countdown:o}}async function r(n,e){let t={};console.log(e),console.log("::: Running chooseForecastForTravelDate :::",e.date),console.log(n.data);for(const o in n.data)e.date==n.data[o].datetime.slice(0,10)&&(t=n.data[o]),console.log(""+n.data[o].datetime.slice(0,10));return{result:t}}t.r(e),t.d(e,"calculateDaysUntilTrip",(function(){return o})),t.d(e,"chooseForecastForTravelDate",(function(){return r}))},function(n,e,t){"use strict";function o(n){return console.log("::: Running validateInput :::"),""==n.location?(document.querySelector("#infobox").style.display="block",document.querySelector("#infobox").innerHTML="The input was empty - please enter your destination!",!1):(null!==document.querySelector("#infobox")&&(document.querySelector("#infobox").style.display="none"),!0)}t.r(e),t.d(e,"validateInput",(function(){return o}))},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,"body{background:linear-gradient(0deg, #cb88c7 0%, #62035c 100%);display:flex;flex-direction:column;justify-content:space-between;align-items:left;min-height:100vh;max-width:100vw;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';color:#fff;background-position:center;background-repeat:no-repeat;background-size:cover;height:100%}#infobox{display:none;height:50px;width:100%;padding:15px;background-color:red}.headline{text-align:center;font-size:3.5em;margin:30px;text-decoration:none;text-shadow:5px 5px 0px #eb452b,10px 10px 0px #efa032,15px 15px 0px #46b59b,20px 20px 0px #017e7f,25px 25px 0px #738dec}#app{display:grid;grid-auto-rows:minmax(150px);grid-template-columns:auto;padding:20px;height:auto;border-radius:8px;color:white;justify-content:left;grid-gap:1em;font-size:20px;font-family:'Oswald', sans-serif}\n","",{version:3,sources:["webpack://./src/client/styles/main.scss"],names:[],mappings:"AAEA,KACI,0DAA6E,CAC7E,YAAa,CACb,qBAAsB,CACtB,6BAA8B,CAC9B,gBAAiB,CACjB,gBAAiB,CACjB,eAAgB,CAChB,iEAAkE,CAClE,UAAW,CAEX,0BAA2B,CAC3B,2BAA4B,CAC5B,qBAAsB,CACtB,WAAY,CACf,SAIG,YAAa,CACb,WAAY,CACZ,UAAW,CACX,YAAa,CACb,oBAAqB,CACxB,UAGG,iBAAkB,CAClB,eAAgB,CAChB,WAAY,CACZ,oBAAqB,CACrB,uHAIoC,CACvC,KAIG,YAAa,CACb,4BAA6B,CAC7B,0BAA2B,CAC3B,YAAa,CACb,WAAY,CAEZ,iBAAkB,CAClB,WAAY,CACZ,oBAAqB,CACrB,YAAa,CACb,cAAe,CACf,gCAAiC",sourcesContent:["@import 'variables';\n\nbody {\n    background: linear-gradient(0deg, rgb(203, 136, 199) 0%, rgb(98, 3, 92) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: left;\n    min-height: 100vh;\n    max-width: 100vw;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';\n    color: #fff;\n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100%;\n}\n\n// Warning-box if no input is given\n#infobox {\n    display: none;\n    height: 50px;\n    width: 100%;\n    padding: 15px;\n    background-color: red;\n}\n\n.headline {\n    text-align: center;\n    font-size: 3.5em;\n    margin: 30px;\n    text-decoration: none;\n    text-shadow: 5px 5px 0px #eb452b,\n        10px 10px 0px #efa032,\n        15px 15px 0px #46b59b,\n        20px 20px 0px #017e7f,\n        25px 25px 0px rgb(115, 141, 236),\n}\n\n// App-Layout - noch funktional?\n#app {\n    display: grid;\n    grid-auto-rows: minmax(150px);\n    grid-template-columns: auto;\n    padding: 20px;\n    height: auto;\n    // background: rgb(255, 115, 0);\n    border-radius: 8px;\n    color: white;\n    justify-content: left;\n    grid-gap: 1em;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n}\n\n// /* Reset style for HTML element on active to have no border*/\n// input:focus,\n// select:focus,\n// textarea:focus,\n// button:focus {\n//     outline: none;\n// }"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n","",{version:3,sources:["webpack://./src/client/styles/reset.scss"],names:[],mappings:"AAKA,EACI,qBAAsB,CACzB,2ZAeA,QAAS,CACT,SAAU,CACV,QAAS,CAGT,uBAAwB,CACxB,8EAIA,aAAc,CACd,KAEA,aAAc,CACd,MAEA,eAAgB,CAChB,aAEA,WAAY,CACZ,oDAGA,UAAW,CACX,YAAa,CACb,MAEA,wBAAyB,CACzB,gBAAiB,CACjB,GAEG,oBAAqB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\t// font-size: 100%;\n\t// font: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\nul {\n    list-style-type: none;\n}\n"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,".headline{font-size:3.5em;margin:30px}#app{justify-content:center}@media (min-width: 600px) and (max-width: 1100px){.headline{font-size:2.5em;margin:30px}#app{justify-content:left}}@media (min-width: 1101px) and (max-width: 6000px){.headline{font-size:2.5em;margin:30px}#app{justify-content:left}}\n","",{version:3,sources:["webpack://./src/client/styles/media.scss"],names:[],mappings:"AAEA,UACI,eAAgB,CAChB,WAAY,CACf,KAGG,sBAAuB,CAC1B,kDAKG,UACI,eAAgB,CAChB,WAAY,CACf,KAIG,oBAAqB,CACxB,CAKL,mDACI,UACI,eAAgB,CAChB,WAAY,CACf,KAGG,oBAAqB,CACxB",sourcesContent:["/*@media (max-width:599px) {*/\n\n.headline {\n    font-size: 3.5em;\n    margin: 30px;\n}\n\n#app {\n    justify-content: center;\n}\n\n\n/*medium screens*/\n@media (min-width:600px) and (max-width:1100px) {\n    .headline {\n        font-size: 2.5em;\n        margin: 30px;\n    }\n\n\n    #app {\n        justify-content: left;\n    }\n}\n\n\n/*large screens*/\n@media (min-width:1101px) and (max-width:6000px) {\n    .headline {\n        font-size: 2.5em;\n        margin: 30px;\n    }\n   \n    #app {\n        justify-content: left;\n    }\n}"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,"#location{padding:25px;margin:10px 0px 0px 0px}.visiblefont{opacity:8}#date{padding:25px;margin:10px 0px 0px 0px}label{display:block;font-size:1.75em;text-align:center;background-color:grey;opacity:.8;border-radius:5px}input{display:block;width:320px;background:white;color:#738dec;border:none;border-radius:5px;font-size:20px;font-family:'Oswald', sans-serif;border:none}#button_holder{display:flex;justify-content:center}button{width:150px;height:50px;background:#46b59b;color:white;font-size:26px;font-family:'Oswald', sans-serif;border:none;border-radius:5px;box-shadow:2px 4px 5px #efa032}button:hover{background-color:#738dec}::placeholder{color:#efa032;font-family:'Oswald', sans-serif}:-ms-input-placeholder{color:#efa032;font-family:'Oswald', sans-serif}::-ms-input-placeholder{color:#efa032;font-family:'Oswald', sans-serif}::-webkit-input-placeholder{color:#efa032;font-family:'Oswald', sans-serif}\n","",{version:3,sources:["webpack://./src/client/styles/input.scss","webpack://./src/client/styles/variables.scss"],names:[],mappings:"AAIA,UACI,YAAa,CACb,uBAAwB,CAC3B,aAGG,SAAU,CACb,MAGG,YAAa,CACb,uBAAwB,CAC3B,MAGG,aAAc,CACd,gBAAiB,CACjB,iBAAkB,CAClB,qBCrBgB,CDuBhB,UAAW,CACX,iBAAkB,CACrB,MAGG,aAAc,CACd,WAAY,CACZ,gBAAiB,CACjB,aAAyB,CACzB,WAAY,CACZ,iBAAkB,CAClB,cAAe,CACf,gCAAiC,CACjC,WAAY,CACf,eAGG,YAAY,CACZ,sBAAuB,CAC1B,OAGG,WAAY,CACZ,WAAY,CACZ,kBAAmB,CACnB,WAAY,CACZ,cAAe,CACf,gCAAiC,CACjC,WAAY,CACZ,iBAAkB,CAClB,8BCpDqB,CDsDxB,aAGG,wBAAmC,CACtC,cAKG,aC/DqB,CDgErB,gCAAiC,CAEpC,uBAIG,aCtEqB,CDuErB,gCAAiC,CAEpC,wBAIG,aC7EqB,CD8ErB,gCAAiC,CAEpC,4BAIG,aCpFqB,CDqFrB,gCAAiC",sourcesContent:["@import 'variables';\n\n//Styling for input\n\n#location {\n    padding: 25px;\n    margin: 10px 0px 0px 0px;\n}\n\n.visiblefont {\n    opacity: 8;\n}\n\n#date {\n    padding: 25px;\n    margin: 10px 0px 0px 0px;\n}\n\nlabel {\n    display: block;\n    font-size: 1.75em;\n    text-align: center;\n    background-color: $primary-color;\n    // background-color: grey;\n    opacity: .8;\n    border-radius: 5px;\n}\n\ninput {\n    display: block;\n    width: 320px;\n    background: white;\n    color: rgb(115, 141, 236);\n    border: none;\n    border-radius: 5px;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n}\n\n#button_holder {\n    display:flex;\n    justify-content: center;\n}\n\nbutton {\n    width: 150px;\n    height: 50px;\n    background: #46b59b;\n    color: white;\n    font-size: 26px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n    border-radius: 5px;\n    box-shadow: 2px 4px 5px $secondary-color;\n    //2px 4px 5px rgb(98, 3, 92);\n}\n\nbutton:hover {\n    background-color:rgb(115, 141, 236);\n}\n\n/* Placeholder Text*/\n::placeholder {\n    /* Firefox, Chrome, Opera */\n    color: $secondary-color;\n    font-family: 'Oswald', sans-serif;\n\n}\n\n:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: $secondary-color;\n    font-family: 'Oswald', sans-serif;\n\n}\n\n::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: $secondary-color;\n    font-family: 'Oswald', sans-serif;\n\n}\n\n::-webkit-input-placeholder {\n    /* Safari */\n    color: $secondary-color;\n    font-family: 'Oswald', sans-serif;\n\n}","$font-family: 'Oswald', sans-serif;;\n$primary-color: grey;\n$secondary-color: #efa032;"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,".title{display:none;margin:30px 0px 10px 0px;text-align:center;font-size:1.75em;background-color:grey;opacity:.8;border-radius:5px}#entryHolder{display:none;background:#efa032;border-radius:10px;padding:15px;text-align:center;margin:25px 10px 25px 10px;opacity:.8}#weathericon{margin:10px 10px 10px 0px}#weather{margin:10px 10px 10px 0px}#temp{margin:10px 10px 10px 0px}#tempFeels{margin:10px 10px 10px 0px}#countdown{margin:10px 10px 10px 0px}#content{margin:10px 0px 10px 0px}\n","",{version:3,sources:["webpack://./src/client/styles/results.scss","webpack://./src/client/styles/variables.scss"],names:[],mappings:"AAIA,OACI,YAAa,CACb,wBAAyB,CACzB,iBAAkB,CAClB,gBAAiB,CACjB,qBCRgB,CDShB,UAAW,CACX,iBAAkB,CACrB,aAGG,YAAa,CACb,kBCdqB,CDerB,kBAAmB,CACnB,YAAa,CACb,iBAAkB,CAClB,0BAA2B,CAC3B,UAAW,CACd,aAGG,yBAA0B,CAC7B,SAGG,yBAA0B,CAC7B,MAGG,yBAA0B,CAC7B,WAGG,yBAA0B,CAC7B,WAGG,yBAA0B,CAC7B,SAIG,wBAAyB",sourcesContent:["@import 'variables';\n\n// Styling for results\n\n.title {\n    display: none;\n    margin: 30px 0px 10px 0px;\n    text-align: center;\n    font-size: 1.75em;\n    background-color: $primary-color;\n    opacity: .8;\n    border-radius: 5px;\n}\n\n#entryHolder {\n    display: none;\n    background: $secondary-color;\n    border-radius: 10px;\n    padding: 15px;\n    text-align: center;\n    margin: 25px 10px 25px 10px;\n    opacity: .8;\n}\n\n#weathericon {\n    margin: 10px 10px 10px 0px;\n}\n\n#weather {\n    margin: 10px 10px 10px 0px;\n}\n\n#temp {\n    margin: 10px 10px 10px 0px;\n}\n\n#tempFeels {\n    margin: 10px 10px 10px 0px;\n}\n\n#countdown {\n    margin: 10px 10px 10px 0px;\n}\n\n\n#content {\n    margin: 10px 0px 10px 0px;\n}\n\n\n\n","$font-family: 'Oswald', sans-serif;;\n$primary-color: grey;\n$secondary-color: #efa032;"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";var o=t(1),r=t.n(o),a=t(2),i=t.n(a)()(r.a);i.push([n.i,"footer{display:flex;justify-content:center;padding:10px;width:100%;border:25px;background-color:grey;color:white}#copyright{color:#efa032}\n","",{version:3,sources:["webpack://./src/client/styles/footer.scss","webpack://./src/client/styles/variables.scss"],names:[],mappings:"AAEA,OACI,YAAa,CACb,sBAAuB,CACvB,YAAa,CACb,UAAW,CACX,WAAY,CACZ,qBCPgB,CDQhB,WAAY,CACf,WAGG,aCXqB",sourcesContent:["@import 'variables';\n\nfooter {\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n    width: 100%;\n    border: 25px; \n    background-color: $primary-color;\n    color: white;\n}\n\n#copyright {\n    color: $secondary-color;\n}","$font-family: 'Oswald', sans-serif;;\n$primary-color: grey;\n$secondary-color: #efa032;"],sourceRoot:""}]),e.a=i},function(n,e,t){"use strict";t.r(e),t.d(e,"handleInput",(function(){return i})),t.d(e,"calculateDaysUntilTrip",(function(){return c.calculateDaysUntilTrip})),t.d(e,"chooseForecastForTravelDate",(function(){return c.chooseForecastForTravelDate})),t.d(e,"validateInput",(function(){return l.validateInput}));const{calculateDaysUntilTrip:o}=t(3),{chooseForecastForTravelDate:r}=t(3),{validateInput:a}=t(4);async function i(){let n={};if(n.location=document.getElementById("location").value,n.date=document.getElementById("date").value,console.log(n.date),a(n)){const e=await s("http://localhost:8080/geodata",n);n.lat=e.lat,n.lng=e.lng,n.country=e.country,n.noDestinationPics=!1,document.body.clientWidth<document.body.clientHeight?n.pixabayPictureOrientation="orientation=vertical":n.pixabayPictureOrientation="orientation=horizontal";let t=await s("http://localhost:8080/pixabaydata",n);t.noDestinationPics&&(n.noDestinationPics=!0,t=await s("http://localhost:8080/pixabaydata",n)),n.image=t.url;let a=await o(n);n.daysUntilTrip=a;const i=await s("http://localhost:8080/weatherdata",n);n.weatherResponse=i;const c=await r(i,n);n.weather=c;await async function(n){document.querySelector(".title").style.display="block",document.querySelector("#entryHolder").style.display="block",document.body.style.backgroundImage="url("+n.image+")",n.daysUntilTrip.countdown<=16?document.querySelector("#result").innerHTML="The weather on "+n.date+" in "+n.location:document.querySelector("#result").innerHTML="No forecast available:<br> The current weather in "+n.location+" is";document.querySelector("#weathericon").innerHTML='<img src="https://www.weatherbit.io/static/img/icons/'+n.weatherResponse.data[0].weather.icon+'.png" >',document.querySelector("#weather").innerHTML=n.weatherResponse.data[0].weather.description,document.querySelector("#temp").innerHTML="The temperature is "+n.weatherResponse.data[0].temp+" &#8451",document.querySelector("#countdown").innerHTML="It is "+n.daysUntilTrip.countdown+" days until your trip starts!"}(n);console.log("weatherResponse"),console.log(i)}}async function s(n,e){const t=await fetch(n,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({queryObject:e})});try{return await t.json()}catch(n){console.log("error",n)}}document.getElementById("generate").addEventListener("click",i);var c=t(3),l=t(4),p=t(0),d=t.n(p),u=t(5),A={insert:"head",singleton:!1},f=(d()(u.a,A),u.a.locals,t(6)),C={insert:"head",singleton:!1},g=(d()(f.a,C),f.a.locals,t(7)),m={insert:"head",singleton:!1},b=(d()(g.a,m),g.a.locals,t(8)),x={insert:"head",singleton:!1},y=(d()(b.a,x),b.a.locals,t(9)),h={insert:"head",singleton:!1},B=(d()(y.a,h),y.a.locals,t(10)),w={insert:"head",singleton:!1},v=(d()(B.a,w),B.a.locals,t(11)),k={insert:"head",singleton:!1};d()(v.a,k),v.a.locals;console.log("CHANGE!!")}]);
//# sourceMappingURL=main.js.map
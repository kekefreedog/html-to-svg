function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("opentype.js"));function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function i(t,e,n){if(!t.s){if(n instanceof u){if(!n.s)return void(n.o=i.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(i.bind(null,t,e),i.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var u=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var u=1&o?e:n;if(u){try{i(r,1,u(this.v))}catch(t){i(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?i(r,1,e?e(o):o):n?i(r,1,n(o)):i(r,2,o)}catch(t){i(r,2,t)}},r},t}();function a(t){return t instanceof u&&1&t.s}var f=function t(e,n,r){var f=(void 0===r?{}:r).sort,c=void 0===f?function(){return 1}:f;try{return Promise.resolve(n(e)).then(function(r){if(r){var f=function(t,e,n){if("function"==typeof t[o]){var r,f,c,l=t[o]();if(function t(n){try{for(;!(r=l.next()).done;)if((n=e(r.value))&&n.then){if(!a(n))return void n.then(t,c||(c=i.bind(null,f=new u,2)));n=n.v}f?i(f,1,n):f=n}catch(t){i(f||(f=new u),2,t)}}(),l.return){var h=function(t){try{r.done||l.return()}catch(t){}return t};if(f&&f.then)return f.then(h,function(t){throw h(t)});h()}return f}if(!("length"in t))throw new TypeError("Object is not iterable");for(var s=[],v=0;v<t.length;v++)s.push(t[v]);return function(t,e,n){var r,o,f=-1;return function n(c){try{for(;++f<t.length;)if((c=e(f))&&c.then){if(!a(c))return void c.then(n,o||(o=i.bind(null,r=new u,2)));c=c.v}r?i(r,1,c):r=c}catch(t){i(r||(r=new u),2,t)}}(),r}(s,function(t){return e(s[t])})}(Array.from(e.children).sort(c),function(e){return Promise.resolve(t(e,n,{sort:c})).then(function(){})});return f&&f.then?f.then(function(){}):void 0}})}catch(t){return Promise.reject(t)}},c=function(t){var e=window.getComputedStyle(t).getPropertyValue("z-index");return"auto"===e?0:parseInt(null!=e?e:0)};function l(t,e,n){void 0===e&&(e={});var r="http://www.w3.org/2000/svg",o=document.createElementNS(r,t);for(var i in"svg"===t&&o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",r),e)null!=e[i]&&o.setAttribute(i,e[i]);return n&&n.appendChild(o),o}function h(t){return!t||"none"===t||"transparent"===t||!(!t.startsWith("rgba")||"0"!==t.match(/[\d.]+/g)[3])}var s=function(t){return function(t,e){var r=e.x,o=e.y,i=e.width,u=e.height,a=e.style;try{if(!i||!u)return Promise.resolve();var f=a.getPropertyValue("background-color");if(h(f))return Promise.resolve();var c={stroke:"none","stroke-width":1},s=a.getPropertyValue("border-color");return"none"===a.getPropertyValue("border-style")||h(s)||(c.stroke=s,c["stroke-width"]=a.getPropertyValue("border-width")),Promise.resolve(l("rect",n({x:r,y:o,width:i,height:u},c,{fill:f,rx:parseInt(a.getPropertyValue("border-radius"))||null})))}catch(t){return Promise.reject(t)}}};const v="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function d(t,e,n){if(!t.s){if(n instanceof y){if(!n.s)return void(n.o=d.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(d.bind(null,t,e),d.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var y=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{d(r,1,i(this.v))}catch(t){d(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?d(r,1,e?e(o):o):n?d(r,1,n(o)):d(r,2,o)}catch(t){d(r,2,t)}},r},t}();function g(t){return t instanceof y&&1&t.s}var p=function(t){var e=t.cache;return function(t,n,r){var o=n.x,i=n.y,u=n.width,a=n.height,f=(void 0===r?{}:r).rasterizeNestedSVG,c=void 0===f||f;try{var h=function(){return c?l("image",{x:o,y:i,width:u,height:a,href:"data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(t))}):function(){var e=l("svg",{x:o,y:i,width:u,height:a,viewbox:"0 0 "+u+" "+a});return e.innerHTML=t.innerHTML,e}()},s=function(t,e,n){if("function"==typeof t[v]){var r,o,i,u=t[v]();if(function t(n){try{for(;!(r=u.next()).done;)if((n=e(r.value))&&n.then){if(!g(n))return void n.then(t,i||(i=d.bind(null,o=new y,2)));n=n.v}o?d(o,1,n):o=n}catch(t){d(o||(o=new y),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],c=0;c<t.length;c++)f.push(t[c]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!g(u))return void u.then(n,o||(o=d.bind(null,r=new y,2)));u=u.v}r?d(r,1,u):r=u}catch(t){d(r||(r=new y),2,t)}}(),r}(f,function(t){return e(f[t])})}(t.querySelectorAll("image[href]"),function(t){function n(){t.setAttribute("href",e.get(r))}var r=t.getAttribute("href"),o=function(){if(!e.has(r))return Promise.resolve(new Promise(function(t){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){return t(e.response)},e.send()})).then(function(t){return Promise.resolve(new Promise(function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsDataURL(t)})).then(function(t){e.set(r,t)})})}();return o&&o.then?o.then(n):n()});return Promise.resolve(s&&s.then?s.then(h):h())}catch(t){return Promise.reject(t)}}},m={__proto__:null,div:s,text:function(t){var e=t.debug,n=t.fonts;return function(t,r,o){var i,u=r.x,a=r.y,f=r.width,c=r.height,h=r.style;try{var s=function(t,n,r){var o=void 0===r?{}:r,i=o.orientation,h=void 0===i?"horizontal":i,s=o.stroke;return e&&l("line",{title:t,"data-value":n,x1:"horizontal"===h?u:u+n,x2:"horizontal"===h?u+f:u+n,y1:"horizontal"===h?a+n:a,y2:"horizontal"===h?a+n:a+c,stroke:void 0===s?"black":s,class:"debug"},v)};if(!t)return Promise.resolve();var v=l("g",{class:"text-fragment"}),d=n.find((i=h,function(t){var e,n,r,o=void 0===t?{}:t,u=o.style,a=void 0===u?"normal":u,f=o.weight,c=void 0===f?"400":f;return o.family===(null!=(e=i.getPropertyValue("font-family"))?e:"").replace(/['"]/g,"").replace("Open Sans","Helvetica")&&a===(null!=(n=i.getPropertyValue("font-style"))?n:"normal")&&c===(null!=(r=i.getPropertyValue("font-weight"))?r:"400")}));if(!d)throw new Error("Cannot find font '"+h.getPropertyValue("font-family").replace("Open Sans","Helvetica")+" "+h.getPropertyValue("font-style")+" "+h.getPropertyValue("font-weight")+"'");var y=d.opentype.unitsPerEm,g=d.opentype.tables.hhea.ascender,p=d.opentype.tables.hhea.descender,m=h.getPropertyValue("letter-spacing"),w=parseFloat(h.getPropertyValue("font-size")),b=h.getPropertyValue("color"),x=w*((g-p)/y)-Math.abs(p/y)*w;return s("start",0,{orientation:"vertical",stroke:"red"}),s("end",f,{orientation:"vertical",stroke:"red"}),s("leading",x,{stroke:"#4b96ff"}),l("text",{x:u,y:a+x,fill:b,"font-family":h.getPropertyValue("font-family").replace(/['"]/g,"").replace("Open Sans","Helvetica"),"font-size":w,"font-weight":h.getPropertyValue("font-weight"),"font-style":h.getPropertyValue("font-style"),"letter-spacing":"normal"===m?"0":m,"dominant-baseline":"auto"},v).textContent=t,Promise.resolve(v)}catch(t){return Promise.reject(t)}}},svg:p,DIV:s,CANVAS:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return Promise.resolve(l("image",{x:n,y:r,width:o,height:i,href:t.toDataURL("image/png")}))}catch(t){return Promise.reject(t)}}},IMG:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return o&&i&&t.src?Promise.resolve(l("image",{x:n,y:r,width:o,height:i,href:t.src})):Promise.resolve()}catch(t){return Promise.reject(t)}}},SVG:p};const w="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function b(t,e,n){if(!t.s){if(n instanceof x){if(!n.s)return void(n.o=b.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(b.bind(null,t,e),b.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var x=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{b(r,1,i(this.v))}catch(t){b(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?b(r,1,e?e(o):o):n?b(r,1,n(o)):b(r,2,o)}catch(t){b(r,2,t)}},r},t}();function P(t){return t instanceof x&&1&t.s}function S(t,e,n){if("function"==typeof t[w]){var r,o,i,u=t[w]();if(function t(a){try{for(;!((r=u.next()).done||n&&n());)if((a=e(r.value))&&a.then){if(!P(a))return void a.then(t,i||(i=b.bind(null,o=new x,2)));a=a.v}o?b(o,1,a):o=a}catch(t){b(o||(o=new x),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],c=0;c<t.length;c++)f.push(t[c]);return function(t,e,n){var r,o,i=-1;return function u(a){try{for(;++i<t.length&&(!n||!n());)if((a=e(i))&&a.then){if(!P(a))return void a.then(u,o||(o=b.bind(null,r=new x,2)));a=a.v}r?b(r,1,a):r=a}catch(t){b(r||(r=new x),2,t)}}(),r}(f,function(t){return e(f[t])},n)}module.exports=function(t){var n=void 0===t?{}:t,o=n.debug,i=void 0===o||o,u=n.ignore,a=void 0===u?"":u,h=n.fonts,s=void 0===h?[]:h,v=new Map,d={};for(var y in m)d[y]=m[y]({debug:i,fonts:s,cache:v});return{get cache(){return v},preload:function(){try{var t=S(s,function(t){if(!t.opentype)return Promise.resolve(new Promise(function(n){e.default.load(t.url,function(t,e){if(t)throw t;n(e)})})).then(function(e){t.opentype=e})});return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},destroy:function(){v.clear();for(var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(s);!(t=e()).done;)delete t.value.opentype},render:function(t,e,n){void 0===e&&(e={});try{var r=t.getBoundingClientRect(),o=l("svg",{viewBox:"0 0 "+r.width+" "+r.height,width:r.width,height:r.height,preserveAspectRatio:"none"}),i=o;return Promise.resolve(f(t,function(u){try{var f;if(a&&u!==t&&u.matches(a))return Promise.resolve();var c=window.getComputedStyle(u),h=u.getBoundingClientRect(),s=h.x,v=h.y,y=h.width,g=h.height;if(u instanceof window.HTMLElement){var p=c.getPropertyValue("clip-path");"none"!==p&&(i=l("g",null,o)).setAttribute("style","clip-path: "+p.replace(/"/g,"'"))}var m=null!=(f=d[u.tagName])?f:d.div;return Promise.resolve(m(u,{x:s-r.x,y:v-r.y,width:y,height:g,style:c},e)).then(function(t){function o(){t&&i.appendChild(t);var o=function(){if(u.innerText&&u.childNodes.length){var t=function(){o.children.length&&i.appendChild(o)},o=l("g",{class:"text"}),a=S(u.childNodes,function(t){if(t.nodeType===Node.TEXT_NODE&&t.textContent.length){if(!/^\s/.test(t.textContent))return S(function(t,e){void 0===e&&(e=t.innerText||t.textContent);for(var n=document.createRange(),r=[],o=0;o<t.length;o++){var i;n.setStart(t,0),n.setEnd(t,o+1);var u=n.getClientRects(),a=u.length-1;r[a]=null!=(i=r[a])?i:{text:""},r[a].rect=u[a],r[a].text+=e.charAt(o)}return r.map(function(t){return t.fragment=new DocumentFragment,t.fragment.textContent=t.text,t})}(t),function(t){var i=t.rect,a=t.fragment,f=function(t,f){try{var l=Promise.resolve(d.text(a.textContent.trimEnd(),{x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height,style:c},e)).then(function(t){function e(){t&&o.appendChild(t)}var r=function(){if(n)return Promise.resolve(n(u,t)).then(function(e){t=e})}();return r&&r.then?r.then(e):e()})}catch(t){return f(t)}return l&&l.then?l.then(void 0,f):l}(0,function(t){console.warn(new Error("Rendering failed for the following text: '"+a.textContent+"'",{cause:t})),console.warn(t)});if(f&&f.then)return f.then(function(){})});t.splitText(1)}});return a&&a.then?a.then(t):t()}}();return!o||!o.then||o.then(function(){return!0})}var a=function(){if(n)return Promise.resolve(n(u,t)).then(function(e){t=e})}();return a&&a.then?a.then(o):o()})}catch(t){return Promise.reject(t)}},{sort:function(t,e){var n,r;return t.zIndex=null!=(n=t.zIndex)?n:c(t),e.zIndex=null!=(r=e.zIndex)?r:c(e),t.zIndex-e.zIndex}})).then(function(){return o})}catch(t){return Promise.reject(t)}}}};
//# sourceMappingURL=html-to-svg.js.map

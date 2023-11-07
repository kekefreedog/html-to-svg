!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("opentype.js")):"function"==typeof define&&define.amd?define(["opentype.js"],e):(t||self).HtmlToSvg=e(t.Opentype)}(this,function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=/*#__PURE__*/e(t);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function u(t,e,n){if(!t.s){if(n instanceof a){if(!n.s)return void(n.o=u.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(u.bind(null,t,e),u.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var a=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{u(r,1,i(this.v))}catch(t){u(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?u(r,1,e?e(o):o):n?u(r,1,n(o)):u(r,2,o)}catch(t){u(r,2,t)}},r},t}();function f(t){return t instanceof a&&1&t.s}var l=function t(e,n,r){var o=(void 0===r?{}:r).sort,l=void 0===o?function(){return 1}:o;try{return Promise.resolve(n(e)).then(function(r){if(r){var o=function(t,e,n){if("function"==typeof t[i]){var r,o,l,c=t[i]();if(function t(n){try{for(;!(r=c.next()).done;)if((n=e(r.value))&&n.then){if(!f(n))return void n.then(t,l||(l=u.bind(null,o=new a,2)));n=n.v}o?u(o,1,n):o=n}catch(t){u(o||(o=new a),2,t)}}(),c.return){var h=function(t){try{r.done||c.return()}catch(t){}return t};if(o&&o.then)return o.then(h,function(t){throw h(t)});h()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var s=[],v=0;v<t.length;v++)s.push(t[v]);return function(t,e,n){var r,o,i=-1;return function n(l){try{for(;++i<t.length;)if((l=e(i))&&l.then){if(!f(l))return void l.then(n,o||(o=u.bind(null,r=new a,2)));l=l.v}r?u(r,1,l):r=l}catch(t){u(r||(r=new a),2,t)}}(),r}(s,function(t){return e(s[t])})}(Array.from(e.children).sort(l),function(e){return Promise.resolve(t(e,n,{sort:l})).then(function(){})});return o&&o.then?o.then(function(){}):void 0}})}catch(t){return Promise.reject(t)}},c=function(t){var e=window.getComputedStyle(t).getPropertyValue("z-index");return"auto"===e?0:parseInt(null!=e?e:0)};function h(t,e,n){void 0===e&&(e={});var r="http://www.w3.org/2000/svg",o=document.createElementNS(r,t);for(var i in"svg"===t&&o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",r),e)null!=e[i]&&o.setAttribute(i,e[i]);return n&&n.appendChild(o),o}var s=function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height,u=e.style;try{if(!o||!i)return Promise.resolve();var a=u.getPropertyValue("background-color");return a&&"none"!==a&&"transparent"!==a?a.startsWith("rgba")&&"0"===a.match(/[\d.]+/g)[3]?Promise.resolve():Promise.resolve(h("rect",{x:n,y:r,width:o,height:i,fill:a,rx:parseInt(u.getPropertyValue("border-radius"))||null})):Promise.resolve()}catch(t){return Promise.reject(t)}}};const v="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function d(t,e,n){if(!t.s){if(n instanceof y){if(!n.s)return void(n.o=d.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(d.bind(null,t,e),d.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var y=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{d(r,1,i(this.v))}catch(t){d(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?d(r,1,e?e(o):o):n?d(r,1,n(o)):d(r,2,o)}catch(t){d(r,2,t)}},r},t}();function g(t){return t instanceof y&&1&t.s}var p=function(t){var e=t.cache;return function(t,n,r){var o=n.x,i=n.y,u=n.width,a=n.height,f=(void 0===r?{}:r).rasterizeNestedSVG,l=void 0===f||f;try{var c=function(){return l?h("image",{x:o,y:i,width:u,height:a,href:"data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(t))}):function(){var e=h("svg",{x:o,y:i,width:u,height:a,viewbox:"0 0 "+u+" "+a});return e.innerHTML=t.innerHTML,e}()},s=function(t,e,n){if("function"==typeof t[v]){var r,o,i,u=t[v]();if(function t(n){try{for(;!(r=u.next()).done;)if((n=e(r.value))&&n.then){if(!g(n))return void n.then(t,i||(i=d.bind(null,o=new y,2)));n=n.v}o?d(o,1,n):o=n}catch(t){d(o||(o=new y),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],l=0;l<t.length;l++)f.push(t[l]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!g(u))return void u.then(n,o||(o=d.bind(null,r=new y,2)));u=u.v}r?d(r,1,u):r=u}catch(t){d(r||(r=new y),2,t)}}(),r}(f,function(t){return e(f[t])})}(t.querySelectorAll("image[href]"),function(t){function n(){t.setAttribute("href",e.get(r))}var r=t.getAttribute("href"),o=function(){if(!e.has(r))return Promise.resolve(new Promise(function(t){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){return t(e.response)},e.send()})).then(function(t){return Promise.resolve(new Promise(function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsDataURL(t)})).then(function(t){e.set(r,t)})})}();return o&&o.then?o.then(n):n()});return Promise.resolve(s&&s.then?s.then(c):c())}catch(t){return Promise.reject(t)}}},m={__proto__:null,div:s,text:function(t){var e=t.debug,n=t.fonts;return function(t,r){var i,u=r.x,a=r.y,f=r.width,l=r.height,c=r.style;try{var s=function(t,n,r){var o=void 0===r?{}:r,i=o.orientation,c=void 0===i?"horizontal":i,s=o.stroke;return e&&h("line",{title:t,"data-value":n,x1:"horizontal"===c?u:u+n,x2:"horizontal"===c?u+f:u+n,y1:"horizontal"===c?a+n:a,y2:"horizontal"===c?a+n:a+l,stroke:void 0===s?"black":s,class:"debug"},v)};if(!t)return Promise.resolve();var v=h("g"),d=n.find((i=c,function(t){var e,n,r,o=void 0===t?{}:t,u=o.style,a=void 0===u?"normal":u,f=o.weight,l=void 0===f?"400":f;return o.family===(null!=(e=i.getPropertyValue("font-family"))?e:"").replace(/['"]/g,"")&&a===(null!=(n=i.getPropertyValue("font-style"))?n:"normal")&&l===(null!=(r=i.getPropertyValue("font-weight"))?r:"400")}));if(!d)throw new Error("Cannot find font '"+c.getPropertyValue("font-family")+" "+c.getPropertyValue("font-style")+" "+c.getPropertyValue("font-weight")+"'");var y=d.opentype.unitsPerEm,g=d.opentype.tables.hhea.ascender,p=d.opentype.tables.hhea.descender,m=c.getPropertyValue("letter-spacing"),w=parseFloat(c.getPropertyValue("font-size")),b=w*((g-p)/y)-Math.abs(p/y)*w;if(s("start",0,{orientation:"vertical",stroke:"red"}),s("end",f,{orientation:"vertical",stroke:"red"}),s("leading",b,{stroke:"#4b96ff"}),"normal"!==m)for(var P,x=o(t);!(P=x()).done;){var S=P.value;h("path",{d:d.opentype.getPath(S,u,a+b,w).toPathData(3),fill:c.getPropertyValue("color")},v),u+=d.opentype.getAdvanceWidth(S,w)+parseFloat(m)}else h("path",{d:d.opentype.getPath(t,u,a+b,w,{features:{liga:!0,rlig:!0}}).toPathData(3),fill:c.getPropertyValue("color")},v);return Promise.resolve(v)}catch(t){return Promise.reject(t)}}},svg:p,DIV:s,CANVAS:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return Promise.resolve(h("image",{x:n,y:r,width:o,height:i,href:t.toDataURL("image/png")}))}catch(t){return Promise.reject(t)}}},IMG:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return o&&i&&t.src?Promise.resolve(h("image",{x:n,y:r,width:o,height:i,href:t.src})):Promise.resolve()}catch(t){return Promise.reject(t)}}},SVG:p};const w="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function b(t,e,n){if(!t.s){if(n instanceof P){if(!n.s)return void(n.o=b.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(b.bind(null,t,e),b.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var P=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{b(r,1,i(this.v))}catch(t){b(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?b(r,1,e?e(o):o):n?b(r,1,n(o)):b(r,2,o)}catch(t){b(r,2,t)}},r},t}();function x(t){return t instanceof P&&1&t.s}function S(t,e,n){if("function"==typeof t[w]){var r,o,i,u=t[w]();if(function t(a){try{for(;!((r=u.next()).done||n&&n());)if((a=e(r.value))&&a.then){if(!x(a))return void a.then(t,i||(i=b.bind(null,o=new P,2)));a=a.v}o?b(o,1,a):o=a}catch(t){b(o||(o=new P),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],l=0;l<t.length;l++)f.push(t[l]);return function(t,e,n){var r,o,i=-1;return function u(a){try{for(;++i<t.length&&(!n||!n());)if((a=e(i))&&a.then){if(!x(a))return void a.then(u,o||(o=b.bind(null,r=new P,2)));a=a.v}r?b(r,1,a):r=a}catch(t){b(r||(r=new P),2,t)}}(),r}(f,function(t){return e(f[t])},n)}return function(t){var e=void 0===t?{}:t,r=e.debug,i=void 0!==r&&r,u=e.ignore,a=void 0===u?"":u,f=e.fonts,s=void 0===f?[]:f,v=new Map,d={};for(var y in m)d[y]=m[y]({debug:i,fonts:s,cache:v});return{get cache(){return v},preload:function(){try{var t=S(s,function(t){if(!t.opentype)return Promise.resolve(new Promise(function(e){n.default.load(t.url,function(t,n){if(t)throw t;e(n)})})).then(function(e){t.opentype=e})});return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},destroy:function(){v.clear();for(var t,e=o(s);!(t=e()).done;)delete t.value.opentype},render:function(t,e,n){void 0===e&&(e={}),void 0===n&&(n=function(){});try{var r=t.getBoundingClientRect(),o=h("svg",{viewBox:"0 0 "+r.width+" "+r.height,width:r.width,height:r.height,preserveAspectRatio:"none"}),i=o;return Promise.resolve(l(t,function(u){try{var f;if(a&&u!==t&&u.matches(a))return Promise.resolve();var l=window.getComputedStyle(u),c=u.getBoundingClientRect(),s=c.x,v=c.y,y=c.width,g=c.height,p=l.getPropertyValue("clip-path");"none"!==p&&(i=h("g",null,o)).setAttribute("style","clip-path: "+p.replace(/"/g,"'"));var m=null!=(f=d[u.tagName])?f:d.div;return Promise.resolve(m(u,{x:s-r.x,y:v-r.y,width:y,height:g,style:l},e)).then(function(t){return Promise.resolve(n(u,t)).then(function(o){(t=o)&&i.appendChild(t);var a=function(){if(u.innerText)return S(u.childNodes,function(t){if(t.nodeType===Node.TEXT_NODE&&t.textContent.length){if(!/^\s/.test(t.textContent))return S(function(t,e){void 0===e&&(e=t.innerText||t.textContent);for(var n=document.createRange(),r=[],o=0;o<t.length;o++){var i;n.setStart(t,0),n.setEnd(t,o+1);var u=n.getClientRects(),a=u.length-1;r[a]=null!=(i=r[a])?i:{text:""},r[a].rect=u[a],r[a].text+=e.charAt(o)}return r.map(function(t){return t.fragment=new DocumentFragment,t.fragment.textContent=t.text,t})}(t),function(t){var o=t.rect,a=t.fragment,f=function(t,f){try{var c=Promise.resolve(d.text(a.textContent.trimEnd(),{x:o.x-r.x,y:o.y-r.y,width:o.width,height:o.height,style:l},e)).then(function(t){return Promise.resolve(n(u,t)).then(function(e){(t=e)&&i.appendChild(t)})})}catch(t){return f(t)}return c&&c.then?c.then(void 0,f):c}(0,function(t){console.warn(new Error("Rendering failed for the following text: '"+a.textContent+"'",{cause:t})),console.warn(t)});if(f&&f.then)return f.then(function(){})});t.splitText(1)}})}();return!a||!a.then||a.then(function(){return!0})})})}catch(t){return Promise.reject(t)}},{sort:function(t,e){var n,r;return t.zIndex=null!=(n=t.zIndex)?n:c(t),e.zIndex=null!=(r=e.zIndex)?r:c(e),t.zIndex-e.zIndex}})).then(function(){return o})}catch(t){return Promise.reject(t)}}}}});
//# sourceMappingURL=html-to-svg.umd.js.map

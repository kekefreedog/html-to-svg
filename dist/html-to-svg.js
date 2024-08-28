var t=require("opentype.js"),e=require("fs"),n=require("path");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/r(t),i=/*#__PURE__*/r(e),u=/*#__PURE__*/r(n);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function l(t,e,n){if(!t.s){if(n instanceof h){if(!n.s)return void(n.o=l.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(l.bind(null,t,e),l.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var h=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{l(r,1,i(this.v))}catch(t){l(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?l(r,1,e?e(o):o):n?l(r,1,n(o)):l(r,2,o)}catch(t){l(r,2,t)}},r},t}();function s(t){return t instanceof h&&1&t.s}var v=function t(e,n,r){var o=(void 0===r?{}:r).sort,i=void 0===o?function(){return 1}:o;try{return Promise.resolve(n(e)).then(function(r){if(r){var o=function(t,e,n){if("function"==typeof t[c]){var r,o,i,u=t[c]();if(function t(n){try{for(;!(r=u.next()).done;)if((n=e(r.value))&&n.then){if(!s(n))return void n.then(t,i||(i=l.bind(null,o=new h,2)));n=n.v}o?l(o,1,n):o=n}catch(t){l(o||(o=new h),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],v=0;v<t.length;v++)f.push(t[v]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!s(u))return void u.then(n,o||(o=l.bind(null,r=new h,2)));u=u.v}r?l(r,1,u):r=u}catch(t){l(r||(r=new h),2,t)}}(),r}(f,function(t){return e(f[t])})}(Array.from(e.children).sort(i),function(e){return Promise.resolve(t(e,n,{sort:i})).then(function(){})});return o&&o.then?o.then(function(){}):void 0}})}catch(t){return Promise.reject(t)}},d=function(t){var e=window.getComputedStyle(t).getPropertyValue("z-index");return"auto"===e?0:parseInt(null!=e?e:0)};function y(t,e,n){void 0===e&&(e={});var r="http://www.w3.org/2000/svg",o=document.createElementNS(r,t);for(var i in"svg"===t&&o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",r),e)null!=e[i]&&o.setAttribute(i,e[i]);return n&&n.appendChild(o),o}function g(t){return!t||"none"===t||"transparent"===t||!(!t.startsWith("rgba")||"0"!==t.match(/[\d.]+/g)[3])}var m=function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height,u=e.style;try{if(!o||!i)return Promise.resolve();var f=u.getPropertyValue("background-color");if(g(f))return Promise.resolve();var c={stroke:"none","stroke-width":1},l=u.getPropertyValue("border-color");return"none"===u.getPropertyValue("border-style")||g(l)||(c.stroke=l,c["stroke-width"]=u.getPropertyValue("border-width")),Promise.resolve(y("rect",a({x:n,y:r,width:o,height:i},c,{fill:f,rx:parseInt(u.getPropertyValue("border-radius"))||null})))}catch(t){return Promise.reject(t)}}};const p="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function w(t,e,n){if(!t.s){if(n instanceof b){if(!n.s)return void(n.o=w.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(w.bind(null,t,e),w.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var b=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{w(r,1,i(this.v))}catch(t){w(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?w(r,1,e?e(o):o):n?w(r,1,n(o)):w(r,2,o)}catch(t){w(r,2,t)}},r},t}();function x(t){return t instanceof b&&1&t.s}var P=function(t){var e=t.cache;return function(t,n,r){var o=n.x,i=n.y,u=n.width,a=n.height,f=(void 0===r?{}:r).rasterizeNestedSVG,c=void 0===f||f;try{var l=function(){return c?y("image",{x:o,y:i,width:u,height:a,href:"data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(t))}):function(){var e=y("svg",{x:o,y:i,width:u,height:a,viewbox:"0 0 "+u+" "+a});return e.innerHTML=t.innerHTML,e}()},h=function(t,e,n){if("function"==typeof t[p]){var r,o,i,u=t[p]();if(function t(n){try{for(;!(r=u.next()).done;)if((n=e(r.value))&&n.then){if(!x(n))return void n.then(t,i||(i=w.bind(null,o=new b,2)));n=n.v}o?w(o,1,n):o=n}catch(t){w(o||(o=new b),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],c=0;c<t.length;c++)f.push(t[c]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!x(u))return void u.then(n,o||(o=w.bind(null,r=new b,2)));u=u.v}r?w(r,1,u):r=u}catch(t){w(r||(r=new b),2,t)}}(),r}(f,function(t){return e(f[t])})}(t.querySelectorAll("image[href]"),function(t){function n(){t.setAttribute("href",e.get(r))}var r=t.getAttribute("href"),o=function(){if(!e.has(r))return Promise.resolve(new Promise(function(t){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){return t(e.response)},e.send()})).then(function(t){return Promise.resolve(new Promise(function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsDataURL(t)})).then(function(t){e.set(r,t)})})}();return o&&o.then?o.then(n):n()});return Promise.resolve(h&&h.then?h.then(l):l())}catch(t){return Promise.reject(t)}}},S={__proto__:null,div:m,text:function(t){var e=t.fonts;return function(t,n,r){var o,a,f=n.x,c=n.y,l=n.style;try{if(!t)return Promise.resolve();var h=y("g",{class:"text-fragment"}),s=e.find((a=l,function(t){var e,n,r,o=void 0===t?{}:t,i=o.style,u=void 0===i?"normal":i,f=o.weight,c=void 0===f?"400":f;return o.family===(null!=(e=a.getPropertyValue("font-family"))?e:"").replace(/['"]/g,"")&&u===(null!=(n=a.getPropertyValue("font-style"))?n:"normal")&&c===(null!=(r=a.getPropertyValue("font-weight"))?r:"400")}));if(!s)throw new Error("Cannot find font '"+l.getPropertyValue("font-family")+" "+l.getPropertyValue("font-style")+" "+l.getPropertyValue("font-weight")+"'");var v=(o=u.default.join(__dirname,s.url),i.default.readFileSync(o).toString("base64"));console.log(s),y("style",{},h).textContent="\n    @font-face {\n      font-family: '"+s.family+"';\n      src: url(data:font/ttf;base64,"+v+") format('truetype');\n      font-weight: "+s.weight+";\n      font-style: "+s.style+";\n    }\n  ";var d=l.getPropertyValue("letter-spacing"),g=l.getPropertyValue("font-size");return y("text",{x:f,y:c,fill:l.getPropertyValue("color"),"font-family":s.family,"font-size":g,"font-weight":l.getPropertyValue("font-weight"),"font-style":l.getPropertyValue("font-style"),"letter-spacing":"normal"===d?"0":d,"dominant-baseline":"hanging"},h).textContent=t,Promise.resolve(h)}catch(t){return Promise.reject(t)}}},svg:P,DIV:m,CANVAS:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return Promise.resolve(y("image",{x:n,y:r,width:o,height:i,href:t.toDataURL("image/png")}))}catch(t){return Promise.reject(t)}}},IMG:function(t){return function(t,e){var n=e.x,r=e.y,o=e.width,i=e.height;try{return o&&i&&t.src?Promise.resolve(y("image",{x:n,y:r,width:o,height:i,href:t.src})):Promise.resolve()}catch(t){return Promise.reject(t)}}},SVG:P};const V="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function j(t,e,n){if(!t.s){if(n instanceof C){if(!n.s)return void(n.o=j.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(j.bind(null,t,e),j.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var C=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{j(r,1,i(this.v))}catch(t){j(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?j(r,1,e?e(o):o):n?j(r,1,n(o)):j(r,2,o)}catch(t){j(r,2,t)}},r},t}();function A(t){return t instanceof C&&1&t.s}function T(t,e,n){if("function"==typeof t[V]){var r,o,i,u=t[V]();if(function t(a){try{for(;!((r=u.next()).done||n&&n());)if((a=e(r.value))&&a.then){if(!A(a))return void a.then(t,i||(i=j.bind(null,o=new C,2)));a=a.v}o?j(o,1,a):o=a}catch(t){j(o||(o=new C),2,t)}}(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var f=[],c=0;c<t.length;c++)f.push(t[c]);return function(t,e,n){var r,o,i=-1;return function u(a){try{for(;++i<t.length&&(!n||!n());)if((a=e(i))&&a.then){if(!A(a))return void a.then(u,o||(o=j.bind(null,r=new C,2)));a=a.v}r?j(r,1,a):r=a}catch(t){j(r||(r=new C),2,t)}}(),r}(f,function(t){return e(f[t])},n)}module.exports=function(t){var e=void 0===t?{}:t,n=e.debug,r=void 0!==n&&n,i=e.ignore,u=void 0===i?"":i,a=e.fonts,c=void 0===a?[]:a,l=new Map,h={};for(var s in S)h[s]=S[s]({debug:r,fonts:c,cache:l});return{get cache(){return l},preload:function(){try{var t=T(c,function(t){if(!t.opentype)return Promise.resolve(new Promise(function(e){o.default.load(t.url,function(t,n){if(t)throw t;e(n)})})).then(function(e){t.opentype=e})});return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},destroy:function(){l.clear();for(var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t))){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c);!(t=e()).done;)delete t.value.opentype},render:function(t,e,n){void 0===e&&(e={});try{var r=t.getBoundingClientRect(),o=y("svg",{viewBox:"0 0 "+r.width+" "+r.height,width:r.width,height:r.height,preserveAspectRatio:"none"}),i=o;return Promise.resolve(v(t,function(a){try{var f;if(u&&a!==t&&a.matches(u))return Promise.resolve();var c=window.getComputedStyle(a),l=a.getBoundingClientRect(),s=l.x,v=l.y,d=l.width,g=l.height;if(a instanceof window.HTMLElement){var m=c.getPropertyValue("clip-path");"none"!==m&&(i=y("g",null,o)).setAttribute("style","clip-path: "+m.replace(/"/g,"'"))}var p=null!=(f=h[a.tagName])?f:h.div;return Promise.resolve(p(a,{x:s-r.x,y:v-r.y,width:d,height:g,style:c},e)).then(function(t){function o(){t&&i.appendChild(t);var o=function(){if(a.innerText&&a.childNodes.length){var t=function(){o.children.length&&i.appendChild(o)},o=y("g",{class:"text"}),u=T(a.childNodes,function(t){if(t.nodeType===Node.TEXT_NODE&&t.textContent.length){if(!/^\s/.test(t.textContent))return T(function(t,e){void 0===e&&(e=t.innerText||t.textContent);for(var n=document.createRange(),r=[],o=0;o<t.length;o++){var i;n.setStart(t,0),n.setEnd(t,o+1);var u=n.getClientRects(),a=u.length-1;r[a]=null!=(i=r[a])?i:{text:""},r[a].rect=u[a],r[a].text+=e.charAt(o)}return r.map(function(t){return t.fragment=new DocumentFragment,t.fragment.textContent=t.text,t})}(t),function(t){var i=t.rect,u=t.fragment,f=function(t,f){try{var l=Promise.resolve(h.text(u.textContent.trimEnd(),{x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height,style:c},e)).then(function(t){function e(){t&&o.appendChild(t)}var r=function(){if(n)return Promise.resolve(n(a,t)).then(function(e){t=e})}();return r&&r.then?r.then(e):e()})}catch(t){return f(t)}return l&&l.then?l.then(void 0,f):l}(0,function(t){console.warn(new Error("Rendering failed for the following text: '"+u.textContent+"'",{cause:t})),console.warn(t)});if(f&&f.then)return f.then(function(){})});t.splitText(1)}});return u&&u.then?u.then(t):t()}}();return!o||!o.then||o.then(function(){return!0})}var u=function(){if(n)return Promise.resolve(n(a,t)).then(function(e){t=e})}();return u&&u.then?u.then(o):o()})}catch(t){return Promise.reject(t)}},{sort:function(t,e){var n,r;return t.zIndex=null!=(n=t.zIndex)?n:d(t),e.zIndex=null!=(r=e.zIndex)?r:d(e),t.zIndex-e.zIndex}})).then(function(){return o})}catch(t){return Promise.reject(t)}}}};
//# sourceMappingURL=html-to-svg.js.map

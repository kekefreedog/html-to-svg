import t from"opentype.js";async function e(t,n,{sort:r=(()=>1)}={}){if(await n(t))for(const o of Array.from(t.children).sort(r))await e(o,n,{sort:r})}var n=t=>{const e=window.getComputedStyle(t).getPropertyValue("z-index");return"auto"===e?0:parseInt(null!=e?e:0)};function r(t,e=t.innerText||t.textContent){const n=document.createRange(),r=[];for(let a=0;a<t.length;a++){var o;n.setStart(t,0),n.setEnd(t,a+1);const i=n.getClientRects(),l=i.length-1;r[l]=null!=(o=r[l])?o:{text:""},r[l].rect=i[l],r[l].text+=e.charAt(a)}return r.map(t=>(t.fragment=new DocumentFragment,t.fragment.textContent=t.text,t))}function o(t,e={},n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,t);"svg"===t&&o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",r);for(const t in e)null!=e[t]&&o.setAttribute(t,e[t]);return n&&n.appendChild(o),o}var a=({})=>async(t,{x:e,y:n,width:r,height:a,style:i})=>{if(!r||!a)return;const l=i.getPropertyValue("background-color");if(l&&"none"!==l&&"transparent"!==l){if(l.startsWith("rgba")&&"0"===l.match(/[\d.]+/g)[3])return;return o("rect",{x:e,y:n,width:r,height:a,fill:l,rx:parseInt(i.getPropertyValue("border-radius"))||null})}},i=({})=>async(t,{x:e,y:n,width:r,height:a})=>o("image",{x:e,y:n,width:r,height:a,href:"data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(t))}),l={__proto__:null,div:a,text:({debug:t,fonts:e})=>async(n,{x:r,y:a,width:i,height:l,style:s})=>{if(!n)return;const h=o("g"),g=e.find((d=s,({family:t,style:e="normal",weight:n="400"}={})=>{var r,o,a;return t===(null!=(r=d.getPropertyValue("font-family"))?r:"").replace(/['"]/g,"")&&e===(null!=(o=d.getPropertyValue("font-style"))?o:"normal")&&n===(null!=(a=d.getPropertyValue("font-weight"))?a:"400")}));var d;if(!g)throw new Error(`Cannot find font '${s.getPropertyValue("font-family")} ${s.getPropertyValue("font-style")} ${s.getPropertyValue("font-weight")}'`);const{unitsPerEm:c}=g.opentype,u=g.opentype.tables.hhea.ascender,f=g.opentype.tables.hhea.descender,p=s.getPropertyValue("letter-spacing"),y=parseFloat(s.getPropertyValue("font-size")),w=y*((u-f)/c)-Math.abs(f/c)*y;if(x("start",0,{orientation:"vertical",stroke:"red"}),x("end",i,{orientation:"vertical",stroke:"red"}),x("leading",w,{stroke:"#4b96ff"}),"normal"!==p)for(const t of n)o("path",{d:g.opentype.getPath(t,r,a+w,y).toPathData(3),fill:s.getPropertyValue("color")},h),r+=g.opentype.getAdvanceWidth(t,y)+parseFloat(p);else o("path",{d:g.opentype.getPath(n,r,a+w,y,{features:{liga:!0,rlig:!0}}).toPathData(3),fill:s.getPropertyValue("color")},h);return h;function x(e,n,{orientation:s="horizontal",stroke:g="black"}={}){return t&&o("line",{title:e,"data-value":n,x1:"horizontal"===s?r:r+n,x2:"horizontal"===s?r+i:r+n,y1:"horizontal"===s?a+n:a,y2:"horizontal"===s?a+n:a+l,stroke:g,class:"debug"},h)}},svg:i,DIV:a,CANVAS:({})=>async(t,{x:e,y:n,width:r,height:a})=>o("image",{x:e,y:n,width:r,height:a,href:t.toDataURL("image/png")}),IMG:({})=>async(t,{x:e,y:n,width:r,height:a})=>{if(r&&a&&t.src)return o("image",{x:e,y:n,width:r,height:a,href:t.src})},SVG:i};function s({debug:a=!1,ignore:i="",fonts:s=[]}={}){const h={};for(const t in l)h[t]=l[t]({debug:a,fonts:s});return{preload:async function(){for(const e of s)e.opentype||(e.opentype=await new Promise(n=>{t.load(e.url,(t,e)=>{if(t)throw t;n(e)})}))},destroy:function(){for(const t of s)delete t.opentype},render:async function(t){const a=t.getBoundingClientRect(),l=o("svg",{viewBox:`0 0 ${a.width} ${a.height}`,width:a.width,height:a.height,preserveAspectRatio:"none"});let s=l;return await e(t,async e=>{var n;if(i&&e!==t&&e.matches(i))return;const g=window.getComputedStyle(e),{x:d,y:c,width:u,height:f}=e.getBoundingClientRect(),p=g.getPropertyValue("clip-path");"none"!==p&&(s=o("g",null,l),s.setAttribute("style",`clip-path: ${p}`));const y=null!=(n=h[e.tagName])?n:h.div,w=await y(e,{x:d-a.x,y:c-a.y,width:u,height:f,style:g});if(w&&s.appendChild(w),e.innerText)for(const t of e.childNodes)if(t.nodeType===Node.TEXT_NODE&&t.textContent.length)if(/^\s/.test(t.textContent))t.splitText(1);else for(const{rect:e,fragment:n}of r(t))try{const t=await h.text(n.textContent.trimEnd(),{x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height,style:g});t&&s.appendChild(t)}catch(t){console.warn(new Error(`Rendering failed for the following text: '${n.textContent}'`,{cause:t})),console.warn(t)}return!0},{sort:(t,e)=>{var r,o;return t.zIndex=null!=(r=t.zIndex)?r:n(t),e.zIndex=null!=(o=e.zIndex)?o:n(e),t.zIndex-e.zIndex}}),l}}}export{s as default};
//# sourceMappingURL=html-to-svg.modern.mjs.map

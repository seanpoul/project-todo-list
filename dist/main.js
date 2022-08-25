(()=>{"use strict";var e,n,t,r,o,a,i,c,d,s,u,p,l,f,v={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n#title {\n    background-color: rgb(247, 58, 69);\n    font-size: 40px;\n    padding: 10px 20px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    height: 100vh;\n}\n\n#sidebar {\n    background-color: rgb(16, 151, 167);\n    /* background-color: rgb(104, 169, 46) ; */\n    display: grid;\n    grid-auto-rows: max-content;\n    padding: 10px;\n    gap: 10px;\n    font-size: 25px;\n}\n\n#info {\n    background-color: rgb(235, 213, 179);\n    /* background-color: rgb(247, 186, 8); */\n    display: grid;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var l=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var v=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function g(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return v[e](t,t.exports,g),t.exports}g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),g.nc=void 0,e=g(379),n=g.n(e),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),d=g(216),s=g.n(d),u=g(589),p=g.n(u),l=g(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,function(){const e=document.querySelector("body"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");n.id="title",n.textContent="To-do List",t.id="content",r.id="sidebar",o.id="listTodo",o.textContent="To-do Lists",a.id="projectTodo",a.textContent="To-do Projects",i.id="noteTodo",i.textContent="To-do Notes",c.id="info",e.appendChild(n),e.appendChild(t),t.appendChild(r),r.append(o,a,i),t.appendChild(c)}()})();
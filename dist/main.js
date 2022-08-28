(()=>{"use strict";var e,t,n,r,o,i,c,a,d,l,s,u,p,m,y={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n#sidebar>button {\n    display: grid;\n    justify-content: left;\n    border: none;\n    background: none;\n    font-size: 30px;\n}\n\n#title {\n    background-color: rgb(247, 58, 69);\n    font-size: 50px;\n    padding: 5px 10px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100vh;\n}\n\n#sidebar {\n    background-color: rgb(16, 151, 167);\n    display: grid;\n    grid-auto-rows: max-content;\n    padding: 10px;\n    gap: 10px;\n}\n\n#createNewList:hover,\n#createNewProject:hover,\n#todoList:hover,\n#todoProject:hover {\n    background-color: red;\n}\n\n#info {\n    background-color: rgb(235, 213, 179);\n}\n\nli {\n    list-style: none;\n}\n\nform {\n    display: grid;\n    grid-template-columns: 300px;\n    grid-template-rows: 1fr 1fr;\n    gap: 10px;\n}\n\n#popupListContainer,\n#popupProjectContainer {\n    position: absolute;\n    top: 25%;\n    left: 35%;\n    border: rgb(247, 58, 69) solid 2px;\n    border-radius: 5px;\n    box-shadow: 10px 10px 20px rgb(16, 151, 167);\n    visibility: hidden;\n    background-color: rgb(235, 213, 179);\n}\n\n#headerPopup {\n    display: grid;\n    grid-template-columns: 1fr 100px;\n    font-size: 25px;\n    padding: 4px;\n}\n\n#headerPopup>button {\n    font-size: 20px;\n    width: fit-content;\n    justify-self: end;\n    padding: 2px;\n}\n\n.bodyPopup {\n    display: grid;\n    grid-template-columns: 150px 220px;\n    font-size: 20px;\n    padding: 5px;\n}\n\n.leftAlign {\n    display: grid;\n    grid-template-columns: 100px min-content;\n}\n\n#listName,\n#projectName {\n    width: 250px;\n}\n\n#createListItem,\n#createProjectItem {\n    width: fit-content;\n    font-size: 20px;\n    padding: 2px;\n}\n\n.defaultList {\n    display: grid;\n    grid-template-rows: 30px;\n    /* grid-template-columns: 30px 500px 120px 60px 60px; */\n    grid-template-columns: 20px 1fr auto auto auto;\n    gap: 10px;\n    margin: 10px;\n    padding: 2px 10px 2px 10px;\n    font-size: 25px;\n}\n\n.defaultList>button {\n    width: 60px;\n}\n\nli.lowPriority {\n    border: green solid 4px;\n}\n\nli.mediumPriority {\n    border: orange solid 4px;\n}\n\nli.highPriority {\n    border: red solid 4px;\n}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:y,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},f={};function g(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,exports:{}};return y[e](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.nc=void 0,e=g(379),t=g.n(e),n=g(795),r=g.n(n),o=g(569),i=g.n(o),c=g(565),a=g.n(c),d=g(216),l=g.n(d),s=g(589),u=g.n(s),p=g(426),(m={}).styleTagTransform=u(),m.setAttributes=a(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#listForm"),t=document.querySelector("#createNewList"),n=document.querySelector("#popupListContainer"),r=document.querySelector("#closeListPopup"),o=document.querySelector("#createListItem"),i=document.querySelector("ol"),c=document.querySelector("#createNewProject"),a=document.querySelector("#popupProjectContainer"),d=document.querySelector("#closeProjectPopup"),l=document.querySelector("#createProjectItem");let s=[];t.addEventListener("click",(()=>{n.style.visibility="visible"})),r.addEventListener("click",(()=>{n.style.visibility="hidden"})),o.addEventListener("click",(()=>{n.style.visibility="hidden",function(e){const t=document.querySelector("#listName"),n=document.querySelector("#listPriority"),r=document.querySelector("#dueDateList"),o=document.querySelector("ol");o.innerHTML="";let i={title:t.value,priority:n.value,dueDate:r.value};e.push(i);for(let t=0;t<e.length;t++){let n=document.createElement("li");n.classList.add("defaultList","li"+t),o.appendChild(n);let r=document.createElement("input"),i=document.createElement("div"),c=document.createElement("div"),a=document.createElement("button"),d=document.createElement("button");"Low"==e[t].priority?n.classList.toggle("lowPriority"):"Medium"==e[t].priority?n.classList.toggle("mediumPriority"):n.classList.toggle("highPriority"),a.classList.add("editButton","li"+t),d.classList.add("deleteButton","li"+t),r.setAttribute("type","checkbox"),i.textContent=e[t].title,c.textContent=e[t].dueDate,a.textContent="Edit",d.textContent="Delete",n.append(r,i,c,a,d)}}(s),e.reset()})),c.addEventListener("click",(()=>{a.style.visibility="visible"})),d.addEventListener("click",(()=>{a.style.visibility="hidden"})),l.addEventListener("click",(()=>{a.style.visibility="hidden",document.querySelector("#projectName"),document.querySelector("#priorityProject"),document.querySelector("#dueDateProject"),projectFormInfo.reset()})),i.addEventListener("click",(()=>{!function(e){document.querySelector("#listName"),document.querySelector("#listPriority"),document.querySelector("#dueDateList"),document.querySelector("ol"),console.log(e);let t=Array.from(document.querySelectorAll("li"));document.querySelector("input"),document.querySelector("div"),document.querySelector("div"),document.querySelector(".editButton"),document.querySelector("button"),console.log(t)}(s)}))}()})();
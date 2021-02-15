(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"html,body{padding:0;margin:0;overflow:hidden;background-color:#222}\n",""]);const i=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},404:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(379),o=n.n(r),i=n(192);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],s=e.base?c[0]+e.base:c[0],u=n[s]||0,h="".concat(s," ").concat(u);n[s]=u+1;var d=a(h),l={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(l)):i.push({identifier:h,updater:v(l,e),references:1}),r.push(h)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function l(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,p=0;function v(t,e){var n,r,o;if(e.singleton){var i=p++;n=f||(f=s(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(e),r=l.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(t,e),u=0;u<n.length;u++){var h=a(n[u]);0===i[h].references&&(i[h].updater(),i.splice(h,1))}n=s}}}},607:(t,e,n)=>{var r=n(416);n(404);var o,i=n(5),a=document.querySelector("canvas"),c=a.getContext("2d");c.imageSmoothingEnabled=!0;var s=function(){i.setCanvasHeight(a),requestAnimationFrame(s),c.clearRect(0,0,a.width,a.height),o.update()};i.setCanvasHeight(a),o=new r.Swarm(a,c,50),s()},418:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0,e.Parametric=void 0;var i=function(t){function e(e,n,r,o){var i=t.call(this,e,n)||this;return i.sin=function(t){return Math.sin(t*i.waveLength+i.increment)*i.amplitude},i.cos=function(t){return Math.cos(t*i.waveLength+i.increment)*i.amplitude},i.x=e.width/2,i.y=e.height/2,i.frequency=.03,i.increment=i.frequency,i.waveLength=r,i.amplitude=800,i.color=o,i}return o(e,t),e.prototype.randomCosSin=function(t){var e=t*this.waveLength+this.increment;return Math.random()>.5?Math.sin(e)*this.waveLength:Math.cos(e)*this.waveLength},e.prototype.draw=function(){this.ctx.beginPath(),this.ctx.moveTo(this.x+this.sin(100),this.y+this.cos(100)),this.ctx.lineTo(this.x+this.cos(200),this.y+this.cos(200)),this.ctx.strokeStyle=this.color,this.ctx.lineWidth=5,this.ctx.stroke()},e.prototype.update=function(){this.increment+=this.frequency,this.draw()},e}(n(610).Shape);e.Parametric=i},610:(t,e)=>{e.__esModule=!0,e.Shape=void 0;e.Shape=function(t,e){this.canvas=t,this.ctx=e}},416:(t,e,n)=>{e.__esModule=!0,e.Swarm=void 0;var r=n(418),o=n(5),i=function(){function t(t,e,n){this.swarmArr=[],this.nAmount=n,this.canvas=t,this.ctx=e,this.spawnSwarm()}return t.prototype.spawnSwarm=function(){for(var t=o.randomColor(),e=0;e<this.nAmount;e++){var n=e/1e3;this.swarmArr.push(new r.Parametric(this.canvas,this.ctx,n,t))}},t.prototype.update=function(){this.swarmArr.forEach((function(t){t.update()}))},t}();e.Swarm=i},5:(t,e)=>{e.__esModule=!0,e.randomColor=e.average=e.setCanvasHeight=e.randomPosNeg=e.randomNum=void 0;var n=function(t,e){return Math.floor(e?Math.random()*(t-e)+e:Math.random()*t)};e.randomNum=n,e.randomPosNeg=function(t){return Math.random()>.5?t:-t},e.setCanvasHeight=function(t){t.width===innerWidth&&t.height===innerHeight||(t.width=innerWidth,t.height=innerHeight)},e.average=function(t){return t.reduce((function(t,e){return t+e}))/t.length},e.randomColor=function(t){void 0===t&&(t=!1);var e=n(255),r=n(255),o=n(255),i=Math.random();return"rgba("+e+","+r+","+o+","+(t?i:1)+")"}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(607)})();
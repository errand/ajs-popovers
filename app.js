(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},606:(e,t,r)=>{e.exports=r.p+"img/3a24d1c2d9b22774331d.ico"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{var e=r(91),t=r.n(e),o=new URL(r(606),r.b);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t()(o);var c=function(){function e(t){var r,o,n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){e.preventDefault();var t=e.target;if(t.getAttribute("aria-describedby")){var r=t.getAttribute("aria-describedby");t.removeAttribute("aria-describedby"),n.removePopover(r)}else{var o="ajs-".concat(n.getRandomInt());t.setAttribute("aria-describedby",o),n.createPopover(o,t.dataset.ajsTitle,t.dataset.ajsContent,t.dataset.ajsPosition)}},(r="clickedPopover")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this.element=t,this.registerEvents()}var t,r;return t=e,r=[{key:"checkBinding",value:function(){if(null===this.element)throw new Error("Element not bind to DOM")}},{key:"registerEvents",value:function(){this.checkBinding(),this.element.addEventListener("click",this.clickedPopover)}},{key:"createPopover",value:function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bottom",n=document.createElement("div");n.id=e,n.classList.add("popover"),n.dataset.popoverPosition=o,n.innerHTML='\n      <h3 class="popover-header">'.concat(t,'</h3>\n      <div class="popover-body">').concat(r,"</div>\n      </div>\n    "),document.querySelector("body").appendChild(n),this.movePopovers()}},{key:"movePopovers",value:function(){var e=a(document.querySelectorAll(".popover"));e&&e.forEach((function(e){var t=document.querySelector('[aria-describedby="'.concat(e.id,'"]')).getBoundingClientRect(),r=e;switch(e.dataset.popoverPosition){case"top":r.style.top="".concat(t.top-t.height-10,"px"),r.style.left="".concat(t.x+t.width/2,"px"),r.style.transform="translateX(-50%)";break;case"bottom":r.style.top="".concat(t.top+t.height+5,"px"),r.style.left="".concat(t.x+t.width/2,"px"),r.style.transform="translateX(-50%)";break;case"left":r.style.top="".concat(t.top,"px"),r.style.left="".concat(t.x-5,"px"),r.style.transform="translate(-100%, -50%)";break;case"right":r.style.top="".concat(t.top,"px"),r.style.left="".concat(t.x+t.width+5,"px"),r.style.transform="translateY(-50%)";break;default:r.style.top="".concat(t.top+t.height,"px"),r.style.left="".concat(t.x+t.width/2,"px"),r.style.transform="translateX(-50%)"}}))}},{key:"removePopover",value:function(e){var t=document.querySelector("#".concat(e));t&&t.remove()}},{key:"getRandomInt",value:function(){return Math.floor(1e3+99999*Math.random())}}],r&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();a(document.querySelectorAll('[data-ajs-toggle="popover"]')).forEach((function(e){return new c(e)}))})()})();
//# sourceMappingURL=app.js.map
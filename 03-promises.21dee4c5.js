var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("7Y9D8");const l=document.querySelector(".form");function r(e,n){const o=l.elements.delay.value;return new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:5,delay:l.elements.delay.value}):n({position:l.elements.amount.value,delay:l.elements.delay.value})}),o)}))}l.addEventListener("submit",r),r().then((e=>{console.log(l.elements.delay.value)})).catch((e=>e));
//# sourceMappingURL=03-promises.21dee4c5.js.map

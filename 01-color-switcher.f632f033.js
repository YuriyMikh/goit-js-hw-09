!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,t.addEventListener("click",(function(d){t.disabled=!0,e.disabled=!1,n.style.backgroundColor=a(),o=setInterval((function(){n.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(function(n){t.disabled=!1,e.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.f632f033.js.map

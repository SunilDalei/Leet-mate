function o(){const e=document.querySelector("meta[name=description]")?.getAttribute("content");return c(e)}function c(t){return t.split(`
`).filter(e=>e.trim().length>0).join(`
`)}function u(){const t=document.querySelectorAll(".view-line"),e=i(t),n=document.querySelector("button.rounded.items-center.whitespace-nowrap.inline-flex.bg-transparent.dark\\:bg-dark-transparent.text-text-secondary.group");let r="C++";return n?.textContent&&(r=n.textContent),{extractedCode:e,lang:r}}function i(t){return Array.from(t).map(n=>n.textContent||"").join(`
`)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="GET_PROBLEM"){const r=o();return n({text:r||""}),!0}if(t.type==="GET_USER_CODE"){const r=u();return console.log(r),n({userObj:r}),!0}});

import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="modulepreload",p=function(i,_){return new URL(i,_).href},m={},o=function(_,s,c){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,c),r in m)return;m[r]=!0;const l=r.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":E,l||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),l)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>_()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-s9E_TGmP.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-fInsN-PI.js"),__vite__mapDeps([3,4,1,2,5]),import.meta.url),"./src/stories/Page.stories.ts":async()=>o(()=>import("./Page.stories--G5B5Exm.js"),__vite__mapDeps([6,4,1,2,5,7]),import.meta.url)};async function P(i){return w[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-8lgUVhYG.js"),__vite__mapDeps([8,9]),import.meta.url),o(()=>import("./preview-diGAMsr1.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-AFoNTASY.js"),__vite__mapDeps([10,9]),import.meta.url),o(()=>import("./preview-6xprOzuT.js"),__vite__mapDeps([11,9]),import.meta.url),o(()=>import("./preview-ALhYt657.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([12,9]),import.meta.url),o(()=>import("./preview-yQ7I7MFI.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-vJniGjAL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-s9E_TGmP.js","./Button-7rAGAjg8.js","./Button-X8hm4PDT.css","./Header.stories-fInsN-PI.js","./Header-jYcsJaFc.js","./Header-Yyx952jD.css","./Page.stories--G5B5Exm.js","./Page-fZ7a-HXz.css","./entry-preview-8lgUVhYG.js","./index-PPLHz8o0.js","./preview-AFoNTASY.js","./preview-6xprOzuT.js","./preview-u8M_OEO2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
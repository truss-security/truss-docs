"use strict";(self.webpackChunktruss_docs_2=self.webpackChunktruss_docs_2||[]).push([[910],{7293:(e,n,t)=>{t.d(n,{A:()=>M});var i=t(6540),s=t(4848);function l(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),l=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:l.length>0?(0,s.jsx)(s.Fragment,{children:l}):null}}(e.children),l=e.title??n;return{...e,...l&&{title:l},children:t}}var a=t(4164),r=t(1312),o=t(7559);const c="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",m="admonitionContent_BuS1";function h(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,a.A)(o.G.common.admonition,o.G.common.admonitionType(n),c,t),children:i})}function f(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("span",{className:u,children:n}),t]})}function x(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:m,children:n}):null}function v(e){const{type:n,icon:t,title:i,children:l,className:a}=e;return(0,s.jsxs)(h,{type:n,className:a,children:[(0,s.jsx)(f,{title:i,icon:t}),(0,s.jsx)(x,{children:l})]})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,s.jsx)(v,{...g,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const N={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function C(e){return(0,s.jsx)(v,{...N,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const L={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function H(e){return(0,s.jsx)(v,{...L,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const z={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:p,tip:C,info:H,warning:function(e){return(0,s.jsx)(v,{..._,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(v,{...w,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(p,{title:"secondary",...e}),important:e=>(0,s.jsx)(H,{title:"important",...e}),success:e=>(0,s.jsx)(C,{title:"success",...e}),caution:function(e){return(0,s.jsx)(v,{...z,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function M(e){const n=l(e),t=(i=n.type,T[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),T.info));var i;return(0,s.jsx)(t,{...n})}},2857:(e,n,t)=>{t.d(n,{A:()=>T});var i=t(6540),s=t(8453),l=t(5260),a=t(1432),r=t(4848);function o(e){return(0,r.jsx)("code",{...e})}var c=t(8774);var d=t(4164),u=t(3427),m=t(2303),h=t(1422);const f="details_lb9f",x="isBrowser_bmU9",v="collapsibleContent_i85q";function j(e){return!!e&&("SUMMARY"===e.tagName||j(e.parentElement))}function g(e,n){return!!e&&(e===n||g(e.parentElement,n))}function p(e){let{summary:n,children:t,...s}=e;(0,u.A)().collectAnchor(s.id);const l=(0,m.A)(),a=(0,i.useRef)(null),{collapsed:o,setCollapsed:c}=(0,h.u)({initialState:!s.open}),[p,A]=(0,i.useState)(s.open),N=i.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...s,ref:a,open:p,"data-collapsed":o,className:(0,d.A)(f,l&&x,s.className),onMouseDown:e=>{j(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;j(n)&&g(n,a.current)&&(e.preventDefault(),o?(c(!1),A(!0)):c(!0))},children:[N,(0,r.jsx)(h.N,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),A(!e)},children:(0,r.jsx)("div",{className:v,children:t})})]})}const A="details_b_Ee";function N(e){let{...n}=e;return(0,r.jsx)(p,{...n,className:(0,d.A)("alert alert--info",A,n.className)})}function C(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(N,{...e,summary:t,children:s})}var b=t(1107);function L(e){return(0,r.jsx)(b.A,{...e})}const H="containsTaskList_mC6p";function y(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&H)}const _="img_ev3q";var k=t(7293),w=t(418);const z={Head:l.A,details:C,Details:C,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,r.jsx)(o,{...e}):(0,r.jsx)(a.A,{...e})},a:function(e){return(0,r.jsx)(c.A,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:y(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,_))});var n},h1:e=>(0,r.jsx)(L,{as:"h1",...e}),h2:e=>(0,r.jsx)(L,{as:"h2",...e}),h3:e=>(0,r.jsx)(L,{as:"h3",...e}),h4:e=>(0,r.jsx)(L,{as:"h4",...e}),h5:e=>(0,r.jsx)(L,{as:"h5",...e}),h6:e=>(0,r.jsx)(L,{as:"h6",...e}),admonition:k.A,mermaid:w.A};function T(e){let{children:n}=e;return(0,r.jsx)(s.x,{components:z,children:n})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),s=t(5195);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=t(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,i.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(s.A,{...t,linkClassName:r,linkActiveClassName:o})})}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(6540),s=t(6342);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,s.p)(),v=c??x.tableOfContents.minHeadingLevel,j=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>a({toc:l(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:j});return d((0,i.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:j}}),[r,o,v,j])),(0,m.jsx)(f,{toc:g,className:t,linkClassName:r,...h})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var i=t(4164),s=t(1312),l=t(5260),a=t(4848);function r(){return(0,a.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,a.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,a.jsx)(l.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,a.jsx)(u.A,{type:"caution",title:(0,a.jsx)(r,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,a.jsx)(o,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(m,{...e})]})}}}]);
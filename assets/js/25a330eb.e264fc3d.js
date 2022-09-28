"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>N,frontMatter:()=>E,metadata:()=>j,toc:()=>x});var n=r(7462),a=r(7294),o=r(3905),c=r(6010),i=r(2802),l=r(9960),s=r(3919),p=r(5999);const u="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return a.createElement(l.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},r)}function b(e){let{href:t,icon:r,title:n,description:o}=e;return a.createElement(f,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:n},r," ",n),o&&a.createElement("p",{className:(0,c.Z)("text--truncate",m),title:o},o))}function y(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?a.createElement(b,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return a.createElement(b,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,i.jA)();return a.createElement(O,{items:r.items,className:t})}function O(e){const{items:t,className:r}=e;if(!t)return a.createElement(v,e);const n=(0,i.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}const E={title:"Quellcode",description:"",sidebar_position:30},w=void 0,j={unversionedId:"abap/code/code",id:"abap/code/code",title:"Quellcode",description:"",source:"@site/docs/abap/code/code.md",sourceDirName:"abap/code",slug:"/abap/code/",permalink:"/s4hana/docs/abap/code/",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/code.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Quellcode",description:"",sidebar_position:30},sidebar:"abapSidebar",previous:{title:"\xdcbungsaufgabe ABAP-12",permalink:"/s4hana/docs/abap/exercises/abap12"},next:{title:"Demo 1",permalink:"/s4hana/docs/abap/code/demo01"}},k={},x=[],P={toc:x};function N(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},P,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(O,{mdxType:"DocCardList"}))}N.isMDXComponent=!0}}]);
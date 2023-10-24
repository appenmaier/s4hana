"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8122],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={title:"View-Erweiterungen",description:"",sidebar_position:90,tags:[]},a=void 0,s={unversionedId:"documentation/abap-cds/view-extensions",id:"documentation/abap-cds/view-extensions",title:"View-Erweiterungen",description:"",source:"@site/docs/documentation/abap-cds/view-extensions.md",sourceDirName:"documentation/abap-cds",slug:"/documentation/abap-cds/view-extensions",permalink:"/s4hana/documentation/abap-cds/view-extensions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap-cds/view-extensions.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"View-Erweiterungen",description:"",sidebar_position:90,tags:[]},sidebar:"documentationSidebar",previous:{title:"Assoziationen",permalink:"/s4hana/documentation/abap-cds/associations"},next:{title:"Zugriffskontrollen",permalink:"/s4hana/documentation/abap-cds/access-controls"}},c={},u=[],p={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um bestehende ABAP CDS Views zu erweitern, k\xf6nnen View-Erweiterungen definiert werden. ABAP CDS Views k\xf6nnen dabei sowohl um zus\xe4tzliche Felder als auch um zus\xe4tzliche Assoziationen erweitert werden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@EndUserText.label: 'Carrier Extension'\nextend view I_Carrier with E_Carrier\n  association [0..*] to /dmo/connection as _Connections on $projection.carrier_id = _Connections.carrier_id\n{\n  currency_code as CurrencyCode,\n\n  /* Associations */\n  _Connections\n}\n")))}l.isMDXComponent=!0}}]);
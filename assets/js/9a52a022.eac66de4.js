"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={title:"\xdcbungsaufgabe APM-06",description:""},l=void 0,c={unversionedId:"apf/exercises/apm06",id:"apf/exercises/apm06",title:"\xdcbungsaufgabe APM-06",description:"",source:"@site/docs/apf/exercises/apm06.md",sourceDirName:"apf/exercises",slug:"/apf/exercises/apm06",permalink:"/s4hana/docs/apf/exercises/apm06",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/apf/exercises/apm06.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe APM-06",description:""},sidebar:"apfSidebar",previous:{title:"\xdcbungsaufgabe APM-05",permalink:"/s4hana/docs/apf/exercises/apm05"},next:{title:"Zusatzmaterial",permalink:"/s4hana/docs/apf/additional_material/"}},s={},o=[{value:"Grafische Ansicht",id:"grafische-ansicht",level:2},{value:"Oberfl\xe4chenentwurf",id:"oberfl\xe4chenentwurf",level:2},{value:"Hinweise",id:"hinweise",level:2}],p={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erweitere bzw. erstelle mit Hilfe der abgebildeten grafischen Ansicht sowie des abgebildeten Oberfl\xe4chenentwurfs die ABAP CDS Views ",(0,a.kt)("inlineCode",{parentName:"p"},"ZI_???_CustomerTP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ZC_???_CustomerTP")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"ZC_???_CityVH")),(0,a.kt)("h2",{id:"grafische-ansicht"},"Grafische Ansicht"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/192956860-c7901240-baac-4527-a5ab-dee034415d85.png",alt:"image"})),(0,a.kt)("h2",{id:"oberfl\xe4chenentwurf"},"Oberfl\xe4chenentwurf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/192956882-8949e714-c35c-4387-a05c-3cafc015f6c7.png",alt:"image"})),(0,a.kt)("h2",{id:"hinweise"},"Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"F\xfcr den Fall, dass beim Speichern nicht alle Pflichtfelder ausgef\xfcllt sind, soll eine entsprechende Fehlermeldung erzeugt und weitergegeben werden"),(0,a.kt)("li",{parentName:"ul"},"F\xfcr den Fall, dass beim Speichern ein Rabatt kleiner 0 eingetragen ist, soll eine entsprechende Fehlermeldung erzeugt und weitergegeben werden"),(0,a.kt)("li",{parentName:"ul"},"Die schreibgesch\xfctzten Felder ",(0,a.kt)("inlineCode",{parentName:"li"},"ID")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"Country")," sollen beim Speichern automatisch ermittelt werden")))}u.isMDXComponent=!0}}]);
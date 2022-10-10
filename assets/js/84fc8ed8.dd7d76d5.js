"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||s;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={title:"\xdcbungsaufgabe ABAP-Objects-05",description:""},i=void 0,o={unversionedId:"abap-objects/exercises/abap-objects-05",id:"abap-objects/exercises/abap-objects-05",title:"\xdcbungsaufgabe ABAP-Objects-05",description:"",source:"@site/docs/abap-objects/exercises/abap-objects-05.md",sourceDirName:"abap-objects/exercises",slug:"/abap-objects/exercises/abap-objects-05",permalink:"/s4hana/docs/abap-objects/exercises/abap-objects-05",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/exercises/abap-objects-05.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ABAP-Objects-05",description:""},sidebar:"abapObjectsSidebar",previous:{title:"\xdcbungsaufgabe ABAP-Objects-04",permalink:"/s4hana/docs/abap-objects/exercises/abap-objects-04"},next:{title:"\xdcbungsaufgabe ABAP-Objects-06",permalink:"/s4hana/docs/abap-objects/exercises/abap-objects-06"}},c={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <code>ZCL_???_AIRPLANE</code>",id:"hinweise-zur-klasse-zcl__airplane",level:2}],p={toc:l};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCL_???_AIRPLANE")," anhand des abgebildeten Klassendiagramms an"),(0,r.kt)("li",{parentName:"ol"},"Passe das ABAP-Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_OBJECTS_AIRPLANES")," so an, dass auch bei fehlerhaften Objekterzeugungen kein Laufzeitfehler auftritt")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194851356-2c317f3e-a2be-4266-a58f-33164eafaa69.png",alt:"image"})),(0,r.kt)("h2",{id:"hinweise-zur-klasse-zcl__airplane"},"Hinweise zur Klasse ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZCL_???_AIRPLANE")),(0,r.kt)("p",null,"Passe den Konstruktor so an, dass die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"p"},"CX_PARAMETER_INVALID")," ausgel\xf6st wird, wenn mindestens einer der beiden eingehenden Parameter initial ist"))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3945],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return t?i.createElement(g,l(l({ref:n},p),{},{components:t})):i.createElement(g,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"RAP-01",description:""},l=void 0,o={unversionedId:"exercises/rap/rap-01",id:"exercises/rap/rap-01",title:"RAP-01",description:"",source:"@site/docs/exercises/rap/rap-01.md",sourceDirName:"exercises/rap",slug:"/exercises/rap/rap-01",permalink:"/s4hana/exercises/rap/rap-01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/rap/rap-01.md",tags:[],version:"current",frontMatter:{title:"RAP-01",description:""},sidebar:"exercisesSidebar",previous:{title:"RAP",permalink:"/s4hana/exercises/rap/"},next:{title:"RAP-02",permalink:"/s4hana/exercises/rap/rap-02"}},d={},s=[{value:"ER-Modell",id:"er-modell",level:2},{value:"Hinweise zur Metadata Extension <code>ZC_???_MOVIE</code>",id:"hinweise-zur-metadata-extension-zc__movie",level:2},{value:"Hinweise zum ListReport",id:"hinweise-zum-listreport",level:3},{value:"Hinweise zur ObjectPage",id:"hinweise-zur-objectpage",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle mit Hilfe des abgebildeten ER-Modells die BO Base View ",(0,r.kt)("inlineCode",{parentName:"li"},"ZR_???_Movie")," sowie die BO Projection View ",(0,r.kt)("inlineCode",{parentName:"li"},"ZC_???_Movie")),(0,r.kt)("li",{parentName:"ul"},"Erstelle f\xfcr die BO Projection View f\xfcr Filme die Service Definition ",(0,r.kt)("inlineCode",{parentName:"li"},"ZUI_???_MOVIE")),(0,r.kt)("li",{parentName:"ul"},"Erstelle f\xfcr die Service Definition f\xfcr Filme das Service Binding ",(0,r.kt)("inlineCode",{parentName:"li"},"ZUI_???_MOVIE_O2")),(0,r.kt)("li",{parentName:"ul"},"Erstelle f\xfcr die BO Projection View f\xfcr Filme die Metadata Extension ",(0,r.kt)("inlineCode",{parentName:"li"},"ZC_???_MOVIE"))),(0,r.kt)("h2",{id:"er-modell"},"ER-Modell"),(0,r.kt)("mermaid",{value:'erDiagram\n    R_Movie ||--|| ZABAP_MOVIE_A  : ""\n    C_Movie ||--|| R_Movie  : ""\n\n    ZABAP_MOVIE_A {\n        clnt(3) client PK\n        raw(16) movie_uuid PK\n        char(50) title\n        char(10) genre\n        numc(4) publishing_year\n        int1(3) runtime_in_min\n        sstr(255) image_url\n        dec(21-7) created_at\n        char(12) created_by\n        dec(21-7) last_changed_at\n        char(12) last_changed_by\n    }\n\n    R_Movie {\n        raw(16) MovieUUID PK\n        char(50) Title\n        char(10) Genre\n        numc(4) PublishingYear\n        int1(3) RuntimeInMin\n        sstr(255) ImageURL\n        dec(21-7) CreatedAt\n        char(12) CreatedBy\n        dec(21-7) LastChangedAt\n        char(12) LastChangedBy\n    }\n\n    C_Movie {\n        raw(16) MovieUUID PK\n        char(50) Title\n        char(10) Genre\n        numc(4) PublishingYear\n        int1(3) RuntimeInMin\n        sstr(255) ImageURL\n        dec(21-7) CreatedAt\n        char(12) CreatedBy\n        dec(21-7) LastChangedAt\n        char(12) LastChangedBy\n    }'}),(0,r.kt)("h2",{id:"hinweise-zur-metadata-extension-zc__movie"},"Hinweise zur Metadata Extension ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZC_???_MOVIE")),(0,r.kt)("h3",{id:"hinweise-zum-listreport"},"Hinweise zum ListReport"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filme sollen nach den Feldern ",(0,r.kt)("inlineCode",{parentName:"li"},"Genre"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PublishingYear")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeInMin")," gefiltert werden k\xf6nnen"),(0,r.kt)("li",{parentName:"ul"},"Filme sollen nach ihrem Titel mit einem Unsch\xe4rfwert von 0,7 durchsucht werden k\xf6nnen"),(0,r.kt)("li",{parentName:"ul"},"Als Tabellen\xfcberschrift soll der Wert ",(0,r.kt)("inlineCode",{parentName:"li"},"Movies")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Standardm\xe4\xdfig sollen die Spalten ",(0,r.kt)("inlineCode",{parentName:"li"},"Title"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Genre"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PublishingYear")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeInMin")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Als zus\xe4tzliche Spalte soll das verlinkte Bild des Feldes ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageURL")," angezeigt werden")),(0,r.kt)("h3",{id:"hinweise-zur-objectpage"},"Hinweise zur ObjectPage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Als Kopfzeilen-Titel soll der Wert des Feldes ",(0,r.kt)("inlineCode",{parentName:"li"},"Title")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Als Kopfzeilen-Beschreibung soll der Wert des Feldes ",(0,r.kt)("inlineCode",{parentName:"li"},"PublishingYear")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Als Kopfzeilen-Abbildung soll das verlinkte Bild des Feldes ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageURL")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Die Felder ",(0,r.kt)("inlineCode",{parentName:"li"},"Title"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Genre"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PublishingYear"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeInMin")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageURL")," sollen in der Feldgruppe ",(0,r.kt)("inlineCode",{parentName:"li"},"Movie Details")," angezeigt werden"),(0,r.kt)("li",{parentName:"ul"},"Die Felder ",(0,r.kt)("inlineCode",{parentName:"li"},"MovieUUID"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CreatedAt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CreatedBy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LastChangedAt")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"LastChangedBy")," sollen in der Feldgruppe ",(0,r.kt)("inlineCode",{parentName:"li"},"Administrative Data")," angezeigt werden")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[1652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,b=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return t?r.createElement(b,o(o({ref:n},d),{},{components:t})):r.createElement(b,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"Objekte und Referenzvariablen",description:"",sidebar_position:30,tags:[]},o=void 0,l={unversionedId:"documentation/abap-objects/objects-and-references",id:"documentation/abap-objects/objects-and-references",title:"Objekte und Referenzvariablen",description:"",source:"@site/docs/documentation/abap-objects/objects-and-references.md",sourceDirName:"documentation/abap-objects",slug:"/documentation/abap-objects/objects-and-references",permalink:"/s4hana/documentation/abap-objects/objects-and-references",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap-objects/objects-and-references.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Objekte und Referenzvariablen",description:"",sidebar_position:30,tags:[]},sidebar:"documentationSidebar",previous:{title:"Klassen, Attribute und Methoden",permalink:"/s4hana/documentation/abap-objects/classes-attributes-and-methods"},next:{title:"Klassenbasierte Ausnahmen",permalink:"/s4hana/documentation/abap-objects/exceptions"}},c={},s=[{value:"Zugriff auf Attribute und Methoden",id:"zugriff-auf-attribute-und-methoden",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Variablen, die mit einer Klasse typisiert werden, bezeichnet man als Referenzvariablen. Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen keine elementaren Werte in den Variablen gespeichert, sondern die Speicheradressen der erzeugten Objekte,\nalso die Referenzen auf die erzeugten Objekte. Referenzvariablen werden mit dem Schl\xfcsselwort ',(0,a.kt)("inlineCode",{parentName:"p"},"DATA")," und dem Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"TYPE REF TO")," definiert."),(0,a.kt)("mermaid",{value:"flowchart LR\n    car1(Bezeichner: car1\\nDatentyp: cl_car\\nWert: 1) --\x3e o1[id: 1\\nmake = Porsche\\nmodel = 911\\nseats = 2]\n    car2(Bezeichner: car2\\nDatentyp: cl_car\\nWert: 1) --\x3e o1[id: 1\\nmake = Porsche\\nmodel = 911\\nseats = 2]\n    truck(Bezeichner: truck\\nDatentyp: cl_truck\\nWert: 3) --\x3e o3[id: 3\\nmake = MAN\\nmodel = TGX\\ncargo_in_tons = 40]"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="cl_main" showLineNumbers',title:'"cl_main"',showLineNumbers:!0},"CLASS cl_main IMPLEMENTATION.\n\n  METHOD if_oo_adt_classrun~main.\n\n    DATA vehicle TYPE REF TO cl_vehicle.\n    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.\n\n  ENDMETHOD.\n\nENDCLASS.\n")),(0,a.kt)("p",null,"Mit dem Operator ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW")," k\xf6nnen Objekte erzeugt werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="cl_main" showLineNumbers',title:'"cl_main"',showLineNumbers:!0},"CLASS cl_main IMPLEMENTATION.\n\n  METHOD if_oo_adt_classrun~main.\n\n    DATA vehicle TYPE REF TO cl_vehicle.\n    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.\n\n    vehicle = NEW cl_vehicle( make = 'Porsche' model = '911' ).\n    vehicles = VALUE #( BASE vehicles ( vehicle ) ).\n\n    vehicle = NEW cl_vehicle( make = 'MAN' model = 'TGX' ).\n    vehicles = VALUE #( BASE vehicles ( vehicle ) ).\n\n    vehicle = NEW cl_vehicle( make = 'Opel' model = 'Zafira Life' ).\n    vehicles = VALUE #( BASE vehicles ( vehicle ) ).\n\n  ENDMETHOD.\n\nENDCLASS.\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Der Initialwert einer Referenzvariablen ist die leere Referenz.")),(0,a.kt)("h2",{id:"zugriff-auf-attribute-und-methoden"},"Zugriff auf Attribute und Methoden"),(0,a.kt)("p",null,'Der Zugriff auf "normale" Attribute und Methoden erfolgt \xfcber die Angabe der Referenzvariablen sowie den Objekt-Komponentenselektor ',(0,a.kt)("inlineCode",{parentName:"p"},"->"),", der Zugriff auf Klassenelemente \xfcber die Angabe der Klasse sowie den Klassen-Komponentenselektor ",(0,a.kt)("inlineCode",{parentName:"p"},"=>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="cl_main" showLineNumbers',title:'"cl_main"',showLineNumbers:!0},"CLASS cl_main IMPLEMENTATION.\n\n  METHOD if_oo_adt_classrun~main.\n\n    DATA vehicle TYPE REF TO cl_vehicle.\n    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.\n\n    LOOP AT vehicles INTO vehicle.\n      out->write( vehicle->to_string( ) ).\n    ENDLOOP.\n\n  ENDMETHOD.\n\nENDCLASS.\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Besitzt eine Methode ausschlie\xdflich IMPORTING-Parameter, kann beim Aufruf der Methode der Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"EXPORTING")," weggelassen werden, besitzt eine Methode nur genau einen IMPORTING-Parameter, kann beim Aufruf der Methode auch der Formalparameter weggelassen werden.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6564],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(t),p=i,f=c["".concat(o,".").concat(p)]||c[p]||g[p]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"Aufgabenbeschreibung Programmier-Projekt",description:"",sidebar_position:80,tags:[]},l=void 0,u={unversionedId:"additional-material/sap-vt/project",id:"additional-material/sap-vt/project",title:"Aufgabenbeschreibung Programmier-Projekt",description:"",source:"@site/docs/additional-material/sap-vt/project.md",sourceDirName:"additional-material/sap-vt",slug:"/additional-material/sap-vt/project",permalink:"/s4hana/additional-material/sap-vt/project",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/additional-material/sap-vt/project.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Aufgabenbeschreibung Programmier-Projekt",description:"",sidebar_position:80,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"ABAP Development Tools verwenden",permalink:"/s4hana/additional-material/instructions/use-adt"}},o={},s=[{value:"Szenario",id:"szenario",level:2},{value:"Auftrag 1",id:"auftrag-1",level:2},{value:"Funktionale Anforderungen",id:"funktionale-anforderungen",level:3},{value:"Nichtfunktionale Anforderungen",id:"nichtfunktionale-anforderungen",level:3},{value:"Zusatzanforderungen",id:"zusatzanforderungen",level:3},{value:"Auftrag 2",id:"auftrag-2",level:2},{value:"Funktionale Anforderungen",id:"funktionale-anforderungen-1",level:3},{value:"Nichtfunktionale Anforderungen",id:"nichtfunktionale-anforderungen-1",level:3}],d={toc:s};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"szenario"},"Szenario"),(0,i.kt)("p",null,"Das Unternehmen Miles & More und die FRAPORT AG nutzen seit l\xe4ngerer Zeit SAP-Software und ben\xf6tigen nun mehrere kundenspezifische Erweiterungen ihrer Systeme. Ihr seid Teil eines Projektteams und erhaltet 2 Auftr\xe4ge. Die Projektleiterin bzw. der Projektleiter bei SAP f\xfcr beide Kundenprojekte ist eine Mitarbeiterin bzw. ein Mitarbeiter aus dem Bereich Solution Management, der Ansprechpartner f\xfcr die Schulungsumgebung ist Daniel Appenmaier. F\xfcr die Erstellung der Anwendungen habt Ihr insgesamt 5 Tage Zeit. W\xe4hrend der gesamten Projektphase solltet Ihr Euch regelm\xe4\xdfig mit Eurer Projektleiterin bzw. Eurem Projektleiter austauschen. F\xfcr programmiertechnische Fragen wendet Euch bitte an Eure Paten oder nutzt Google bzw. Euer SAP-Netzwerk."),(0,i.kt)("h2",{id:"auftrag-1"},"Auftrag 1"),(0,i.kt)("p",null,"Entwickelt f\xfcr das Reiseb\xfcro Miles & More zwei SAPUI5-Apps, welche es den Mitarbeiterinnen bzw. Mitarbeiten erm\xf6glichen sollen, f\xfcr den Kunden gem\xe4\xdf seiner Angaben Fl\xfcge und dazugeh\xf6rige Buchungen zu suchen und anzuzeigen. Eine SAPUI5-App soll Freestyle, die andere mit Hilfe von Fiori Elements entwickelt werden."),(0,i.kt)("h3",{id:"funktionale-anforderungen"},"Funktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FANF#01: Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Fl\xfcgen geben"),(0,i.kt)("li",{parentName:"ul"},"FANF#02: Es sollen nur Fl\xfcge angezeigt werden, bei denen eine entsprechende Anzeigeberechtigung vorhanden ist"),(0,i.kt)("li",{parentName:"ul"},"FANF#03: Es sollen nur Fl\xfcge angezeigt werden, bei denen das Flugdatum in der Zukunft liegt"),(0,i.kt)("li",{parentName:"ul"},"FANF#04: Es soll zus\xe4tzlich die prozentuale Auslastung der Fl\xfcge angezeigt werden"),(0,i.kt)("li",{parentName:"ul"},"FANF#05: Es sollen zus\xe4tzliche Informationen zur Flugverbindung angezeigt werden"),(0,i.kt)("li",{parentName:"ul"},"FANF#06: Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Buchungen (exklusive der stornierten) zu einem ausgew\xe4hlten Flug geben")),(0,i.kt)("h3",{id:"nichtfunktionale-anforderungen"},"Nichtfunktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NFANF#01: Die App soll einfach und intuitiv zu bedienen sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#02: Die App soll leicht wart-, \xe4nder- und erweiterbar sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#03: Die App soll stabil und zuverl\xe4ssig sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#04: Die Entwicklungssprache soll Englisch sein")),(0,i.kt)("h3",{id:"zusatzanforderungen"},"Zusatzanforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ZANF#01: Es soll eine Funktion zum Hinzuf\xfcgen, Bearbeiten und L\xf6schen einer neuen Buchung geben"),(0,i.kt)("li",{parentName:"ul"},"ZANF#02: Es soll eine Funktion zum Stornieren einer Buchung geben"),(0,i.kt)("li",{parentName:"ul"},"ZANF#03: Es soll eine Funktion zum Anzeigen bereits vergangener Fl\xfcge geben")),(0,i.kt)("h2",{id:"auftrag-2"},"Auftrag 2"),(0,i.kt)("p",null,"Entwickelt f\xfcr die FRAPORT AG mehrere klassische ABAP-Programme f\xfcr deren Call-Center. "),(0,i.kt)("h3",{id:"funktionale-anforderungen-1"},"Funktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FANF#01: Linienpassagiere sollen Informationen zu ihren Fl\xfcgen abfragen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"FANF#02: Fluggesellschaften sollen ihre Flugdaten mit denen der FRAPORT AG telefonisch abgleichen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"FANF#03: Reiseb\xfcros sollen das Call-Center als Auskunftsstelle f\xfcr Last-Minute-Angebote nutzen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"FANF#04: Das statistische Bundesamt soll f\xfcr eine globale Studie Informationen \xfcber die Anzahl an Abfl\xfcgen und Landungen je Land, je Stadt und je Flughafen abfragen k\xf6nnen")),(0,i.kt)("h3",{id:"nichtfunktionale-anforderungen-1"},"Nichtfunktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NFANF#01: Die Programme sollen einfach und intuitiv zu bedienen sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#02: Die Programme sollen leicht wart-, \xe4nder- und erweiterbar sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#03: Die Programme sollen stabil und zuverl\xe4ssig sein"),(0,i.kt)("li",{parentName:"ul"},"NFANF#04: Die Entwicklungssprache soll Englisch sein")))}g.isMDXComponent=!0}}]);
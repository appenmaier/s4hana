"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,c=p["".concat(o,".").concat(m)]||p[m]||g[m]||l;return t?r.createElement(c,a(a({ref:n},d),{},{components:t})):r.createElement(c,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const l={title:"Programmier-Projekt (SAP VT)",description:"",sidebar_position:10},a=void 0,u={unversionedId:"additional-material/projects/programming-project",id:"additional-material/projects/programming-project",title:"Programmier-Projekt (SAP VT)",description:"",source:"@site/docs/additional-material/projects/programming-project.md",sourceDirName:"additional-material/projects",slug:"/additional-material/projects/programming-project",permalink:"/s4hana/additional-material/projects/programming-project",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/additional-material/projects/programming-project.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Programmier-Projekt (SAP VT)",description:"",sidebar_position:10},sidebar:"additionalMaterialSidebar",previous:{title:"Projekte",permalink:"/s4hana/additional-material/projects/"},next:{title:"Videothek (DHBW)",permalink:"/s4hana/additional-material/projects/video-shop"}},o={},s=[{value:"Szenario",id:"szenario",level:2},{value:"Auftrag 1",id:"auftrag-1",level:2},{value:"Funktionale Anforderungen",id:"funktionale-anforderungen",level:3},{value:"Nichtfunktionale Anforderungen",id:"nichtfunktionale-anforderungen",level:3},{value:"Rahmenbedinungen",id:"rahmenbedinungen",level:3},{value:"Auftrag 2",id:"auftrag-2",level:2},{value:"Funktionale Anforderungen",id:"funktionale-anforderungen-1",level:3},{value:"Nichtfunktionale Anforderungen",id:"nichtfunktionale-anforderungen-1",level:3},{value:"Rahmenbedinungen",id:"rahmenbedinungen-1",level:3}],d={toc:s};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"szenario"},"Szenario"),(0,i.kt)("p",null,"Das Unternehmen Miles & More und die FRAPORT AG nutzen seit l\xe4ngerer Zeit SAP-Software und ben\xf6tigen nun mehrere kundenspezifische Erweiterungen ihrer Systeme. Ihr seid Teil eines Projektteams und erhaltet 2 Auftr\xe4ge. Die Projektleiterin bzw. der Projektleiter bei SAP f\xfcr beide Kundenprojekte ist eine Mitarbeiterin bzw. ein Mitarbeiter aus dem Bereich Solution Management, der Ansprechpartner f\xfcr die Schulungsumgebung ist Daniel Appenmaier. F\xfcr die Erstellung der Anwendungen habt Ihr insgesamt 5 Tage Zeit. W\xe4hrend der gesamten Projektphase solltet Ihr Euch regelm\xe4\xdfig mit Eurer Projektleiterin bzw. Eurem Projektleiter austauschen. F\xfcr programmiertechnische Fragen wendet Euch bitte an Eure Paten oder nutzt Google bzw. Euer SAP-Netzwerk."),(0,i.kt)("h2",{id:"auftrag-1"},"Auftrag 1"),(0,i.kt)("p",null,"Entwickelt f\xfcr das Reiseb\xfcro Miles & More zwei SAPUI5-Apps, welche es den Mitarbeiterinnen bzw. Mitarbeiten erm\xf6glichen sollen, f\xfcr den Kunden gem\xe4\xdf seiner Angaben Fl\xfcge und dazugeh\xf6rige Buchungen zu suchen und anzuzeigen. Eine SAPUI5-App soll Freestyle, die andere mit Hilfe von Fiori Elements entwickelt werden."),(0,i.kt)("h3",{id:"funktionale-anforderungen"},"Funktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Fl\xfcgen geben"),(0,i.kt)("li",{parentName:"ul"},"Es sollen nur Fl\xfcge angezeigt werden, bei denen eine entsprechende Anzeigeberechtigung vorhanden ist"),(0,i.kt)("li",{parentName:"ul"},"Es sollen nur Fl\xfcge angezeigt werden, bei denen das Flugdatum in der Zukunft liegt"),(0,i.kt)("li",{parentName:"ul"},"Es soll zus\xe4tzlich die prozentuale Auslastung der Fl\xfcge angezeigt werden"),(0,i.kt)("li",{parentName:"ul"},"Es sollen zus\xe4tzliche Informationen zur Flugverbindung angezeigt werden"),(0,i.kt)("li",{parentName:"ul"},"Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Buchungen (exklusive der stornierten) zu einem ausgew\xe4hlten Flug geben"),(0,i.kt)("li",{parentName:"ul"},"Es soll eine Funktion zum Hinzuf\xfcgen, Bearbeiten und L\xf6schen einer neuen Buchung geben"),(0,i.kt)("li",{parentName:"ul"},"Es soll eine Funktion zum Stornieren einer Buchung geben"),(0,i.kt)("li",{parentName:"ul"},"Es soll eine Funktion zum Anzeigen bereits vergangener Fl\xfcge geben")),(0,i.kt)("h3",{id:"nichtfunktionale-anforderungen"},"Nichtfunktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll einfach und intuitiv zu bedienen sein"),(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll leicht wart-, \xe4nder- und erweiterbar sein"),(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll stabil und zuverl\xe4ssig sein")),(0,i.kt)("h3",{id:"rahmenbedinungen"},"Rahmenbedinungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alle relevanten Informationen sollen in Datenbanktabellen gespeichert werden"),(0,i.kt)("li",{parentName:"ul"},"Alle relevanten Informationen sollen mandantenabh\xe4ngig gelesen und gespeichert werden"),(0,i.kt)("li",{parentName:"ul"},"Alle Entwicklungsobjekte sollen das Prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"Z_")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"Euer Gruppenk\xfcrzel")," verwenden"),(0,i.kt)("li",{parentName:"ul"},"Die Entwicklungssprache soll Englisch sein")),(0,i.kt)("h2",{id:"auftrag-2"},"Auftrag 2"),(0,i.kt)("p",null,"Entwickelt f\xfcr die FRAPORT AG mehrere klassische ABAP-Programme f\xfcr deren Call-Center. "),(0,i.kt)("h3",{id:"funktionale-anforderungen-1"},"Funktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linienpassagiere sollen Informationen zu ihren Fl\xfcgen abfragen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"Fluggesellschaften sollen ihre Flugdaten mit denen der FRAPORT AG telefonisch abgleichen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"Reiseb\xfcros sollen das Call-Center als Auskunftsstelle f\xfcr Last-Minute-Angebote nutzen k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"Das statistische Bundesamt soll f\xfcr eine globale Studie Informationen \xfcber die Anzahl an Abfl\xfcgen und Landungen je Land, je Stadt und je Flughafen abfragen k\xf6nnen")),(0,i.kt)("h3",{id:"nichtfunktionale-anforderungen-1"},"Nichtfunktionale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll einfach und intuitiv zu bedienen sein"),(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll leicht wart-, \xe4nder- und erweiterbar sein"),(0,i.kt)("li",{parentName:"ul"},"Die Anwendungen soll stabil und zuverl\xe4ssig sein")),(0,i.kt)("h3",{id:"rahmenbedinungen-1"},"Rahmenbedinungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alle relevanten Informationen sollen in Datenbanktabellen gespeichert werden"),(0,i.kt)("li",{parentName:"ul"},"Alle relevanten Informationen sollen mandantenabh\xe4ngig gelesen und gespeichert werden"),(0,i.kt)("li",{parentName:"ul"},"Alle Entwicklungsobjekte sollen das Prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"Z")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"Euer Gruppenk\xfcrzel")," verwenden"),(0,i.kt)("li",{parentName:"ul"},"Die Entwicklungssprache soll Englisch sein")))}g.isMDXComponent=!0}}]);
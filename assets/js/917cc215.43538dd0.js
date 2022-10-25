"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9440],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return t?i.createElement(m,l(l({ref:n},d),{},{components:t})):i.createElement(m,l({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={title:"Datenbankzugriffe mit Open SQL",description:"",sidebar_position:120,tags:[]},l=void 0,s={unversionedId:"abap/documentation/open-sql",id:"abap/documentation/open-sql",title:"Datenbankzugriffe mit Open SQL",description:"",source:"@site/docs/abap/documentation/open-sql.md",sourceDirName:"abap/documentation",slug:"/abap/documentation/open-sql",permalink:"/s4hana/abap/documentation/open-sql",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/documentation/open-sql.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Datenbankzugriffe mit Open SQL",description:"",sidebar_position:120,tags:[]},sidebar:"abapSidebar",previous:{title:"Interne Tabellen",permalink:"/s4hana/abap/documentation/internal-tables"},next:{title:"\xdcbungsaufgaben",permalink:"/s4hana/abap/exercises/"}},o={},c=[{value:"Transparente Tabellen",id:"transparente-tabellen",level:2},{value:"Lesende Datenbankzugriffe",id:"lesende-datenbankzugriffe",level:2},{value:"Definition der Zielvariablen",id:"definition-der-zielvariablen",level:2},{value:"Schreibende Datenbankzugriffe",id:"schreibende-datenbankzugriffe",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die Structured Query Language (SQL) stellt die erste Wahl dar, wenn es um den Zugriff auf Datenbanken-Verwaltungssysteme (DBMS) geht. SQL umfasst die 3 Untersprachen DDL, DML und DCL."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194826459-30837d5a-4d5b-47c2-86bb-3e0c6b482b6b.png",alt:"image"})),(0,a.kt)("p",null,"Obwohl SQL gr\xf6\xdftenteils standardisiert ist, besitzt jede Datenbank einen eigenen SQL-Dialekt mit datenbankspezifischen Eigenheiten. ABAP verwendet das datenbankunabh\xe4ngige Open SQL, welches vom Datenbankverwaltungssystem dynamisch in natives SQL umgesetzt wird."),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Open SQL umfasst lediglich Sprachelemente aus dem Bereich DML.")),(0,a.kt)("h2",{id:"transparente-tabellen"},"Transparente Tabellen"),(0,a.kt)("p",null,"Eine transparente Tabelle stellt eine plattformunabh\xe4ngige Beschreibung einer Datenbanktabelle dar. Bei der Aktivierung einer transparenten Tabelle in der System Library wird automatisch eine entsprechende Datenbanktabelle erzeugt."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194826504-e7454303-693f-45e5-b81b-52b4cfd078f8.png",alt:"image"})),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Transparente Tabellen k\xf6nnen bei der Programmierung wie Strukturtypen verwendet werden.")),(0,a.kt)("h2",{id:"lesende-datenbankzugriffe"},"Lesende Datenbankzugriffe"),(0,a.kt)("p",null,"Lesende Datenbankzugriffe werden mit Hilfe der Anweisung ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," umgesetzt:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die FROM-Klausel benennt die Datenquelle (Datenbanktabelle oder View)"),(0,a.kt)("li",{parentName:"ul"},"Die FIELDS-Klausel beschreibt, welche Felder gelesen werden sollen"),(0,a.kt)("li",{parentName:"ul"},"Die WHERE-Klausel legt die zu selektierenden Zeilen fest"),(0,a.kt)("li",{parentName:"ul"},"Die INTO-Klausel definiert, wohin die selektierten Daten geschrieben werden sollen")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194826392-7d4441ec-99ca-46b0-9f3a-55b30c0c54cc.png",alt:"image"})),(0,a.kt)("p",null,"Mit der Anweisung ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT SINGLE")," wird ein einzelner Datensatz gelesen, mit dem Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"INTO TABLE")," k\xf6nnen mehrere Zeilen einer Datenbanktabelle oder einer View direkt als Block in eine interne Tabelle kopiert werden (Array Fetch). Um einen eindeutigen Zugriff\nzu gew\xe4hrleisten, m\xfcssen dabei alle Schl\xfcsselfelder in der WHERE-Klausel angegeben werden (Ausnahme: Mandant)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"DATA carrier_id TYPE s_carr_id VALUE 'LH' .\nDATA connection_id TYPE s_conn_id VALUE '0400'.\nDATA connection TYPE spfli.\nDATA connections TYPE TABLE OF spfli.\n\n* Lesen eines Einzelsatzes\nSELECT SINGLE FROM spfli FIELDS * WHERE carrid = @carrier_id\n AND connid = @connection_id INTO @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n\n* Lesen mehrerer Datens\xe4tze\nSELECT FROM spfli FIELDS * WHERE carrid = @carrier_id INTO TABLE @connections.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Mit dem optionalen Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," k\xf6nnen die gelesenen Datens\xe4tze sortiert werden.")),(0,a.kt)("h2",{id:"definition-der-zielvariablen"},"Definition der Zielvariablen"),(0,a.kt)("p",null,"Bei Selektion von bestimmten Feldern muss in der INTO-Klausel eine Variable gew\xe4hlt werden, die den gleichen Aufbau wie die Feldliste besitzt. Der Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"CORRESPONDING FIELDS OF")," der INTO-Klausel bewirkt, dass nur gleichnamige Felder der Zielvariable bef\xfcllt\nwerden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"DATA connection TYPE connection.\n\n* Angabe passender Felder\nSELECT SINGLE FROM spfli FIELDS carrid, connid INTO @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n\n* Kopieren namensgleicher Felder\nSELECT SINGLE FROM spfli FIELDS * INTO CORRESPONDING FIELDS OF @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n\n* Inlinedeklaration\nSELECT SINGLE FROM spfli FIELDS * INTO @DATA(connection2).\nIF sy-subrc <> 0.\n  ...\nENDIF.\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Bei nicht \xfcbereinstimmenden Feldtypen wird eine (aufw\xe4ndige) Typkonvertierung durchgef\xfchrt.")),(0,a.kt)("h2",{id:"schreibende-datenbankzugriffe"},"Schreibende Datenbankzugriffe"),(0,a.kt)("p",null,"F\xfcr schreibende Datenbankzugriffe stellt ABAP die Anweisungen ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," (Hinzuf\xfcgen), ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," (\xc4ndern) sowie ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," (L\xf6schen) zur Verf\xfcgung."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"DATA connection TYPE spfli.\n\nconnection-mandt = sy-mandt.\nconnection-carrid = 'LH'.\nconnection-connid = '0400'.\nconnection-cityfrom = 'FRANKFURT'.\nconnection-cityto = 'NEW YORK'.\n\n* Hinzuf\xfcgen eines Datensatzes\nINSERT spfli FROM @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n\n* \xc4ndern eines Datensatzes\nUPDATE spfli FROM @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n\n* L\xf6sches eines Datensatzes\nDELETE spfli FROM @connection.\nIF sy-subrc <> 0.\n  ...\nENDIF.\n")))}p.isMDXComponent=!0}}]);
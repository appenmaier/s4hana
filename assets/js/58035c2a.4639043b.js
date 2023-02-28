"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Wertehilfen implementieren",description:"",sidebar_position:80},o=void 0,l={unversionedId:"rap/cookbook/implement-value-helps",id:"rap/cookbook/implement-value-helps",title:"Wertehilfen implementieren",description:"",source:"@site/docs/rap/cookbook/implement-value-helps.md",sourceDirName:"rap/cookbook",slug:"/rap/cookbook/implement-value-helps",permalink:"/s4hana/rap/cookbook/implement-value-helps",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/cookbook/implement-value-helps.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Wertehilfen implementieren",description:"",sidebar_position:80},sidebar:"rapSidebar",previous:{title:"Verhalten festlegen",permalink:"/s4hana/rap/cookbook/define-behavior"},next:{title:"Textelemente implementieren",permalink:"/s4hana/rap/cookbook/implement-text-elements"}},s={},u=[{value:"Wertehilfe f\xfcr die Kundennummer und die W\xe4hrung",id:"wertehilfe-f\xfcr-die-kundennummer-und-die-w\xe4hrung",level:3},{value:"Interface View ZI_CustomerVH",id:"interface-view-zi_customervh",level:3},{value:"Projection View ZC_Travel",id:"projection-view-zc_travel",level:2},{value:"Wertehilfe f\xfcr den Status und die W\xe4hrung",id:"wertehilfe-f\xfcr-den-status-und-die-w\xe4hrung",level:2},{value:"Interface View ZI_StatusVH",id:"interface-view-zi_statusvh",level:3},{value:"Projection View ZC_Booking",id:"projection-view-zc_booking",level:3}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Um eine Wertehilfe zu implementieren muss zun\xe4chst eine Interface View erstellt werden. Diese wird anschlie\xdfend dem entsprechenden Feld der Projection View zugewiesen."),(0,i.kt)("h3",{id:"wertehilfe-f\xfcr-die-kundennummer-und-die-w\xe4hrung"},"Wertehilfe f\xfcr die Kundennummer und die W\xe4hrung"),(0,i.kt)("h3",{id:"interface-view-zi_customervh"},"Interface View ZI_CustomerVH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Value Help: Customer'\ndefine view entity ZI_CustomerVH\n  as select from /dmo/customer\n{\n      @ObjectModel.text.element: ['Name']\n  key customer_id                                 as CustomerId,\n      first_name                                  as FirstName,\n      last_name                                   as LastName,\n      title                                       as Title,\n      street                                      as Street,\n      postal_code                                 as PostalCode,\n      city                                        as City,\n      country_code                                as CountryCode,\n      phone_number                                as PhoneNumber,\n      email_address                               as EmailAddress,\n\n      /* Transient Data */\n      concat_with_space(first_name, last_name, 1) as Name\n}\n")),(0,i.kt)("h2",{id:"projection-view-zc_travel"},"Projection View ZC_Travel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Projection View: Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Search.searchable: true\n@Metadata.allowExtensions: true\ndefine root view entity ZC_Travel\n  provider contract transactional_query\n  as projection on ZI_Travel\n{\n  key TravelUuid,\n      TravelId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]\n      CustomerId,\n      BeginDate,\n      EndDate,\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n      Description,\n      TotalPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n\n      /* Associations */\n      _Bookings : redirected to composition child ZC_Booking\n}\n")),(0,i.kt)("h2",{id:"wertehilfe-f\xfcr-den-status-und-die-w\xe4hrung"},"Wertehilfe f\xfcr den Status und die W\xe4hrung"),(0,i.kt)("h3",{id:"interface-view-zi_statusvh"},"Interface View ZI_StatusVH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Value Help: Status'\ndefine view entity ZI_StatusVH\n  as select from DDCDS_CUSTOMER_DOMAIN_VALUE_T( p_domain_name: '/DMO/BOOK_STATUS' )\n{\n      @UI.hidden: true\n  key domain_name,\n      @UI.hidden: true\n  key value_position,\n      @UI.hidden: true\n  key language,\n      @EndUserText: { label: 'Status', quickInfo: 'Status' }\n      @ObjectModel.text.element: ['StatusText']\n      value_low as Status,\n      @EndUserText: { label: 'Status Text', quickInfo: 'Status Text' }\n      text      as StatusText\n}\n")),(0,i.kt)("h3",{id:"projection-view-zc_booking"},"Projection View ZC_Booking"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Projection View: Booking'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Metadata.allowExtensions: true\ndefine view entity ZC_Booking\n  as projection on ZI_Booking\n{\n  key BookingUuid,\n      TravelUuid,\n      BookingId,\n      BookingDate,\n      CarrierId,\n      ConnectionId,\n      FlightDate,\n      FlightPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]\n      Status,\n\n      /* Associations */\n      _Travel : redirected to parent ZC_Travel\n}\n")))}d.isMDXComponent=!0}}]);
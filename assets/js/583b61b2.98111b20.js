"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"9. Textelemente implementieren",description:"",sidebar_position:90},o=void 0,s={unversionedId:"rap-cookbook/implement-text-elements",id:"rap-cookbook/implement-text-elements",title:"9. Textelemente implementieren",description:"",source:"@site/docs/rap-cookbook/implement-text-elements.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-text-elements",permalink:"/s4hana/rap-cookbook/implement-text-elements",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-text-elements.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"9. Textelemente implementieren",description:"",sidebar_position:90},sidebar:"rapCookbookSidebar",previous:{title:"8. Wertehilfen implementieren",permalink:"/s4hana/rap-cookbook/implement-value-helps"},next:{title:"10. Hervorhebungen implementieren",permalink:"/s4hana/rap-cookbook/implement-highlighting"}},l={},c=[{value:"Interface View <code>ZI_CustomerText</code>",id:"interface-view-zi_customertext",level:2},{value:"BO Base View <code>ZR_Travel</code>",id:"bo-base-view-zr_travel",level:2},{value:"BO Projection View <code>ZC_Travel</code>",id:"bo-projection-view-zc_travel",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Interface View ",(0,a.kt)("inlineCode",{parentName:"li"},"ZI_CustomerText")," erstellen"),(0,a.kt)("li",{parentName:"ul"},"Die BO Base View ",(0,a.kt)("inlineCode",{parentName:"li"},"ZR_Travel")," um ein transientes Feld f\xfcr Kundentexte und eine Annotation f\xfcr Textelemente erweitern"),(0,a.kt)("li",{parentName:"ul"},"Die BO Projection View ",(0,a.kt)("inlineCode",{parentName:"li"},"ZC_Travel")," um ein transientes Feld f\xfcr Kundentexte erweitern")),(0,a.kt)("h2",{id:"interface-view-zi_customertext"},"Interface View ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZI_CustomerText")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Customer Text'\ndefine view entity ZI_CustomerText\nas select from /dmo/customer\n{\n  key customer_id                                 as CustomerId,\n      first_name                                  as FirstName,\n      last_name                                   as LastName,\n\n      /* Transient Data */\n      concat_with_space(first_name, last_name, 1) as Name\n\n}\n//highlight-end\n")),(0,a.kt)("h2",{id:"bo-base-view-zr_travel"},"BO Base View ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZR_Travel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Travel'\ndefine root view entity ZR_Travel\n  as select from z_travel_a\n  composition [0..*] of ZR_Booking      as _Bookings\n//highlight-start\n  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId\n//highlight-end\n{\n  key travel_uuid        as TravelUuid,\n      travel_id          as TravelId,\n      agency_id          as AgencyId,\n//highlight-start\n      @ObjectModel.text.element: ['CustomerName']\n//highlight-end\n      customer_id        as CustomerId,\n      begin_date         as BeginDate,\n      end_date           as EndDate,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      booking_fee        as BookingFee,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      total_price        as TotalPrice,\n      currency_code      as CurrencyCode,\n      description        as Description,\n      status             as Status,\n\n      /* Administrative Data */\n      created_by         as CreatedBy,\n      created_at         as CreatedAt,\n      last_changed_by    as LastChangedBy,\n      last_changed_at    as LastChangedAt\n\n//highlight-start\n      /* Transient Data */\n      _CustomerText.Name as CustomerName,\n//highlight-end\n\n      /* Associations */\n      _Bookings\n}\n")),(0,a.kt)("h2",{id:"bo-projection-view-zc_travel"},"BO Projection View ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZC_Travel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@EndUserText.label: 'Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Search.searchable: true\n@Metadata.allowExtensions: true\ndefine root view entity ZC_Travel\n  provider contract transactional_query\n  as projection on ZR_Travel\n{\n  key TravelUuid,\n      TravelId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_Agency_StdVH', element: 'AgencyID' } }]\n      AgencyId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]\n      CustomerId,\n      BeginDate,\n      EndDate,\n      BookingFee,\n      TotalPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n      Description,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]\n      Status,\n\n      /* Administrative Data */\n      CreatedBy,\n      CreatedAt,\n      LastChangedBy,\n      LastChangedAt\n\n//highlight-start\n      /* Transient Data */\n      CustomerName,\n//highlight-end\n\n      /* Associations */\n      _Bookings : redirected to composition child ZC_Booking\n}\n")))}u.isMDXComponent=!0}}]);
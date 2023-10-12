"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4972],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||a;return t?o.createElement(d,i(i({ref:n},p),{},{components:t})):o.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={title:"Aktionen implementieren",description:"",sidebar_position:140},i=void 0,c={unversionedId:"rap-cookbook/implement-actions",id:"rap-cookbook/implement-actions",title:"Aktionen implementieren",description:"",source:"@site/docs/rap-cookbook/implement-actions.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-actions",permalink:"/s4hana/rap-cookbook/implement-actions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-actions.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{title:"Aktionen implementieren",description:"",sidebar_position:140},sidebar:"rapCookbookSidebar",previous:{title:"Aktionen festlegen",permalink:"/s4hana/rap-cookbook/define-actions"}},s={},l=[{value:"ABAP Class BP_R_TRAVEL - Local Type LHC_R_BOOKING - Method CANCEL_BOOKING",id:"abap-class-bp_r_travel---local-type-lhc_r_booking---method-cancel_booking",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"TODO",type:"danger"}),(0,r.kt)("h2",{id:"abap-class-bp_r_travel---local-type-lhc_r_booking---method-cancel_booking"},"ABAP Class BP_R_TRAVEL - Local Type LHC_R_BOOKING - Method CANCEL_BOOKING"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap"},'METHOD cancel_booking.\n\n  " Deklarationen\n  DATA message TYPE REF TO zcm_travel.\n\n  " Buchungen lesen\n  READ ENTITY IN LOCAL MODE ZR_Booking\n    FIELDS ( BookingId Status )\n    WITH CORRESPONDING #( keys )\n    RESULT DATA(bookings).\n\n  " Buchungen sequentiell verarbeiten\n  LOOP AT bookings INTO DATA(booking).\n\n    " Fehler abfangen und Fehlermeldung erzeugen\n    IF booking-Status = \'X\'.\n      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-error\n                                textid = zcm_booking=>booking_already_cancelled\n                                booking_id = booking-BookingId ).\n      APPEND message TO reported-%other.\n      APPEND CORRESPONDING #( booking ) TO failed-zi_booking.\n      CONTINUE.\n    ENDIF.\n\n   " Status \xe4ndern, Status zur\xfcckschreiben und Erfolgsmeldung erzeugen\n    MODIFY ENTITY IN LOCAL MODE ZR_Booking\n      UPDATE FIELDS ( status )\n      WITH VALUE #( ( %tky = booking-%tky Status = \'X\' ) ).\n\n    message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success\n                              textid = zcm_booking=>booking_cancelled_successfully\n                              booking_id = booking-BookingId ).\n    APPEND message TO reported-%other.\n\n  ENDLOOP.\n\nENDMETHOD.\n')))}u.isMDXComponent=!0}}]);
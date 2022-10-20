"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3115],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var p=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,p)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,p,a=function(e,n){if(null==e)return{};var r,p,a={},t=Object.keys(e);for(p=0;p<t.length;p++)r=t[p],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(p=0;p<t.length;p++)r=t[p],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var _=p.createContext({}),i=function(e){var n=p.useContext(_),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=i(e.components);return p.createElement(_.Provider,{value:n},e.children)},A={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},l=p.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,_=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=i(r),u=a,b=l["".concat(_,".").concat(u)]||l[u]||A[u]||t;return r?p.createElement(b,o(o({ref:n},s),{},{components:r})):p.createElement(b,o({ref:n},s))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,o=new Array(t);o[0]=l;var c={};for(var _ in n)hasOwnProperty.call(n,_)&&(c[_]=n[_]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<t;i++)o[i]=r[i];return p.createElement.apply(null,o)}return p.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4056:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>A,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var p=r(7462),a=(r(7294),r(3905));const t={title:"ABAP-Programm ZABAP_ABAP_01",description:"\xdcbungsaufgabe ABAP-03 - ABAP-05"},o=void 0,c={unversionedId:"abap/code/reports/zabap_exercise_abap_03",id:"abap/code/reports/zabap_exercise_abap_03",title:"ABAP-Programm ZABAP_ABAP_01",description:"\xdcbungsaufgabe ABAP-03 - ABAP-05",source:"@site/docs/abap/code/reports/zabap_exercise_abap_03.md",sourceDirName:"abap/code/reports",slug:"/abap/code/reports/zabap_exercise_abap_03",permalink:"/s4hana/docs/abap/code/reports/zabap_exercise_abap_03",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/reports/zabap_exercise_abap_03.md",tags:[],version:"current",frontMatter:{title:"ABAP-Programm ZABAP_ABAP_01",description:"\xdcbungsaufgabe ABAP-03 - ABAP-05"},sidebar:"abapSidebar",previous:{title:"ABAP-Programm ZABAP_ABAP_01",permalink:"/s4hana/docs/abap/code/reports/zabap_exercise_abap_02"}},_={},i=[],s={toc:i};function A(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,p.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_abap_03.\n\n* Deklarationen\nPARAMETERS p_op1 TYPE zabap_decimal.\nPARAMETERS p_opr TYPE c LENGTH 1.\nPARAMETERS p_op2 TYPE zabap_decimal.\n\nDATA result TYPE zabap_decimal.\n\n* Eingabepr\xfcfungen\nAT SELECTION-SCREEN ON p_opr.\n  IF p_opr <> '+' AND p_opr <> '-' AND p_opr <> '*' AND p_opr <> '/' AND p_opr <> '%' AND p_opr <> '^' AND p_opr <> '2'.\n    MESSAGE e003(zabap) WITH p_opr.\n  ENDIF.\n\nAT SELECTION-SCREEN ON p_op2.\n  IF p_opr = '/' AND p_op2 IS INITIAL.\n    MESSAGE e004(zabap).\n  ENDIF.\n  \n  IF p_opr = '2' AND p_op2 IS NOT INITIAL.\n    MESSAGE e005(zabap).\n  ENDIF.\n\nAT SELECTION-SCREEN.\n  IF p_opr = '^'.\n    CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'\n      EXPORTING\n        i_base         = p_op1\n        i_exponent     = p_op2\n      EXCEPTIONS\n        value_too_high = 1\n        OTHERS         = 2.\n    IF sy-subrc <> 0.\n      MESSAGE e006(zabap) WITH p_op1 p_op2.\n    ENDIF.\n  ENDIF.\n\n* Hauptverarbeitung\nSTART-OF-SELECTION.\n  CASE p_opr.\n    WHEN '+'.\n      result = p_op1 + p_op2.\n    WHEN '-'.\n      result = p_op1 - p_op2.\n    WHEN '*'.\n      result = p_op1 * p_op2.\n    WHEN '/'.\n      result = p_op1 / p_op2.\n    WHEN '%'.\n      CALL FUNCTION 'Z_ABAP_CALCULATE_PERCENTAGE'\n        EXPORTING\n          i_percentage       = p_op1\n          i_base_value       = p_op2\n        IMPORTING\n          e_percentage_value = result.\n    WHEN '^'.\n      CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'\n        EXPORTING\n          i_base     = p_op1\n          i_exponent = p_op2\n        IMPORTING\n          e_result   = result.\n    WHEN '2'.\n      CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'\n        EXPORTING\n          i_base   = p_op1\n        IMPORTING\n          e_result = result.\n  ENDCASE.\n\n  WRITE: |{ p_op1 } { p_opr } { p_op2 } = { result }|.\n")))}A.isMDXComponent=!0}}]);
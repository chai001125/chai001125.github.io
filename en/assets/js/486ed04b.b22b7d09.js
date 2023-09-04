"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[55577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={title:"Seata TCC Mode",keywords:["Seata","TCC Mode"],description:"Seata TCC mode."},l="Seata TCC Mode",i={unversionedId:"dev/mode/tcc-mode",id:"version-v1.7/dev/mode/tcc-mode",title:"Seata TCC Mode",description:"Seata TCC mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/dev/mode/tcc-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/tcc-mode",permalink:"/en/docs/dev/mode/tcc-mode",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"Seata TCC Mode",keywords:["Seata","TCC Mode"],description:"Seata TCC mode."},sidebar:"docs",previous:{title:"Seata AT Mode",permalink:"/en/docs/dev/mode/at-mode"},next:{title:"Seata Saga Mode",permalink:"/en/docs/dev/mode/saga-mode"}},c={},s=[],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seata-tcc-mode"},"Seata TCC Mode"),(0,o.kt)("p",null,"Review the description in the overview: A distributed global transaction, the whole is a ",(0,o.kt)("strong",{parentName:"p"},"two-phase commit")," model. The global transaction is composed of several branch transactions. The branch transaction must meet the requirements of the ",(0,o.kt)("strong",{parentName:"p"},"two-phase commit")," model, that is, each branch transaction must have its own:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One-stage prepare behavior"),(0,o.kt)("li",{parentName:"ul"},"Two-phase commit or rollback behavior")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview of a global transaction",src:a(46368).Z,width:"853",height:"482"})),(0,o.kt)("p",null,"According to the two-phase behavior mode, we divide branch transactions into ",(0,o.kt)("strong",{parentName:"p"},"Automatic (Branch) Transaction Mode")," and ",(0,o.kt)("strong",{parentName:"p"},"TCC (Branch) Transaction Mode"),"."),(0,o.kt)("p",null,"The AT mode is based on a ",(0,o.kt)("strong",{parentName:"p"},"relational database")," that ",(0,o.kt)("strong",{parentName:"p"},"supports local ACID transactions"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One-stage prepare behavior: In local transactions, business data updates and corresponding rollback log records are submitted together."),(0,o.kt)("li",{parentName:"ul"},"Two-phase commit behavior: Immediately completed successfully, ",(0,o.kt)("strong",{parentName:"li"},"automatically")," asynchronously clean up the rollback log."),(0,o.kt)("li",{parentName:"ul"},"Two-phase rollback behavior: Through the rollback log, ",(0,o.kt)("strong",{parentName:"li"},"automatically")," generates compensation operations to complete data rollback.")),(0,o.kt)("p",null,"Correspondingly, the TCC mode does not rely on transaction support of the underlying data resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One-stage prepare behavior: Call the ",(0,o.kt)("strong",{parentName:"li"},"custom")," prepare logic."),(0,o.kt)("li",{parentName:"ul"},"Two-phase commit behavior: Call ",(0,o.kt)("strong",{parentName:"li"},"custom")," commit logic."),(0,o.kt)("li",{parentName:"ul"},"Two-phase rollback behavior: Call the ",(0,o.kt)("strong",{parentName:"li"},"custom")," rollback logic.")),(0,o.kt)("p",null,"The so-called TCC mode refers to the support of putting ",(0,o.kt)("strong",{parentName:"p"},"customized's")," branch transactions into the management of global transactions."))}d.isMDXComponent=!0},46368:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"}}]);
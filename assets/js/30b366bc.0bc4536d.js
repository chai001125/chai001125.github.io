"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},C="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),C=p(a),m=r,d=C["".concat(i,".").concat(m)]||C[m]||u[m]||l;return a?n.createElement(d,c(c({ref:t},s),{},{components:a})):n.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[C]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"TCC \u7406\u8bba\u53ca\u8bbe\u8ba1\u5b9e\u73b0\u6307\u5357\u4ecb\u7ecd",author:"zhangthen",date:"2019/03/26",keywords:["fescar\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001TCC\u3001roadmap"]},c="TCC \u7406\u8bba\u53ca\u8bbe\u8ba1\u5b9e\u73b0\u6307\u5357\u4ecb\u7ecd",o={permalink:"/blog/tcc-mode-design-principle",source:"@site/blog/tcc-mode-design-principle.md",title:"TCC \u7406\u8bba\u53ca\u8bbe\u8ba1\u5b9e\u73b0\u6307\u5357\u4ecb\u7ecd",description:"Fescar 0.4.0 \u7248\u672c\u53d1\u5e03\u4e86 TCC \u6a21\u5f0f\uff0c\u7531\u8682\u8681\u91d1\u670d\u56e2\u961f\u8d21\u732e\uff0c\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\uff0cSample \u5730\u5740\uff1ahttps://github.com/fescar-group/fescar-samples/tree/master/tcc\uff0c\u6587\u672b\u4e5f\u63d0\u4f9b\u4e86\u9879\u76ee\u540e\u7eed\u7684 Roadmap\uff0c\u6b22\u8fce\u5173\u6ce8\u3002",date:"2019-03-26T00:00:00.000Z",formattedDate:"2019\u5e743\u670826\u65e5",tags:[],readingTime:8.24,hasTruncateMarker:!1,authors:[{name:"zhangthen"}],frontMatter:{title:"TCC \u7406\u8bba\u53ca\u8bbe\u8ba1\u5b9e\u73b0\u6307\u5357\u4ecb\u7ecd",author:"zhangthen",date:"2019/03/26",keywords:["fescar\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001TCC\u3001roadmap"]},prevItem:{title:"TCC\u9002\u7528\u6a21\u578b\u4e0e\u9002\u7528\u573a\u666f\u5206\u6790",permalink:"/blog/tcc-mode-applicable-scenario-analysis"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",permalink:"/blog/quick-start-use-seata-and-dubbo-services"}},i={authorsImageUrls:[void 0]},p=[{value:"\u4e00\u3001TCC \u7b80\u4ecb",id:"\u4e00tcc-\u7b80\u4ecb",level:3},{value:"\u4e8c\u3001TCC \u8bbe\u8ba1",id:"\u4e8ctcc-\u8bbe\u8ba1",level:3},{value:"1\u3001<strong>\u4e1a\u52a1\u64cd\u4f5c\u5206\u4e24\u9636\u6bb5\u5b8c\u6210</strong>",id:"1\u4e1a\u52a1\u64cd\u4f5c\u5206\u4e24\u9636\u6bb5\u5b8c\u6210",level:4},{value:"2\u3001<strong>\u5e76\u53d1\u63a7\u5236</strong>",id:"2\u5e76\u53d1\u63a7\u5236",level:4},{value:"3\u3001<strong>\u5141\u8bb8\u7a7a\u56de\u6eda</strong>",id:"3\u5141\u8bb8\u7a7a\u56de\u6eda",level:4},{value:"4\u3001\u9632\u60ac\u6302\u63a7\u5236",id:"4\u9632\u60ac\u6302\u63a7\u5236",level:4},{value:"5\u3001\u5e42\u7b49\u63a7\u5236",id:"5\u5e42\u7b49\u63a7\u5236",level:4},{value:"Roadmap",id:"roadmap",level:3}],s={toc:p},C="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(C,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fescar 0.4.0 \u7248\u672c\u53d1\u5e03\u4e86 TCC \u6a21\u5f0f\uff0c\u7531\u8682\u8681\u91d1\u670d\u56e2\u961f\u8d21\u732e\uff0c\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\uff0c",(0,r.kt)("br",null),"Sample \u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fescar-group/fescar-samples/tree/master/tcc"},"https://github.com/fescar-group/fescar-samples/tree/master/tcc"),"\uff0c",(0,r.kt)("br",null),"\u6587\u672b\u4e5f\u63d0\u4f9b\u4e86\u9879\u76ee\u540e\u7eed\u7684 Roadmap\uff0c\u6b22\u8fce\u5173\u6ce8\u3002"),(0,r.kt)("a",{name:"f1d2fc6a"}),(0,r.kt)("h3",{id:"\u4e00tcc-\u7b80\u4ecb"},"\u4e00\u3001TCC \u7b80\u4ecb"),(0,r.kt)("p",null,"\u5728\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\uff082PC\uff0cTwo Phase Commitment Protocol\uff09\u4e2d\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\uff08RM, resource manager\uff09\u9700\u8981\u63d0\u4f9b\u201c\u51c6\u5907\u201d\u3001\u201c\u63d0\u4ea4\u201d\u548c\u201c\u56de\u6eda\u201d 3 \u4e2a\u64cd\u4f5c\uff1b\u800c\u4e8b\u52a1\u7ba1\u7406\u5668\uff08TM, transaction manager\uff09\u5206 2 \u9636\u6bb5\u534f\u8c03\u6240\u6709\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u5728\u7b2c\u4e00\u9636\u6bb5\u8be2\u95ee\u6240\u6709\u8d44\u6e90\u7ba1\u7406\u5668\u201c\u51c6\u5907\u201d\u662f\u5426\u6210\u529f\uff0c\u5982\u679c\u6240\u6709\u8d44\u6e90\u5747\u201c\u51c6\u5907\u201d\u6210\u529f\u5219\u5728\u7b2c\u4e8c\u9636\u6bb5\u6267\u884c\u6240\u6709\u8d44\u6e90\u7684\u201c\u63d0\u4ea4\u201d\u64cd\u4f5c\uff0c\u5426\u5219\u5728\u7b2c\u4e8c\u9636\u6bb5\u6267\u884c\u6240\u6709\u8d44\u6e90\u7684\u201c\u56de\u6eda\u201d\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u6240\u6709\u8d44\u6e90\u7684\u6700\u7ec8\u72b6\u6001\u662f\u4e00\u81f4\u7684\uff0c\u8981\u4e48\u5168\u90e8\u63d0\u4ea4\u8981\u4e48\u5168\u90e8\u56de\u6eda\u3002"),(0,r.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u5668\u6709\u5f88\u591a\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5176\u4e2d TCC\uff08Try-Confirm-Cancel\uff09\u662f\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u4e00\u79cd\u670d\u52a1\u5316\u7684\u5b9e\u73b0\uff1bTCC \u662f\u4e00\u79cd\u6bd4\u8f83\u6210\u719f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u7528\u4e8e\u89e3\u51b3\u8de8\u6570\u636e\u5e93\u3001\u8de8\u670d\u52a1\u4e1a\u52a1\u64cd\u4f5c\u7684\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\uff1bTCC \u5176 Try\u3001Confirm\u3001Cancel 3 \u4e2a\u65b9\u6cd5\u5747\u7531\u4e1a\u52a1\u7f16\u7801\u5b9e\u73b0\uff0c\u6545 TCC \u53ef\u4ee5\u88ab\u79f0\u4e3a\u662f\u670d\u52a1\u5316\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,r.kt)("p",null,"TCC \u7684 Try \u64cd\u4f5c\u4f5c\u4e3a\u4e00\u9636\u6bb5\uff0c\u8d1f\u8d23\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\uff1bConfirm \u64cd\u4f5c\u4f5c\u4e3a\u4e8c\u9636\u6bb5\u63d0\u4ea4\u64cd\u4f5c\uff0c\u6267\u884c\u771f\u6b63\u7684\u4e1a\u52a1\uff1bCancel \u662f\u4e8c\u9636\u6bb5\u56de\u6eda\u64cd\u4f5c\uff0c\u6267\u884c\u9884\u7559\u8d44\u6e90\u7684\u53d6\u6d88\uff0c\u4f7f\u8d44\u6e90\u56de\u5230\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7528\u6237\u5b9e\u73b0 TCC \u670d\u52a1\u4e4b\u540e\uff0c\u8be5 TCC \u670d\u52a1\u5c06\u4f5c\u4e3a\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u5176\u4e2d\u4e00\u4e2a\u8d44\u6e90\uff0c\u53c2\u4e0e\u5230\u6574\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\uff1b\u4e8b\u52a1\u7ba1\u7406\u5668\u5206 2 \u9636\u6bb5\u534f\u8c03 TCC \u670d\u52a1\uff0c\u5728\u7b2c\u4e00\u9636\u6bb5\u8c03\u7528\u6240\u6709 TCC \u670d\u52a1\u7684 Try \u65b9\u6cd5\uff0c\u5728\u7b2c\u4e8c\u9636\u6bb5\u6267\u884c\u6240\u6709 TCC \u670d\u52a1\u7684 Confirm \u6216\u8005 Cancel \u65b9\u6cd5\uff1b\u6700\u7ec8\u6240\u6709 TCC \u670d\u52a1\u8981\u4e48\u5168\u90e8\u90fd\u662f\u63d0\u4ea4\u7684\uff0c\u8981\u4e48\u5168\u90e8\u90fd\u662f\u56de\u6eda\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(73204).Z,width:"1110",height:"668"})),(0,r.kt)("a",{name:"48153343"}),(0,r.kt)("h3",{id:"\u4e8ctcc-\u8bbe\u8ba1"},"\u4e8c\u3001TCC \u8bbe\u8ba1"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u63a5\u5165 TCC \u65f6\uff0c\u5927\u90e8\u5206\u5de5\u4f5c\u90fd\u96c6\u4e2d\u5728\u5982\u4f55\u5b9e\u73b0 TCC \u670d\u52a1\u4e0a\uff0c\u7ecf\u8fc7\u8682\u8681\u91d1\u670d\u591a\u5e74\u7684 TCC \u5e94\u7528\uff0c\u603b\u7ed3\u5982\u4e0b\u4e3b\u8981\u7684TCC \u8bbe\u8ba1\u548c\u5b9e\u73b0\u4e3b\u8981\u4e8b\u9879\uff1a"),(0,r.kt)("a",{name:"4226dc7c"}),(0,r.kt)("h4",{id:"1\u4e1a\u52a1\u64cd\u4f5c\u5206\u4e24\u9636\u6bb5\u5b8c\u6210"},"1\u3001",(0,r.kt)("strong",{parentName:"h4"},"\u4e1a\u52a1\u64cd\u4f5c\u5206\u4e24\u9636\u6bb5\u5b8c\u6210")),(0,r.kt)("p",null,"\u63a5\u5165 TCC \u524d\uff0c\u4e1a\u52a1\u64cd\u4f5c\u53ea\u9700\u8981\u4e00\u6b65\u5c31\u80fd\u5b8c\u6210\uff0c\u4f46\u662f\u5728\u63a5\u5165 TCC \u4e4b\u540e\uff0c\u9700\u8981\u8003\u8651\u5982\u4f55\u5c06\u5176\u5206\u6210 2 \u9636\u6bb5\u5b8c\u6210\uff0c\u628a\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\u653e\u5728\u4e00\u9636\u6bb5\u7684 Try \u64cd\u4f5c\u4e2d\u8fdb\u884c\uff0c\u628a\u771f\u6b63\u7684\u4e1a\u52a1\u64cd\u4f5c\u7684\u6267\u884c\u653e\u5728\u4e8c\u9636\u6bb5\u7684 Confirm \u64cd\u4f5c\u4e2d\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3e\u4f8b\u8bf4\u660e\u4e1a\u52a1\u6a21\u5f0f\u5982\u4f55\u5206\u6210\u4e24\u9636\u6bb5\u8fdb\u884c\u8bbe\u8ba1\uff0c\u4e3e\u4f8b\u573a\u666f\uff1a\u201c\u8d26\u6237A\u7684\u4f59\u989d\u4e2d\u6709 100 \u5143\uff0c\u9700\u8981\u6263\u9664\u5176\u4e2d 30 \u5143\u201d\uff1b"),(0,r.kt)("p",null,"\u5728\u63a5\u5165 TCC \u4e4b\u524d\uff0c\u7528\u6237\u7f16\u5199 SQL\uff1a\u201cupdate \u8d26\u6237\u8868 set \u4f59\u989d = \u4f59\u989d - 30 where \u8d26\u6237 = A\u201d\uff0c\u4fbf\u80fd\u4e00\u6b65\u5b8c\u6210\u6263\u6b3e\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5728\u63a5\u5165 TCC \u4e4b\u540e\uff0c\u5c31\u9700\u8981\u8003\u8651\u5982\u4f55\u5c06\u6263\u6b3e\u64cd\u4f5c\u5206\u6210 2 \u6b65\u5b8c\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try \u64cd\u4f5c\uff1a\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\uff1b")),(0,r.kt)("p",null,"\u5728\u6263\u6b3e\u573a\u666f\uff0cTry \u64cd\u4f5c\u8981\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u5148\u68c0\u67e5 A \u8d26\u6237\u4f59\u989d\u662f\u5426\u8db3\u591f\uff0c\u518d\u51bb\u7ed3\u8981\u6263\u6b3e\u7684 30 \u5143\uff08\u9884\u7559\u8d44\u6e90\uff09\uff1b\u6b64\u9636\u6bb5\u4e0d\u4f1a\u53d1\u751f\u771f\u6b63\u7684\u6263\u6b3e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirm \u64cd\u4f5c\uff1a\u6267\u884c\u771f\u6b63\u4e1a\u52a1\u7684\u63d0\u4ea4\uff1b")),(0,r.kt)("p",null,"\u5728\u6263\u6b3e\u573a\u666f\u4e0b\uff0cConfirm \u9636\u6bb5\u8d70\u7684\u4e8b\u60c5\u5c31\u662f\u53d1\u751f\u771f\u6b63\u7684\u6263\u6b3e\uff0c\u628aA\u8d26\u6237\u4e2d\u5df2\u7ecf\u51bb\u7ed3\u7684 30 \u5143\u94b1\u6263\u6389\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cancel \u64cd\u4f5c\uff1a\u9884\u7559\u8d44\u6e90\u7684\u662f\u5426\u91ca\u653e\uff1b")),(0,r.kt)("p",null,"\u5728\u6263\u6b3e\u573a\u666f\u4e0b\uff0c\u6263\u6b3e\u53d6\u6d88\uff0cCancel \u64cd\u4f5c\u6267\u884c\u7684\u4efb\u52a1\u662f\u91ca\u653e Try \u64cd\u4f5c\u51bb\u7ed3\u7684 30 \u5143\u94b1\uff0c\u662f A \u8d26\u6237\u56de\u5230\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(50066).Z,width:"744",height:"302"})),(0,r.kt)("a",{name:"bce861f1"}),(0,r.kt)("h4",{id:"2\u5e76\u53d1\u63a7\u5236"},"2\u3001",(0,r.kt)("strong",{parentName:"h4"},"\u5e76\u53d1\u63a7\u5236")),(0,r.kt)("p",null,"\u7528\u6237\u5728\u5b9e\u73b0 TCC \u65f6\uff0c\u5e94\u5f53\u8003\u8651\u5e76\u53d1\u6027\u95ee\u9898\uff0c\u5c06\u9501\u7684\u7c92\u5ea6\u964d\u5230\u6700\u4f4e\uff0c\u4ee5\u6700\u5927\u9650\u5ea6\u7684\u63d0\u9ad8\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u5e76\u53d1\u6027\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u8fd8\u662f\u4ee5A\u8d26\u6237\u6263\u6b3e\u4e3a\u4f8b\uff0c\u201c\u8d26\u6237 A \u4e0a\u6709 100 \u5143\uff0c\u4e8b\u52a1 T1 \u8981\u6263\u9664\u5176\u4e2d\u7684 30 \u5143\uff0c\u4e8b\u52a1 T2 \u4e5f\u8981\u6263\u9664 30 \u5143\uff0c\u51fa\u73b0\u5e76\u53d1\u201d\u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u9636\u6bb5 Try \u64cd\u4f5c\u4e2d\uff0c\u5206\u5e03\u5f0f\u4e8b\u52a1 T1 \u548c\u5206\u5e03\u5f0f\u4e8b\u52a1 T2 \u5206\u522b\u51bb\u7ed3\u8d44\u91d1\u7684\u90a3\u4e00\u90e8\u5206\u8d44\u91d1\uff0c\u76f8\u4e92\u4e4b\u95f4\u65e0\u5e72\u6270\uff1b\u8fd9\u6837\u5728\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u4e8c\u9636\u6bb5\uff0c\u65e0\u8bba T1 \u662f\u63d0\u4ea4\u8fd8\u662f\u56de\u6eda\uff0c\u90fd\u4e0d\u4f1a\u5bf9 T2 \u4ea7\u751f\u5f71\u54cd\uff0c\u8fd9\u6837 T1 \u548c T2 \u5728\u540c\u4e00\u7b14\u4e1a\u52a1\u6570\u636e\u4e0a\u5e76\u884c\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(1795).Z,width:"738",height:"302"})," ",(0,r.kt)("br",null)),(0,r.kt)("a",{name:"e945e352"}),(0,r.kt)("h4",{id:"3\u5141\u8bb8\u7a7a\u56de\u6eda"},"3\u3001",(0,r.kt)("strong",{parentName:"h4"},"\u5141\u8bb8\u7a7a\u56de\u6eda")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4e8b\u52a1\u534f\u8c03\u5668\u5728\u8c03\u7528 TCC \u670d\u52a1\u7684\u4e00\u9636\u6bb5 Try \u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u56e0\u4e3a\u4e22\u5305\u800c\u5bfc\u81f4\u7684\u7f51\u7edc\u8d85\u65f6\uff0c\u6b64\u65f6\u4e8b\u52a1\u7ba1\u7406\u5668\u4f1a\u89e6\u53d1\u4e8c\u9636\u6bb5\u56de\u6eda\uff0c\u8c03\u7528 TCC \u670d\u52a1\u7684 Cancel \u64cd\u4f5c\uff0c\u800c Cancel \u64cd\u4f5c\u8c03\u7528\u672a\u51fa\u73b0\u8d85\u65f6\u3002"),(0,r.kt)("p",null,"TCC \u670d\u52a1\u5728\u672a\u6536\u5230 Try \u8bf7\u6c42\u7684\u60c5\u51b5\u4e0b\u6536\u5230 Cancel \u8bf7\u6c42\uff0c\u8fd9\u79cd\u573a\u666f\u88ab\u79f0\u4e3a\u7a7a\u56de\u6eda\uff1b\u7a7a\u56de\u6eda\u5728\u751f\u4ea7\u73af\u5883\u7ecf\u5e38\u51fa\u73b0\uff0c\u7528\u6237\u5728\u5b9e\u73b0TCC\u670d\u52a1\u65f6\uff0c\u5e94\u5141\u8bb8\u5141\u8bb8\u7a7a\u56de\u6eda\u7684\u6267\u884c\uff0c\u5373\u6536\u5230\u7a7a\u56de\u6eda\u65f6\u8fd4\u56de\u6210\u529f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(34044).Z,width:"1404",height:"858"})),(0,r.kt)("a",{name:"e02f3ee9"}),(0,r.kt)("h4",{id:"4\u9632\u60ac\u6302\u63a7\u5236"},"4\u3001\u9632\u60ac\u6302\u63a7\u5236"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4e8b\u52a1\u534f\u8c03\u5668\u5728\u8c03\u7528 TCC \u670d\u52a1\u7684\u4e00\u9636\u6bb5 Try \u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u56e0\u7f51\u7edc\u62e5\u5835\u800c\u5bfc\u81f4\u7684\u8d85\u65f6\uff0c\u6b64\u65f6\u4e8b\u52a1\u7ba1\u7406\u5668\u4f1a\u89e6\u53d1\u4e8c\u9636\u6bb5\u56de\u6eda\uff0c\u8c03\u7528 TCC \u670d\u52a1\u7684 Cancel \u64cd\u4f5c\uff0cCancel \u8c03\u7528\u672a\u8d85\u65f6\uff1b\u5728\u6b64\u4e4b\u540e\uff0c\u62e5\u5835\u5728\u7f51\u7edc\u4e0a\u7684\u4e00\u9636\u6bb5 Try \u6570\u636e\u5305\u88ab TCC \u670d\u52a1\u6536\u5230\uff0c\u51fa\u73b0\u4e86\u4e8c\u9636\u6bb5 Cancel \u8bf7\u6c42\u6bd4\u4e00\u9636\u6bb5 Try \u8bf7\u6c42\u5148\u6267\u884c\u7684\u60c5\u51b5\uff0c\u6b64 TCC \u670d\u52a1\u5728\u6267\u884c\u665a\u5230\u7684 Try \u4e4b\u540e\uff0c\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u518d\u6536\u5230\u4e8c\u9636\u6bb5\u7684 Confirm \u6216\u8005 Cancel \uff0c\u9020\u6210 TCC \u670d\u52a1\u60ac\u6302\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u5b9e\u73b0\xa0 TCC \u670d\u52a1\u65f6\uff0c\u8981\u5141\u8bb8\u7a7a\u56de\u6eda\uff0c\u4f46\u662f\u8981\u62d2\u7edd\u6267\u884c\u7a7a\u56de\u6eda\u4e4b\u540e Try \u8bf7\u6c42\uff0c\u8981\u907f\u514d\u51fa\u73b0\u60ac\u6302\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(77026).Z,width:"1438",height:"842"})),(0,r.kt)("a",{name:"5322a3d5"}),(0,r.kt)("h4",{id:"5\u5e42\u7b49\u63a7\u5236"},"5\u3001\u5e42\u7b49\u63a7\u5236"),(0,r.kt)("p",null,"\u65e0\u8bba\u662f\u7f51\u7edc\u6570\u636e\u5305\u91cd\u4f20\uff0c\u8fd8\u662f\u5f02\u5e38\u4e8b\u52a1\u7684\u8865\u507f\u6267\u884c\uff0c\u90fd\u4f1a\u5bfc\u81f4 TCC \u670d\u52a1\u7684 Try\u3001Confirm \u6216\u8005 Cancel \u64cd\u4f5c\u88ab\u91cd\u590d\u6267\u884c\uff1b\u7528\u6237\u5728\u5b9e\u73b0 TCC \u670d\u52a1\u65f6\uff0c\u9700\u8981\u8003\u8651\u5e42\u7b49\u63a7\u5236\uff0c\u5373 Try\u3001Confirm\u3001Cancel \u6267\u884c\u4e00\u6b21\u548c\u6267\u884c\u591a\u6b21\u7684\u4e1a\u52a1\u7ed3\u679c\u662f\u4e00\u6837\u7684\u3002",(0,r.kt)("br",null),(0,r.kt)("img",{alt:"image.png",src:a(73449).Z,width:"469",height:"275"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("a",{name:"Roadmap"}),(0,r.kt)("h3",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"\u5f53\u524d\u5df2\u7ecf\u53d1\u5e03\u5230 0.4.0 \u7248\u672c\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u53d1\u5e03 0.5 ~ 1.0 \u7248\u672c\uff0c\u7ee7\u7eed\u5bf9 AT\u3001TCC \u6a21\u5f0f\u8fdb\u884c\u529f\u80fd\u5b8c\u5584\u548c\u548c\u4e30\u5bcc\uff0c\u5e76\u89e3\u51b3\u670d\u52a1\u7aef\u9ad8\u53ef\u7528\u95ee\u9898\uff0c\u5728 1.0 \u7248\u672c\u4e4b\u540e\uff0c\u672c\u5f00\u6e90\u4ea7\u54c1\u5c06\u8fbe\u5230\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u7684\u6807\u51c6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u56fe\u72471.png",src:a(65171).Z,width:"1680",height:"652"})))}u.isMDXComponent=!0},1795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/conc-3fbb097a571ca78f9e463786b01dca57.png"},34044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/empty_rollback-e06a0b70a6ab6a896c0bb67ace87b751.png"},73449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/miden-c277a00ed0d40b3eed4f6648bcc27a75.png"},65171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/roadmap-30821aa2e9d0cc93e4697af4cd6a2393.png"},77026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/susp-3a5ed6577950c1034caca1d822a7aa80.png"},73204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tcc-2324b37c207fcf8b371402eb4bc5df43.png"},50066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tow_step-cfda16e094be75a90cd5a366f1f731a9.png"}}]);
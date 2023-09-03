"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",author:"selfishlover",keywords:["Seata","snowflake","UUID","page split"],date:"2021/06/21"},l="\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",p={permalink:"/en/blog/seata-snowflake-explain",source:"@site/blog/seata-snowflake-explain.md",title:"\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",description:"\u5728\u4e0a\u4e00\u7bc7\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u89e3\u6790\u4e2d\uff0c\u6211\u4eec\u63d0\u5230\u65b0\u7248\u7b97\u6cd5\u6240\u505a\u51fa\u76842\u70b9\u6539\u53d8\uff1a",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[],readingTime:10.435,hasTruncateMarker:!1,authors:[{name:"selfishlover"}],frontMatter:{title:"\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",author:"selfishlover",keywords:["Seata","snowflake","UUID","page split"],date:"2021/06/21"},prevItem:{title:"Welcome",permalink:"/en/blog/welcome"},nextItem:{title:"Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",permalink:"/en/blog/seata-analysis-UUID-generator"}},s={authorsImageUrls:[void 0]},i=[{value:"\u6269\u5c55\u601d\u8003",id:"\u6269\u5c55\u601d\u8003",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u7bc7\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u89e3\u6790\u4e2d\uff0c\u6211\u4eec\u63d0\u5230\u65b0\u7248\u7b97\u6cd5\u6240\u505a\u51fa\u76842\u70b9\u6539\u53d8\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65f6\u95f4\u6233\u4e0d\u518d\u65f6\u523b\u8ffd\u968f\u7cfb\u7edf\u65f6\u949f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8282\u70b9ID\u548c\u65f6\u95f4\u6233\u4e92\u6362\u4f4d\u7f6e\u3002\u7531\u539f\u7248\u7684\uff1a\n",(0,a.kt)("img",{alt:"\u539f\u7248\u4f4d\u5206\u914d\u7b56\u7565",src:r(12093).Z,width:"904",height:"156"}),"\n\u6539\u6210\uff1a\n",(0,a.kt)("img",{alt:"\u6539\u8fdb\u7248\u4f4d\u5206\u914d\u7b56\u7565",src:r(33341).Z,width:"900",height:"157"}))),(0,a.kt)("p",null,"\u6709\u7ec6\u5fc3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e2a\u95ee\u9898\uff1a\u65b0\u7248\u7b97\u6cd5\u5728\u5355\u8282\u70b9\u5185\u90e8\u786e\u5b9e\u662f\u5355\u8c03\u9012\u589e\u7684\uff0c\u4f46\u662f\u5728\u591a\u5b9e\u4f8b\u90e8\u7f72\u65f6\uff0c\u5b83\u5c31\u4e0d\u518d\u662f\u5168\u5c40\u5355\u8c03\u9012\u589e\u4e86\u554a\uff01\u56e0\u4e3a\u663e\u800c\u6613\u89c1\uff0c\u8282\u70b9ID\u6392\u5728\u9ad8\u4f4d\uff0c\u90a3\u4e48\u8282\u70b9ID\u5927\u7684\uff0c\u751f\u6210\u7684ID\u4e00\u5b9a\u5927\u4e8e\u8282\u70b9ID\u5c0f\u7684\uff0c\u4e0d\u7ba1\u65f6\u95f4\u4e0a\u8c01\u5148\u8c01\u540e\u3002\u800c\u539f\u7248\u7b97\u6cd5\uff0c\u65f6\u95f4\u6233\u5728\u9ad8\u4f4d\uff0c\u5e76\u4e14\u59cb\u7ec8\u8ffd\u968f\u7cfb\u7edf\u65f6\u949f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u65e9\u751f\u6210\u7684ID\u5c0f\u4e8e\u665a\u751f\u6210\u7684ID\uff0c\u53ea\u6709\u5f532\u4e2a\u8282\u70b9\u6070\u597d\u5728\u540c\u4e00\u65f6\u95f4\u6233\u751f\u6210ID\u65f6\uff0c2\u4e2aID\u7684\u5927\u5c0f\u624d\u7531\u8282\u70b9ID\u51b3\u5b9a\u3002\u8fd9\u6837\u770b\u6765\uff0c\u65b0\u7248\u7b97\u6cd5\u662f\u4e0d\u662f\u9519\u7684\uff1f"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u95ee\u9898\uff01\u80fd\u63d0\u51fa\u8fd9\u4e2a\u95ee\u9898\u7684\u540c\u5b66\uff0c\u8bf4\u660e\u5df2\u7ecf\u6df1\u5165\u601d\u8003\u4e86\u6807\u51c6\u7248\u96ea\u82b1\u7b97\u6cd5\u548c\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u672c\u8d28\u533a\u522b\uff0c\u8fd9\u70b9\u503c\u5f97\u9f13\u52b1\uff01\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5148\u8bf4\u7ed3\u8bba\uff1a\u65b0\u7248\u7b97\u6cd5\u7684\u786e\u4e0d\u5177\u5907\u5168\u5c40\u7684\u5355\u8c03\u9012\u589e\u6027\uff0c\u4f46\u8fd9\u4e0d\u5f71\u54cd\u6211\u4eec\u7684\u521d\u8877(\u51cf\u5c11\u6570\u636e\u5e93\u7684\u9875\u5206\u88c2)\u3002\u8fd9\u4e2a\u7ed3\u8bba\u770b\u8d77\u6765\u6709\u70b9\u8fdd\u53cd\u76f4\u89c9\uff0c\u4f46\u53ef\u4ee5\u88ab\u8bc1\u660e\u3002"),(0,a.kt)("p",null,"\u5728\u8bc1\u660e\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u7b80\u5355\u56de\u987e\u4e00\u4e0b\u6570\u636e\u5e93\u5173\u4e8e\u9875\u5206\u88c2\u7684\u77e5\u8bc6\u3002\u4ee5\u7ecf\u5178\u7684mysql innodb\u4e3a\u4f8b\uff0cinnodb\u4f7f\u7528B+\u6811\u7d22\u5f15\uff0c\u5176\u4e2d\uff0c\u4e3b\u952e\u7d22\u5f15\u7684\u53f6\u5b50\u8282\u70b9\u8fd8\u4fdd\u5b58\u4e86\u6570\u636e\u884c\u7684\u5b8c\u6574\u8bb0\u5f55\uff0c\u53f6\u5b50\u8282\u70b9\u4e4b\u95f4\u4ee5\u53cc\u5411\u94fe\u8868\u7684\u5f62\u5f0f\u4e32\u8054\u8d77\u6765\u3002\u53f6\u5b50\u8282\u70b9\u7684\u7269\u7406\u5b58\u50a8\u5f62\u5f0f\u4e3a\u6570\u636e\u9875\uff0c\u4e00\u4e2a\u6570\u636e\u9875\u5185\u6700\u591a\u53ef\u4ee5\u5b58\u50a8N\u6761\u884c\u8bb0\u5f55(N\u4e0e\u884c\u7684\u5927\u5c0f\u6210\u53cd\u6bd4)\u3002\u5982\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{alt:"\u6570\u636e\u9875",src:r(19881).Z,width:"956",height:"256"}),(0,a.kt)("br",{parentName:"p"}),"\n","B+\u6811\u7684\u7279\u6027\u8981\u6c42\uff0c\u5de6\u8fb9\u7684\u8282\u70b9\u5e94\u5c0f\u4e8e\u53f3\u8fb9\u7684\u8282\u70b9\u3002\u5982\u679c\u6b64\u65f6\u8981\u63d2\u5165\u4e00\u6761ID\u4e3a25\u7684\u8bb0\u5f55\uff0c\u4f1a\u600e\u6837\u5462(\u5047\u8bbe\u6bcf\u4e2a\u6570\u636e\u9875\u53ea\u591f\u5b58\u653e4\u6761\u8bb0\u5f55)\uff1f\u7b54\u6848\u662f\u4f1a\u5f15\u8d77\u9875\u5206\u88c2\uff0c\u5982\u56fe\uff1a\n",(0,a.kt)("img",{alt:"\u9875\u5206\u88c2",src:r(12017).Z,width:"1213",height:"270"}),(0,a.kt)("br",{parentName:"p"}),"\n","\u9875\u5206\u88c2\u662fIO\u4e0d\u53cb\u597d\u7684\uff0c\u9700\u8981\u65b0\u5efa\u6570\u636e\u9875\uff0c\u62f7\u8d1d\u8f6c\u79fb\u65e7\u6570\u636e\u9875\u7684\u90e8\u5206\u8bb0\u5f55\u7b49\uff0c\u6211\u4eec\u5e94\u5c3d\u91cf\u907f\u514d\u3002"),(0,a.kt)("p",null,"\u7406\u60f3\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3b\u952eID\u6700\u597d\u662f\u987a\u5e8f\u9012\u589e\u7684(\u4f8b\u5982\u628a\u4e3b\u952e\u8bbe\u7f6e\u4e3aauto_increment)\uff0c\u8fd9\u6837\u5c31\u53ea\u4f1a\u5728\u5f53\u524d\u6570\u636e\u9875\u653e\u6ee1\u4e86\u7684\u65f6\u5019\uff0c\u624d\u9700\u8981\u65b0\u5efa\u4e0b\u4e00\u9875\uff0c\u53cc\u5411\u94fe\u8868\u6c38\u8fdc\u662f\u987a\u5e8f\u5c3e\u90e8\u589e\u957f\u7684\uff0c\u4e0d\u4f1a\u6709\u4e2d\u95f4\u7684\u8282\u70b9\u53d1\u751f\u5206\u88c2\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u6700\u7cdf\u7cd5\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3b\u952eID\u662f\u968f\u673a\u65e0\u5e8f\u751f\u6210\u7684(\u4f8b\u5982java\u4e2d\u4e00\u4e2aUUID\u5b57\u7b26\u4e32)\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u65b0\u63d2\u5165\u7684\u8bb0\u5f55\u4f1a\u968f\u673a\u5206\u914d\u5230\u4efb\u4f55\u4e00\u4e2a\u6570\u636e\u9875\uff0c\u5982\u679c\u8be5\u9875\u5df2\u6ee1\uff0c\u5c31\u4f1a\u89e6\u53d1\u9875\u5206\u88c2\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e3b\u952eID\u7531\u6807\u51c6\u7248\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\uff0c\u6700\u597d\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u6bcf\u4e2a\u65f6\u95f4\u6233\u5185\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u5728\u751f\u6210ID\uff0c\u8fd9\u65f6\u5019\u7b97\u6cd5\u7684\u6548\u679c\u7b49\u540c\u4e8e\u7406\u60f3\u60c5\u51b5\u7684\u987a\u5e8f\u9012\u589e\uff0c\u5373\u8ddfauto_increment\u65e0\u5dee\u3002\u6700\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u6bcf\u4e2a\u65f6\u95f4\u6233\u5185\u6240\u6709\u8282\u70b9\u90fd\u5728\u751f\u6210ID\uff0c\u8fd9\u65f6\u5019\u7b97\u6cd5\u7684\u6548\u679c\u63a5\u8fd1\u4e8e\u65e0\u5e8f(\u4f46\u4ecd\u6bd4UUID\u7684\u5b8c\u5168\u65e0\u5e8f\u8981\u597d\u5f97\u591a\uff0c\u56e0\u4e3aworkerId\u53ea\u670910\u4f4d\u51b3\u5b9a\u4e86\u6700\u591a\u53ea\u67091024\u4e2a\u8282\u70b9)\u3002\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u7b97\u6cd5\u7684\u6548\u679c\u53d6\u51b3\u4e8e\u4e1a\u52a1\u6d41\u91cf\uff0c\u5e76\u53d1\u5ea6\u8d8a\u4f4e\uff0c\u7b97\u6cd5\u8d8a\u63a5\u8fd1\u7406\u60f3\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u6362\u6210\u65b0\u7248\u7b97\u6cd5\u53c8\u4f1a\u5982\u4f55\u5462\uff1f",(0,a.kt)("br",{parentName:"p"}),"\n","\u65b0\u7248\u7b97\u6cd5\u4ece\u5168\u5c40\u89d2\u5ea6\u6765\u770b\uff0cID\u662f\u65e0\u5e8f\u7684\uff0c\u4f46\u5bf9\u4e8e\u6bcf\u4e00\u4e2aworkerId\uff0c\u5b83\u751f\u6210\u7684ID\u90fd\u662f\u4e25\u683c\u5355\u8c03\u9012\u589e\u7684\uff0c\u53c8\u56e0\u4e3aworkerId\u662f\u6709\u9650\u7684\uff0c\u6240\u4ee5\u6700\u591a\u53ef\u5212\u5206\u51fa1024\u4e2a\u5b50\u5e8f\u5217\uff0c\u6bcf\u4e2a\u5b50\u5e8f\u5217\u90fd\u662f\u5355\u8c03\u9012\u589e\u7684\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u6570\u636e\u5e93\u800c\u8a00\uff0c\u4e5f\u8bb8\u5b83\u521d\u671f\u63a5\u6536\u7684ID\u90fd\u662f\u65e0\u5e8f\u7684\uff0c\u6765\u81ea\u5404\u4e2a\u5b50\u5e8f\u5217\u7684ID\u90fd\u6df7\u5728\u4e00\u8d77\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a\n",(0,a.kt)("img",{alt:"\u521d\u671f",src:r(11613).Z,width:"986",height:"268"}),(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u8fd9\u65f6\u5019\u6765\u4e86\u4e2aworker1-seq2\uff0c\u663e\u7136\u4f1a\u9020\u6210\u9875\u5206\u88c2\uff1a\n",(0,a.kt)("img",{alt:"\u9996\u6b21\u5206\u88c2",src:r(11822).Z,width:"1228",height:"258"}),(0,a.kt)("br",{parentName:"p"}),"\n",'\u4f46\u5206\u88c2\u4e4b\u540e\uff0c\u6709\u8da3\u7684\u4e8b\u60c5\u53d1\u751f\u4e86\uff0c\u5bf9\u4e8eworker1\u800c\u8a00\uff0c\u540e\u7eed\u7684seq3\uff0cseq4\u4e0d\u4f1a\u518d\u9020\u6210\u9875\u5206\u88c2(\u56e0\u4e3a\u8fd8\u88c5\u5f97\u4e0b)\uff0cseq5\u4e5f\u53ea\u9700\u8981\u50cf\u987a\u5e8f\u589e\u957f\u90a3\u6837\u65b0\u5efa\u9875\u8fdb\u884c\u94fe\u63a5(\u533a\u522b\u662f\u8fd9\u4e2a\u65b0\u9875\u4e0d\u662f\u5728\u53cc\u5411\u94fe\u8868\u7684\u5c3e\u90e8)\u3002\u6ce8\u610f\uff0cworker1\u7684\u540e\u7eedID\uff0c\u4e0d\u4f1a\u6392\u5230worker2\u53ca\u4e4b\u540e\u7684\u4efb\u610f\u8282\u70b9(\u56e0\u800c\u4e0d\u4f1a\u9020\u6210\u540e\u8fb9\u8282\u70b9\u7684\u9875\u5206\u88c2)\uff0c\u56e0\u4e3a\u5b83\u4eec\u603b\u6bd4worker2\u7684ID\u5c0f\uff1b\u4e5f\u4e0d\u4f1a\u6392\u5230worker1\u5f53\u524d\u8282\u70b9\u7684\u524d\u8fb9(\u56e0\u800c\u4e0d\u4f1a\u9020\u6210\u524d\u8fb9\u8282\u70b9\u7684\u9875\u5206\u88c2)\uff0c\u56e0\u4e3aworker1\u7684\u5b50\u5e8f\u5217\u603b\u662f\u5355\u8c03\u9012\u589e\u7684\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u79f0worker1\u8fd9\u6837\u7684\u5b50\u5e8f\u5217\u8fbe\u5230\u4e86\u7a33\u6001\uff0c\u610f\u4e3a\u8fd9\u6761\u5b50\u5e8f\u5217\u5df2\u7ecf"\u7a33\u5b9a"\u4e86\uff0c\u5b83\u7684\u540e\u7eed\u589e\u957f\u53ea\u4f1a\u51fa\u73b0\u5728\u5b50\u5e8f\u5217\u7684\u5c3e\u90e8\uff0c\u800c\u4e0d\u4f1a\u9020\u6210\u5176\u5b83\u8282\u70b9\u7684\u9875\u5206\u88c2\u3002'),(0,a.kt)("p",null,"\u540c\u6837\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u63a8\u5e7f\u5230\u5404\u4e2a\u5b50\u5e8f\u5217\u4e0a\u3002\u65e0\u8bba\u524d\u671f\u6570\u636e\u5e93\u63a5\u6536\u5230\u7684ID\u6709\u591a\u4e71\uff0c\u7ecf\u8fc7\u6709\u9650\u6b21\u7684\u9875\u5206\u88c2\u540e\uff0c\u53cc\u5411\u94fe\u8868\u603b\u80fd\u8fbe\u5230\u8fd9\u6837\u4e00\u4e2a\u7a33\u5b9a\u7684\u7ec8\u6001\uff1a\n",(0,a.kt)("img",{alt:"\u7ec8\u6001",src:r(25264).Z,width:"789",height:"298"}),(0,a.kt)("br",{parentName:"p"}),"\n","\u5230\u8fbe\u7ec8\u6001\u540e\uff0c\u540e\u7eed\u7684ID\u53ea\u4f1a\u5728\u8be5ID\u6240\u5c5e\u7684\u5b50\u5e8f\u5217\u4e0a\u8fdb\u884c\u987a\u5e8f\u589e\u957f\uff0c\u800c\u4e0d\u4f1a\u9020\u6210\u9875\u5206\u88c2\u3002\u8be5\u72b6\u6001\u4e0b\u7684\u987a\u5e8f\u589e\u957f\u4e0eauto_increment\u7684\u987a\u5e8f\u589e\u957f\u7684\u533a\u522b\u662f\uff0c\u524d\u8005\u67091024\u4e2a\u589e\u957f\u4f4d\u70b9(\u5404\u4e2a\u5b50\u5e8f\u5217\u7684\u5c3e\u90e8)\uff0c\u540e\u8005\u53ea\u6709\u5c3e\u90e8\u4e00\u4e2a\u3002"),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u56de\u7b54\u5f00\u5934\u6240\u63d0\u51fa\u7684\u95ee\u9898\u4e86\uff1a\u65b0\u7b97\u6cd5\u4ece\u5168\u5c40\u6765\u770b\u7684\u786e\u4e0d\u662f\u5168\u5c40\u9012\u589e\u7684\uff0c\u4f46\u8be5\u7b97\u6cd5\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6536\u655b"),"\u7684\uff0c\u8fbe\u5230\u7a33\u6001\u540e\uff0c\u65b0\u7b97\u6cd5\u540c\u6837\u80fd\u8fbe\u6210\u50cf\u5168\u5c40\u987a\u5e8f\u9012\u589e\u4e00\u6837\u7684\u6548\u679c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6269\u5c55\u601d\u8003"},"\u6269\u5c55\u601d\u8003"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u53ea\u63d0\u5230\u4e86\u5e8f\u5217\u4e0d\u505c\u589e\u957f\u7684\u60c5\u51b5\uff0c\u800c\u5b9e\u8df5\u751f\u4ea7\u4e2d\uff0c\u4e0d\u5149\u6709\u65b0\u6570\u636e\u7684\u63d2\u5165\uff0c\u4e5f\u6709\u65e7\u6570\u636e\u7684\u5220\u9664\u3002\u800c\u6570\u636e\u7684\u5220\u9664\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9875\u5408\u5e76(innodb\u82e5\u53d1\u73b0\u76f8\u90bb2\u4e2a\u6570\u636e\u9875\u7684\u7a7a\u95f4\u5229\u7528\u7387\u90fd\u4e0d\u523050%\uff0c\u5c31\u4f1a\u628a\u5b83\u4fe9\u5408\u5e76)\uff0c\u8fd9\u5bf9\u65b0\u7b97\u6cd5\u7684\u5f71\u54cd\u5982\u4f55\u5462\uff1f"),(0,a.kt)("p",null,"\u7ecf\u8fc7\u4e0a\u9762\u7684\u6d41\u7a0b\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u65b0\u7b97\u6cd5\u7684\u672c\u8d28\u662f\u5229\u7528\u524d\u671f\u7684\u9875\u5206\u88c2\uff0c\u628a\u4e0d\u540c\u7684\u5b50\u5e8f\u5217\u9010\u6e10\u5206\u79bb\u5f00\u6765\uff0c\u8ba9\u7b97\u6cd5\u4e0d\u65ad\u6536\u655b\u5230\u7a33\u6001\u3002\u800c\u9875\u5408\u5e76\u5219\u6070\u597d\u76f8\u53cd\uff0c\u5b83\u6709\u53ef\u80fd\u4f1a\u628a\u4e0d\u540c\u7684\u5b50\u5e8f\u5217\u53c8\u5408\u5e76\u56de\u540c\u4e00\u4e2a\u6570\u636e\u9875\u91cc\uff0c\u59a8\u788d\u7b97\u6cd5\u7684\u6536\u655b\u3002\u5c24\u5176\u662f\u5728\u6536\u655b\u7684\u524d\u671f\uff0c\u9891\u7e41\u7684\u9875\u5408\u5e76\u751a\u81f3\u53ef\u4ee5\u8ba9\u7b97\u6cd5\u6c38\u8fdc\u65e0\u6cd5\u6536\u655b(\u4f60\u521a\u5206\u79bb\u51fa\u6765\u6211\u5c31\u53c8\u628a\u5b83\u4eec\u5408\u5e76\u56de\u53bb\uff0c\u4e00\u591c\u56de\u5230\u89e3\u653e\u524d~)\uff01\u4f46\u5728\u6536\u655b\u4e4b\u540e\uff0c\u53ea\u6709\u5728\u5404\u4e2a\u5b50\u5e8f\u5217\u7684\u5c3e\u8282\u70b9\u8fdb\u884c\u7684\u9875\u5408\u5e76\uff0c\u624d\u6709\u53ef\u80fd\u7834\u574f\u7a33\u6001(\u4e00\u4e2a\u5b50\u5e8f\u5217\u7684\u5c3e\u8282\u70b9\u548c\u4e0b\u4e00\u4e2a\u5b50\u5e8f\u5217\u7684\u5934\u8282\u70b9\u8fdb\u884c\u5408\u5e76)\u3002\u800c\u5728\u5b50\u5e8f\u5217\u5176\u4f59\u8282\u70b9\u4e0a\u7684\u9875\u5408\u5e76\uff0c\u4e0d\u5f71\u54cd\u7a33\u6001\uff0c\u56e0\u4e3a\u5b50\u5e8f\u5217\u4ecd\u7136\u662f\u6709\u5e8f\u7684\uff0c\u53ea\u4e0d\u8fc7\u957f\u5ea6\u53d8\u77ed\u4e86\u800c\u5df2\u3002"),(0,a.kt)("p",null,"\u4ee5seata\u7684\u670d\u52a1\u7aef\u4e3a\u4f8b\uff0c\u670d\u52a1\u7aef\u90a33\u5f20\u8868\u7684\u6570\u636e\u7684\u751f\u547d\u5468\u671f\u90fd\u662f\u6bd4\u8f83\u77ed\u7684\uff0c\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u7ed3\u675f\u4e4b\u540e\uff0c\u5b83\u4eec\u5c31\u4f1a\u88ab\u6e05\u9664\u4e86\uff0c\u8fd9\u5bf9\u4e8e\u65b0\u7b97\u6cd5\u662f\u4e0d\u53cb\u597d\u7684\uff0c\u6ca1\u6709\u7ed9\u65f6\u95f4\u5b83\u8fdb\u884c\u6536\u655b\u3002\u4e0d\u8fc7\u5df2\u7ecf\u6709\u5ef6\u8fdf\u5220\u9664\u7684PR\u5728review\u4e2d\uff0c\u642d\u914d\u8fd9\u4e2aPR\uff0c\u6548\u679c\u4f1a\u597d\u5f88\u591a\u3002\u6bd4\u5982\u5b9a\u671f\u6bcf\u5468\u6e05\u7406\u4e00\u6b21\uff0c\u524d\u671f\u5c31\u6709\u8db3\u591f\u7684\u65f6\u95f4\u7ed9\u7b97\u6cd5\u8fdb\u884c\u6536\u655b\uff0c\u5176\u4f59\u7684\u5927\u90e8\u5206\u65f6\u95f4\uff0c\u6570\u636e\u5e93\u5c31\u80fd\u4ece\u4e2d\u53d7\u76ca\u4e86\u3002\u5230\u671f\u6e05\u7406\u65f6\uff0c\u6700\u574f\u7684\u7ed3\u679c\u4e5f\u4e0d\u8fc7\u662f\u8868\u88ab\u6e05\u7a7a\uff0c\u7b97\u6cd5\u4ece\u5934\u518d\u6765\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u628a\u65b0\u7b97\u6cd5\u5e94\u7528\u5230\u4e1a\u52a1\u7cfb\u7edf\u5f53\u4e2d\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd\u7b97\u6cd5\u6709\u65f6\u95f4\u8fdb\u884c\u6536\u655b\u3002\u6bd4\u5982\u7528\u6237\u8868\u4e4b\u7c7b\u7684\uff0c\u6570\u636e\u672c\u5c31\u6253\u7b97\u957f\u671f\u4fdd\u5b58\u7684\uff0c\u7b97\u6cd5\u53ef\u4ee5\u81ea\u7136\u6536\u655b\u3002\u6216\u8005\u4e5f\u505a\u4e86\u5ef6\u8fdf\u5220\u9664\u7684\u673a\u5236\uff0c\u7ed9\u7b97\u6cd5\u8db3\u591f\u7684\u65f6\u95f4\u8fdb\u884c\u6536\u655b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6709\u66f4\u597d\u7684\u610f\u89c1\u548c\u5efa\u8bae\uff0c\u4e5f\u6b22\u8fce\u8ddfseata\u793e\u533a\u8054\u7cfb\uff01"))}m.isMDXComponent=!0},33341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/after-cad00baeb92d348340136601174c9d8c.png"},12093:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/before-8c52102c116e08f0b37d947b30008b58.png"},19881:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page1-09fa5360a09c5f6ce7e1c5978f370eb1.png"},12017:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page2-0ddae897017478780b7f338cca9daa02.png"},11613:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page3-00bbd658b09cdde9b7cb39a0bd38fbe0.png"},11822:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page4-883fee2cd79ec31b7f1d67c9e6362bca.png"},25264:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page5-24bcb08065fcf74b8e6a55b3c54e81b2.png"}}]);
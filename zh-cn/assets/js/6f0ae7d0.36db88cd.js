"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[60525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},89711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",keywords:["Seata \u4e8b\u52a1\u5206\u7ec4"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5"},l="\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",c={unversionedId:"user/txgroup/transaction-group-and-ha",id:"version-v1.3/user/txgroup/transaction-group-and-ha",title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/user/txgroup/transaction-group-and-ha.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group-and-ha",permalink:"/zh-cn/docs/v1.3/user/txgroup/transaction-group-and-ha",draft:!1,tags:[],version:"v1.3",frontMatter:{title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",keywords:["Seata \u4e8b\u52a1\u5206\u7ec4"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5"},sidebar:"docs",previous:{title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",permalink:"/zh-cn/docs/v1.3/user/txgroup/transaction-group"},next:{title:"\u7b80\u4ecb",permalink:"/zh-cn/docs/v1.3/user/configuration/"}},p={},s=[{value:"\u6700\u4f73\u5b9e\u8df51\uff1aTC\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e",id:"\u6700\u4f73\u5b9e\u8df51tc\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e",level:2},{value:"\u6700\u4f73\u5b9e\u8df52\uff1a\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",id:"\u6700\u4f73\u5b9e\u8df52\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",level:2},{value:"\u6700\u4f73\u5b9e\u8df53\uff1aclient\u7684\u7cbe\u7ec6\u5316\u63a7\u5236",id:"\u6700\u4f73\u5b9e\u8df53client\u7684\u7cbe\u7ec6\u5316\u63a7\u5236",level:2},{value:"\u6700\u4f73\u5b9e\u8df54\uff1aSeata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb",id:"\u6700\u4f73\u5b9e\u8df54seata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb",level:2}],i={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528"},"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528"),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df51tc\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e"},"\u6700\u4f73\u5b9e\u8df51\uff1aTC\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u5b9aTC\u96c6\u7fa4\u90e8\u7f72\u5728\u4e24\u4e2a\u673a\u623f\uff1aguangzhou\u673a\u623f\uff08\u4e3b\uff09\u548cshanghai\u673a\u623f\uff08\u5907\uff09\u5404\u4e24\u4e2a\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6574\u5957\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76ee\uff1aprojectA"),(0,a.kt)("li",{parentName:"ul"},"projectA\u5185\u6709\u5fae\u670d\u52a1\uff1aserviceA\u3001serviceB\u3001serviceC \u548c serviceD")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0cprojectA\u6240\u6709\u5fae\u670d\u52a1\u7684\u4e8b\u52a1\u5206\u7ec4tx-service-group\u8bbe\u7f6e\u4e3a\uff1aprojectA\uff0cprojectA\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f7f\u7528guangzhou\u7684TC\u96c6\u7fa4\uff08\u4e3b\uff09"),(0,a.kt)("p",null,"\u90a3\u4e48\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0cclient\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata.tx-service-group=projectA\nseata.service.vgroup-mapping.projectA=Guangzhou\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e\u6b63\u5e38\u56fe",src:r(50838).Z,width:"812",height:"453"})),(0,a.kt)("p",null,"\u5047\u5982\u6b64\u65f6guangzhou\u96c6\u7fa4\u5206\u7ec4\u6574\u4e2adown\u6389\uff0c\u6216\u8005\u56e0\u4e3a\u7f51\u7edc\u539f\u56e0projectA\u6682\u65f6\u65e0\u6cd5\u4e0eGuangzhou\u673a\u623f\u901a\u8baf\uff0c\u90a3\u4e48\u6211\u4eec\u5c06\u914d\u7f6e\u4e2d\u5fc3\u4e2d\u7684Guangzhou\u96c6\u7fa4\u5206\u7ec4\u6539\u4e3aShanghai\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata.service.vgroup-mapping.projectA=Shanghai\n")),(0,a.kt)("p",null,"\u5e76\u63a8\u9001\u5230\u5404\u4e2a\u5fae\u670d\u52a1\uff0c\u4fbf\u5b8c\u6210\u4e86\u5bf9\u6574\u4e2aprojectA\u9879\u76ee\u7684TC\u96c6\u7fa4\u52a8\u6001\u5207\u6362\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e\u5907\u7528\u96c6\u7fa4",src:r(61125).Z,width:"812",height:"453"})),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df52\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165"},"\u6700\u4f73\u5b9e\u8df52\uff1a\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u73b0\u5728\u5f00\u53d1\u73af\u5883\uff08\u6216\u9884\u53d1/\u751f\u4ea7\uff09\u4e2d\u5b58\u5728\u4e00\u6574\u5957seata\u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"seata\u96c6\u7fa4\u8981\u670d\u52a1\u4e8e\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76eeprojectA\u3001projectB\u3001projectC"),(0,a.kt)("li",{parentName:"ul"},"projectA\u3001projectB\u3001projectC\u4e4b\u95f4\u76f8\u5bf9\u72ec\u7acb")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06seata\u96c6\u7fa4\u4e2d\u7684\u516d\u4e2a\u5b9e\u4f8b\u4e24\u4e24\u5206\u7ec4\uff0c\u4f7f\u5176\u5206\u522b\u670d\u52a1\u4e8eprojectA\u3001projectB\u4e0eprojectC\uff0c\u90a3\u4e48\u6b64\u65f6seata-server\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\uff08\u4ee5nacos\u6ce8\u518c\u4e2d\u5fc3\u4e3a\u4f8b\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    #\u540c\u7406\u5728\u5176\u4ed6\u51e0\u4e2a\u5206\u7ec4seata-server\u5b9e\u4f8b\u914d\u7f6e project-b-group / project-c-group\n    cluster = "project-a-group"\n    username = "username"\n    password = "password"\n  }\n}\n')),(0,a.kt)("p",null,"client\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata.tx-service-group=projectA\n#\u540c\u7406\uff0cprojectB\u4e0eprojectC\u914d\u7f6e project-b-group / project-c-group\nseata.service.vgroup-mapping.projectA=project-a-group\n")),(0,a.kt)("p",null,"\u5b8c\u6210\u914d\u7f6e\u542f\u52a8\u540e\uff0c\u5bf9\u5e94\u4e8b\u52a1\u5206\u7ec4\u7684TC\u5355\u72ec\u4e3a\u5176\u5e94\u7528\u670d\u52a1\uff0c\u6574\u4f53\u90e8\u7f72\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5355\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",src:r(86792).Z,width:"1360",height:"455"})),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df53client\u7684\u7cbe\u7ec6\u5316\u63a7\u5236"},"\u6700\u4f73\u5b9e\u8df53\uff1aclient\u7684\u7cbe\u7ec6\u5316\u63a7\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u5b9a\u73b0\u5728\u5b58\u5728seata\u96c6\u7fa4\uff0cGuangzhou\u673a\u623f\u5b9e\u4f8b\u8fd0\u884c\u5728\u6027\u80fd\u8f83\u9ad8\u7684\u673a\u5668\u4e0a\uff0cShanghai\u96c6\u7fa4\u8fd0\u884c\u5728\u6027\u80fd\u8f83\u5dee\u7684\u673a\u5668\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5b58\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76eeprojectA\u3001projectA\u4e2d\u6709\u5fae\u670d\u52a1ServiceA\u3001ServiceB\u3001ServiceC\u4e0eServiceD"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4e2dServiceD\u7684\u6d41\u91cf\u8f83\u5c0f\uff0c\u5176\u4f59\u5fae\u670d\u52a1\u6d41\u91cf\u8f83\u5927")),(0,a.kt)("p",null,"\u90a3\u4e48\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06ServiceD\u5fae\u670d\u52a1\u5f15\u6d41\u5230Shanghai\u96c6\u7fa4\u4e2d\u53bb\uff0c\u5c06\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\u8ba9\u7ed9\u5176\u4f59\u6d41\u91cf\u8f83\u5927\u7684\u5fae\u670d\u52a1\uff08\u53cd\u4e4b\u4ea6\u7136\uff0c\u82e5\u5b58\u5728\u67d0\u4e00\u4e2a\u5fae\u670d\u52a1\u6d41\u91cf\u7279\u522b\u5927\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5355\u72ec\u4e3a\u6b64\u5fae\u670d\u52a1\u5f00\u8f9f\u4e00\u4e2a\u66f4\u9ad8\u6027\u80fd\u7684\u96c6\u7fa4\uff0c\u5e76\u5c06\u8be5client\u7684virtual group\u6307\u5411\u8be5\u96c6\u7fa4\uff0c\u5176\u6700\u7ec8\u76ee\u7684\u90fd\u662f\u4fdd\u8bc1\u5728\u6d41\u91cf\u6d2a\u5cf0\u65f6\u670d\u52a1\u7684\u53ef\u7528\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"client\u7cbe\u7ec6\u5316\u63a7\u5236",src:r(67354).Z,width:"812",height:"453"})),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df54seata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb"},"\u6700\u4f73\u5b9e\u8df54\uff1aSeata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u9884\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883\u4f1a\u4f7f\u7528\u540c\u4e00\u5957\u6570\u636e\u5e93\u3002\u57fa\u4e8e\u8fd9\u4e2a\u6761\u4ef6\uff0c\u9884\u53d1TC\u96c6\u7fa4\u4e0e\u751f\u4ea7TC\u96c6\u7fa4\u5fc5\u987b\u4f7f\u7528\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4fdd\u8bc1\u5168\u5c40\u4e8b\u52a1\u7684\u751f\u6548\uff08\u5373\u751f\u4ea7TC\u96c6\u7fa4\u4e0e\u9884\u53d1TC\u96c6\u7fa4\u4f7f\u7528\u540c\u4e00\u4e2alock\u8868\uff0c\u5e76\u4f7f\u7528\u4e0d\u540c\u7684branch_table\u4e0eglobal_table\u7684\u60c5\u51b5\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u8bb0\u751f\u4ea7\u4f7f\u7528\u7684branch\u8868\u4e0eglobal\u8868\u5206\u522b\u4e3a\uff1aglobal_table\u4e0ebranch_table\uff1b\u9884\u53d1\u4e3aglobal_table_pre\uff0cbranch_table_pre"),(0,a.kt)("li",{parentName:"ul"},"\u9884\u53d1\u4e0e\u751f\u4ea7\u5171\u7528lock_table")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0cseata-server\u7684 file.conf \u914d\u7f6e\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'store {\n  mode = "db"\n\n  db {\n    datasource = "druid"\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://127.0.0.1:3306/seata"\n    user = "username"\n    password = "password"\n    minConn = 5\n    maxConn = 100\n    globalTable = "global_table"  ----\x3e \u9884\u53d1\u4e3a "global_table_pre"\n    branchTable = "branch_table"  ----\x3e \u9884\u53d1\u4e3a "branch_table_pre"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  }\n}\n')),(0,a.kt)("p",null,"seata-server\u7684 registry.conf \u914d\u7f6e\u5982\u4e0b\uff08\u4ee5nacos\u4e3a\u4f8b\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    cluster = "pre-product"  --\x3e\u540c\u7406\u751f\u4ea7\u4e3a "product"\n    username = "username"\n    password = "password"\n  }\n}\n')),(0,a.kt)("p",null,"\u5176\u90e8\u7f72\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u9884\u53d1\u751f\u4ea7\u9694\u79bb",src:r(11040).Z,width:"907",height:"596"})),(0,a.kt)("p",null,"\u4e0d\u4ec5\u5982\u6b64\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06\u4ee5\u4e0a\u56db\u4e2a\u6700\u4f73\u5b9e\u8df5\u4f9d\u636e\u4f60\u7684\u5b9e\u9645\u751f\u4ea7\u60c5\u51b5\u7ec4\u5408\u642d\u914d\u4f7f\u7528\u3002"))}d.isMDXComponent=!0},67354:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/txgroup-client-controll-77862cb1429597eb3ec1d69608679ba4.png"},86792:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/txgroup-multiApplication-501b8688ae442af2ce6a4db7abb3520d.png"},50838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/txgroup-normal-698f00d26b96414c46c7c27729e61134.png"},11040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/txgroup-segregation-of-pre-and-product-892ff6085c837f3283b0e702deb96d7c.png"},61125:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/txgroup-switch-to-sh-fbe3bf2c89a16e158fef5d582655c3f9.png"}}]);
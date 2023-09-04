"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[66734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),s=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(k.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,m=u["".concat(k,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(m,i(i({ref:t},o),{},{components:a})):n.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="SkyWalking",p={unversionedId:"user/apm/skywalking",id:"version-v1.4/user/apm/skywalking",title:"SkyWalking",description:"SkyWalking \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09\u5b9e\u73b0.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/user/apm/skywalking.md",sourceDirName:"user/apm",slug:"/user/apm/skywalking",permalink:"/zh-cn/docs/v1.4/user/apm/skywalking",draft:!1,tags:[],version:"v1.4",frontMatter:{},sidebar:"docs",previous:{title:"\u51fd\u6570",permalink:"/zh-cn/docs/v1.4/user/sqlreference/function"},next:{title:"Prometheus",permalink:"/zh-cn/docs/v1.4/user/apm/prometheus"}},k={},s=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u7f16\u8bd1&amp;\u914d\u7f6e",id:"\u7f16\u8bd1\u914d\u7f6e",level:3},{value:"\u63a5\u5165\u76d1\u63a7",id:"\u63a5\u5165\u76d1\u63a7",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],o={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"skywalking"},"SkyWalking"),(0,r.kt)("p",null,"SkyWalking \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09\u5b9e\u73b0."),(0,r.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u5f53\u60a8\u5c06 SkyWalking \u6574\u5408\u5230\u60a8\u7684 Seata \u5de5\u7a0b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 SkyWalking \u670d\u52a1\uff0c\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 SkyWalking \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/tree/master/docs"},"SkyWalking \u5feb\u901f\u5165\u95e8"),"\u3002\u5efa\u8bae\u4f7f\u7528 SkyWalking ",(0,r.kt)("inlineCode",{parentName:"p"},"8.6.0")," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,r.kt)("p",null,'Seata \u878d\u5408 SkyWalking \u5e94\u7528\u6027\u80fd\u76d1\u63a7\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a"\u7f16\u8bd1&\u914d\u7f6e"\u4ee5\u53ca"\u63a5\u5165\u76d1\u63a7"\u8fd9\u4e24\u4e2a\u6b65\u9aa4\u3002'),(0,r.kt)("h3",{id:"\u7f16\u8bd1\u914d\u7f6e"},"\u7f16\u8bd1&\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u4e0b\u8f7dSeata\u6e90\u7801\uff0c\u5e76\u5728\u6e90\u7801\u6839\u76ee\u5f55\u6267\u884c:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean package -Dmaven.test.skip=true")),(0,r.kt)("p",null,"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"seata/ext/apm-skywalking/target/seata-skywalking-{version}.jar"),"\u653e\u5165SkyWalking \u63a2\u9488\u63d2\u4ef6\u6587\u4ef6\u5939\u4e2d"),(0,r.kt)("p",null,"\u5f3a\u70c8\u5730\u63a8\u8350\u60a8\u4f7f\u7528 Seata \u6700\u65b0\u7248\uff1a"),(0,r.kt)("h3",{id:"\u63a5\u5165\u76d1\u63a7"},"\u63a5\u5165\u76d1\u63a7"),(0,r.kt)("p",null,"Seata \u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u63a5\u5165SkyWalking\u4e0e\u5176\u4ed6\u5e94\u7528\u670d\u52a1\u5e76\u65e0\u4e8c\u81f4\uff0c\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/blob/f3b567160ce61675cb692c3417101162d67093de/docs/en/setup/service-agent/java-agent/Setting-override.md"},"SkyWalking \u63a2\u9488\u914d\u7f6e"),"\u3002"),(0,r.kt)("p",null,"Seata \u6d89\u53ca\u7684\u91cd\u8981\u53c2\u6570\u6709\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.plugin.seata.server"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u5c5e\u6027\uff0c\u5f53\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u6807\u8bc6\u672c\u5e94\u7528\u670d\u52a1\u662f\u5426\u4e3aSeata server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.plugin.jdbc.trace_sql_parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u5c5e\u6027\uff0c\u5f53\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u672c\u5e94\u7528\u670d\u52a1\u8bb0\u5f55sql\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.agent.service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5c5e\u6027\uff0c\u6807\u8bc6\u672c\u5e94\u7528\u670d\u52a1\u5728SkyWalking\u7684\u552f\u4e00\u6807\u8bc6")))),(0,r.kt)("p",null,"Seata\u5ba2\u6237\u7aef\u63a2\u9488\u53c2\u6570\u53ef\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_biz -Dskywalking.plugin.jdbc.trace_sql_parameters=true -jar seata_biz.jar\n")),(0,r.kt)("p",null,"Seata\u670d\u52a1\u7aef\u63a2\u9488\u53c2\u6570\u53ef\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_tc -Dskywalking.plugin.jdbc.trace_sql_parameters=true -Dskywalking.plugin.seata.server=true -jar seata_tc.jar\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u53ea\u652f\u6301\u975e\u6279\u5904\u7406\uff08enableClientBatchSendRequest \u4e3a false\uff09\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u6a21\u5f0f")))}c.isMDXComponent=!0}}]);
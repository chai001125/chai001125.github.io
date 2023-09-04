"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[93586],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>o});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),N=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},i=function(t){var e=N(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,i=m(t,["components","mdxType","originalType","parentName"]),k=N(a),f=n,o=k["".concat(p,".").concat(f)]||k[f]||g[f]||l;return a?r.createElement(o,d(d({ref:e},i),{},{components:a})):r.createElement(o,d({ref:e},i))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=f;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[k]="string"==typeof t?t:n,d[1]=m;for(var N=2;N<l;N++)d[N]=a[N];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},68157:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>N});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u51fd\u6570",keywords:["Seata"],description:"Seata \u51fd\u6570"},d="\u51fd\u6570",m={unversionedId:"user/sqlreference/function",id:"version-v1.5/user/sqlreference/function",title:"\u51fd\u6570",description:"Seata \u51fd\u6570",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/sqlreference/function.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/function",permalink:"/zh-cn/docs/v1.5/user/sqlreference/function",draft:!1,tags:[],version:"v1.5",frontMatter:{title:"\u51fd\u6570",keywords:["Seata"],description:"Seata \u51fd\u6570"},sidebar:"docs",previous:{title:"SQL\u4fee\u9970",permalink:"/zh-cn/docs/v1.5/user/sqlreference/sql-decoration"},next:{title:"SkyWalking",permalink:"/zh-cn/docs/v1.5/user/apm/skywalking"}},p={},N=[{value:"DML\u8bed\u53e5\u652f\u6301",id:"dml\u8bed\u53e5\u652f\u6301",level:3},{value:"DQL\u8bed\u53e5\u652f\u6301",id:"dql\u8bed\u53e5\u652f\u6301",level:3}],i={toc:N},k="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,n.kt)("p",null,"\u5728\u672c\u6587\u4e0b\u9762\u7684\u8868\u5217\u51fa\u4e86 DQL \u8bed\u53e5\u548c DML \u8bed\u53e5\u5bf9\u51fd\u6570\u7684\u652f\u6301\u60c5\u51b5\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728 DML \u8bed\u53e5\u4e2d\u4f7f\u7528\u51fd\u6570\uff0c\u4e0d\u80fd\u5c06\u5176\u4f5c\u4e3a\u4e3b\u952e\u3002"),(0,n.kt)("h3",{id:"dml\u8bed\u53e5\u652f\u6301"},"DML\u8bed\u53e5\u652f\u6301"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u652f\u6301"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONCAT(string2","[,...]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INSTR(string,substring)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LCASE(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEFT(string2,length)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LENGTH(string)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LOAD_FILE(file_name)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LOCATE(substring,string","[,start_position]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LPAD(string2,length,pad)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LTRIM(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"REPEAT(string2,count)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"REPLACE(str,search_str,replace_str)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RPAD(string2,length,pad)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RTRIM(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"STRCMP(string1,string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SUBSTRING(str,position","[,length]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TRIM([","[BOTH","|","LEADING","|","TRAILING][padding]","FROM]string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UCASE(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RIGHT(string2,length)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SPACE(count)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ABS(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BIN(decimal_number)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CEILING(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONV(number2,from_base,to_base)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOOR(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FORMAT(number,decimal_places)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HEX(DecimalNumber)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEAST(number,number2","[,..]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MOD(numerator,denominator)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POWER(number,power)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RAND(","[seed]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ROUND(number","[,decimals]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SIGN(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SQRT(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ADDTIME(date2,time_interval)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONVERT_TZ(datetime2,fromTZ,toTZ)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_DATE()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_TIME()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_TIMESTAMP()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_ADD(date2,INTERVALd_valued_type)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_FORMAT(datetime,FormatCodes)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_SUB(date2,INTERVALd_valued_type)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATEDIFF(date1,date2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAY(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYNAME(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFWEEK(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFYEAR(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRACT(interval_nameFROMdate)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAKEDATE(year,day)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAKETIME(hour,minute,second)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MONTHNAME(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NOW()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SEC_TO_TIME(seconds)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"STR_TO_DATE(string,format)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMEDIFF(datetime1,datetime2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME_TO_SEC(time)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WEEK(date_time","[,start_of_week]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"YEAR(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFMONTH(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HOUR(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LAST_DAY(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MICROSECOND(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MONTH(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MINUTE(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FIRST()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LAST()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MIN()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAX()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AVG()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SUM()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COUNT()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")))),(0,n.kt)("h3",{id:"dql\u8bed\u53e5\u652f\u6301"},"DQL\u8bed\u53e5\u652f\u6301"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bfb\u672a\u63d0\u4ea4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bfb\u5df2\u63d0\u4ea4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONCAT(string2","[,...]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INSTR(string,substring)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LCASE(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEFT(string2,length)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LENGTH(string)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LOAD_FILE(file_name)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LOCATE(substring,string","[,start_position]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LPAD(string2,length,pad)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LTRIM(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"REPEAT(string2,count)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"REPLACE(str,search_str,replace_str)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RPAD(string2,length,pad)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RTRIM(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"STRCMP(string1,string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SUBSTRING(str,position","[,length]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TRIM([","[BOTH","|","LEADING","|","TRAILING][padding]","FROM]string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UCASE(string2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RIGHT(string2,length)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SPACE(count)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ABS(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BIN(decimal_number)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CEILING(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONV(number2,from_base,to_base)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLOOR(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FORMAT(number,decimal_places)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HEX(DecimalNumber)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEAST(number,number2","[,..]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MOD(numerator,denominator)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POWER(number,power)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RAND(","[seed]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ROUND(number","[,decimals]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SIGN(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SQRT(number2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ADDTIME(date2,time_interval)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CONVERT_TZ(datetime2,fromTZ,toTZ)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_DATE()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_TIME()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CURRENT_TIMESTAMP()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_ADD(date2,INTERVALd_valued_type)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_FORMAT(datetime,FormatCodes)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATE_SUB(date2,INTERVALd_valued_type)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DATEDIFF(date1,date2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAY(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYNAME(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFWEEK(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFYEAR(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRACT(interval_nameFROMdate)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAKEDATE(year,day)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAKETIME(hour,minute,second)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MONTHNAME(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NOW()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SEC_TO_TIME(seconds)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"STR_TO_DATE(string,format)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIMEDIFF(datetime1,datetime2)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIME_TO_SEC(time)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WEEK(date_time","[,start_of_week]",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"YEAR(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DAYOFMONTH(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HOUR(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LAST_DAY(date)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MICROSECOND(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MONTH(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MINUTE(datetime)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FIRST()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LAST()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MIN()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAX()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AVG()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SUM()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COUNT()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426")))))}g.isMDXComponent=!0}}]);
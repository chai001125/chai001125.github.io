"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[40929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker"],description:"Deploy Seata Server By Docker",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},i="Deploy Seata Server By Docker",l={unversionedId:"ops/deploy-by-docker",id:"version-v1.3/ops/deploy-by-docker",title:"Deploy Seata Server By Docker",description:"Deploy Seata Server By Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-by-docker.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker",permalink:"/en/docs/v1.3/ops/deploy-by-docker",draft:!1,tags:[],version:"v1.3",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker"],description:"Deploy Seata Server By Docker",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"}},s={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"Start a seata-server instance",id:"start-a-seata-server-instance",level:4},{value:"Specify server IP and port",id:"specify-server-ip-and-port",level:4},{value:"Docker compose",id:"docker-compose",level:4},{value:"Access container and view log",id:"access-container-and-view-log",level:2},{value:"Using custom configuration file",id:"using-custom-configuration-file",level:2},{value:"Environment Variables",id:"environment-variables",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-seata-server-by-docker"},"Deploy Seata Server By Docker"),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("h4",{id:"start-a-seata-server-instance"},"Start a seata-server instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server -p 8091:8091 seataio/seata-server:1.4.2\n")),(0,a.kt)("h4",{id:"specify-server-ip-and-port"},"Specify server IP and port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_IP=192.168.1.1 \\\n        -e SEATA_PORT=8091 \\\n        seataio/seata-server\n")),(0,a.kt)("h4",{id:"docker-compose"},"Docker compose"),(0,a.kt)("p",null,"Example of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  seata-server:\n    image: seataio/seata-server\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n')),(0,a.kt)("h2",{id:"access-container-and-view-log"},"Access container and view log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it seata-server sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker logs -f seata-server\n")),(0,a.kt)("h2",{id:"using-custom-configuration-file"},"Using custom configuration file"),(0,a.kt)("p",null,"Custom configuration implement by mount ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.conf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"file.conf")," to container."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specify registry.conf ")),(0,a.kt)("p",null,"The environment variable",(0,a.kt)("inlineCode",{parentName:"p"},"SEATA_CONFIG_NAME")," is required when use a custom configuration , and the value must be started with ",(0,a.kt)("inlineCode",{parentName:"p"},"file:")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/seata-config/registry"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_CONFIG_NAME=file:/root/seata-config/registry \\\n        -v /User/seata/config:/root/seata-config  \\\n        seataio/seata-server\n")),(0,a.kt)("p",null,"The param ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," specify environment, and the param ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," specify mount volume."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specify file.conf ")),(0,a.kt)("p",null,"If you need specify ",(0,a.kt)("inlineCode",{parentName:"p"},"file.conf"),", just modify ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," like below in ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config {\n  type = "file"\n\n  file {\n    name = "file:/root/seata-config/file.conf"\n  }\n}\n')),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"You can modify configuration of seata-server  by the environment variables like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_IP"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional,  specifies registry IP instead of the container IP in registry center like eureka or others. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_PORT"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional, specifies seata-server port, default is ",(0,a.kt)("inlineCode",{parentName:"p"},"8091")," ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STORE_MODE"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional, specifies the log store mode of seata-server,  support ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),", default is ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SERVER_NODE"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional, specifies  the seata-server node ID, like ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),",",(0,a.kt)("inlineCode",{parentName:"p"},"2"),",",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"..., default is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_ENV"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional, specifies the seata-server environment, like ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," etc. Then server will find file like ",(0,a.kt)("inlineCode",{parentName:"p"},"registry-dev.conf")," under the configuration path when start.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEATA_CONFIG_NAME"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The variable is optional, specifies the configuration file path, like the ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/registry"),", will load file",(0,a.kt)("inlineCode",{parentName:"p"},"/root/registry.conf")," as configuration. If need specify ",(0,a.kt)("inlineCode",{parentName:"p"},"file.conf")," configuration\uff0cthe ",(0,a.kt)("inlineCode",{parentName:"p"},"config.file.name")," value in ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.conf")," file need to change as related config, like ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/file.conf"))))}k.isMDXComponent=!0}}]);
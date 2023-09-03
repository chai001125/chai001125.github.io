"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[2686],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?t.createElement(g,l(l({ref:a},p),{},{components:n})):t.createElement(g,l({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10142:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const s={hidden:!0,title:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",author:"helloworlde",date:new Date("2020-04-10T00:00:00.000Z")},l="Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",o={permalink:"/zh-cn/blog/seata-ha-practice",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-ha-practice.md",title:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",date:"2020-04-10T00:00:00.000Z",formattedDate:"2020\u5e744\u670810\u65e5",tags:[],readingTime:6.655,hasTruncateMarker:!1,authors:[{name:"helloworlde"}],frontMatter:{hidden:!0,title:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",author:"helloworlde",date:"2020-04-10T00:00:00.000Z"},prevItem:{title:"Seata \u6781\u7b80\u5165\u95e8",permalink:"/zh-cn/blog/seata-quick-start"},nextItem:{title:"Seata config \u6a21\u5757\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/seata-analysis-config-modular"}},i={authorsImageUrls:[void 0]},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u90e8\u7f72 seata-server",id:"\u90e8\u7f72-seata-server",level:2},{value:"\u90e8\u7f72 seata-server \u5230 Kubernetes",id:"\u90e8\u7f72-seata-server-\u5230-kubernetes",level:3},{value:"\u90e8\u7f72\u4e1a\u52a1\u670d\u52a1",id:"\u90e8\u7f72\u4e1a\u52a1\u670d\u52a1",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u6210\u529f\u573a\u666f",id:"\u6d4b\u8bd5\u6210\u529f\u573a\u666f",level:3},{value:"\u6d4b\u8bd5\u5931\u8d25\u573a\u666f",id:"\u6d4b\u8bd5\u5931\u8d25\u573a\u666f",level:3}],p={toc:c},u="wrapper";function m(e){let{components:a,...s}=e;return(0,r.kt)(u,(0,t.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\u6765\u5b9e\u73b0 Seata \u7684\u9ad8\u53ef\u7528\uff0c\u4ee5 Nacos \u548c MySQL \u4e3a\u4f8b\uff0c\u5c06",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helloworlde/spring-cloud-alibaba-component/blob/master/cloud-seata-nacos/"},"cloud-seata-nacos"),"\u5e94\u7528\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u4e2d"),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u4f7f\u7528 Nacos \u4f5c\u4e3a\u914d\u7f6e\u548c\u6ce8\u518c\u4e2d\u5fc3\uff0c\u603b\u5171\u6709\u4e09\u4e2a\u670d\u52a1: order-service, pay-service, storage-service, \u5176\u4e2d order-service \u5bf9\u5916\u63d0\u4f9b\u4e0b\u5355\u63a5\u53e3\uff0c\u5f53\u4f59\u989d\u548c\u5e93\u5b58\u5145\u8db3\u65f6\uff0c\u4e0b\u5355\u6210\u529f\uff0c\u4f1a\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5f53\u4e0d\u8db3\u65f6\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u4e0b\u5355\u5931\u8d25\uff0c\u56de\u6eda\u4e8b\u52a1"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u9700\u8981\u51c6\u5907\u53ef\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u3001\u914d\u7f6e\u4e2d\u5fc3 Nacos \u548c MySQL\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6ce8\u518c\u4e2d\u5fc3\u3001\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\u90fd\u662f\u5df2\u6709\u7684\uff0c\u4e0d\u9700\u8981\u7279\u522b\u914d\u7f6e\uff0c\u5728\u8fd9\u4e2a\u5b9e\u8df5\u4e2d\uff0c\u4e3a\u4e86\u7b80\u5355\uff0c\u53ea\u90e8\u7f72\u5355\u673a\u7684\u6ce8\u518c\u4e2d\u5fc3\u3001\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\uff0c\u5047\u8bbe\u4ed6\u4eec\u662f\u53ef\u9760\u7684"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72 Nacos ")),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668\u90e8\u7f72 Nacos\uff0c\u5f00\u653e 8848 \u7aef\u53e3\uff0c\u7528\u4e8e seata-server \u6ce8\u518c\uff0c\u670d\u52a1\u5668\u5730\u5740\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.199.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name nacos -p 8848:8848 -e MODE=standalone nacos/nacos-server\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72 MySQL ")),(0,r.kt)("p",null,"\u90e8\u7f72\u4e00\u53f0MySQL \u6570\u636e\u5e93\uff0c\u7528\u4e8e\u4fdd\u5b58\u4e8b\u52a1\u6570\u636e\uff0c\u670d\u52a1\u5668\u5730\u5740\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.199.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name mysql -p 30060:3306-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7.17\n")),(0,r.kt)("h2",{id:"\u90e8\u7f72-seata-server"},"\u90e8\u7f72 seata-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaseata-server\u9700\u8981\u7684\u8868")),(0,r.kt)("p",null,"\u5177\u4f53\u7684 SQL \u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server/db"},"script/server/db"),"\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662f MySQL \u7684\u811a\u672c\uff0c\u6570\u636e\u5e93\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"seata")),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u4e5f\u9700\u8981\u521b\u5efa undo_log \u8868\uff0c \u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/at/db/"},"script/client/at/db/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539seata-server\u914d\u7f6e")),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6dfb\u52a0\u5230 Nacos \u914d\u7f6e\u4e2d\u5fc3\uff0c\u5177\u4f53\u6dfb\u52a0\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/config-center"},"script/config-center")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service.vgroupMapping.my_test_tx_group=default\nstore.mode=db\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://192.168.199.2:30060/seata?useUnicode=true\nstore.db.user=root\nstore.db.password=123456\n")),(0,r.kt)("h3",{id:"\u90e8\u7f72-seata-server-\u5230-kubernetes"},"\u90e8\u7f72 seata-server \u5230 Kubernetes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-server.yaml")),(0,r.kt)("p",null,"\u9700\u8981\u5c06 ConfigMap \u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u5730\u5740\u6539\u6210\u76f8\u5e94\u7684\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  type: ClusterIP\n  ports:\n    - port: 8091\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: seata-ha-server\n\n---\n\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  serviceName: seata-ha-server\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: seata-ha-server\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: seata-ha-server\n    spec:\n      containers:\n        - name: seata-ha-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-ha-server-config\n\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-ha-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f seata-server.yaml\n")),(0,r.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u4f1a\u6709\u4e09\u4e2a pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod | grep seata-ha-server\n\nseata-ha-server-645844b8b6-9qh5j    1/1     Running   0          3m14s\nseata-ha-server-645844b8b6-pzczs    1/1     Running   0          3m14s\nseata-ha-server-645844b8b6-wkpw8    1/1     Running   0          3m14s\n")),(0,r.kt)("p",null,"\u5f85\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728 Nacos \u7684\u670d\u52a1\u5217\u8868\u4e2d\u53d1\u73b0\u4e09\u4e2a seata-server \u7684\u5b9e\u4f8b\uff0c\u81f3\u6b64\uff0c\u5df2\u7ecf\u5b8c\u6210 seata-server \u7684\u9ad8\u53ef\u7528\u90e8\u7f72"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubelet logs -f seata-ha-server-645844b8b6-9qh5j\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[0.012s][info   ][gc] Using Serial\n2020-04-15 00:55:09.880 INFO [main]io.seata.server.ParameterParser.init:90 -The server is running in container.\n2020-04-15 00:55:10.013 INFO [main]io.seata.config.FileConfiguration.<init>:110 -The configuration file used is file:/root/seata-config/registry.conf\n2020-04-15 00:55:12.426 INFO [main]com.alibaba.druid.pool.DruidDataSource.init:947 -{dataSource-1} inited\n2020-04-15 00:55:13.127 INFO [main]io.seata.core.rpc.netty.RpcServerBootstrap.start:155 -Server started \n")),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"{dataSource-1} "),"\u8bf4\u660e\u4f7f\u7528\u4e86\u6570\u636e\u5e93\uff0c\u5e76\u6b63\u5e38\u521d\u59cb\u5316\u5b8c\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6b64\u65f6seata-serve \u8fd9\u4e2a\u670d\u52a1\u4f1a\u6709\u4e09\u4e2a\u5b9e\u4f8b")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seata-ha-nacos-list.png",src:n(56829).Z,width:"3002",height:"1488"})),(0,r.kt)("h2",{id:"\u90e8\u7f72\u4e1a\u52a1\u670d\u52a1"},"\u90e8\u7f72\u4e1a\u52a1\u670d\u52a1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e1a\u52a1\u8868\u5e76\u521d\u59cb\u5316\u6570\u636e")),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u4e1a\u52a1\u8868\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helloworlde/spring-cloud-alibaba-component/blob/master/cloud-seata-nacos/README.md"},"cloud-seata-nacos/README.md")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Nacos \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 public \u7684\u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u5206\u522b\u521b\u5efa data-id \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"order-service.properties"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pay-service.properties"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"storage-service.properties")," \u7684\u914d\u7f6e\uff0c\u5185\u5bb9\u76f8\u540c\uff0c\u9700\u8981\u4fee\u6539\u6570\u636e\u5e93\u7684\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# MySQL\nspring.datasource.url=jdbc:mysql://192.168.199.2:30060/seata?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&useSSL=false\nspring.datasource.username=root\nspring.datasource.password=123456\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n# Seata\nspring.cloud.alibaba.seata.tx-service-group=my_test_tx_group\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u670d\u52a1")),(0,r.kt)("p",null,"\u901a\u8fc7 application.yaml \u914d\u7f6e\u6587\u4ef6\u90e8\u7f72\u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4fee\u6539 ConfigMap \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"NACOS_ADDR"),"\u4e3a\u81ea\u5df1\u7684 Nacos \u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  namespace: default\n  name: seata-ha-service\n  labels:\n    app.kubernetes.io/name: seata-ha-service\nspec:\n  type: NodePort\n  ports:\n    - port: 8081\n      nodePort: 30081\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: seata-ha-service\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-ha-service-config\ndata:\n  NACOS_ADDR: 192.168.199.2:8848\n\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: seata-ha-account\n  namespace: default\n  \n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: seata-ha-account\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: seata-ha-account\n    namespace: default\n\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: default\n  name: seata-ha-service\n  labels:\n    app.kubernetes.io/name: seata-ha-service\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: seata-ha-service\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: seata-ha-service\n    spec:\n      serviceAccountName: seata-ha-account\n      containers:\n        - name: seata-ha-order-service\n          image: "registry.cn-qingdao.aliyuncs.com/hellowoodes/seata-ha-order-service:1.1"\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: NACOS_ADDR\n              valueFrom:\n                configMapKeyRef:\n                  key: NACOS_ADDR\n                  name: seata-ha-service-config\n          ports:\n            - name: http\n              containerPort: 8081\n              protocol: TCP\n        - name: seata-ha-pay-service\n          image: "registry.cn-qingdao.aliyuncs.com/hellowoodes/seata-ha-pay-service:1.1"\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: NACOS_ADDR\n              valueFrom:\n                configMapKeyRef:\n                  key: NACOS_ADDR\n                  name: seata-ha-service-config\n          ports:\n            - name: http\n              containerPort: 8082\n              protocol: TCP\n        - name: seata-ha-storage-service\n          image: "registry.cn-qingdao.aliyuncs.com/hellowoodes/seata-ha-storage-service:1.1"\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: NACOS_ADDR\n              valueFrom:\n                configMapKeyRef:\n                  key: NACOS_ADDR\n                  name: seata-ha-service-config\n          ports:\n            - name: http\n              containerPort: 8083\n              protocol: TCP\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f application.yaml\n")),(0,r.kt)("p",null,"\u7136\u540e\u67e5\u770b\u521b\u5efa\u7684 pod\uff0cseata-ha-service \u8fd9\u4e2a\u670d\u52a1\u4e0b\u6709\u4e09\u4e2a pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod | grep seata-ha-service\n\nseata-ha-service-7dbdc6894b-5r8q4      3/3     Running   0          12m\n")),(0,r.kt)("p",null,"\u5f85\u5e94\u7528\u542f\u52a8\u540e\uff0c\u5728 Nacos \u7684\u670d\u52a1\u5217\u8868\u4e2d\uff0c\u4f1a\u6709\u76f8\u5e94\u7684\u670d\u52a1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seata-ha-service-list.png",src:n(73252).Z,width:"1928",height:"748"})),(0,r.kt)("p",null,"\u6b64\u65f6\u67e5\u770b\u670d\u52a1\u7684\u65e5\u5fd7\uff0c\u4f1a\u770b\u5230\u670d\u52a1\u5411\u6bcf\u4e00\u4e2a TC \u90fd\u6ce8\u518c\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f seata-ha-service-7dbdc6894b-5r8q4 seata-ha-order-service\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seata-ha-service-register.png",src:n(91153).Z,width:"2808",height:"480"})),(0,r.kt)("p",null,"\u67e5\u770b\u4efb\u610f\u7684 TC \u65e5\u5fd7\uff0c\u4f1a\u53d1\u73b0\u6bcf\u4e00\u4e2a\u670d\u52a1\u90fd\u5411 TC \u6ce8\u518c\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubelet logs -f seata-ha-server-645844b8b6-9qh5j\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seata-ha-tc-register.png",src:n(44489).Z,width:"3250",height:"324"})),(0,r.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u6210\u529f\u573a\u666f"},"\u6d4b\u8bd5\u6210\u529f\u573a\u666f"),(0,r.kt)("p",null,"\u8c03\u7528\u4e0b\u5355\u63a5\u53e3\uff0c\u5c06 price \u8bbe\u7f6e\u4e3a 1\uff0c\u56e0\u4e3a\u521d\u59cb\u5316\u7684\u4f59\u989d\u4e3a 10\uff0c\u53ef\u4ee5\u4e0b\u5355\u6210\u529f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  http://192.168.199.2:30081/order/placeOrder \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "userId": 1,\n    "productId": 1,\n    "price": 1\n}\'\n')),(0,r.kt)("p",null,"\u6b64\u65f6\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success":true,"message":null,"data":null}\n')),(0,r.kt)("p",null,"\u67e5\u770bTC \u7684\u65e5\u5fd7\uff0c\u4e8b\u52a1\u6210\u529f\u63d0\u4ea4\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seata-ha-commit-tc-success.png",src:n(25776).Z,width:"3002",height:"866"})),(0,r.kt)("p",null,"\u67e5\u770b order-service \u670d\u52a1\u65e5\u5fd7\n",(0,r.kt)("img",{alt:"seata-ha-commit-success.png",src:n(38947).Z,width:"2374",height:"680"})),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u5931\u8d25\u573a\u666f"},"\u6d4b\u8bd5\u5931\u8d25\u573a\u666f"),(0,r.kt)("p",null,"\u8bbe\u7f6e price \u4e3a 100\uff0c\u6b64\u65f6\u4f59\u989d\u4e0d\u8db3\uff0c\u4f1a\u4e0b\u5355\u5931\u8d25\u629b\u51fa\u5f02\u5e38\uff0c\u4e8b\u52a1\u4f1a\u56de\u6eda"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  http://192.168.199.2:30081/order/placeOrder \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "userId": 1,\n    "productId": 1,\n    "price": 100\n}\'\n')),(0,r.kt)("p",null,"\u67e5\u770b TC \u7684\u65e5\u5fd7\uff1a\n",(0,r.kt)("img",{alt:"seata-ha-commit-tc-rollback.png",src:n(60749).Z,width:"2282",height:"666"})),(0,r.kt)("p",null,"\u67e5\u770b\u670d\u52a1\u7684\u65e5\u5fd7 \uff1a\n",(0,r.kt)("img",{alt:"seata-ha-commit-service-rollback.png",src:n(57535).Z,width:"2338",height:"490"})),(0,r.kt)("p",null,"\u591a\u6b21\u8c03\u7528\u67e5\u770b\u670d\u52a1\u65e5\u5fd7\uff0c\u53d1\u73b0\u4f1a\u968f\u673a\u7684\u5411\u5176\u4e2d\u67d0\u53f0TC\u53d1\u8d77\u4e8b\u52a1\u6ce8\u518c\uff0c\u5f53\u6269\u5bb9\u6216\u7f29\u5bb9\u540e\uff0c\u6709\u76f8\u5e94\u7684 TC \u53c2\u4e0e\u6216\u9000\u51fa\uff0c\u8bc1\u660e\u9ad8\u53ef\u7528\u90e8\u7f72\u751f\u6548"))}m.isMDXComponent=!0},57535:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-commit-service-rollback-04f600853ea2bb6e6780579d4d092ba5.png"},38947:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-commit-service-success-6e7a84881ebffa04b9a79fe9f784b872.png"},60749:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-commit-tc-rollback-fd88073e7ebdb2d2537880257fd5aeaf.png"},25776:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-commit-tc-success-d5017d503959370afdcda04a1ff5dfb7.png"},56829:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-nacos-list-ae9a4b1039d45635720aa5e10d3adb22.png"},73252:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-service-list-4de3a26b9eb022aad4c663b338003ddf.png"},91153:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-service-register-ae840566257c4c3e0c377bc6f0c8e931.png"},44489:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/seata-ha-tc-register-af7ee7fcdb6f59c11d68a4ab73c7d8a8.png"}}]);
"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[90262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,g=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},97724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301",keywords:["Seata"],description:"Seata \u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301\u3002"},i="\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301",l={unversionedId:"user/microservice",id:"version-v1.0/user/microservice",title:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301",description:"Seata \u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/user/microservice.md",sourceDirName:"user",slug:"/user/microservice",permalink:"/zh-cn/docs/v1.0/user/microservice",draft:!1,tags:[],version:"v1.0",frontMatter:{title:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301",keywords:["Seata"],description:"Seata \u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301\u3002"},sidebar:"docs",previous:{title:"API \u652f\u6301",permalink:"/zh-cn/docs/v1.0/user/api"},next:{title:"ORM\u6846\u67b6\u652f\u6301",permalink:"/zh-cn/docs/v1.0/user/ormframework"}},c={},u=[{value:"\u4e8b\u52a1\u4e0a\u4e0b\u6587",id:"\u4e8b\u52a1\u4e0a\u4e0b\u6587",level:2},{value:"\u4e8b\u52a1\u4f20\u64ad",id:"\u4e8b\u52a1\u4f20\u64ad",level:2},{value:"\u5bf9 Dubbo \u652f\u6301\u7684\u89e3\u8bfb",id:"\u5bf9-dubbo-\u652f\u6301\u7684\u89e3\u8bfb",level:2}],p={toc:u},d="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301"},"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301"),(0,o.kt)("h2",{id:"\u4e8b\u52a1\u4e0a\u4e0b\u6587"},"\u4e8b\u52a1\u4e0a\u4e0b\u6587"),(0,o.kt)("p",null,"Seata \u7684\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7531 RootContext \u6765\u7ba1\u7406\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u540e\uff0cRootContext \u4f1a\u81ea\u52a8\u7ed1\u5b9a\u8be5\u4e8b\u52a1\u7684 XID\uff0c\u4e8b\u52a1\u7ed3\u675f\uff08\u63d0\u4ea4\u6216\u56de\u6eda\u5b8c\u6210\uff09\uff0cRootContext \u4f1a\u81ea\u52a8\u89e3\u7ed1 XID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u7ed1\u5b9a XID\nRootContext.bind(xid);\n\n// \u89e3\u7ed1 XID\nString xid = RootContext.unbind();\n")),(0,o.kt)("p",null,"\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7 RootContext \u7684 API \u63a5\u53e3\u6765\u83b7\u53d6\u5f53\u524d\u8fd0\u884c\u65f6\u7684\u5168\u5c40\u4e8b\u52a1 XID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u83b7\u53d6 XID\nString xid = RootContext.getXID();\n")),(0,o.kt)("p",null,"\u5e94\u7528\u662f\u5426\u8fd0\u884c\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u5c31\u662f\u901a\u8fc7 RootContext \u662f\u5426\u7ed1\u5b9a XID \u6765\u5224\u5b9a\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n")),(0,o.kt)("h2",{id:"\u4e8b\u52a1\u4f20\u64ad"},"\u4e8b\u52a1\u4f20\u64ad"),(0,o.kt)("p",null,"Seata \u5168\u5c40\u4e8b\u52a1\u7684\u4f20\u64ad\u673a\u5236\u5c31\u662f\u6307\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad\uff0c\u6839\u672c\u4e0a\uff0c\u5c31\u662f XID \u7684\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u4f20\u64ad\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"1. \u670d\u52a1\u5185\u90e8\u7684\u4e8b\u52a1\u4f20\u64ad")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684\uff0cRootContext \u7684\u5b9e\u73b0\u662f\u57fa\u4e8e ",(0,o.kt)("em",{parentName:"p"},"ThreadLocal")," \u7684\uff0c\u5373 XID \u7ed1\u5b9a\u5728\u5f53\u524d\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadLocalContextCore implements ContextCore {\n\n    private ThreadLocal<Map<String, String>> threadLocal = new ThreadLocal<Map<String, String>>() {\n        @Override\n        protected Map<String, String> initialValue() {\n            return new HashMap<String, String>();\n        }\n\n    };\n\n    @Override\n    public String put(String key, String value) {\n        return threadLocal.get().put(key, value);\n    }\n\n    @Override\n    public String get(String key) {\n        return threadLocal.get().get(key);\n    }\n\n    @Override\n    public String remove(String key) {\n        return threadLocal.get().remove(key);\n    }\n}\n")),(0,o.kt)("p",null,"\u6240\u4ee5\u670d\u52a1\u5185\u90e8\u7684 XID \u4f20\u64ad\u901a\u5e38\u662f\u5929\u7136\u7684\u901a\u8fc7\u540c\u4e00\u4e2a\u7ebf\u7a0b\u7684\u8c03\u7528\u94fe\u8def\u4e32\u8fde\u8d77\u6765\u7684\u3002\u9ed8\u8ba4\u4e0d\u505a\u4efb\u4f55\u5904\u7406\uff0c\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u5c31\u662f\u4f20\u64ad\u4e0b\u53bb\u7684\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u6302\u8d77\u4e8b\u52a1\u4e0a\u4e0b\u6587\uff0c\u5219\u9700\u8981\u901a\u8fc7 RootContext \u63d0\u4f9b\u7684 API \u6765\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u6302\u8d77\uff08\u6682\u505c\uff09\nString xid = RootContext.unbind();\n\n// TODO: \u8fd0\u884c\u5728\u5168\u5c40\u4e8b\u52a1\u5916\u7684\u4e1a\u52a1\u903b\u8f91\n\n// \u6062\u590d\u5168\u5c40\u4e8b\u52a1\u4e0a\u4e0b\u6587\nRootContext.bind(xid);\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"2. \u8de8\u670d\u52a1\u8c03\u7528\u7684\u4e8b\u52a1\u4f20\u64ad")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u57fa\u672c\u539f\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7406\u89e3\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8de8\u670d\u52a1\u8c03\u7528\u573a\u666f\u4e0b\u7684\u4e8b\u52a1\u4f20\u64ad\uff0c\u672c\u8d28\u4e0a\u5c31\u662f\u8981\u628a XID \u901a\u8fc7\u670d\u52a1\u8c03\u7528\u4f20\u9012\u5230\u670d\u52a1\u63d0\u4f9b\u65b9\uff0c\u5e76\u7ed1\u5b9a\u5230 RootContext \u4e2d\u53bb\u3002")),(0,o.kt)("p",null,"\u53ea\u8981\u80fd\u505a\u5230\u8fd9\u70b9\uff0c\u7406\u8bba\u4e0a Seata \u53ef\u4ee5\u652f\u6301\u4efb\u610f\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002"),(0,o.kt)("h2",{id:"\u5bf9-dubbo-\u652f\u6301\u7684\u89e3\u8bfb"},"\u5bf9 Dubbo \u652f\u6301\u7684\u89e3\u8bfb"),(0,o.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u901a\u8fc7\u5185\u7f6e\u7684\u5bf9 Dubbo RPC \u652f\u6301\u673a\u5236\u7684\u89e3\u8bfb\uff0c\u6765\u8bf4\u660e Seata \u5728\u5b9e\u73b0\u5bf9\u4e00\u4e2a\u7279\u5b9a\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301\u7684\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u5bf9 Dubbo \u7684\u652f\u6301\uff0c\u6211\u4eec\u5229\u7528\u4e86 Dubbo \u6846\u67b6\u7684 ",(0,o.kt)("em",{parentName:"p"},"org.apache.dubbo.rpc.Filter")," \u673a\u5236\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * The type Transaction propagation filter.\n */\n@Activate(group = { Constants.PROVIDER, Constants.CONSUMER }, order = 100)\npublic class TransactionPropagationFilter implements Filter {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(TransactionPropagationFilter.class);\n\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {\n        String xid = RootContext.getXID(); // \u83b7\u53d6\u5f53\u524d\u4e8b\u52a1 XID\n        String rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID); // \u83b7\u53d6 RPC \u8c03\u7528\u4f20\u9012\u8fc7\u6765\u7684 XID\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("xid in RootContext[" + xid + "] xid in RpcContext[" + rpcXid + "]");\n        }\n        boolean bind = false;\n        if (xid != null) { // Consumer\uff1a\u628a XID \u7f6e\u5165 RPC \u7684 attachment \u4e2d\n            RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);\n        } else {\n            if (rpcXid != null) { // Provider\uff1a\u628a RPC \u8c03\u7528\u4f20\u9012\u6765\u7684 XID \u7ed1\u5b9a\u5230\u5f53\u524d\u8fd0\u884c\u65f6\n                RootContext.bind(rpcXid);\n                bind = true;\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("bind[" + rpcXid + "] to RootContext");\n                }\n            }\n        }\n        try {\n            return invoker.invoke(invocation); // \u4e1a\u52a1\u65b9\u6cd5\u7684\u8c03\u7528\n\n        } finally {\n            if (bind) { // Provider\uff1a\u8c03\u7528\u5b8c\u6210\u540e\uff0c\u5bf9 XID \u7684\u6e05\u7406\n                String unbindXid = RootContext.unbind();\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("unbind[" + unbindXid + "] from RootContext");\n                }\n                if (!rpcXid.equalsIgnoreCase(unbindXid)) {\n                    LOGGER.warn("xid in change during RPC from " + rpcXid + " to " + unbindXid);\n                    if (unbindXid != null) { // \u8c03\u7528\u8fc7\u7a0b\u6709\u65b0\u7684\u4e8b\u52a1\u4e0a\u4e0b\u6587\u5f00\u542f\uff0c\u5219\u4e0d\u80fd\u6e05\u9664\n                        RootContext.bind(unbindXid);\n                        LOGGER.warn("bind [" + unbindXid + "] back to RootContext");\n                    }\n                }\n            }\n        }\n    }\n}\n')))}s.isMDXComponent=!0}}]);
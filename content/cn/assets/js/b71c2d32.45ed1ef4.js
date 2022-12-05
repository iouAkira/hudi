"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",excerpt:"Solution to set up a new data and analytics platform using Apache Hudi on Amazon EMR and other managed services, including Amazon QuickSight for data visualization.",author:"nclouds",category:"blog",image:"/assets/images/blog/2020-10-06-cdc-solution-using-hudi-by-nclouds.jpg",tags:["blog","apache flink","apache hudi"]},i=void 0,l={permalink:"/cn/blog/2020/10/06/cdc-solution-using-hudi-by-nclouds",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-10-06-cdc-solution-using-hudi-by-nclouds.md",source:"@site/blog/2020-10-06-cdc-solution-using-hudi-by-nclouds.md",title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",description:"This blog published by nClouds in partnership with AWS shows how to build a CDC pipeline using Apache Hudi on Amazon EMR and other managed services like Amazon RDS and AWS DMS, including Amazon QuickSight for data visualization.",date:"2020-10-06T00:00:00.000Z",formattedDate:"October 6, 2020",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"apache flink",permalink:"/cn/blog/tags/apache-flink"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:.19,truncated:!1,authors:[{name:"nclouds"}],prevItem:{title:"Apache Hudi meets Apache Flink",permalink:"/cn/blog/2020/10/15/apache-hudi-meets-apache-flink"},nextItem:{title:"Ingest multiple tables using Hudi",permalink:"/cn/blog/2020/08/22/ingest-multiple-tables-using-hudi"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/apn/how-nclouds-helps-accelerate-data-delivery-with-apache-hudi-on-amazon-emr/"},"blog")," published by nClouds in partnership with AWS shows how to build a CDC pipeline using Apache Hudi on Amazon EMR and other managed services like Amazon RDS and AWS DMS, including Amazon QuickSight for data visualization."))}p.isMDXComponent=!0}}]);
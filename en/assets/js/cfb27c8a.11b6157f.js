"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[9781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7654:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9604);const i=e=>{let{defaultValue:t,editorHeight:n="40vh",outputHeight:i="30vh"}=e;const[l,o]=a.useState(t),s=a.useRef(null);return a.useEffect((()=>{null!=s&&(s.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(l))}),[l]),a.createElement("div",{style:{marginBottom:"1rem"}},a.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},a.createElement(r.ZP,{height:n,defaultLanguage:"html",defaultValue:t,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),a.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),a.createElement("iframe",{style:{width:"100%",minHeight:i,backgroundColor:"white",borderRadius:"0.5rem"},ref:s}))}},8952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(7654);const i={sidebar_position:3,sidebar_label:"HTML Attributes"},l="HTML Attributes",o={unversionedId:"html/html-attributes",id:"html/html-attributes",title:"HTML Attributes",description:"By default, an HTML element has a default behaviour that will be determine how",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/html/html-attributes.mdx",sourceDirName:"html",slug:"/html/html-attributes",permalink:"/ganjil-2023/en/docs/html/html-attributes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"HTML Attributes"},sidebar:"defaultSidebar",previous:{title:"Basic HTML Document Structure",permalink:"/ganjil-2023/en/docs/html/basic-html-structure"},next:{title:"<p> Paragraph",permalink:"/ganjil-2023/en/docs/html/html-elements/html-p-element"}},s={},u=[{value:"Structure of an HTML Tag with Attributes",id:"structure-of-an-html-tag-with-attributes",level:2},{value:"Example 1: Using Spaces",id:"example-1-using-spaces",level:3},{value:"Example 2: Using New Lines",id:"example-2-using-new-lines",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html-attributes"},"HTML Attributes"),(0,r.kt)("p",null,"By default, an HTML element has a default behaviour that will be determine how\nthe tag should be processed by the Web browser. The behaviour can be customised\nby embedding additional information called ",(0,r.kt)("strong",{parentName:"p"},"HTML attributes")," into the element."),(0,r.kt)("h2",{id:"structure-of-an-html-tag-with-attributes"},"Structure of an HTML Tag with Attributes"),(0,r.kt)("p",null,"An HTML element may have more than one attributes. Each attribute can be\nseparated using ",(0,r.kt)("strong",{parentName:"p"},"spaces")," or ",(0,r.kt)("strong",{parentName:"p"},"new lines"),". The following subsections will\nexplain the difference and provide an example."),(0,r.kt)("h3",{id:"example-1-using-spaces"},"Example 1: Using Spaces"),(0,r.kt)("p",null,"We can create an anchor tag (",(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),") to define a link to another location in a\nWeb page or a Web site. The following code snippet is an example of an ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),"\ntag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">A cool video on YouTube</a>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," tag above encloses a text value (i.e ",(0,r.kt)("inlineCode",{parentName:"p"},"A cool video on YouTube"),") and\nhas two attributes separated with empty spaces. The explanation for each\nattribute is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"href")," attribute that is used to point to a location. In the example above,\n",(0,r.kt)("inlineCode",{parentName:"li"},"href")," contains a URL to a video on YouTube."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target")," attribute determines how the link will be opened by the Web browser.\n",(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," value will make the Web browser to open the link in a new window.")),(0,r.kt)("h3",{id:"example-2-using-new-lines"},"Example 2: Using New Lines"),(0,r.kt)("p",null,"If you are going to define quite amount of attributes in an HTML element or\nsome of the attributes will have lengthy values, then you can separate the\nattributes using new lines (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),") as depicted in the following code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a\n  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"\n  target="_blank"\n  style="color: red;"\n>\n  A cool video on YouTube\n</a>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," tag above has three attributes: ",(0,r.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),". The\n",(0,r.kt)("inlineCode",{parentName:"p"},"href")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," attributes behave as described in previous subsection. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"style")," attribute defines how the element will be styled and displayed by the\nWeb browser using in-line cascading style sheet (CSS)."))}c.isMDXComponent=!0}}]);
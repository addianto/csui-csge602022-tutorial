"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[699],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>p});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=t.createContext({}),s=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),p=l,h=c["".concat(u,".").concat(p)]||c[p]||d[p]||i;return n?t.createElement(h,r(r({ref:a},m),{},{components:n})):t.createElement(h,r({ref:a},m))}));function p(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(7294),l=n(6010);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:n,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(7462),l=n(7294),i=n(6010),r=n(2389),o=n(7392),u=n(7094),s=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var a,n;const{lazy:r,block:c,defaultValue:p,values:h,groupId:g,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),f=(0,o.l)(y,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(a=null!=p?p:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?a:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:T}=(0,u.U)(),[A,N]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:U}=(0,s.o5)();if(null!=g){const e=E[g];null!=e&&e!==A&&y.some((a=>a.value===e))&&N(e)}const O=e=>{const a=e.currentTarget,n=x.indexOf(a),t=y[n].value;t!==A&&(U(a),N(t),null!=g&&T(g,String(t)))},I=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{var t;const a=x.indexOf(e.currentTarget)+1;n=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{var l;const a=x.indexOf(e.currentTarget)-1;n=null!=(l=x[a])?l:x[x.length-1];break}}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:a,label:n,attributes:r}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:e=>x.push(e),onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":A===a})}),null!=n?n:a)}))),r?(0,l.cloneElement)(k.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==A})))))}function p(e){const a=(0,r.Z)();return l.createElement(c,(0,t.Z)({key:String(a)},e))}},7654:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(7294),l=n(9604);const i=e=>{let{defaultValue:a,editorHeight:n="40vh",outputHeight:i="30vh"}=e;const[r,o]=t.useState(a),u=t.useRef(null);return t.useEffect((()=>{null!=u&&(u.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(l.ZP,{height:n,defaultLanguage:"html",defaultValue:a,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:i,backgroundColor:"white",borderRadius:"0.5rem"},ref:u}))}},8346:(e,a,n)=>{n.d(a,{MX:()=>s,N1:()=>t,Qq:()=>i,SA:()=>m,YO:()=>u,Z1:()=>r,gU:()=>o,wP:()=>d,yq:()=>l});const t="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},7110:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=n(7462),l=(n(7294),n(3905)),i=n(5488),r=n(5162),o=n(7654),u=n(8346);const s={sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},m="&lt;a&gt; - Anchor",d={unversionedId:"html/html-elements/html-a-element",id:"html/html-elements/html-a-element",title:"<a> Anchor",description:"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ``",source:"@site/docs/html/html-elements/html-a-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-a-element",permalink:"/ganjil-2023/docs/html/html-elements/html-a-element",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},sidebar:"defaultSidebar",previous:{title:"<h1> Heading",permalink:"/ganjil-2023/docs/html/html-elements/html-h-element"},next:{title:"<img> Image",permalink:"/ganjil-2023/docs/html/html-elements/html-img-element"}},c={},p=[{value:"Daftar Atribut Anchor Tag:",id:"daftar-atribut-anchor-tag",level:4},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],h={toc:p};function g(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"a---anchor"},"<","a",">"," - Anchor"),(0,l.kt)("p",null,"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ",(0,l.kt)("inlineCode",{parentName:"p"},"<a></a>")),(0,l.kt)("p",null,"Link yang ingin dituju oleh elemen anchor dapat didefinisikan dengan memberikan atribut href ke anchor tag yang nilainya berupa string URL."),(0,l.kt)("h4",{id:"daftar-atribut-anchor-tag"},"Daftar Atribut Anchor Tag:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"href"),": URL yang ingin dituju"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target"),": Target window dimana halaman akan dibuka. Dapat memiliki nilai sebagai berikut:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_self"),": Buka link pada halaman yang sama (default)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_blank"),": Buka link pada halaman baru."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_parent"),": Buka link pada halaman ",(0,l.kt)("em",{parentName:"li"},"parent")," (khusus untuk iframe).")))),(0,l.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"example1",label:"Elemen teks sebagai link",default:!0,mdxType:"TabItem"},(0,l.kt)(o.Z,{defaultValue:u.Z1,mdxType:"CodeEditor"})),(0,l.kt)(r.Z,{value:"example2",label:"Elemen non-teks sebagai link",mdxType:"TabItem"},(0,l.kt)(o.Z,{defaultValue:u.gU,mdxType:"CodeEditor"}))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[5699],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>p});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=i,h=c["".concat(u,".").concat(p)]||c[p]||m[p]||l;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>r});var t=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:a,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>p});var t=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),u=a(7094),s=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var n,a;const{lazy:r,block:c,defaultValue:p,values:h,groupId:g,className:b}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),f=(0,o.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(n=null!=p?p:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?n:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:T}=(0,u.U)(),[A,N]=(0,i.useState)(v),U=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=E[g];null!=e&&e!==A&&y.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,a=U.indexOf(n),t=y[a].value;t!==A&&(x(n),N(t),null!=g&&T(g,String(t)))},I=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{var t;const n=U.indexOf(e.currentTarget)+1;a=null!=(t=U[n])?t:U[0];break}case"ArrowLeft":{var i;const n=U.indexOf(e.currentTarget)-1;a=null!=(i=U[n])?i:U[U.length-1];break}}null==(n=a)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:n,label:a,attributes:r}=e;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:e=>U.push(e),onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":A===n})}),null!=a?a:n)}))),r?(0,i.cloneElement)(k.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==A})))))}function p(e){const n=(0,r.Z)();return i.createElement(c,(0,t.Z)({key:String(n)},e))}},7654:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),i=a(9604);const l=e=>{let{defaultValue:n,editorHeight:a="40vh",outputHeight:l="30vh"}=e;const[r,o]=t.useState(n),u=t.useRef(null);return t.useEffect((()=>{null!=u&&(u.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:a,defaultLanguage:"html",defaultValue:n,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:l,backgroundColor:"white",borderRadius:"0.5rem"},ref:u}))}},8346:(e,n,a)=>{a.d(n,{MX:()=>s,N1:()=>t,Qq:()=>l,SA:()=>d,YO:()=>u,Z1:()=>r,eP:()=>c,gU:()=>o,wP:()=>m,yq:()=>i});const t="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n',c='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<!DOCTYPE html>\n<html>\n  <head>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>\n    <script>\n    $(document).ready(function(){\n      $("button").click(function(){\n        $.get("https://api.thecatapi.com/v1/images/search", function(data) {\n            $(".cat-photo").attr("src", data[0].url)\n        });\n      });\n    });\n    <\/script>\n  </head>\n    <body>\n      <div>\n      <img\n          alt="cat"\n          src="https://cdn2.thecatapi.com/images/0Vz3XgaPM.jpg"\n          width="400"\n          height="400"\n          objectFit="cover"\n          class="cat-photo"\n      />\n      </div>\n\n      <button>Get a new cat!</button>\n\n    </body>\n</html>\n'},7110:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var t=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(7654),u=a(8346);const s={sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},d="&lt;a&gt; - Anchor",m={unversionedId:"html/html-elements/html-a-element",id:"html/html-elements/html-a-element",title:"<a> Anchor",description:"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ``",source:"@site/docs/html/html-elements/html-a-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-a-element",permalink:"/ganjil-2023/docs/html/html-elements/html-a-element",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},sidebar:"defaultSidebar",previous:{title:"<h1> Heading",permalink:"/ganjil-2023/docs/html/html-elements/html-h-element"},next:{title:"<img> Image",permalink:"/ganjil-2023/docs/html/html-elements/html-img-element"}},c={},p=[{value:"Daftar Atribut Anchor Tag:",id:"daftar-atribut-anchor-tag",level:4},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],h={toc:p};function g(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a---anchor"},"<","a",">"," - Anchor"),(0,i.kt)("p",null,"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<a></a>")),(0,i.kt)("p",null,"Link yang ingin dituju oleh elemen anchor dapat didefinisikan dengan memberikan atribut href ke anchor tag yang nilainya berupa string URL."),(0,i.kt)("h4",{id:"daftar-atribut-anchor-tag"},"Daftar Atribut Anchor Tag:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"href"),": URL yang ingin dituju"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": Target window dimana halaman akan dibuka. Dapat memiliki nilai sebagai berikut:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_self"),": Buka link pada halaman yang sama (default)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_blank"),": Buka link pada halaman baru."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_parent"),": Buka link pada halaman ",(0,i.kt)("em",{parentName:"li"},"parent")," (khusus untuk iframe).")))),(0,i.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"example1",label:"Elemen teks sebagai link",default:!0,mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:u.Z1,mdxType:"CodeEditor"})),(0,i.kt)(r.Z,{value:"example2",label:"Elemen non-teks sebagai link",mdxType:"TabItem"},(0,i.kt)(o.Z,{defaultValue:u.gU,mdxType:"CodeEditor"}))))}g.isMDXComponent=!0}}]);
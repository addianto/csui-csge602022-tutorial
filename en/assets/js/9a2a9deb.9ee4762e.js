"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[1627],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>p});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,u=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return t?a.createElement(u,l(l({ref:n},h),{},{components:t})):a.createElement(u,l({ref:n},h))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7654:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(9604);const r=e=>{let{defaultValue:n,editorHeight:t="40vh",outputHeight:r="30vh"}=e;const[l,o]=a.useState(n),s=a.useRef(null);return a.useEffect((()=>{null!=s&&(s.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(l))}),[l]),a.createElement("div",{style:{marginBottom:"1rem"}},a.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},a.createElement(i.ZP,{height:t,defaultLanguage:"html",defaultValue:n,theme:"vs-dark",onChange:e=>o(e),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),a.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),a.createElement("iframe",{style:{width:"100%",minHeight:r,backgroundColor:"white",borderRadius:"0.5rem"},ref:s}))}},8346:(e,n,t)=>{t.d(n,{MX:()=>d,N1:()=>a,Qq:()=>r,SA:()=>h,YO:()=>s,Z1:()=>l,eP:()=>m,gU:()=>o,wP:()=>c,yq:()=>i});const a="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",r="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",l='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',h='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',c='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<!DOCTYPE html>\n<html>\n  <head>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>\n    <script>\n    $(document).ready(function(){\n      $("button").click(function(){\n        $.get("https://api.thecatapi.com/v1/images/search", function(data) {\n            $(".cat-photo").attr("src", data[0].url)\n        });\n      });\n    });\n    <\/script>\n  </head>\n    <body>\n      <div>\n      <img\n          alt="cat"\n          src="https://cdn2.thecatapi.com/images/0Vz3XgaPM.jpg"\n          width="400"\n          height="400"\n          objectFit="cover"\n          class="cat-photo"\n      />\n      </div>\n\n      <button>Get a new cat!</button>\n\n    </body>\n</html>\n'},5663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(7462),i=(t(7294),t(3905)),r=t(7654),l=t(8346);const o={sidebar_position:2,sidebar_label:"<h1> Heading",title:"<h1> Heading"},s="&lt;h1&gt; - Heading",d={unversionedId:"html/html-elements/html-h-element",id:"html/html-elements/html-h-element",title:"<h1> Heading",description:"The heading element is a text element used for providing textual heading in a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/html/html-elements/html-h-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-h-element",permalink:"/ganjil-2023/en/docs/html/html-elements/html-h-element",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"<h1> Heading",title:"<h1> Heading"},sidebar:"defaultSidebar",previous:{title:"<p> Paragraph",permalink:"/ganjil-2023/en/docs/html/html-elements/html-p-element"},next:{title:"<a> Anchor",permalink:"/ganjil-2023/en/docs/html/html-elements/html-a-element"}},h={},c=[{value:"Usage Example",id:"usage-example",level:2}],m={toc:c};function p(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"h1---heading"},"<","h1",">"," - Heading"),(0,i.kt)("p",null,"The heading element is a text element used for providing textual heading in a\npart of a page. It can defined by using a pair of ",(0,i.kt)("inlineCode",{parentName:"p"},"<hX>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"</hX>")," tag, where\n",(0,i.kt)("inlineCode",{parentName:"p"},"X")," is a number from 1 to 6. ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," is the biggest heading, while ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>")," is the\nsmallest heading."),(0,i.kt)("p",null,"They (i.e. the heading tags) function similarly to the heading that you often\nuse when writing document in an office suite such as Microsoft Word or Google\nDocs. For example, suppose you want to describe a coffee brewing recipe. You\nmight write a draft for the recipe in Google Docs similar to the following\nscreenshot:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A draft recipe from Google Docs",src:t(3757).Z,width:"595",height:"407"})),(0,i.kt)("p",null,"The same structure and content can be defined in a HTML page: ",(0,i.kt)("em",{parentName:"p"},"(try to copy\nthe HTML code snippet below into the code editor at the end of the page)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    \x3c!-- Assume there are some tags under the head --\x3e\n  </head>\n  <body>\n    <h1>Japanese-styled Iced Coffee</h1>\n    <p>\n      This is a recipe for brewing a cold, manually brewed coffee from the latest video made by <a href="https://www.youtube.com/watch?v=B0twDujnvpc">Kurasu Kyoto on YouTube</a>.\n    </p>\n\n    <h2>Preparation</h2>\n    <p>You will need:</p>\n    <ul>\n      <li>16 grams of light-roasted coffee beans</li>\n      <li>A server and dripper, along with paper filter</li>\n      <li>At least 80 grams of ice blocks</li>\n      <li>150 grams of hot water (around 91 degrees celcius)</li>\n    </ul>\n\n    <h2>Brewing Steps</h2>\n    <ol>\n      <li>Grind the coffee beans into coarse-grained powders using a grinder</li>\n      <li>Rinse the paper filter</li>\n      <li>[...]</li>\n    </ol>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)(r.Z,{defaultValue:l.Qq,mdxType:"CodeEditor"}))}p.isMDXComponent=!0},3757:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/h_docs_example-2600d5fef5e750b7b94c61985e0584f8.png"}}]);
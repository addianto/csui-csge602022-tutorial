"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[699],{5162:(a,e,n)=>{n.d(e,{Z:()=>r});var t=n(7294),l=n(6010);const i="tabItem_Ymn6";function r(a){let{children:e,hidden:n,className:r}=a;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},e)}},5488:(a,e,n)=>{n.d(e,{Z:()=>c});var t=n(7462),l=n(7294),i=n(6010),r=n(2389),o=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",m="tabItem_LNqP";function h(a){var e,n;const{lazy:r,block:h,defaultValue:c,values:p,groupId:k,className:g}=a,b=l.Children.map(a.children,(a=>{if((0,l.isValidElement)(a)&&"value"in a.props)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:b.map((a=>{let{props:{value:e,label:n,attributes:t}}=a;return{value:e,label:n,attributes:t}})),f=(0,o.l)(y,((a,e)=>a.value===e.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((a=>a.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===c?c:null!=(e=null!=c?c:null==(n=b.find((a=>a.props.default)))?void 0:n.props.value)?e:b[0].props.value;if(null!==v&&!y.some((a=>a.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((a=>a.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:A,setTabGroupChoices:N}=(0,s.U)(),[T,U]=(0,l.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const a=A[k];null!=a&&a!==T&&y.some((e=>e.value===a))&&U(a)}const I=a=>{const e=a.currentTarget,n=E.indexOf(e),t=y[n].value;t!==T&&(x(e),U(t),null!=k&&N(k,String(t)))},D=a=>{var e;let n=null;switch(a.key){case"ArrowRight":{var t;const e=E.indexOf(a.currentTarget)+1;n=null!=(t=E[e])?t:E[0];break}case"ArrowLeft":{var l;const e=E.indexOf(a.currentTarget)-1;n=null!=(l=E[e])?l:E[E.length-1];break}}null==(e=n)||e.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":h},g)},y.map((a=>{let{value:e,label:n,attributes:r}=a;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:a=>E.push(a),onKeyDown:D,onFocus:I,onClick:I},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===e})}),null!=n?n:e)}))),r?(0,l.cloneElement)(b.filter((a=>a.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==T})))))}function c(a){const e=(0,r.Z)();return l.createElement(h,(0,t.Z)({key:String(e)},a))}},8346:(a,e,n)=>{n.d(e,{MX:()=>u,N1:()=>t,Qq:()=>i,SA:()=>d,YO:()=>s,Z1:()=>r,gU:()=>o,wP:()=>m,yq:()=>l});const t="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',m='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},7110:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>c});var t=n(7462),l=(n(7294),n(3905)),i=n(5488),r=n(5162),o=n(333),s=n(8346);const u={sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},d="&lt;a&gt; - Anchor",m={unversionedId:"html/html-elements/html-a-element",id:"html/html-elements/html-a-element",title:"<a> Anchor",description:"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ``",source:"@site/docs/html/html-elements/html-a-element.mdx",sourceDirName:"html/html-elements",slug:"/html/html-elements/html-a-element",permalink:"/ganjil-2023/docs/html/html-elements/html-a-element",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"<a> Anchor",title:"<a> Anchor"},sidebar:"defaultSidebar",previous:{title:"<h1> Heading",permalink:"/ganjil-2023/docs/html/html-elements/html-h-element"},next:{title:"<img> Image",permalink:"/ganjil-2023/docs/html/html-elements/html-img-element"}},h={},c=[{value:"Daftar Atribut Anchor Tag:",id:"daftar-atribut-anchor-tag",level:4},{value:"Contoh Penggunaan",id:"contoh-penggunaan",level:3}],p={toc:c};function k(a){let{components:e,...n}=a;return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"a---anchor"},"<","a",">"," - Anchor"),(0,l.kt)("p",null,"Elemen anchor adalah elemen yang dapat digunakan untuk membuat link ke situs lain di internet (termasuk situs yang sama dengan page yang sedang dikunjungi). Elemen anchor dapat didefinisikan dengan menggunakan tag ",(0,l.kt)("inlineCode",{parentName:"p"},"<a></a>")),(0,l.kt)("p",null,"Link yang ingin dituju oleh elemen anchor dapat didefinisikan dengan memberikan atribut href ke anchor tag yang nilainya berupa string URL."),(0,l.kt)("h4",{id:"daftar-atribut-anchor-tag"},"Daftar Atribut Anchor Tag:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"href"),": URL yang ingin dituju"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target"),": Target window dimana halaman akan dibuka. Dapat memiliki nilai sebagai berikut:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_self"),": Buka link pada halaman yang sama (default)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_blank"),": Buka link pada halaman baru."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_parent"),": Buka link pada halaman ",(0,l.kt)("em",{parentName:"li"},"parent")," (khusus untuk iframe).")))),(0,l.kt)("h3",{id:"contoh-penggunaan"},"Contoh Penggunaan"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"example1",label:"Elemen teks sebagai link",default:!0,mdxType:"TabItem"},(0,l.kt)(o.Z,{defaultValue:s.Z1,mdxType:"CodeEditor"})),(0,l.kt)(r.Z,{value:"example2",label:"Elemen non-teks sebagai link",mdxType:"TabItem"},(0,l.kt)(o.Z,{defaultValue:s.gU,mdxType:"CodeEditor"}))))}k.isMDXComponent=!0}}]);
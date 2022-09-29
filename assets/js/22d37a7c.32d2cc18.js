"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[748],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),k=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=k(e.components);return n.createElement(r.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=k(t),d=i,o=c["".concat(r,".").concat(d)]||c[d]||p[d]||l;return t?n.createElement(o,s(s({ref:a},u),{},{components:t})):n.createElement(o,s({ref:a},u))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=c;var m={};for(var r in a)hasOwnProperty.call(a,r)&&(m[r]=a[r]);m.originalType=e,m.mdxType="string"==typeof e?e:i,s[1]=m;for(var k=2;k<l;k++)s[k]=t[k];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2330:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>k});var n=t(7462),i=(t(7294),t(3905));const l={sidebar_label:"Tugas 3"},s="Tugas 3: Pengimplementasian Data Delivery Menggunakan Django",m={unversionedId:"tugas/tugas-3",id:"tugas/tugas-3",title:"Tugas 3: Pengimplementasian Data Delivery Menggunakan Django",description:"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023",source:"@site/assignments/tugas/tugas-3.md",sourceDirName:"tugas",slug:"/tugas/tugas-3",permalink:"/ganjil-2023/assignments/tugas/tugas-3",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Tugas 3"},sidebar:"tutorialSidebar",previous:{title:"Tugas 2",permalink:"/ganjil-2023/assignments/tugas/tugas-2"},next:{title:"Tugas 4",permalink:"/ganjil-2023/assignments/tugas/tugas-4"}},r={},k=[{value:"Deskripsi Tugas",id:"deskripsi-tugas",level:2},{value:"Tenggat Waktu Pengerjaan",id:"tenggat-waktu-pengerjaan",level:2},{value:"Bonus",id:"bonus",level:2}],u={toc:k};function p(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tugas-3-pengimplementasian-data-delivery-menggunakan-django"},"Tugas 3: Pengimplementasian Data Delivery Menggunakan Django"),(0,i.kt)("p",null,"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"deskripsi-tugas"},"Deskripsi Tugas"),(0,i.kt)("p",null,"Pada tugas ini, kamu akan mengimplementasikan konsep ",(0,i.kt)("em",{parentName:"p"},"data delivery")," serta beberapa hal yang sudah kamu pelajari selama tutorial lab."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Checklist")," untuk tugas ini adalah sebagai berikut:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Membuat suatu aplikasi baru bernama ",(0,i.kt)("inlineCode",{parentName:"li"},"mywatchlist")," di proyek Django Tugas 2 pekan lalu"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan ",(0,i.kt)("em",{parentName:"li"},"path")," ",(0,i.kt)("inlineCode",{parentName:"li"},"mywatchlist")," sehingga pengguna dapat mengakses http://localhost:8000/mywatchlist"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Membuat sebuah model ",(0,i.kt)("inlineCode",{parentName:"li"},"MyWatchList")," yang memiliki atribut sebagai berikut:",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"watched")," untuk mendeskripsikan film tersebut sudah ditonton atau belum"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," untuk mendeskripsikan judul film"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"rating")," untuk mendeskripsikan rating film dalam rentang 1 sampai dengan 5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"release_date")," untuk mendeskripsikan kapan film dirilis"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"review")," untuk mendeskripsikan ",(0,i.kt)("em",{parentName:"li"},"review")," untuk film tersebut"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan minimal 10 data untuk objek ",(0,i.kt)("inlineCode",{parentName:"li"},"MyWatchList")," yang sudah dibuat di atas"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mengimplementasikan sebuah fitur untuk menyajikan data yang telah dibuat sebelumnya dalam tiga format:",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","HTML"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","XML"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","JSON "))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Membuat ",(0,i.kt)("em",{parentName:"li"},"routing")," sehingga data di atas dapat diakses melalui URL:",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/html untuk mengakses ",(0,i.kt)("inlineCode",{parentName:"li"},"mywatchlist")," dalam format HTML"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/xml untuk mengakses ",(0,i.kt)("inlineCode",{parentName:"li"},"mywatchlist")," dalam format XML"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/json untuk mengakses ",(0,i.kt)("inlineCode",{parentName:"li"},"mywatchlist")," dalam format JSON"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Melakukan ",(0,i.kt)("em",{parentName:"li"},"deployment")," ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Membuat sebuah ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")," yang berisi tautan menuju aplikasi Heroku yang sudah kamu ",(0,i.kt)("em",{parentName:"li"},"deploy")," serta jawaban dari beberapa pertanyaan berikut:",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan perbedaan antara JSON, XML, dan HTML!"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan mengapa kita memerlukan ",(0,i.kt)("em",{parentName:"li"},"data delivery")," dalam pengimplementasian sebuah platform?"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan bagaimana cara kamu mengimplementasikan ",(0,i.kt)("em",{parentName:"li"},"checklist")," di atas."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mengakses tiga URL di poin 6 menggunakan Postman, menangkap ",(0,i.kt)("em",{parentName:"li"},"screenshot"),", dan menambahkannya ke dalam ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan ",(0,i.kt)("em",{parentName:"li"},"unit test")," pada ",(0,i.kt)("inlineCode",{parentName:"li"},"tests.py")," untuk menguji bahwa tiga URL di poin 6 dapat mengembalikan respon ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP 200 OK"))),(0,i.kt)("p",null,"Perhatikan bahwa kamu harus mengerjakan tugas ini menggunakan repositori berbeda dengan tutorial, namun kamu dapat ",(0,i.kt)("strong",{parentName:"p"},"menggunakan proyek Django tugas 2 pekan lalu untuk menyelesaikan tugas ini"),". "),(0,i.kt)("h2",{id:"tenggat-waktu-pengerjaan"},"Tenggat Waktu Pengerjaan"),(0,i.kt)("p",null,"Tugas ini memiliki tenggat waktu pengumpulan pada tanggal 22 September 2022 pada pukul 12.00. Asisten dosen akan mengecek ",(0,i.kt)("em",{parentName:"p"},"last commit")," dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur yang menampilkan pesan dengan aturan sebagai berikut:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Jika jumlah film yang sudah ditonton lebih banyak atau sama dengan jumlah film yang belum ditonton, tampilkan pesan "Selamat, kamu sudah banyak menonton!" dalam bentuk HTML'),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Jika jumlah film yang belum ditonton lebih banyak dari jumlah film yang sudah ditonton, tampilkan pesan "Wah, kamu masih sedikit menonton!" dalam bentuk HTML')))}p.isMDXComponent=!0}}]);
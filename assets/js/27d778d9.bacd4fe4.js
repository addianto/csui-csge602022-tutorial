"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[34],{3905:(a,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function p(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var m=t.createContext({}),o=function(a){var e=t.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):p(p({},e),a)),n},s=function(a){var e=o(a.components);return t.createElement(m.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,m=a.parentName,s=l(a,["components","mdxType","originalType","parentName"]),k=o(n),d=r,g=k["".concat(m,".").concat(d)]||k[d]||u[d]||i;return n?t.createElement(g,p(p({ref:e},s),{},{components:n})):t.createElement(g,p({ref:e},s))}));function d(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=a,l.mdxType="string"==typeof a?a:r,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8164:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Lab 2"},p="Lab 2: Data Delivery",l={unversionedId:"tutorial/tutorial-2",id:"tutorial/tutorial-2",title:"Lab 2: Data Delivery",description:"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023",source:"@site/assignments/tutorial/tutorial-2.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-2",permalink:"/ganjil-2023/assignments/tutorial/tutorial-2",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Lab 2"},sidebar:"tutorialSidebar",previous:{title:"Lab 1",permalink:"/ganjil-2023/assignments/tutorial/tutorial-1"},next:{title:"Tugas 1",permalink:"/ganjil-2023/assignments/tugas/tugas-1"}},m={},o=[{value:"Tujuan Pembelajaran\u200b",id:"tujuan-pembelajaran",level:2},{value:"Pengenalan Data Delivery",id:"pengenalan-data-delivery",level:2},{value:"XML (Extensible Markup Language)",id:"xml-extensible-markup-language",level:2},{value:"JSON (JavaScript Object Notation)",id:"json-javascript-object-notation",level:2},{value:"Tutorial Mengembalikan Data dalam Bentuk XML",id:"tutorial-mengembalikan-data-dalam-bentuk-xml",level:2},{value:"Tutorial Mengembalikan Data dalam Bentuk JSON",id:"tutorial-mengembalikan-data-dalam-bentuk-json",level:2},{value:"Tutorial Mengembalikan Data Berdasarkan ID dalam Bentuk JSON/XML",id:"tutorial-mengembalikan-data-berdasarkan-id-dalam-bentuk-jsonxml",level:2}],s={toc:o};function u(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-2-data-delivery"},"Lab 2: Data Delivery"),(0,r.kt)("p",null,"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tujuan-pembelajaran"},"Tujuan Pembelajaran\u200b"),(0,r.kt)("p",null,"Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mengetahui XML dan JSON sebagai salah satu metode Data Delivery"),(0,r.kt)("li",{parentName:"ul"},"Mengerti cara mengirimkan data menggunakan format XML dan JSON"),(0,r.kt)("li",{parentName:"ul"},"Mengerti cara mengambil data spesifik berdasarkan IDx")),(0,r.kt)("h2",{id:"pengenalan-data-delivery"},"Pengenalan Data Delivery"),(0,r.kt)("p",null,"Dalam mengembangkan suatu ",(0,r.kt)("em",{parentName:"p"},"platform"),", ada kalanya kita perlu mengirimkan data dari satu ",(0,r.kt)("em",{parentName:"p"},"stack")," ke ",(0,r.kt)("em",{parentName:"p"},"stack")," lainnya. Data yang dikirimkan bisa bermacam-macam bentuknya. Beberapa contoh format data yang umum digunakan antara lain HTML, XML, dan JSON. Implementasi ",(0,r.kt)("em",{parentName:"p"},"data delivery")," dalam bentuk HTML sudah kamu pelajari pada tutorial sebelumnya. Pada tutorial ini akan diajarkan terkait XML dan JSON."),(0,r.kt)("h2",{id:"xml-extensible-markup-language"},"XML (Extensible Markup Language)"),(0,r.kt)("p",null,"XML adalah singkatan dari ",(0,r.kt)("em",{parentName:"p"},"eXtensible Markup Language"),". XML didesain menjadi ",(0,r.kt)("em",{parentName:"p"},"self-descriptive"),", jadi dengan membaca XML tersebut kita bisa mengerti informasi apa yang ingin disampaikan dari data yang tertulis. XML digunakan pada banyak aplikasi web maupun ",(0,r.kt)("em",{parentName:"p"},"mobile"),", yaitu untuk menyimpan dan mengirimkan data. XML hanyalah informasi yang dibungkus di dalam ",(0,r.kt)("em",{parentName:"p"},"tag"),". Kita perlu menulis program untuk mengirim, menerima, menyimpan, atau menampilkan informasi tersebut."),(0,r.kt)("p",null,"Contoh Format XML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<phone>\n  <brand>Apple</brand>\n  <type>iPhone 14 plus</type>\n  <color>Red</color>\n  <memory>256</memory>\n</phone>\n')),(0,r.kt)("p",null,"XML di atas sangatlah ",(0,r.kt)("em",{parentName:"p"},"self-descriptive"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ada informasi merk (",(0,r.kt)("inlineCode",{parentName:"li"},"brand"),")"),(0,r.kt)("li",{parentName:"ul"},"Ada informasi tipe (",(0,r.kt)("inlineCode",{parentName:"li"},"type"),")"),(0,r.kt)("li",{parentName:"ul"},"Ada informasi warna (",(0,r.kt)("inlineCode",{parentName:"li"},"color"),")"),(0,r.kt)("li",{parentName:"ul"},"Ada informasi besaran memori (",(0,r.kt)("inlineCode",{parentName:"li"},"memory"),")")),(0,r.kt)("p",null,"Dokumen XML membentuk struktur seperti tree yang dimulai dari ",(0,r.kt)("em",{parentName:"p"},"root"),", lalu ",(0,r.kt)("em",{parentName:"p"},"branch"),", hingga berakhir pada ",(0,r.kt)("em",{parentName:"p"},"leaves"),". Dokumen XML ",(0,r.kt)("strong",{parentName:"p"},"harus mengandung sebuah ",(0,r.kt)("em",{parentName:"strong"},"root element"))," yang merupakan ",(0,r.kt)("em",{parentName:"p"},"parent")," dari elemen lainnya. Pada contoh di atas, ",(0,r.kt)("inlineCode",{parentName:"p"},"<phone>")," adalah ",(0,r.kt)("em",{parentName:"p"},"root element"),"."),(0,r.kt)("p",null,"Untuk baris ",(0,r.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" encoding="UTF-8"?>')," biasa disebut sebagai ",(0,r.kt)("strong",{parentName:"p"},"XML Prolog"),". XML Prolog bersifat opsional, akan tetapi jika ada maka posisinya harus berada di awal dokumen XML. Pada dokumen XML ",(0,r.kt)("strong",{parentName:"p"},"semua elemen wajib memiliki ",(0,r.kt)("strong",{parentName:"strong"},"closing tag")),". ",(0,r.kt)("strong",{parentName:"p"},"Tag pada XML sifatnya ",(0,r.kt)("strong",{parentName:"strong"},"case sensitive")),", sehingga tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<phone>")," berbeda dengan tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<Phone>"),"."),(0,r.kt)("h2",{id:"json-javascript-object-notation"},"JSON (JavaScript Object Notation)"),(0,r.kt)("p",null,"JSON adalah singkatan dari ",(0,r.kt)("em",{parentName:"p"},"JavaScript Object Notation"),". JSON didesain menjadi ",(0,r.kt)("em",{parentName:"p"},"self-describing"),", sehingga JSON sangat mudah untuk dimengerti. JSON digunakan pada banyak aplikasi web maupun ",(0,r.kt)("em",{parentName:"p"},"mobile"),", yaitu untuk menyimpan dan mengirimkan data. Sintaks JSON merupakan turunan dari ",(0,r.kt)("em",{parentName:"p"},"Object")," JavaScript. Akan tetapi format JSON berbentuk ",(0,r.kt)("em",{parentName:"p"},"text"),", sehingga kode untuk membaca dan membuat JSON banyak terdapat dibanyak bahasa pemrograman."),(0,r.kt)("p",null,"Contoh format JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "brand": "Samsung",\n    "type": "S22 Ultra",\n    "color": "Black",\n    "memory": "256",\n}\n')),(0,r.kt)("p",null,"Data pada JSON disimpan dalam bentuk ",(0,r.kt)("em",{parentName:"p"},"key")," dan ",(0,r.kt)("em",{parentName:"p"},"value"),". Pada contoh di atas yang menjadi ",(0,r.kt)("em",{parentName:"p"},"key")," adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"brand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),", dan ",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),". ",(0,r.kt)("em",{parentName:"p"},"Value")," dapat berupa tipe data primitif (",(0,r.kt)("em",{parentName:"p"},"string, number, boolean"),") ataupun berupa objek."),(0,r.kt)("h2",{id:"tutorial-mengembalikan-data-dalam-bentuk-xml"},"Tutorial Mengembalikan Data dalam Bentuk XML"),(0,r.kt)("p",null,"Catatan: Pada tutorial ini, kamu akan menggunakan proyek yang sudah kamu buat pada tutorial sebelumnya."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah sebuah fungsi yang menerima parameter ",(0,r.kt)("em",{parentName:"p"},"request"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"import")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"Serializer")," pada bagian paling atas."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from django.http import HttpResponse\nfrom django.core import serializers\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil ",(0,r.kt)("em",{parentName:"p"},"query")," dari seluruh data yang ada pada ",(0,r.kt)("inlineCode",{parentName:"p"},"BarangWishlist"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data = BarangWishlist.objects.all()\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"return function")," berupa ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," yang berisi parameter data hasil ",(0,r.kt)("em",{parentName:"p"},"query")," yang sudah diserialisasi menjadi XML dan parameter ",(0,r.kt)("inlineCode",{parentName:"p"},'content_type="application/xml"'),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan ",(0,r.kt)("em",{parentName:"p"},"import")," fungsi yang sudah kamu buat tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import show_xml #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,r.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('xml/', show_xml, name=\u2019show_xml\u2019), #sesuaikan dengan nama fungsi yang dibuat\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jalankan proyek Django-mu dengan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," dan bukalah http://localhost:8000/xml/ (sesuaikan dengan ",(0,r.kt)("em",{parentName:"p"},"path url")," yang dibuat) di browser favoritmu untuk melihat hasilnya."))),(0,r.kt)("h2",{id:"tutorial-mengembalikan-data-dalam-bentuk-json"},"Tutorial Mengembalikan Data dalam Bentuk JSON"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah sebuah fungsi baru yang menerima parameter ",(0,r.kt)("em",{parentName:"p"},"request"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil ",(0,r.kt)("em",{parentName:"p"},"query")," dari seluruh data yang ada pada ",(0,r.kt)("inlineCode",{parentName:"p"},"BarangWishlist"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data = BarangWishlist.objects.all()\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"return function")," berupa ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," yang berisi parameter data hasil ",(0,r.kt)("em",{parentName:"p"},"query")," yang sudah diserialisasi menjadi JSON dan parameter ",(0,r.kt)("inlineCode",{parentName:"p"},'content_type="application/json"'),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'return HttpResponse(serializers.serialize("json", data), content_type="application/json")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan ",(0,r.kt)("em",{parentName:"p"},"import")," fungsi yang sudah kamu buat tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import show_json #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,r.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('json/', show_json, name=\u2019show_json\u2019), #sesuaikan dengan nama fungsi yang dibuat\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jalankan proyek Django-mu dengan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," dan bukalah http://localhost:8000/json/ (sesuaikan dengan ",(0,r.kt)("em",{parentName:"p"},"path url")," yang dibuat) di browser favoritmu untuk melihat hasilnya."))),(0,r.kt)("h2",{id:"tutorial-mengembalikan-data-berdasarkan-id-dalam-bentuk-jsonxml"},"Tutorial Mengembalikan Data Berdasarkan ID dalam Bentuk JSON/XML"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah sebuah fungsi baru yang menerima parameter ",(0,r.kt)("em",{parentName:"p"},"request")," dan id.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil ",(0,r.kt)("em",{parentName:"p"},"query")," dari data dengan id tertentu yang ada pada ",(0,r.kt)("inlineCode",{parentName:"p"},"BarangWishlist"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data = BarangWishlist.objects.filter(pk=id)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"return function")," berupa ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," yang berisi parameter data hasil ",(0,r.kt)("em",{parentName:"p"},"query")," yang sudah diserialisasi menjadi JSON/XML dan parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"content_type")," dengan value ",(0,r.kt)("inlineCode",{parentName:"p"},'"application/xml"')," (jika format XML) atau ",(0,r.kt)("inlineCode",{parentName:"p"},'"application/json"')," (jika format JSON)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'// Jika JSON\nreturn HttpResponse(serializers.serialize("json", data), content_type="application/json")\n\n// Jika XML\nreturn HttpResponse(serializers.serialize("xml", data), content_type="application/xml")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka ",(0,r.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,r.kt)("inlineCode",{parentName:"p"},"wishlist")," dan impor fungsi yang sudah kamu buat tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import show_json_by_id #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tambahkan ",(0,r.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,r.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('json/<int:id>', show_json_by_id, name=\u2019show_json_by_id\u2019), #sesuaikan dengan nama fungsi yang dibuat\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jalankan proyek Django-mu dengan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," dan bukalah http://localhost:8000/json/",(0,r.kt)("inlineCode",{parentName:"p"},"<id>")," (sesuaikan dengan ",(0,r.kt)("em",{parentName:"p"},"path url")," yang dibuat dan id yang diinginkan) di browser favoritmu untuk melihat hasilnya."))))}u.isMDXComponent=!0}}]);
(function(){"use strict";var e={323:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(252),r=n(577);const i={class:"col-6 col-lg-3 col-xs-4 col-sm-4 col-md-4 p-1"},c={class:"card p-3",style:{"max-width":"18rem"}},o=["src","alt"],l={class:"card-body text-dark"},s={class:"card-title"};var d={__name:"Card",props:{title:String,image:String,path:String,alt:String},setup(e){return(t,n)=>{const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",c,[(0,a.Wm)(d,{to:e.path,class:"text-decoration-none"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.image,alt:e.alt,class:"card-img-top img-fluid",style:{"aspect-ratio":"1/1"}},null,8,o),(0,a._)("div",l,[(0,a._)("h5",s,(0,r.zw)(e.title),1)])])),_:1},8,["to"])])])}}};const m=d;var u=m},336:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(262);function r(){const e=(0,a.iH)([]),t=(0,a.iH)([]),n=async()=>{await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1660412526&limit=100&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc").then((e=>e.json())).then((t=>e.value=t.data.results))},r=async()=>{await fetch("https://gateway.marvel.com/v1/public/comics?orderBy=title&limit=100&ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc").then((e=>e.json())).then((e=>t.value=e.data.results))};return{characterData:n,character:e,comics:t,comicData:r}}},218:function(e,t,n){var a=n(963),r=n(252),i=n(577);const c={class:"bg-dark d-flex justify-content-center"},o=(0,r._)("svg",{width:"130",height:"52",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("rect",{fill:"#EC1D24",width:"100%",height:"100%"}),(0,r._)("path",{fill:"#FEFEFE",d:"M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"})],-1),l={class:"navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-dark bg-dark"},s={class:"collapse navbar-collapse d-flex justify-content-center",id:"navbarNav"},d={class:"navbar-nav"};var m={__name:"Navigation",setup(e){const t=[{id:1,title:"Characters",path:"/character"},{id:2,title:"comics",path:"/comics"}];return(e,n)=>{const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",c,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((()=>[o])),_:1})]),(0,r._)("nav",l,[(0,r._)("div",s,[(0,r._)("ul",d,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(t,(e=>(0,r._)("li",{class:"nav-item",key:e.id},[(0,r.Wm)(a,{to:e.path,class:"nav-link text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.title.toLocaleUpperCase()),1)])),_:2},1032,["to"])]))),64))])])])],64)}}};const u=m;var p=u;const v={class:"container-fluid bg-dark text-white"},h=(0,r.uE)('<div class="row"><div class="col-12 mx-auto mt-3 p-3 col-sm-12 d-flex align-items-center flex-column flex-sm-row"><div class="col-3"><div class="logo mx-auto" style="max-width:8rem;"><svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg></div></div><div class="col-12 col-sm-6 d-flex justify-content-evenly links"><div class="primary_link"><ul class="list-unstyled"><li class="m-2">ABOUT MARVEL</li><li class="m-2">HELP/FAQS</li><li class="m-2">CAREERS</li><li class="m-2">INTERNSHIP</li></ul></div><div class="secondary_link"><ul class="list-unstyled"><li class="m-2">ADVERTISING</li><li class="m-2">DISNEY+</li><li class="m-2">MARVELHQ.COM</li><li class="m-2">REDEEM DIGITAL COMICS</li></ul></div></div><div class="col-12 col-sm-3 social text-center"><h4>FOLLOW MARVEL</h4><ul class="list-unstyled d-flex justify-content-around"><li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M9.426 17.647H.974A.974.974 0 0 1 0 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 0 1-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 0 0-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z"></path></svg></span></li><li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 15"><path fill-rule="evenodd" d="M17.647 1.74a7.072 7.072 0 0 1-2.079.585A3.704 3.704 0 0 0 17.16.272a7.13 7.13 0 0 1-2.3.9A3.57 3.57 0 0 0 12.217 0C10.22 0 8.598 1.662 8.598 3.712c0 .291.031.574.093.846-3.009-.155-5.676-1.632-7.463-3.88a3.78 3.78 0 0 0-.49 1.868c0 1.287.64 2.424 1.611 3.09a3.555 3.555 0 0 1-1.64-.463v.045c0 1.8 1.248 3.3 2.905 3.64-.304.088-.624.131-.954.131-.233 0-.461-.022-.682-.066.461 1.475 1.798 2.549 3.382 2.577A7.149 7.149 0 0 1 0 13.04a10.08 10.08 0 0 0 5.55 1.666c6.66 0 10.3-5.656 10.3-10.562 0-.162-.002-.323-.008-.482a7.43 7.43 0 0 0 1.805-1.921"></path></svg></span></li><li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M15.441 15.993H2.206a.552.552 0 0 1-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 0 1-.552.552M8.844 5.458a3.39 3.39 0 0 1 3.394 3.386 3.39 3.39 0 0 1-3.394 3.386A3.39 3.39 0 0 1 5.45 8.844a3.39 3.39 0 0 1 3.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 0 1-.551.551h-1.655a.552.552 0 0 1-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 0 0 0 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 0 0 2.098-2.093V2.093C17.647.937 16.707 0 15.549 0"></path></svg></span></li><li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 18"><path fill-rule="evenodd" d="M8.535 14.5c-1.532.038-1.83-1-1.842-1.751V7.217h3.844v-2.69h-3.83V0H3.904a.147.147 0 0 0-.138.133C3.602 1.518 2.904 3.949 0 4.922v2.295h1.937v5.806c0 1.988 1.58 4.812 5.749 4.745 1.407-.022 2.969-.569 3.314-1.04l-.92-2.535c-.356.158-1.037.295-1.545.307z"></path></svg></span></li></ul></div></div></div>',1),g=[h];function f(e,t){return(0,r.wg)(),(0,r.iD)("div",v,g)}var _=n(744);const w={},b=(0,_.Z)(w,[["render",f]]);var y=b;const x={class:"container"};var k={__name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(p),(0,r._)("div",x,[(0,r.Wm)(n)]),(0,r.Wm)(y)],64)}}};const S=k;var j=S,C=n(201),E=n(262),M=n(323);const H={class:"card",style:{"max-width":"fit-content"}},A={class:"card-body text-dark"},D=["src","alt"],P={class:"card-title"},O={class:"card-text"};var V={__name:"FeatureCharacter",props:{title:String,image:String,alt:String,cname:String},setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("div",H,[(0,r._)("div",A,[(0,r._)("img",{src:e.image,alt:e.alt,class:"card-img-top img-thumbnail",style:{"aspect-ratio":"1/1"}},null,8,D),(0,r._)("h6",P,(0,i.zw)(e.title),1),(0,r._)("p",O,(0,i.zw)(e.cname),1)])]))}};const L=V;var T=L;const F=[{id:1,cname:"Doctor Strange",name:"Stephen Strange",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_03.jpg"},{id:2,cname:"Wanda Maximoff",name:"Scarlet Witch",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_03.jpg"},{id:3,cname:"Wong",name:"Sorcerer Supreme",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/079wng_ons_crd_04.jpg"},{id:4,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg"},{id:5,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey03_ons_crd_01.jpg"},{id:6,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_crd_01.jpg"},{id:6,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_crd_01.jpg"},{id:6,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_crd_01.jpg"},{id:6,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_crd_01.jpg"},{id:6,cname:"Spider-Man",name:"Peter Parker",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey02_ons_crd_01.jpg"}],N=[{id:1,name:"America",cname:"AMERICA CHAVEZ",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/054mac_com_crd_01.jpg"},{id:2,name:"Moon Knight",cname:"MARC SPECTOR",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/343mkn_com_crd_01.jpg"},{id:1,name:"Jane Foster",cname:" ",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/246tjf_com_crd_01.jpg"},{id:1,name:"MS. Marvel",cname:"Kamala  Khan",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/038mmk_com_crd_01.jpg"},{id:1,name:"KHONSU",cname:"CHONS",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/1112khn_com_crd_01.jpg"},{id:1,name:"Morbius, The Living Vampire",cname:"Doctor Michael Morbius",image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/368mbs_com_crd_01.jpg"}];var W=n(336);const z=e=>((0,r.dD)("data-v-4609ff3b"),e=e(),(0,r.Cn)(),e),I={class:"container-fluid"},R={class:"row"},B=z((()=>(0,r._)("h1",null,"Feature Characters",-1))),K={class:"col d-flex justify-content-start overflow-auto"},U={class:"container-fluid"},Y={class:"row"},Z=z((()=>(0,r._)("h1",null,"Spotlight Characters",-1))),q={class:"col-12 d-flex justify-content-start overflow-auto"},G={key:0,class:"container-fluid"},Q={class:"row"},$={class:"col-12 d-flex flex-wrap justify-content-center"},J={key:1};var X={__name:"HomeView",setup(e){const{character:t,characterData:n}=(0,W.Z)();return n(),(e,n)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",I,[(0,r._)("div",R,[B,(0,r._)("div",K,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,E.SU)(F),(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col-4 col-sm-3 mb-3",key:e.id},[(0,r.Wm)(T,{image:e.image,alt:e.cname,title:e.name,cname:e.cname},null,8,["image","alt","title","cname"])])))),128))])])]),(0,r._)("div",U,[(0,r._)("div",Y,[Z,(0,r._)("div",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,E.SU)(N),(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col-4 col-sm-3 mb-3",key:e.id},[(0,r.Wm)(T,{image:e.image,alt:e.cname,title:e.name,cname:e.cname},null,8,["image","alt","title","cname"])])))),128))])])]),(0,E.SU)(t)?((0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("div",Q,[(0,r._)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,E.SU)(t),(e=>((0,r.wg)(),(0,r.j4)(M.Z,{key:e.id,path:{name:"character.show",params:{id:e.id}},image:`${e.thumbnail.path}.${e.thumbnail.extension}`,alt:e.name,title:e.name},null,8,["path","image","alt","title"])))),128))])])])):((0,r.wg)(),(0,r.iD)("div",J," Loading Please Wait..... "))],64))}};const ee=(0,_.Z)(X,[["__scopeId","data-v-4609ff3b"]]);var te=ee;const ne=[{path:"/",name:"home",component:te,meta:{title:"Marvel - Home",metaTags:[{name:"description",content:"The about page of our example app."},{property:"og:description",content:"The about page of our example app."}]}},{path:"/character",name:"character",component:()=>n.e(866).then(n.bind(n,866))},{path:"/character/:id",name:"character.show",component:()=>n.e(683).then(n.bind(n,683))},{path:"/comics",name:"comics",component:()=>n.e(123).then(n.bind(n,123))},{path:"/comics/:id",name:"comics.show",component:()=>n.e(483).then(n.bind(n,483))}],ae=(0,C.p7)({history:(0,C.PO)("/"),routes:ne});var re=ae;(0,a.ri)(j).use(re).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var c=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],i=e[d][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(o=!1,i<c&&(c=i));if(o){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,r,i]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{123:"d15e49d7",483:"021187dd",683:"14b20ae6",866:"3045c409"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{483:"8f7b47cf",683:"97179127"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-school-travel-app:";n.l=function(a,r,i,c){if(e[a])e[a].push(r);else{var o,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+i){o=m;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+i),o.src=a),e[a]=[r];var u=function(t,n){o.onerror=o.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=c,l.request=o,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var c=document.getElementsByTagName("style");for(a=0;a<c.length;a++){r=c[a],i=r.getAttribute("data-href");if(i===e||i===t)return r}},a=function(a){return new Promise((function(r,i){var c=n.miniCssF(a),o=n.p+c;if(t(c,o))return r();e(a,o,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={483:1,683:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=i);var c=n.p+n.u(t),o=new Error,l=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",o.name="ChunkLoadError",o.type=i,o.request=c,r[1](o)}};n.l(c,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,c=a[0],o=a[1],l=a[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(l)var d=l(n)}for(t&&t(a);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self["webpackChunkvue_school_travel_app"]=self["webpackChunkvue_school_travel_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(218)}));a=n.O(a)})();
//# sourceMappingURL=app.f638f8b2.js.map
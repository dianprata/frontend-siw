(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-19428422":"72bba58c","chunk-24591354":"a41c6a01","chunk-2691fefe":"be164081","chunk-2d0d8386":"271ad9dd","chunk-3c2926f4":"69d23470","chunk-59c47205":"d74d471e","chunk-6964c667":"6c526564","chunk-6fa9188e":"c343e9cf","chunk-2d22c341":"ed9a9a13","chunk-d2af6da0":"913b1569","chunk-7450f1b0":"a2b71adc","chunk-ba60824c":"04adcaa0","chunk-d31d9914":"c0c06739","chunk-d35552c4":"714b950c","chunk-d81aaf22":"cf7c58f8","chunk-e197466a":"40273738","chunk-e4aa6c74":"ba27e6c0","chunk-2d21a3d2":"653e5ac5","chunk-2d21e30b":"a22a1496"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6fa9188e":1,"chunk-d2af6da0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-19428422":"31d6cfe0","chunk-24591354":"31d6cfe0","chunk-2691fefe":"31d6cfe0","chunk-2d0d8386":"31d6cfe0","chunk-3c2926f4":"31d6cfe0","chunk-59c47205":"31d6cfe0","chunk-6964c667":"31d6cfe0","chunk-6fa9188e":"95227b95","chunk-2d22c341":"31d6cfe0","chunk-d2af6da0":"606f09f4","chunk-7450f1b0":"31d6cfe0","chunk-ba60824c":"31d6cfe0","chunk-d31d9914":"31d6cfe0","chunk-d35552c4":"31d6cfe0","chunk-d81aaf22":"31d6cfe0","chunk-e197466a":"31d6cfe0","chunk-e4aa6c74":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d21e30b":"31d6cfe0"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dff":function(e,t,n){"use strict";var a=n("2b0e"),r=n("fb9a"),o=n.n(r),i={primary:"#0f4c75",success:"#28C76F",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"},s={disableCustomizer:!1,disableThemeTour:!1,footerType:"static",hideScrollToTop:!1,mainLayoutType:"vertical",navbarColor:"#fff",navbarType:"floating",routerTransition:"fade-bottom",rtl:!1,sidebarCollapsed:!1,theme:"light",userInfoLocalStorageKey:"userInfo"};a["default"].use(o.a,{theme:{colors:i},rtl:s.rtl}),t["a"]=s},"3a10":function(e,t,n){},"3b0b":function(e,t,n){e.exports=n.p+"img/user-avatar.7cc7a630.png"},"41a6":function(e,t,n){},4363:function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.vueAppClasses,attrs:{id:"app"}},[n("router-view",{on:{setAppClasses:e.setAppClasses}})],1)},o=[],i=(n("96cf"),n("3b8d")),s=(n("4917"),n("1dff")),c={data:function(){return{vueAppClasses:[]}},watch:{"$store.state.theme":function(e){this.toggleClassInBody(e)},"$vs.rtl":function(e){document.documentElement.setAttribute("dir",e?"rtl":"ltr")}},methods:{toggleClassInBody:function(e){"dark"==e?(document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"),document.body.classList.add("theme-dark")):"semi-dark"==e?(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.classList.add("theme-semi-dark")):(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"))},setAppClasses:function(e){this.vueAppClasses.push(e)},handleWindowResize:function(){this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth),document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))},handleScroll:function(){this.$store.commit("UPDATE_WINDOW_SCROLL_Y",window.scrollY)}},mounted:function(){this.toggleClassInBody(s["a"].theme),this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth);var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$vs.rtl?"rtl":"ltr",document.documentElement.setAttribute("dir",t),window.addEventListener("resize",this.handleWindowResize),window.addEventListener("scroll",this.handleScroll);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),destroyed:function(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("scroll",this.handleScroll)}},l=c,u=n("2877"),d=Object(u["a"])(l,r,o,!1,null,null,null),f=d.exports,h=n("fb9a"),p=n.n(h),m=(n("c789"),n("04f2"),n("f7ba")),g=n("8c4f"),b=n("fcc2");a["default"].use(g["default"]);var v=new g["default"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"",component:function(){return Promise.all([n.e("chunk-6fa9188e"),n.e("chunk-2d22c341")]).then(n.bind(null,"f1dd"))},children:[{path:"/",name:"index",component:function(){return Promise.all([n.e("chunk-e4aa6c74"),n.e("chunk-2d21e30b")]).then(n.bind(null,"d504"))},meta:{rule:"public"}},{path:"/kontak",name:"contact",component:function(){return n.e("chunk-2d0d8386").then(n.bind(null,"79c1"))},meta:{rule:"public"}},{path:"/login",name:"page-login",component:function(){return n.e("chunk-3c2926f4").then(n.bind(null,"8b48"))},meta:{rule:"public"}},{path:"/login-admin",name:"page-login-admin",component:function(){return n.e("chunk-ba60824c").then(n.bind(null,"e68a"))},meta:{rule:"public"}},{path:"/pages/not-authorized",name:"page-not-authorized",component:function(){return n.e("chunk-d81aaf22").then(n.bind(null,"1331"))},meta:{rule:"public"}},{path:"/pages/error-404",name:"page-error-404",component:function(){return n.e("chunk-59c47205").then(n.bind(null,"c0ba"))},meta:{rule:"public"}}]},{path:"",component:function(){return Promise.all([n.e("chunk-6fa9188e"),n.e("chunk-d2af6da0")]).then(n.bind(null,"f135"))},children:[{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-e4aa6c74"),n.e("chunk-2d21a3d2")]).then(n.bind(null,"bb51"))},meta:{authRequired:!0,rule:"public",breadcrumb:[{title:"Home",active:!0}],pageTitle:"Home"}},{path:"/kritik-saran",name:"kritik-saran",component:function(){return n.e("chunk-19428422").then(n.bind(null,"6fef"))},meta:{authRequired:!0,rule:"resident",breadcrumb:[{title:"Home",url:"/home"},{title:"Kritik & Saran",active:!0}],pageTitle:"Kritik & Saran"}},{path:"/pengaduan",name:"pengaduan",component:function(){return n.e("chunk-d31d9914").then(n.bind(null,"0a3a"))},meta:{authRequired:!0,rule:"resident",breadcrumb:[{title:"Home",url:"/home"},{title:"Pengaduan",active:!0}],pageTitle:"Pengaduan"}},{path:"/kritik-saran-warga",name:"kritik-saran-warga",component:function(){return n.e("chunk-2691fefe").then(n.bind(null,"1268"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Kritik & Saran Warga",active:!0}],pageTitle:"Kritik & Saran Warga"}},{path:"/pengaduan-warga",name:"pengaduan-warga",component:function(){return n.e("chunk-7450f1b0").then(n.bind(null,"f612"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Pengaduan Warga",active:!0}],pageTitle:"Pengaduan Warga"}},{path:"/pengumuman",name:"pengumuman",component:function(){return n.e("chunk-e197466a").then(n.bind(null,"f260c"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Pengumuman",active:!0}],pageTitle:"Pengumuman"}},{path:"/penduduk",name:"penduduk",component:function(){return n.e("chunk-6964c667").then(n.bind(null,"e9e4"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Penduduk",active:!0}],pageTitle:"Penduduk"}},{path:"/penduduk/tambah",name:"tambah-penduduk",component:function(){return n.e("chunk-24591354").then(n.bind(null,"99f6"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Penduduk",url:"/penduduk"},{title:"Tambah Penduduk",active:!0}],pageTitle:"Tambah Penduduk",parent:"penduduk"}},{path:"/penduduk/edit/:id",name:"edit-penduduk",component:function(){return n.e("chunk-d35552c4").then(n.bind(null,"af67"))},meta:{authRequired:!0,rule:"admin",breadcrumb:[{title:"Home",url:"/home"},{title:"Penduduk",url:"/penduduk"},{title:"Edit Penduduk",active:!0}],pageTitle:"Edit Penduduk",parent:"penduduk"}}]},{path:"*",redirect:"/pages/error-404"}]});v.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")})),v.beforeEach((function(e,t,n){var a=localStorage.getItem("userInfo"),r=""===b["a"].AppActiveUser.role_id;return e.matched.some((function(e){return e.meta.authRequired}))&&(a&&!r||v.push({path:"/login"})),n()}));var C=v;a["default"].use(m["AclInstaller"]);var k="admin",y=JSON.parse(localStorage.getItem("userInfo"));y&&y.role&&(k=y.role.level);var _,j,x=new m["AclCreate"]({initial:k,notfound:"/pages/not-authorized",router:C,acceptLocalRules:!0,globalRules:{admin:new m["AclRule"]("admin").generate(),resident:new m["AclRule"]("resident").generate(),public:new m["AclRule"]("public").or("admin").or("resident").generate()}}),w=n("bb36"),A=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{mouseleave:e.mouseleavex,mouseenter:e.mouseenterx,mouseup:e.destroy}},[n("transition",{attrs:{name:"tooltip-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],ref:"vstooltip",staticClass:"vs-tooltip",class:["vs-tooltip-"+(e.positionx||e.position),"vs-tooltip-"+e.color,{"after-none":e.noneAfter}],style:e.style},[e.title?n("h4",[e._v(e._s(e.title))]):e._e(),e._v("\n      "+e._s(e.text)+"\n    ")])]),e._t("default")],2)}),T=[],E=(n("0b21"),n("c5f6"),{insertBody:function(e){document.body.insertBefore(e,document.body.firstChild)},removeBody:function(e){var t=document.body;t.removeChild(e)},changePosition:function(e,t,n){var a=0,r=0,o=0,i=window.pageYOffset||document.documentElement.scrollTop;e.getBoundingClientRect().top+300>=window.innerHeight?setTimeout((function(){a=n?e.getBoundingClientRect().top-t.clientHeight+i:e.getBoundingClientRect().top-t.clientHeight+e.clientHeight+i}),1):a=n?e.getBoundingClientRect().top+e.clientHeight+i+5:e.getBoundingClientRect().top+i,r=e.getBoundingClientRect().left,o=e.offsetWidth;var s={left:"".concat(r,"px"),top:"".concat(a,"px"),width:"".concat(o,"px")};return s}}),R=n("ee53"),S={name:"vx-tooltip",props:{title:{default:null,type:[String,Number]},text:{default:null,type:[String,Number]},color:{default:null,type:String},position:{default:"top",type:String},delay:{default:"0s",type:[Number,String]}},data:function(){return{cords:{},active:!1,widthx:"auto",positionx:null,noneAfter:!1}},computed:{style:function(){return{left:this.cords.left,top:this.cords.top,transitionDelay:this.active?this.delay:"0s",background:R["a"].getColor(this.color,1),width:this.widthx}}},methods:{mouseenterx:function(){var e=this;this.active=!0,this.$nextTick((function(){E.insertBody(e.$refs.vstooltip),e.changePosition(e.$refs.convstooltip,e.$refs.vstooltip)}))},mouseleavex:function(){this.active=!1},changePosition:function(e,t){this.noneAfter=!1,this.positionx=null;var n=e.closest(".con-vs-tooltip"),a=window.pageYOffset||document.documentElement.scrollTop,r=n.getBoundingClientRect().top+a-t.clientHeight-4,o=n.getBoundingClientRect().left-t.clientWidth/2+n.clientWidth/2,i=n.clientWidth;"bottom"==this.position?r=n.getBoundingClientRect().top+a+n.clientHeight+4:"left"==this.position?(o=n.getBoundingClientRect().left-t.clientWidth-4,r=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,-1==Math.sign(o)&&(o=n.getBoundingClientRect().left,r=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)):"right"==this.position&&(o=n.getBoundingClientRect().left+n.clientWidth+4,r=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,window.innerWidth-(o+t.clientWidth)<=20&&(o=n.getBoundingClientRect().left-t.clientWidth/2-10,r=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)),this.cords={left:"".concat(o,"px"),top:"".concat(r,"px"),width:"".concat(i,"px")}},destroy:function(){var e=this;this.active=!1,this.$nextTick((function(){e.active&&E.removeBody(e.$refs.vstooltip)}))}}},P=S,I=Object(u["a"])(P,A,T,!1,null,null,null),H=I.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({ref:"card",staticClass:"vx-card",class:[{"overflow-hidden":e.tempHidden},{"no-shadow":e.noShadow},{"rounded-none":e.noRadius},{"card-border":e.cardBorder},e.cardClasses],style:e.cardStyles},e.$listeners),[e.hasHeader?n("div",{staticClass:"vx-card__header"},[n("div",{staticClass:"vx-card__title"},[this.$props.title?n("h4",{class:e.titleClasses,style:e.titleStyles},[e._v(e._s(e.title))]):e._e(),this.$props.subtitle?n("h6",{class:e.subtitleClasses,style:e.subtitleStyles},[e._v(e._s(e.subtitle))]):e._e()]),e.hasAction?n("div",{staticClass:"vx-card__actions"},[e._t("actions",[(e.actionButtons||e.collapseAction||e.refreshContentAction||e.removeCardAction)&&!e.codeToggler?n("div",{staticClass:"vx-card__action-buttons"},[e.actionButtons||e.collapseAction?n("feather-icon",{staticClass:"ml-4",class:{rotate180:!e.isContentCollapsed},attrs:{icon:"ChevronUpIcon"},on:{click:e.toggleContent}}):e._e(),e.actionButtons||e.refreshContentAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"RotateCwIcon"},on:{click:e.refreshcard}}):e._e(),e.actionButtons||e.removeCardAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"XIcon"},on:{click:e.removeCard}}):e._e()],1):e._e(),e.codeToggler&&!e.actionButtons?n("div",{staticClass:"vx-card__code-toggler sm:block hidden"},[n("feather-icon",{class:{"border border-solid border-primary border-t-0 border-r-0 border-l-0":e.showCode},attrs:{icon:"CodeIcon"},on:{click:e.toggleCode}})],1):e._e()])],2):e._e()]):e._e(),n("div",{ref:"content",staticClass:"vx-card__collapsible-content vs-con-loading__container",class:[{collapsed:e.isContentCollapsed},{"overflow-hidden":e.tempHidden}],style:e.StyleItems},[e._t("no-body"),this.$slots.default?n("div",{staticClass:"vx-card__body"},[e._t("default")],2):e._e(),e._t("no-body-bottom"),this.$slots.footer?n("div",{staticClass:"vx-card__footer"},[e._t("footer")],2):e._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$slots.codeContainer,expression:"this.$slots.codeContainer"}],ref:"codeContainer",staticClass:"vx-card__code-container",class:{collapsed:!e.showCode},style:e.codeContainerStyles},[n("div",{staticClass:"code-content"},[n("prism",{key:e.$vs.rtl,attrs:{language:e.codeLanguage}},[e._t("codeContainer")],2)],1)])])},B=[],L=n("8d51"),M=n.n(L),N={name:"vx-card",props:{title:String,subtitle:String,actionButtons:{type:Boolean,default:!1},actionButtonsColor:{type:String,default:"success"},codeToggler:{type:Boolean,default:!1},noShadow:{default:!1,type:Boolean},noRadius:{default:!1,type:Boolean},cardBorder:{default:!1,type:Boolean},codeLanguage:{default:"markup",type:String},collapseAction:{default:!1,type:Boolean},refreshContentAction:{default:!1,type:Boolean},removeCardAction:{default:!1,type:Boolean},headerBackground:{default:"",type:String},cardBackground:{default:"",type:String},contentColor:{default:"",type:String},titleColor:{default:"",type:String},subtitleColor:{default:"#b8c2cc",type:String}},data:function(){return{isContentCollapsed:!1,showCode:!1,maxHeight:null,cardMaxHeight:null,codeContainerMaxHeight:"0px",tempHidden:!1}},computed:{hasAction:function(){return this.$slots.actions||this.actionButtons||this.collapseAction||this.refreshContentAction||this.removeCardAction||this.codeToggler},hasHeader:function(){return this.hasAction||this.title||this.subtitle},StyleItems:function(){return{maxHeight:this.maxHeight}},cardStyles:function(){var e={maxHeight:this.cardMaxHeight};return R["a"].isColor(this.cardBackground)||(e.background=R["a"].getColor(this.cardBackground)),R["a"].isColor(this.contentColor)||(e.color=R["a"].getColor(this.contentColor)),e},codeContainerStyles:function(){return{maxHeight:this.codeContainerMaxHeight}},cardClasses:function(){var e="";return R["a"].isColor(this.cardBackground)&&(e+=" bg-".concat(this.cardBackground)),R["a"].isColor(this.contentColor)&&(e+=" text-".concat(this.contentColor)),e.trim()},titleStyles:function(){return{color:R["a"].getColor(this.titleColor)}},titleClasses:function(){var e="";return R["a"].isColor(this.titleColor)&&(e+=" text-".concat(this.titleColor)),e.trim()},subtitleStyles:function(){var e={};return R["a"].isColor(this.subtitleColor)||(e.color=R["a"].getColor(this.subtitleColor)),e},subtitleClasses:function(){var e="";return R["a"].isColor(this.subtitleColor)&&(e+=" text-".concat(this.subtitleColor)),e.trim()}},methods:{toggleContent:function(){var e=this;this.$refs.content.style.overflow="hidden";var t=this.$refs.content.scrollHeight;"1.5rem"==this.maxHeight?(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="none",e.$refs.content.style.overflow=null}),300)):(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="1.5rem",e.$refs.content.style.overflow=null}),50)),this.isContentCollapsed=!this.isContentCollapsed,this.$emit("toggleCollapse",this.isContentCollapsed)},refreshcard:function(){this.$vs.loading({container:this.$refs.content,scale:.5}),this.tempHidden=!0,this.$emit("refresh",this)},removeRefreshAnimation:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;setTimeout((function(){e.$vs.loading.close(e.$refs.content),e.tempHidden=!1}),t)},removeCard:function(){var e=this,t=this.$refs.card.scrollHeight;this.cardMaxHeight="".concat(t,"px"),this.$el.style.overflow="hidden",setTimeout((function(){e.cardMaxHeight="0px"}),50),this.$emit("remove")},toggleCode:function(){var e=this;this.tempHidden=!0,this.showCode=!this.showCode;var t=this.$refs.codeContainer.scrollHeight;"0px"==this.codeContainerMaxHeight?(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="none",e.tempHidden=!1}),300)):(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="0px",e.tempHidden=!1}),150))}},components:{Prism:M.a}},$=N,D=(n("89b8"),Object(u["a"])($,O,B,!1,null,null,null)),U=D.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},e._l(e.list,(function(t,a){return n("li",{key:a,staticClass:"list__item"},[n("feather-icon",{staticClass:"w-5 h-5 mr-1",attrs:{icon:e.rtlSpecificIcon}}),n("span",{domProps:{innerHTML:e._s(t)}})],1)})),0)},z=[],V=(n("a481"),n("6762"),n("2fdb"),{name:"vx-list",props:{list:{type:Array,required:!0},icon:{type:String,default:"ChevronsRightIcon"}},computed:{rtlSpecificIcon:function(){var e=this.icon;return this.$vs.rtl&&(e.includes("Left")?e=e.replace("Left","Right"):e.includes("Right")&&(e=e.replace("Right","Left"))),e}}}),G=V,q=(n("dca1"),Object(u["a"])(G,W,z,!1,null,null,null)),Y=q.exports,F=function(e,t){var n=t._c;return n("div",{staticClass:"vx-breadcrumb",class:t.data.staticClass},[n("ul",{staticClass:"flex flex-wrap items-center"},[n("li",{staticClass:"inline-flex items-end"},[n("router-link",{attrs:{to:"/home"}},[n("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),n("span",{staticClass:"breadcrumb-separator mx-2"},[n("feather-icon",{attrs:{icon:t.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),t._l(t.props.route.meta.breadcrumb.slice(1,-1),(function(e,a){return n("li",{key:a,staticClass:"inline-flex items-center"},[e.url?n("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))]):n("span",{staticClass:"text-primary cursor-default"},[t._v(t._s(e.title))]),n("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[n("feather-icon",{attrs:{icon:t.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),n("li",{staticClass:"inline-flex"},[t.props.route.meta.breadcrumb.slice(-1)[0].active?n("span",{staticClass:"cursor-default"},[t._v(t._s(t.props.route.meta.breadcrumb.slice(-1)[0].title))]):t._e()])],2)])},K=[],J={name:"vx-breadcrumb"},X=J,Q=Object(u["a"])(X,F,K,!0,null,null,null),Z=Q.exports,ee=n("0a35"),te={functional:!0,name:"feather-icon",props:{icon:{required:!0},svgClasses:{type:[String,Object,Array],default:""},badge:{}},render:function(e,t){var n=t.props,a=t.data;a.staticClass?a.staticClass=a.staticClass+" feather-icon select-none relative":a.staticClass="feather-icon select-none relative";var r=e(ee[n.icon],{class:n.svgClasses}),o=e("span",{class:"feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center",style:"top: -7px; right: -5px"},[n.badge]),i=[r];return n.badge&&i.push(o),e("span",a,i)}},ne=te,ae=(n("9943"),Object(u["a"])(ne,_,j,!1,null,null,null)),re=ae.exports,oe=function(e,t){var n=t._c;return n("div",{staticClass:"vx-input-group flex",class:t.data.staticClass},[t.slots().prepend?n("div",{staticClass:"vx-input-group-prepend flex",class:t.props.prependClasses},[t._t("prepend")],2):t._e(),n("div",{staticClass:"vx-input-group-default flex-grow"},[t._t("default")],2),t.slots().append?n("div",{staticClass:"vx-input-group-append flex",class:t.props.appendClasses},[t._t("append")],2):t._e()])},ie=[],se={name:"vx-input-group",props:{prependClasses:{type:String},appendClasses:{type:String}}},ce=se,le=(n("a4fc"),Object(u["a"])(ce,oe,ie,!0,null,null,null)),ue=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vs-table",e._g(e._b({attrs:{data:e.data},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,r){return n("vs-tr",{key:r,attrs:{data:t}},[e._l(e.columns,(function(o,i){return n("vs-td",{key:i,attrs:{data:a[r].field}},[e._t(o.key,[e._v(e._s(t[o.key]))],{row:t,index:(e.table.meta.current_page-1)*e.table.meta.per_page+r+1})],2)})),n("template",{slot:"expand"},[e._t("expand-slot",null,{row:t})],2)],2)}))}}],null,!0)},"vs-table",e.$attrs,!1),e.$listeners),[n("template",{slot:"header"},[n("h3",[e._v(e._s(e.title))])]),n("template",{slot:"thead"},e._l(e.columns,(function(t,a){return n("vs-th",{key:a,attrs:{"sort-key":t.sortKey?t.sortKey:t.key}},[e._v("\n      "+e._s(e._f("capitalize")(t.label?t.label:t.key))+"\n    ")])})),1)],2)},fe=[],he={name:"VxTable",props:{table:{type:Object}},computed:{title:function(){return this.table.title},data:function(){return this.table.data},meta:function(){return this.table.meta},columns:function(){return this.table.columns}}},pe=he,me=Object(u["a"])(pe,de,fe,!1,null,"6ea7b493",null),ge=me.exports,be=n("fa33"),ve=n("4a7a"),Ce=n.n(ve);a["default"].component(H.name,H),a["default"].component(U.name,U),a["default"].component(Y.name,Y),a["default"].component(Z.name,Z),a["default"].component(re.name,re),a["default"].component(ue.name,ue),a["default"].component(ge.name,ge),a["default"].component("datepicker",be["a"]),Ce.a.props.components.default=function(){return{Deselect:{render:function(e){return e("feather-icon",{props:{icon:"XIcon",svgClasses:"w-4 h-4 mt-1"}})}},OpenIndicator:{render:function(e){return e("feather-icon",{props:{icon:"ChevronDownIcon",svgClasses:"w-5 h-5"}})}}}},a["default"].component("v-select",Ce.a);n("c1c3"),n("5aea");var ke=n("2f62"),ye={windowBreakPoint:function(e){return e.windowWidth>=1200?"xl":e.windowWidth>=992?"lg":e.windowWidth>=768?"md":e.windowWidth>=576?"sm":"xs"},scrollbarTag:function(e){return e.is_touch_device?"div":"VuePerfectScrollbar"}},_e=ye,je=(n("ac6a"),n("456d"),n("20d6"),{TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE:function(e,t){e.isVerticalNavMenuActive=t},TOGGLE_REDUCE_BUTTON:function(e,t){e.reduceButton=t},UPDATE_MAIN_LAYOUT_TYPE:function(e,t){e.mainLayoutType=t},UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN:function(e,t){e.verticalNavMenuItemsMin=t},UPDATE_VERTICAL_NAV_MENU_WIDTH:function(e,t){e.verticalNavMenuWidth=t},UPDATE_STARRED_PAGE:function(e,t){var n=e.navbarSearchAndPinList["pages"].data.findIndex((function(e){return e.url==t.url}));if(e.navbarSearchAndPinList["pages"].data[n].is_bookmarked=t.val,t.val)e.starredPages.push(e.navbarSearchAndPinList["pages"].data[n]);else{var a=e.starredPages.findIndex((function(e){return e.url==t.url}));e.starredPages.splice(a,1)}},ARRANGE_STARRED_PAGES_LIMITED:function(e,t){var n=e.starredPages.slice(10);e.starredPages=t.concat(n)},ARRANGE_STARRED_PAGES_MORE:function(e,t){var n=!1,a=e.starredPages[10],r=e.starredPages.slice(0,10);e.starredPages=r.concat(t),e.starredPages.slice(0,10).map((function(e){t.indexOf(e)>-1&&(n=!0)})),n||e.starredPages.splice(10,0,a)},TOGGLE_CONTENT_OVERLAY:function(e,t){e.bodyOverlay=t},UPDATE_PRIMARY_COLOR:function(e,t){e.themePrimaryColor=t},UPDATE_THEME:function(e,t){e.theme=t},UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},UPDATE_WINDOW_SCROLL_Y:function(e,t){e.scrollY=t},UPDATE_USER_INFO:function(e,t){for(var n=JSON.parse(localStorage.getItem("userInfo"))||e.AppActiveUser,a=0,r=Object.keys(t);a<r.length;a++){var o=r[a];null!=t[o]&&(e.AppActiveUser[o]=t[o],n[o]=t[o])}localStorage.setItem("userInfo",JSON.stringify(n)),w["a"].defaults.headers.common["Authorization"]="".concat(n?n.token:"")}}),xe=je,we={updateVerticalNavMenuWidth:function(e,t){var n=e.commit;n("UPDATE_VERTICAL_NAV_MENU_WIDTH",t)},updateStarredPage:function(e,t){var n=e.commit;n("UPDATE_STARRED_PAGE",t)},arrangeStarredPagesLimited:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_LIMITED",t)},arrangeStarredPagesMore:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_MORE",t)},toggleContentOverlay:function(e){var t=e.commit;t("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(e,t){var n=e.commit;n("UPDATE_THEME",t)},updateUserInfo:function(e,t){var n=e.commit;n("UPDATE_USER_INFO",t)},updateUserRole:function(e,t){var n=e.dispatch;t.aclChangeRole(t.userRole),n("updateUserInfo",{role:{level:t.userRole}})}},Ae=we;a["default"].use(ke["a"]);var Te=new ke["a"].Store({getters:_e,mutations:xe,state:b["a"],actions:Ae,strict:!1}),Ee=(n("28a5"),n("6b54"),n("6612")),Re=n.n(Ee),Se=n("c1df"),Pe=n.n(Se);a["default"].filter("capitalize",(function(e){if(!e)return"";e=e.toString();var t=e.split(" "),n=[];return t.forEach((function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);n.push(t)})),n.join(" ")})),a["default"].filter("title",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";if(!e)return"";e=e.toString();var n=e.split(t),a=[];return n.forEach((function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);a.push(t)})),a.join(" ")})),a["default"].filter("truncate",(function(e,t){return e.substring(0,t)})),a["default"].filter("tailing",(function(e,t){return e+t})),a["default"].filter("time",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var n=new Date(Date.parse(e)),a=n.getHours(),r=(n.getMinutes()<10?"0":"")+n.getMinutes();if(!t){var o=a>12?"AM":"PM";return a=a%12||12,a+":"+r+" "+o}return a+":"+r}})),a["default"].filter("date",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=String(e);var n=e.slice(8,10).trim(),a=e.slice(4,7).trim(),r=e.slice(11,15);return t?n+" "+a+" "+r:n+" "+a})),a["default"].filter("month",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=String(e);var n=/\w+\s(\w+)\s\d+\s(\d+)./;return t?n.exec(e)[1]+" "+n.exec(e)[2]:n.exec(e)[1]})),a["default"].filter("csv",(function(e){return e.join(", ")})),a["default"].filter("filter_tags",(function(e){return e.replace(/<\/?[^>]+(>|$)/g,"")})),a["default"].filter("k_formatter",(function(e){return e>999?(e/1e3).toFixed(1)+"k":e})),a["default"].filter("num_formatter",(function(e){var t=Re()(e).format("0,0");return t.split(",").join(".")})),a["default"].filter("date_filter",(function(e){return Pe.a.locale("id"),Pe()(e).format("ddd, DD-MM-YYYY hh:mm")}));var Ie=n("6591"),He=(n("c197"),n("84bf"),n("7bb1"));a["default"].use(p.a),a["default"].prototype.$http=w["a"],a["default"].use(Ie["VueHammer"]),a["default"].use(He["a"]),n("3a10"),a["default"].config.productionTip=!1,new a["default"]({router:C,store:Te,acl:x,render:function(e){return e(f)}}).$mount("#app")},"5aea":function(e,t,n){},"89b8":function(e,t,n){"use strict";var a=n("e8ae"),r=n.n(a);r.a},9943:function(e,t,n){"use strict";var a=n("4363"),r=n.n(a);r.a},a4fc:function(e,t,n){"use strict";var a=n("e84c"),r=n.n(a);r.a},bb36:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a),o=n("fcc2"),i="https://api.sip-poltek.xyz";r.a.defaults.headers.common["Authorization"]="".concat(o["a"].AppActiveUser.token?o["a"].AppActiveUser.token:""),t["a"]=r.a.create({baseURL:i})},c1c3:function(e,t,n){},dca1:function(e,t,n){"use strict";var a=n("41a6"),r=n.n(a);r.a},e84c:function(e,t,n){},e8ae:function(e,t,n){},ee53:function(e,t,n){"use strict";n("6762"),n("a481"),n("386d"),n("28a5");t["a"]={darken:function(e,t){var n=e.split(","),a=t<0?0:255,r=t<0?-1*t:t,o=parseInt(n[0].slice(4)),i=parseInt(n[1]),s=parseInt(n[2]);return"rgb("+(Math.round((a-o)*r)+o)+","+(Math.round((a-i)*r)+i)+","+(Math.round((a-s)*r)+s)+")"},getColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(/^[#]/.test(e)){var a=this.hexToRgb(e);e=1==t?"rgb(".concat(a.r,",").concat(a.g,",").concat(a.b,")"):"rgba(".concat(a.r,",").concat(a.g,",").concat(a.b,",").concat(t,")")}else/^rgba/.test(e)?-1!=e.search(/.([0-9]\))$/)||n||(e=e.replace(/.?([0-9]\))$/,"".concat(t,")"))):/^(rgb)/.test(e)&&1!=t&&(e=e.replace(/^(rgb)/,"rgba"),e=e.replace(/\)$/,",".concat(t,")")));return e},isColor:function(e){var t=["primary","secondary","success","danger","warning","dark","light"];return t.includes(e)},RandomColor:function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}return"rgb(".concat(e(0,255),",").concat(e(0,255),",").concat(e(0,255),")")},rColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^[#]/.test(e)){var n=this.hexToRgb(e);e="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(t,")")}else if(/^[rgb]/.test(e)){var a=e.split(")")[0];/^[rgba]/.test(e)?a+=")":(a.replace("rgb","rgba"),a+=",".concat(t,")")),e=a}var r=["primary","success","danger","warning","dark"];return e?/[#()]/.test(e)?e:r.includes(e)?"rgba(var(--".concat(e,"),").concat(t,")"):"rgba(var(--primary),".concat(t,")"):"rgba(var(--primary),".concat(t,")")},contrastColor:function(e){var t=e;if(/[#]/g.test(e)){var n=this.hexToRgb(e);t="rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}var a=t.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(","),r=(299*a[0]+587*a[1]+114*a[2])/1e3;return r>=128},setCssVariable:function(e,t){"undefined"!==typeof window&&document.documentElement.style.setProperty(e,t)},hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(function(e,t,n,a){return t+t+n+n+a+a}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},getVariable:function(e,t){return String(e.getPropertyValue(t)).trim()},changeColor:function(e){var t,n=["primary","success","danger","warning","dark"];if(n.includes(e)){var a=getComputedStyle(document.documentElement);t=this.getVariable(a,"--"+e)}else if(/[rgb()]/g.test(e))t=e.replace(/[rgb()]/g,"");else if(/[#]/g.test(e)){var r=this.hexToRgb(e);t="".concat(r.r,",").concat(r.g,",").concat(r.b)}else t="--"+e;return t}}},fcc2:function(e,t,n){"use strict";n("28a5"),n("456d"),n("ac6a");var a={pages:{key:"title",data:[{title:"Home",url:"/",icon:"HomeIcon",is_bookmarked:!1},{title:"Page 2",url:"/page2",icon:"FileIcon",is_bookmarked:!1}]}},r=n("1dff"),o={uid:0,displayName:"Admin",about:"Admin SIP",photoURL:n("3b0b"),status:"online",userRole:"admin",username:"admin",role_id:"",token:"",role:{level:"public"}},i=JSON.parse(localStorage.getItem("userInfo"))||{},s=function(){var e={};return Object.keys(o).forEach((function(t){e[t]=i[t]?i[t]:o[t]})),Object.keys(i).forEach((function(t){void 0===e[t]&&null!=i[t]&&(e[t]=i[t])})),e},c=function(){var e=" -webkit- -moz- -o- -ms- ".split(" "),t=function(e){return window.matchMedia(e).matches};if("ontouchstart"in window||window.DocumentTouch)return!0;var n=["(",e.join("touch-enabled),("),"heartz",")"].join("");return t(n)},l={AppActiveUser:s(),bodyOverlay:!1,isVerticalNavMenuActive:!0,is_touch_device:c(),mainLayoutType:r["a"].mainLayoutType||"vertical",navbarSearchAndPinList:a,reduceButton:r["a"].sidebarCollapsed,verticalNavMenuWidth:"default",verticalNavMenuItemsMin:!1,scrollY:0,starredPages:a["pages"].data.filter((function(e){return e.is_bookmarked})),theme:r["a"].theme||"light",themePrimaryColor:r["a"].primary,windowWidth:null};t["a"]=l}});
//# sourceMappingURL=app.125d79f7.js.map
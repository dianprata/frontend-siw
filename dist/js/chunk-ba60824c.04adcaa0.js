(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba60824c"],{"1f8b":function(e,a,t){e.exports=t.p+"img/login.d814adb7.png"},"74f4":function(e,a,t){"use strict";var s=t("bb36");a["a"]=s["a"]},a789:function(e,a,t){"use strict";var s=t("74f4");a["a"]={login:function(e){return s["a"].post("/api/auth/signin",e)},profile:function(){return s["a"].get("/api/auth/profile")},register:function(e){return s["a"].post("/api/auth/register",e)}}},e68a:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[s("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[s("vx-card",[s("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"vx-row no-gutter justify-center items-center"},[s("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[s("img",{staticClass:"mx-auto",attrs:{src:t("1f8b"),alt:"login"}})]),s("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[s("div",{staticClass:"p-8 login-tabs-container"},[s("div",{staticClass:"vx-card__title mb-6"},[s("h4",{staticClass:"mb-4"},[e._v("Login ADMIN")]),s("h6",[e._v("Selamat Datang di "),s("b",[e._v("SIP")])])]),s("form",{on:{keypress:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.login(a)}}},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"username","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Username"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("username")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),s("div",{staticClass:"flex flex-wrap justify-between my-5"},[s("vs-checkbox",{staticClass:"mb-3",model:{value:e.checkbox_remember_me,callback:function(a){e.checkbox_remember_me=a},expression:"checkbox_remember_me"}},[e._v("Ingat saya")])],1),s("vs-button",{staticClass:"w-full",attrs:{disabled:!e.validateForm},on:{click:e.login}},[e._v("Login")])],1)])])])])])],1)])},r=[],o=t("a789"),n={data:function(){return{username:"",password:"",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.username&&""!==this.password}},methods:{login:function(){var e=this;this.$vs.loading(),new Promise((function(a,t){var s={admin_login:!0,username:e.username,password:e.password};o["a"].login(s).then((function(s){s.data.data?(localStorage.setItem("userInfo",JSON.stringify(s.data.data)),e.$store.dispatch("updateUserRole",{aclChangeRole:e.$acl.change,userRole:s.data.data.role.level}),e.$store.commit("UPDATE_USER_INFO",s.data.data),e.$router.push("/home"),e.$vs.loading.close(),a(s)):(e.$vs.loading.close(),t({message:"Wrong Username or Password"}))})).catch((function(a){e.$vs.notify({title:"Login Gagal!",text:a.response.data.error_message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"}),e.$vs.loading.close(),t(a.response.data.error_message)}))}))},checkLogin:function(){return!localStorage.getItem("userInfo")||""===this.$store.state.AppActiveUser.role_id||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),this.$router.push("/home"),!1)}},mounted:function(){this.checkLogin()}},i=n,l=t("2877"),c=Object(l["a"])(i,s,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-ba60824c.04adcaa0.js.map
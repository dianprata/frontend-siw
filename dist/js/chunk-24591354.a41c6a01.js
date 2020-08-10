(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24591354"],{"5b8d":function(e,a,r){"use strict";var t=r("74f4");a["a"]={index:function(e){return t["a"].get("/api/head-family?".concat(e))},show:function(e){return t["a"].get("/api/head-family/".concat(e))},store:function(e){return t["a"].post("/api/head-family/store",e)},edit:function(e){return t["a"].put("/api/head-family/update",e)}}},"74f4":function(e,a,r){"use strict";var t=r("bb36");a["a"]=t["a"]},"99f6":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"w-full"},[r("vx-card",[r("vs-tabs",{model:{value:e.tabIndex,callback:function(a){e.tabIndex=a},expression:"tabIndex"}},[r("vs-tab",{attrs:{label:"Data Kartu Keluarga"}},[r("div",{staticClass:"head-family"},[r("h4",{staticClass:"my-4"},[e._v("Data Kepala Keluarga")]),r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col md:w-1/2 w-full"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:16",expression:"'required|digits:16'"}],staticClass:"w-full",attrs:{label:"Nomor Kartu Keluarga (NO KK)",name:"NO KK",danger:!!e.errors.first("NO KK"),"danger-text":e.errors.first("NO KK"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.head_family_nik,callback:function(a){e.$set(e.payload.head_family,"head_family_nik",a)},expression:"payload.head_family.head_family_nik"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nama",name:"Nama Kepala Keluarga",danger:!!e.errors.first("Nama Kepala Keluarga"),"danger-text":e.errors.first("Nama Kepala Keluarga"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.name,callback:function(a){e.$set(e.payload.head_family,"name",a)},expression:"payload.head_family.name"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Alamat",name:"Alamat Kepala Keluarga",danger:!!e.errors.first("Alamat Kepala Keluarga"),"danger-text":e.errors.first("Alamat Kepala Keluarga"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.address,callback:function(a){e.$set(e.payload.head_family,"address",a)},expression:"payload.head_family.address"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kode Pos",name:"Kode Pos",danger:!!e.errors.first("Kode Pos"),"danger-text":e.errors.first("Kode Pos"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.postal_code,callback:function(a){e.$set(e.payload.head_family,"postal_code",a)},expression:"payload.head_family.postal_code"}})],1)])]),r("div",{staticClass:"vx-col md:w-1/2 w-full"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kelurahan",name:"Kelurahan",danger:!!e.errors.first("Kelurahan"),"danger-text":e.errors.first("Kelurahan"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.kelurahan,callback:function(a){e.$set(e.payload.head_family,"kelurahan",a)},expression:"payload.head_family.kelurahan"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kecamatan",name:"Kecamatan",danger:!!e.errors.first("Kecamatan"),"danger-text":e.errors.first("Kecamatan"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.kecamatan,callback:function(a){e.$set(e.payload.head_family,"kecamatan",a)},expression:"payload.head_family.kecamatan"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kota",name:"Kota",danger:!!e.errors.first("Kota"),"danger-text":e.errors.first("Kota"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.city,callback:function(a){e.$set(e.payload.head_family,"city",a)},expression:"payload.head_family.city"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Provinsi",name:"Provinsi",danger:!!e.errors.first("Provinsi"),"danger-text":e.errors.first("Provinsi"),"val-icon-danger":"clear"},model:{value:e.payload.head_family.province,callback:function(a){e.$set(e.payload.head_family,"province",a)},expression:"payload.head_family.province"}})],1)])])])])]),r("vs-tab",{attrs:{label:"Data dalam Kartu Keluarga"}},[r("div",{staticClass:"resident"},[r("h4",{staticClass:"my-4"},[e._v("Data Penduduk")]),e._l(e.payload.resident,(function(a,t){return r("div",{key:t,staticClass:"vx-row"},[r("div",{staticClass:"w-full flex justify-between items-center px-4"},[r("h5",{class:{"mb-4":0===t}},[e._v("Penduduk "+e._s(t+1))]),r("div",{staticClass:"flex"},[1===e.tabIndex?r("vs-button",{class:{"mr-4":0!==t},attrs:{color:"success",icon:"add"},on:{click:e.addResident}}):e._e(),1===e.tabIndex&&0!==t?r("vs-button",{attrs:{color:"danger",icon:"remove"},on:{click:function(a){return e.removeFormResident(t)}}}):e._e()],1)]),r("div",{staticClass:"vx-col md:w-1/2 w-full"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:16",expression:"'required|digits:16'"}],staticClass:"w-full",attrs:{label:"Nomor Induk Kependudukan (NO NIK)",name:"Nomor Induk Kependudukan (NO NIK) "+(t+1),danger:!!e.errors.first("Nomor Induk Kependudukan (NO NIK) "+(t+1)),"danger-text":e.errors.first("Nomor Induk Kependudukan (NO NIK) "+(t+1)),"val-icon-danger":"clear"},model:{value:e.payload.resident[t].nik_id,callback:function(a){e.$set(e.payload.resident[t],"nik_id",a)},expression:"payload.resident[index].nik_id"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nama",name:"Nama",danger:!!e.errors.first("Nama"),"danger-text":e.errors.first("Nama"),"val-icon-danger":"clear"},model:{value:e.payload.resident[t].name,callback:function(a){e.$set(e.payload.resident[t],"name",a)},expression:"payload.resident[index].name"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("label",{staticClass:"vs-input--label"},[e._v("Jenis Kelamin")]),r("v-select",{attrs:{reduce:function(e){return e.key},options:e.genders},model:{value:e.payload.resident[t].gender,callback:function(a){e.$set(e.payload.resident[t],"gender",a)},expression:"payload.resident[index].gender"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{staticClass:"w-full",attrs:{label:"Alamat",name:"Alamat",disabled:!0,tabindex:"-1"},model:{value:e.payload.resident[t].address,callback:function(a){e.$set(e.payload.resident[t],"address",a)},expression:"payload.resident[index].address"}})],1)])]),r("div",{staticClass:"vx-col md:w-1/2 w-full"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mb-4"},[r("label",{staticClass:"vs-input--label"},[e._v("Agama")]),r("v-select",{attrs:{reduce:function(e){return e.key},options:e.religions},model:{value:e.payload.resident[t].religion,callback:function(a){e.$set(e.payload.resident[t],"religion",a)},expression:"payload.resident[index].religion"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("label",{staticClass:"vs-input--label"},[e._v("Pekerjaan")]),r("v-select",{attrs:{options:e.jobs},model:{value:e.payload.resident[t].occupation,callback:function(a){e.$set(e.payload.resident[t],"occupation",a)},expression:"payload.resident[index].occupation"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Tempat Lahir",name:"Tempat Lahir",danger:!!e.errors.first("Tempat Lahir"),"danger-text":e.errors.first("Tempat Lahir"),"val-icon-danger":"clear"},model:{value:e.payload.resident[t].birth_place,callback:function(a){e.$set(e.payload.resident[t],"birth_place",a)},expression:"payload.resident[index].birth_place"}})],1),r("div",{staticClass:"vx-col w-full mb-4"},[r("label",{staticClass:"vs-input--label"},[e._v("Tanggal Lahir")]),r("datepicker",{attrs:{language:e.languages["id"],format:"dd-MM-yyyy"},model:{value:e.payload.resident[t].birth_date,callback:function(a){e.$set(e.payload.resident[t],"birth_date",a)},expression:"payload.resident[index].birth_date"}})],1)])]),r("vs-divider")],1)}))],2)])],1),r("div",{staticClass:"action-button"},[0===e.tabIndex?r("vs-button",{staticClass:"mr-4",attrs:{disabled:!e.validKK},on:{click:function(a){e.tabIndex+=1}}},[e._v("Lanjut")]):r("vs-button",{staticClass:"mr-4",attrs:{disabled:!e.validKK},on:{click:e.submit}},[e._v("Submit")]),r("vs-button",{attrs:{color:"danger",type:"border"},on:{click:e.reset}},[e._v("Reset")])],1)],1)],1)},i=[],n=(r("7f7f"),r("ee9b")),s=r("5b8d"),l=r("c1df"),u=r.n(l),o={name:"Add",data:function(){return{form:{nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""},payload:{head_family:{head_family_nik:"",name:"",address:"",postal_code:"",kelurahan:"",kecamatan:"",city:"",province:""},resident:[{nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""}]},genders:[{key:"L",label:"Laki-Laki"},{key:"P",label:"Perempuan"}],religions:[{key:"Islam",label:"Islam"},{key:"Kristen",label:"Kristen"},{key:"Hindu",label:"Hindu"},{key:"Buddha",label:"Buddha"},{key:"Konghucu",label:"Konghucu"}],lastEducations:["TIDAK / BELUM SEKOLAH","BELUM TAMAT SD / SEDERAJAT","TAMAT SD / SEDERAJAT","SLTP / SEDERAJAT","SLTA / SEDERAJAT","DIPLOMA I / II","AKADEMI/ DIPLOMA III/S. MUDA","DIPLOMA IV/ STRATA I","STRATA II","STRATA III"],jobs:["Tidak Bekerja","Wiraswasta","Karyawan Swasta","PNS","Guru","Ibu Rumah Tangga","Pelajar/Mahasiswa","Lain-lain"],languages:n,tabIndex:0}},watch:{"payload.head_family.address":function(){this.fillAddress()}},computed:{validKK:function(){return""!==this.payload.head_family.head_family_nik&&""!==this.payload.head_family.name&&""!==this.payload.head_family.address&&""!==this.payload.head_family.postal_code&&""!==this.payload.head_family.kelurahan&&""!==this.payload.head_family.kecamatan&&""!==this.payload.head_family.city&&""!==this.payload.head_family.province}},methods:{submit:function(){var e=this;this.$vs.loading(),this.payload.resident.filter((function(e){return e.birth_date=u()(e.birth_date).format("YYYY-MM-DD")})),s["a"].store(this.payload).then((function(a){e.$vs.loading.close(),a.data.data&&(e.$vs.notify({title:"Berhasil",text:"Tambah Penduduk Berhasil !",color:"success",time:1500}),e.reset())})).catch((function(e){throw new Error(e)}))},addResident:function(){var e={nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""};this.payload.resident.push(e),this.fillAddress()},removeFormResident:function(e){this.payload.resident.splice(e,1)},fillAddress:function(){var e=this;this.payload.resident.map((function(a,r){e.payload.resident[r].address=e.payload.head_family.address}))},resetForm:function(){this.form.nik_id="",this.form.name="",this.form.gender="",this.form.religion="",this.form.address="",this.form.birth_place="",this.form.birth_date="",this.form.occupation=""},reset:function(){this.resetForm(),this.payload.resident=[],this.payload.resident.push(this.form),this.payload.head_family.head_family_nik="",this.payload.head_family.name="",this.payload.head_family.address="",this.payload.head_family.postal_code="",this.payload.head_family.kelurahan="",this.payload.head_family.kecamatan="",this.payload.head_family.city="",this.payload.head_family.province="",this.tabIndex=0}}},d=o,c=r("2877"),m=Object(c["a"])(d,t,i,!1,null,"cb11b400",null);a["default"]=m.exports},ee9b:function(e,a,r){"use strict";r.r(a),r.d(a,"af",(function(){return i})),r.d(a,"ar",(function(){return s})),r.d(a,"bg",(function(){return l})),r.d(a,"bs",(function(){return u})),r.d(a,"ca",(function(){return o})),r.d(a,"cs",(function(){return d})),r.d(a,"da",(function(){return c})),r.d(a,"de",(function(){return m})),r.d(a,"ee",(function(){return b})),r.d(a,"el",(function(){return v})),r.d(a,"en",(function(){return p})),r.d(a,"es",(function(){return f})),r.d(a,"fa",(function(){return h})),r.d(a,"fi",(function(){return g})),r.d(a,"fo",(function(){return y})),r.d(a,"fr",(function(){return k})),r.d(a,"ge",(function(){return M})),r.d(a,"gl",(function(){return A})),r.d(a,"he",(function(){return S})),r.d(a,"hr",(function(){return J})),r.d(a,"hu",(function(){return _})),r.d(a,"id",(function(){return x})),r.d(a,"is",(function(){return N})),r.d(a,"it",(function(){return D})),r.d(a,"ja",(function(){return T})),r.d(a,"kk",(function(){return O})),r.d(a,"ko",(function(){return j})),r.d(a,"lb",(function(){return F})),r.d(a,"lt",(function(){return I})),r.d(a,"lv",(function(){return P})),r.d(a,"mk",(function(){return z})),r.d(a,"mn",(function(){return R})),r.d(a,"nbNO",(function(){return $})),r.d(a,"nl",(function(){return q})),r.d(a,"pl",(function(){return G})),r.d(a,"ptBR",(function(){return B})),r.d(a,"ro",(function(){return V})),r.d(a,"ru",(function(){return H})),r.d(a,"sk",(function(){return U})),r.d(a,"slSI",(function(){return X})),r.d(a,"srCYRL",(function(){return W})),r.d(a,"sr",(function(){return Y})),r.d(a,"sv",(function(){return Q})),r.d(a,"th",(function(){return Z})),r.d(a,"tr",(function(){return ee})),r.d(a,"uk",(function(){return ae})),r.d(a,"ur",(function(){return te})),r.d(a,"vi",(function(){return ie})),r.d(a,"zh",(function(){return se})),r.d(a,"zhHK",(function(){return ue}));class t{constructor(e,a,r,t){this.language=e,this.months=a,this.monthsAbbr=r,this.days=t,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}get language(){return this._language}set language(e){if("string"!==typeof e)throw new TypeError("Language must be a string");this._language=e}get months(){return this._months}set months(e){if(12!==e.length)throw new RangeError(`There must be 12 months for ${this.language} language`);this._months=e}get monthsAbbr(){return this._monthsAbbr}set monthsAbbr(e){if(12!==e.length)throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);this._monthsAbbr=e}get days(){return this._days}set days(e){if(7!==e.length)throw new RangeError(`There must be 7 days for ${this.language} language`);this._days=e}}var i=new t("Afrikaans",["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."]);const n=new t("Arabic",["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]);n.rtl=!0;var s=n,l=new t("Bulgarian",["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],["Ян","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Ное","Дек"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]),u=new t("Bosnian",["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]),o=new t("Catalan",["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],["Diu","Dil","Dmr","Dmc","Dij","Div","Dis"]),d=new t("Czech",["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],["led","úno","bře","dub","kvě","čer","čec","srp","zář","říj","lis","pro"],["ne","po","út","st","čt","pá","so"]),c=new t("Danish",["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["Sø","Ma","Ti","On","To","Fr","Lø"]),m=new t("German",["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]),b=new t("Estonian",["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],["P","E","T","K","N","R","L"]),v=new t("Greek",["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάϊος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"]),p=new t("English",["January","February","March","April","May","June","July","August","September","October","November","December"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),f=new t("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]),h=new t("Persian",["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهم","اسف"],["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]),g=new t("Finnish",["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],["su","ma","ti","ke","to","pe","la"]),y=new t("Faroese",["Januar","Februar","Mars","Apríl","Mai","Juni","Juli","August","Septembur","Oktobur","Novembur","Desembur"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["Sun","Mán","Týs","Mik","Hós","Frí","Ley"]),k=new t("French",["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]),M=new t("Georgia",["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"]),A=new t("Galician",["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],["Xan","Feb","Mar","Abr","Mai","Xuñ","Xul","Ago","Set","Out","Nov","Dec"],["Dom","Lun","Mar","Mér","Xov","Ven","Sáb"]);const w=new t("Hebrew",["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],["א","ב","ג","ד","ה","ו","ש"]);w.rtl=!0;var S=w,J=new t("Croatian",["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]),_=new t("Hungarian",["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],["Jan","Febr","Márc","Ápr","Máj","Jún","Júl","Aug","Szept","Okt","Nov","Dec"],["Vas","Hét","Ke","Sze","Csü","Pén","Szo"]),x=new t("Indonesian",["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],["Min","Sen","Sel","Rab","Kam","Jum","Sab"]),N=new t("Icelandic",["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],["Jan","Feb","Mars","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],["Sun","Mán","Þri","Mið","Fim","Fös","Lau"]),D=new t("Italian",["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]);const K=new t("Japanese",["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],["日","月","火","水","木","金","土"]);K.yearSuffix="年",K.ymd=!0;var T=K,O=new t("Kazakh",["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],["Жк","Дй","Сй","Ср","Бй","Жм","Сн"]);const C=new t("Korean",["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],["일","월","화","수","목","금","토"]);C.yearSuffix="년",C.ymd=!0;var j=C,F=new t("Luxembourgish",["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."]);const L=new t("Lithuanian",["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"]);L.ymd=!0;var I=L,P=new t("Latvian",["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],["Sv","Pr","Ot","Tr","Ce","Pk","Se"]),z=new t("Macedonian",["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],["Нед","Пон","Вто","Сре","Чет","Пет","Саб"]);const E=new t("Mongolia",["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар"],["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"]);E.ymd=!0;var R=E,$=new t("Norwegian Bokmål",["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["Sø","Ma","Ti","On","To","Fr","Lø"]),q=new t("Dutch",["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],["zo","ma","di","wo","do","vr","za"]),G=new t("Polish",["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],["Nd","Pn","Wt","Śr","Czw","Pt","Sob"]),B=new t("Brazilian",["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]),V=new t("Romanian",["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],["D","L","Ma","Mi","J","V","S"]),H=new t("Russian",["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]),U=new t("Slovakian",["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],["ne","po","ut","st","št","pi","so"]),X=new t("Sloveian",["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]),W=new t("Serbian in Cyrillic script",["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"],["Нед","Пон","Уто","Сре","Чет","Пет","Суб"]),Y=new t("Serbian",["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sre","Čet","Pet","Sub"]),Q=new t("Swedish",["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]),Z=new t("Thai",["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],["อา","จ","อ","พ","พฤ","ศ","ส"]),ee=new t("Turkish",["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"]),ae=new t("Ukraine",["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],["Січ","Лют","Бер","Квіт","Трав","Чер","Лип","Серп","Вер","Жовт","Лист","Груд"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]);const re=new t("Urdu",["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"]);re.rtl=!0;var te=re,ie=new t("Vietnamese",["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],["T 01","T 02","T 03","T 04","T 05","T 06","T 07","T 08","T 09","T 10","T 11","T 12"],["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"]);const ne=new t("Chinese",["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["日","一","二","三","四","五","六"]);ne.yearSuffix="年";var se=ne;const le=new t("Chinese_HK",["壹月","贰月","叁月","肆月","伍月","陆月","柒月","捌月","玖月","拾月","拾壹月","拾贰月"],["壹月","贰月","叁月","肆月","伍月","陆月","柒月","捌月","玖月","拾月","拾壹月","拾贰月"],["日","壹","贰","叁","肆","伍","陆"]);le.yearSuffix="年";var ue=le}}]);
//# sourceMappingURL=chunk-24591354.a41c6a01.js.map
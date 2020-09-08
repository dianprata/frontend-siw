(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6ca6"],{"99f6":function(a,e,l){"use strict";l.r(e);var i=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"w-full"},[l("vx-card",[l("vs-tabs",{model:{value:a.tabIndex,callback:function(e){a.tabIndex=e},expression:"tabIndex"}},[l("vs-tab",{attrs:{label:"Data Kartu Keluarga"}},[l("div",{staticClass:"head-family"},[l("h4",{staticClass:"my-4"},[a._v("Data Kepala Keluarga")]),l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col md:w-1/2 w-full"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:16",expression:"'required|digits:16'"}],staticClass:"w-full",attrs:{label:"Nomor Kartu Keluarga (NO KK)",name:"NO KK",danger:!!a.errors.first("NO KK"),"danger-text":a.errors.first("NO KK"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.head_family_nik,callback:function(e){a.$set(a.payload.head_family,"head_family_nik",e)},expression:"payload.head_family.head_family_nik"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nama",name:"Nama Kepala Keluarga",danger:!!a.errors.first("Nama Kepala Keluarga"),"danger-text":a.errors.first("Nama Kepala Keluarga"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.name,callback:function(e){a.$set(a.payload.head_family,"name",e)},expression:"payload.head_family.name"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Alamat",name:"Alamat Kepala Keluarga",danger:!!a.errors.first("Alamat Kepala Keluarga"),"danger-text":a.errors.first("Alamat Kepala Keluarga"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.address,callback:function(e){a.$set(a.payload.head_family,"address",e)},expression:"payload.head_family.address"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kode Pos",name:"Kode Pos",danger:!!a.errors.first("Kode Pos"),"danger-text":a.errors.first("Kode Pos"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.postal_code,callback:function(e){a.$set(a.payload.head_family,"postal_code",e)},expression:"payload.head_family.postal_code"}})],1)])]),l("div",{staticClass:"vx-col md:w-1/2 w-full"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kelurahan",name:"Kelurahan",danger:!!a.errors.first("Kelurahan"),"danger-text":a.errors.first("Kelurahan"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.kelurahan,callback:function(e){a.$set(a.payload.head_family,"kelurahan",e)},expression:"payload.head_family.kelurahan"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kecamatan",name:"Kecamatan",danger:!!a.errors.first("Kecamatan"),"danger-text":a.errors.first("Kecamatan"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.kecamatan,callback:function(e){a.$set(a.payload.head_family,"kecamatan",e)},expression:"payload.head_family.kecamatan"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Kota",name:"Kota",danger:!!a.errors.first("Kota"),"danger-text":a.errors.first("Kota"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.city,callback:function(e){a.$set(a.payload.head_family,"city",e)},expression:"payload.head_family.city"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Provinsi",name:"Provinsi",danger:!!a.errors.first("Provinsi"),"danger-text":a.errors.first("Provinsi"),"val-icon-danger":"clear"},model:{value:a.payload.head_family.province,callback:function(e){a.$set(a.payload.head_family,"province",e)},expression:"payload.head_family.province"}})],1)])])])])]),l("vs-tab",{attrs:{label:"Data dalam Kartu Keluarga"}},[l("div",{staticClass:"resident"},[l("h4",{staticClass:"my-4"},[a._v("Data Penduduk")]),a._l(a.payload.resident,(function(e,i){return l("div",{key:i,staticClass:"vx-row"},[l("div",{staticClass:"w-full flex justify-between items-center px-4"},[l("h5",{class:{"mb-4":0===i}},[a._v("Penduduk "+a._s(i+1))]),l("div",{staticClass:"flex"},[1===a.tabIndex?l("vs-button",{class:{"mr-4":0!==i},attrs:{color:"success",icon:"add"},on:{click:a.addResident}}):a._e(),1===a.tabIndex&&0!==i?l("vs-button",{attrs:{color:"danger",icon:"remove"},on:{click:function(e){return a.removeFormResident(i)}}}):a._e()],1)]),l("div",{staticClass:"vx-col md:w-1/2 w-full"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:16",expression:"'required|digits:16'"}],staticClass:"w-full",attrs:{label:"Nomor Induk Kependudukan (NO NIK)",name:"Nomor Induk Kependudukan (NO NIK) "+(i+1),danger:!!a.errors.first("Nomor Induk Kependudukan (NO NIK) "+(i+1)),"danger-text":a.errors.first("Nomor Induk Kependudukan (NO NIK) "+(i+1)),"val-icon-danger":"clear"},model:{value:a.payload.resident[i].nik_id,callback:function(e){a.$set(a.payload.resident[i],"nik_id",e)},expression:"payload.resident[index].nik_id"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nama",name:"Nama",danger:!!a.errors.first("Nama"),"danger-text":a.errors.first("Nama"),"val-icon-danger":"clear"},model:{value:a.payload.resident[i].name,callback:function(e){a.$set(a.payload.resident[i],"name",e)},expression:"payload.resident[index].name"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("label",{staticClass:"vs-input--label"},[a._v("Jenis Kelamin")]),l("v-select",{attrs:{reduce:function(a){return a.key},options:a.genders},model:{value:a.payload.resident[i].gender,callback:function(e){a.$set(a.payload.resident[i],"gender",e)},expression:"payload.resident[index].gender"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{staticClass:"w-full",attrs:{label:"Alamat",name:"Alamat",disabled:!0,tabindex:"-1"},model:{value:a.payload.resident[i].address,callback:function(e){a.$set(a.payload.resident[i],"address",e)},expression:"payload.resident[index].address"}})],1)])]),l("div",{staticClass:"vx-col md:w-1/2 w-full"},[l("div",{staticClass:"vx-row"},[l("div",{staticClass:"vx-col w-full mb-4"},[l("label",{staticClass:"vs-input--label"},[a._v("Agama")]),l("v-select",{attrs:{reduce:function(a){return a.key},options:a.religions},model:{value:a.payload.resident[i].religion,callback:function(e){a.$set(a.payload.resident[i],"religion",e)},expression:"payload.resident[index].religion"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("label",{staticClass:"vs-input--label"},[a._v("Pekerjaan")]),l("v-select",{attrs:{options:a.jobs},model:{value:a.payload.resident[i].occupation,callback:function(e){a.$set(a.payload.resident[i],"occupation",e)},expression:"payload.resident[index].occupation"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Tempat Lahir",name:"Tempat Lahir",danger:!!a.errors.first("Tempat Lahir"),"danger-text":a.errors.first("Tempat Lahir"),"val-icon-danger":"clear"},model:{value:a.payload.resident[i].birth_place,callback:function(e){a.$set(a.payload.resident[i],"birth_place",e)},expression:"payload.resident[index].birth_place"}})],1),l("div",{staticClass:"vx-col w-full mb-4"},[l("label",{staticClass:"vs-input--label"},[a._v("Tanggal Lahir")]),l("datepicker",{attrs:{language:a.languages["id"],format:"dd-MM-yyyy"},model:{value:a.payload.resident[i].birth_date,callback:function(e){a.$set(a.payload.resident[i],"birth_date",e)},expression:"payload.resident[index].birth_date"}})],1)])]),l("vs-divider")],1)}))],2)])],1),l("div",{staticClass:"action-button"},[0===a.tabIndex?l("vs-button",{staticClass:"mr-4",attrs:{disabled:!a.validKK},on:{click:function(e){a.tabIndex+=1}}},[a._v("Lanjut")]):l("vs-button",{staticClass:"mr-4",attrs:{disabled:!a.validKK},on:{click:a.submit}},[a._v("Submit")]),l("vs-button",{attrs:{color:"danger",type:"border"},on:{click:a.reset}},[a._v("Reset")])],1)],1)],1)},t=[],s=(l("7f7f"),l("ee9b")),d=l("5b8d"),r=l("c1df"),n=l.n(r),o={name:"Add",data:function(){return{form:{nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""},payload:{head_family:{head_family_nik:"",name:"",address:"",postal_code:"",kelurahan:"",kecamatan:"",city:"",province:""},resident:[{nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""}]},genders:[{key:"L",label:"Laki-Laki"},{key:"P",label:"Perempuan"}],religions:[{key:"Islam",label:"Islam"},{key:"Kristen",label:"Kristen"},{key:"Hindu",label:"Hindu"},{key:"Buddha",label:"Buddha"},{key:"Konghucu",label:"Konghucu"}],lastEducations:["TIDAK / BELUM SEKOLAH","BELUM TAMAT SD / SEDERAJAT","TAMAT SD / SEDERAJAT","SLTP / SEDERAJAT","SLTA / SEDERAJAT","DIPLOMA I / II","AKADEMI/ DIPLOMA III/S. MUDA","DIPLOMA IV/ STRATA I","STRATA II","STRATA III"],jobs:["Tidak Bekerja","Wiraswasta","Karyawan Swasta","PNS","Guru","Ibu Rumah Tangga","Pelajar/Mahasiswa","Lain-lain"],languages:s,tabIndex:0}},watch:{"payload.head_family.address":function(){this.fillAddress()}},computed:{validKK:function(){return""!==this.payload.head_family.head_family_nik&&""!==this.payload.head_family.name&&""!==this.payload.head_family.address&&""!==this.payload.head_family.postal_code&&""!==this.payload.head_family.kelurahan&&""!==this.payload.head_family.kecamatan&&""!==this.payload.head_family.city&&""!==this.payload.head_family.province}},methods:{submit:function(){var a=this;this.$vs.loading(),this.payload.resident.filter((function(a){return a.birth_date=n()(a.birth_date).format("YYYY-MM-DD")})),d["a"].store(this.payload).then((function(e){a.$vs.loading.close(),e.data.data&&(a.$vs.notify({title:"Berhasil",text:"Tambah Penduduk Berhasil !",color:"success",time:1500}),a.reset())})).catch((function(a){throw new Error(a)}))},addResident:function(){var a={nik_id:"",name:"",gender:"",religion:"",address:"",birth_place:"",birth_date:"",occupation:""};this.payload.resident.push(a),this.fillAddress()},removeFormResident:function(a){this.payload.resident.splice(a,1)},fillAddress:function(){var a=this;this.payload.resident.map((function(e,l){a.payload.resident[l].address=a.payload.head_family.address}))},resetForm:function(){this.form.nik_id="",this.form.name="",this.form.gender="",this.form.religion="",this.form.address="",this.form.birth_place="",this.form.birth_date="",this.form.occupation=""},reset:function(){this.resetForm(),this.payload.resident=[],this.payload.resident.push(this.form),this.payload.head_family.head_family_nik="",this.payload.head_family.name="",this.payload.head_family.address="",this.payload.head_family.postal_code="",this.payload.head_family.kelurahan="",this.payload.head_family.kecamatan="",this.payload.head_family.city="",this.payload.head_family.province="",this.tabIndex=0}}},c=o,u=l("2877"),m=Object(u["a"])(c,i,t,!1,null,"cb11b400",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e6ca6.48a53988.js.map
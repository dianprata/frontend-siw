(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6964c667"],{"5b8d":function(t,e,a){"use strict";var n=a("74f4");e["a"]={index:function(t){return n["a"].get("/api/head-family?".concat(t))},show:function(t){return n["a"].get("/api/head-family/".concat(t))},store:function(t){return n["a"].post("/api/head-family/store",t)},edit:function(t){return n["a"].put("/api/head-family/update",t)}}},"74f4":function(t,e,a){"use strict";var n=a("bb36");e["a"]=n["a"]},e9e4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"md:mt-2 md:float-left text-right"},[a("vs-dropdown",{staticClass:"cursor-pointer sm:mr-3 mr-0 sm:mb-0 mb-3",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.paginationPageSize-(t.paginationPageSize-1))+" - "+t._s(t.table.meta.total_record-t.currentPage*t.paginationPageSize>0?t.currentPage*t.paginationPageSize:t.table.meta.total_record)+" of "+t._s(t.table.meta.total_record))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(5)}}},[a("span",[t._v("5")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(10)}}},[a("span",[t._v("10")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(25)}}},[a("span",[t._v("25")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(50)}}},[a("span",[t._v("50")])])],1)],1),a("vs-button",{attrs:{to:"/penduduk/tambah"}},[t._v("Tambah Penduduk")])],1),a("vx-table",{attrs:{search:"",table:t.table,"max-items":t.table.meta.per_page},scopedSlots:t._u([{key:"no",fn:function(e){return[t._v("\n      "+t._s(e.index)+"\n    ")]}},{key:"head_family_nik",fn:function(e){return[t._v("\n      "+t._s(e.row.head_family.head_family_nik)+"\n    ")]}},{key:"name",fn:function(e){return[t._v("\n      "+t._s(e.row.head_family.name)+"\n    ")]}},{key:"address",fn:function(e){return[t._v("\n      "+t._s(e.row.head_family.address)+"\n    ")]}},{key:"action",fn:function(e){return[a("vx-tooltip",{staticClass:"text-center",attrs:{text:"Edit Penduduk"}},[a("feather-icon",{attrs:{icon:"EditIcon"},on:{click:function(a){return t.editResident(e.row)}}})],1)]}},{key:"expand-slot",fn:function(e){return[a("vs-table",{staticClass:"text-dark",attrs:{data:e.row.resident},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,(function(e,n){return a("vs-tr",{key:n},[a("vs-td",[t._v("\n              "+t._s(n+1)+"\n            ")]),a("vs-td",{attrs:{data:e.nik_id}},[t._v("\n              "+t._s(e.nik_id)+"\n            ")]),a("vs-td",{attrs:{data:e.name}},[t._v("\n              "+t._s(e.name)+"\n            ")]),a("vs-td",{attrs:{data:e.gender}},[t._v("\n              "+t._s(e.gender)+"\n            ")]),a("vs-td",{attrs:{data:e.birth_place}},[t._v("\n              "+t._s(e.birth_place)+"\n            ")]),a("vs-td",{attrs:{data:e.birth_date}},[t._v("\n              "+t._s(e.birth_date)+"\n            ")]),a("vs-td",{attrs:{data:e.occupation}},[t._v("\n              "+t._s(e.occupation)+"\n            ")])],1)}))}}],null,!0)},[a("template",{slot:"thead"},[a("vs-th",[t._v("No")]),a("vs-th",[t._v("NIK")]),a("vs-th",[t._v("Nama Lengkap")]),a("vs-th",[t._v("Jenis Kelamin")]),a("vs-th",[t._v("Tempat Lahir")]),a("vs-th",[t._v("Tanggal Lahir")]),a("vs-th",[t._v("Pekerjaan")])],1)],2)]}}])}),a("vs-pagination",{staticClass:"mt-5",attrs:{total:t.totalPages},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},r=[],i=(a("c5f6"),a("5b8d")),s={name:"Residents",data:function(){return{table:{data:[],columns:[{key:"no",label:"No"},{key:"head_family_nik",label:"NO KK"},{key:"name",label:"Name Kepala Keluarga"},{key:"address",label:"Alamat"},{key:"action",label:"Aksi"}],meta:{},page:1,perPage:10}}},computed:{paginationPageSize:function(){return this.table.meta?this.table.meta.per_page:10},totalPages:function(){return this.table.meta?Number(this.table.meta.last_page):Number(0)},currentPage:{get:function(){return this.table.meta?this.table.meta.current_page:1},set:function(t){this.table.page=t,this.fetchResidents()}}},methods:{fetchResidents:function(){var t=this,e="page=".concat(this.table.page,"&perPage=").concat(this.table.perPage);i["a"].index(e).then((function(e){var a=e.data.data;t.table.data=a.record,t.table.meta=a.meta_pagination})).catch((function(t){throw new Error(t)}))},handlePerPage:function(t){this.table.perPage=t,this.fetchResidents()},editResident:function(t){this.$router.push("/penduduk/edit/".concat(t.head_family.id))}},created:function(){this.fetchResidents()}},o=s,d=a("2877"),c=Object(d["a"])(o,n,r,!1,null,"0c1b0292",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-6964c667.6c526564.js.map
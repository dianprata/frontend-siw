(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7450f1b0"],{"01e0":function(t,e,a){"use strict";var n=a("74f4");e["a"]={index:function(t){return n["a"].get("/api/complaint?".concat(t))},markIsPending:function(t){return n["a"].put("/api/complaint/mark-is-pending/".concat(t))},markIsRead:function(t){return n["a"].put("/api/complaint/mark-is-read/".concat(t))},markIsAcc:function(t){return n["a"].put("/api/complaint/mark-is-acc/".concat(t))},store:function(t){return n["a"].post("/api/complaint/store",t)}}},"74f4":function(t,e,a){"use strict";var n=a("bb36");e["a"]=n["a"]},f612:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sm:mt-2 sm:float-left text-right"},[a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.paginationPageSize-(t.paginationPageSize-1))+" - "+t._s(t.table.meta.total_record-t.currentPage*t.paginationPageSize>0?t.currentPage*t.paginationPageSize:t.table.meta.total_record)+" of "+t._s(t.table.meta.total_record))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(5)}}},[a("span",[t._v("5")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(10)}}},[a("span",[t._v("10")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(25)}}},[a("span",[t._v("25")])]),a("vs-dropdown-item",{on:{click:function(e){return t.handlePerPage(50)}}},[a("span",[t._v("50")])])],1)],1)],1),a("vx-table",{attrs:{search:"",table:t.table,"max-items":t.table.meta.per_page},scopedSlots:t._u([{key:"no",fn:function(e){return[t._v("\n      "+t._s(e.index)+"\n    ")]}},{key:"type",fn:function(e){return[t._v("\n      "+t._s(t._f("capitalize")(e.row.type))+"\n    ")]}},{key:"residentName",fn:function(e){return[t._v("\n      "+t._s(e.row.resident.name)+"\n    ")]}},{key:"created_at",fn:function(e){return[t._v("\n      "+t._s(t._f("date_filter")(e.row.created_at))+"\n    ")]}},{key:"status",fn:function(e){return[a("p",{staticClass:"text-center py-2 text-white",class:"acc"===e.row.status?"bg-success":"pending"===e.row.status?"bg-warning":"bg-danger"},[t._v("\n        "+t._s(t._f("filterStatus")(e.row.status))+"\n      ")])]}},{key:"aksi",fn:function(e){return[a("div",{staticClass:"flex justify-between"},[a("vx-tooltip",{staticClass:"text-center",attrs:{text:"Tunda Pegaduan"}},[a("feather-icon",{staticClass:"text-warning",attrs:{icon:"AlertCircleIcon"},on:{click:function(a){return t.changeStatus(e.row,"pending")}}})],1),a("vx-tooltip",{staticClass:"text-center",attrs:{text:"Terima Pengaduan"}},[a("feather-icon",{staticClass:"text-success",attrs:{icon:"CheckIcon"},on:{click:function(a){return t.changeStatus(e.row,"acc")}}})],1),a("vx-tooltip",{staticClass:"text-center",attrs:{text:"Tolak Pengaduan"}},[a("feather-icon",{staticClass:"text-danger",attrs:{icon:"XIcon"},on:{click:function(a){return t.changeStatus(e.row,"read")}}})],1)],1)]}},{key:"expand-slot",fn:function(e){return[a("div",[a("h6",{staticClass:"mb-3 font-bold text-white"},[t._v("Isi :")]),a("p",[t._v(t._s(e.row.body))])])]}}])}),a("vs-pagination",{staticClass:"mt-5",attrs:{total:t.totalPages},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},r=[],i=(a("c5f6"),a("01e0")),c={name:"ComplaintAdmin",filters:{filterStatus:function(t){return"pending"===t?"Ditunda":"acc"===t?"Diterima":"Ditolak"}},data:function(){return{table:{data:[],columns:[{key:"no",label:"No"},{key:"type",label:"Tipe"},{key:"residentName",sortKey:"resident.name",label:"Pengirim"},{key:"status",label:"Status"},{key:"created_at",label:"Tanggal Pengaduan"},{key:"aksi"}],meta:{},page:1,perPage:10}}},computed:{paginationPageSize:function(){return this.table.meta?this.table.meta.per_page:10},totalPages:function(){return this.table.meta?Number(this.table.meta.last_page):Number(0)},currentPage:{get:function(){return this.table.meta?this.table.meta.current_page:1},set:function(t){this.table.page=t,this.fetchComplaint()}}},methods:{fetchComplaint:function(){var t=this,e="page=".concat(this.table.page,"&perPage=").concat(this.table.perPage);i["a"].index(e).then((function(e){var a=e.data.data;a&&(t.table.data=a.record,t.table.meta=a.meta_pagination)})).catch((function(t){throw new Error(t)}))},changeStatus:function(t,e){var a=this;"pending"===e?i["a"].markIsPending(t.id).then((function(){a.$vs.notify({title:"Berhasil!",text:"",iconPack:"feather",icon:"icon-check-circle",color:"primary"}),a.fetchComplaint()})).catch((function(t){throw new Error(t)})):"acc"===e?i["a"].markIsAcc(t.id).then((function(){a.$vs.notify({title:"Berhasil!",text:"",iconPack:"feather",icon:"icon-check-circle",color:"primary"}),a.fetchComplaint()})).catch((function(t){throw new Error(t)})):i["a"].markIsRead(t.id).then((function(){a.$vs.notify({title:"Berhasil!",text:"",iconPack:"feather",icon:"icon-check-circle",color:"primary"}),a.fetchComplaint()})).catch((function(t){throw new Error(t)}))},handlePerPage:function(t){this.table.perPage=t,this.fetchComplaint()}},created:function(){this.fetchComplaint()}},o=c,s=a("2877"),l=Object(s["a"])(o,n,r,!1,null,"252b7a79",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7450f1b0.e410afba.js.map
<template>
  <div>
    <div class="sm:mt-2 sm:float-left text-right">
      <vs-dropdown vs-trigger-click class="cursor-pointer">
        <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
          <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ table.meta.total_record - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : table.meta.total_record }} of {{ table.meta.total_record }}</span>
          <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
        </div>
        <vs-dropdown-menu>
          <vs-dropdown-item @click="handlePerPage(5)">
            <span>5</span>
          </vs-dropdown-item>
          <vs-dropdown-item @click="handlePerPage(10)">
            <span>10</span>
          </vs-dropdown-item>
          <vs-dropdown-item @click="handlePerPage(25)">
            <span>25</span>
          </vs-dropdown-item>
          <vs-dropdown-item @click="handlePerPage(50)">
            <span>50</span>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>

      <vs-button class="sm:mb-0 mb-3 sm:ml-2 ml-0" @click="openPrompt" color="success">Export</vs-button>
      <vs-button class="sm:mb-0 mb-3 sm:ml-2 ml-0" @click="printCriticsAndSuggestion" color="success">Print</vs-button>
    </div>

    <vx-table search :table="table" :max-items="table.meta.per_page">
      <template v-slot:no="props">
        {{ props.index }}
      </template>
      <template v-slot:residentName="props">
        {{ props.row.resident.name }}
      </template>
      <template v-slot:created_at="props">
        {{ props.row.created_at | date_filter }}
      </template>
      <template v-slot:aksi="props">
        <vx-tooltip text="Tandai sudah dibaca"
                    class="text-center" v-if="props.row.is_read === 0">
          <feather-icon @click="markAsRead(props.row)" icon="MailIcon"></feather-icon>
        </vx-tooltip>
      </template>
      <template v-slot:expand-slot="props">
        <div>
          <h6 class="mb-3 font-bold text-white">Isi :</h6>
          <p>{{ props.row.body }}</p>
        </div>
      </template>
    </vx-table>
    <vs-pagination
        class="mt-5"
        :total="totalPages"
        v-model="currentPage" />
    <vs-prompt title="Export To Excel" class="export-options" @cancel="clearFields" @accept="exportData" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
      <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
      <v-select v-model="selectedType" :options="types" class="my-4" />
      <v-select v-model="selectedFormat" :options="formats" class="my-4" />
    </vs-prompt>
    <div id="printCriticsAndSuggestion" v-show="false">
      <table class="table">
        <thead class="thead-light">
        <tr>
          <th scope="col" v-for="(data, index) in headerTitleComplaint" :key="index">
            {{ data }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(dataData, indexData) in dataArr" :key="indexData">
          <td v-for="(data, index) in dataData" :key="index">{{ data }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import criticsSuggest from "../../http/criticsSuggest";
  import xlsxHelper from "../../helper/xlsxHelper";
  import {saveAs} from "file-saver";
  import moment from "moment";

  export default {
    name: "CriticsSuggestAdmin",
    data() {
      return {
        table: {
          data: [],
          columns: [
            { key: 'no', label: 'No' },
            { key: 'residentName', sortKey: 'resident.name', label: 'Pengirim' },
            { key: 'subject', label: 'Judul' },
            { key: 'created_at', label: 'Tanggal Kritik Saran' },
            { key: 'aksi' }
          ],
          meta: {},
          page: 1,
          perPage: 10
        },
        activePrompt: false,
        dataExcel: [],
        dataArr: [],
        fileName: '',
        formats: ["xlsx", "csv"],
        selectedFormat: 'xlsx',
        types: ['Kritik dan Saran Warga'],
        selectedType: 'Kritik dan Saran Warga',
        cellAutoWidth: true,
        headerTitleComplaint: ['Pengirim', 'Judul', 'Isi', 'Tanggal Pengaduan'],
        isFetchedPrintData: false
      }
    },
    computed: {
      paginationPageSize() {
        if(this.table.meta) return this.table.meta.per_page
        else return 10
      },
      totalPages() {
        if(this.table.meta) return Number(this.table.meta.last_page)
        else return Number(0);
      },
      currentPage: {
        get() {
          if(this.table.meta) return this.table.meta.current_page
          else return 1
        },
        set(val) {
          this.table.page = val;
          this.fetchCriticsSuggest();
        }
      }
    },
    methods: {
      clearFields() {
        this.fileName = '';
        this.cellAutoWidth = true;
        this.selectedFormat = 'xlsx';
        this.selectedType = 'Kritik dan Saran Warga';
      },
      fetchDataExcel() {
        const params = `perPage=${this.table.meta.total_record}`;
        this.$vs.loading();
        criticsSuggest.index(params)
          .then((res) => {
            const { data } = res.data;
            this.dataExcel = data.record;
            this.activePrompt = true;
            this.$vs.loading.close();
          }).catch((err) => {
          throw new Error(err);
        });
      },
      openPrompt() {
        if(this.table.meta.hasOwnProperty('total_record')) {
          this.fetchDataExcel();
        } else {
          this.$vs.notify({
            title: 'Ekspor Data',
            text: 'Mohon tunggu beberapa saat hingga datatables selesai load data!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          });
        }
      },
      exportData() {
       try {
         const list = this.dataExcel;
         const data = this.formatArray(list);
         const headData = this.headerTitleComplaint;
         if(this.selectedFormat === 'xlsx') {
           const excel = xlsxHelper.exportExcel([headData], [data]);
           saveAs(new Blob([excel],{type: "application/octet-stream"}), `${this.fileName}.xlsx`);

         } else {
           const csv = xlsxHelper.exportCsv([headData], [data]);
           csv.map((obj, index) => {
             saveAs(new Blob([obj],{type: "application/octet-stream"}), `${this.fileName}-sheet${index+1}.csv`)
           })
         }
         this.clearFields();
       } catch (e) {
         console.log(e);
       }
      },
      formatArray(jsonData) {
        moment.locale('id');
        return jsonData.map((obj) => {
          return [
            obj.resident.name,
            obj.subject,
            obj.body,
            moment(obj.created_at).format('ddd, DD-MM-YYYY hh:mm')
          ]
        })
      },
      fetchCriticsSuggest() {
        const params = `page=${this.table.page}&perPage=${this.table.perPage}`;
        criticsSuggest.index(params)
          .then((res) => {
            const { data } = res.data;
            if(data) {
              this.table.data = data.record;
              this.table.meta = data.meta_pagination;

              const params = `perPage=${this.table.meta.total_record}`;
              criticsSuggest.index(params)
                .then((res) => {
                  const { data } = res.data;
                  this.dataExcel = data.record;
                  const list = this.dataExcel;
                  this.dataArr = this.formatArray(list);
                  this.isFetchedPrintData = true;
                }).catch((err) => {
                throw new Error(err);
              });
            }
          }).catch((err) => {
            throw new Error(err);
        });
      },
      printCriticsAndSuggestion() {
        if(this.isFetchedPrintData) {
          this.$htmlToPaper('printCriticsAndSuggestion');
        } else {
          this.$vs.notify({
            title: 'Ekspor Data',
            text: 'Mohon tunggu beberapa saat hingga datatables selesai load data!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          });
        }
      },
      markAsRead(data) {
        if(data.is_read === 0) {
          criticsSuggest.markAsRead(data.id)
            .then(() => {
              this.$vs.notify({
                title: 'Berhasil!',
                text: '',
                iconPack: 'feather',
                icon: 'icon-check-circle',
                color: 'primary'
              });
              this.fetchCriticsSuggest();
            }).catch((err) => {
            throw new Error(err);
          })
        }
      },
      handlePerPage(perPage) {
        this.table.perPage = perPage;
        this.fetchCriticsSuggest();
      },
    },
    created() {
      this.fetchCriticsSuggest();
    }
  }
</script>

<style scoped>

</style>

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
    </div>

    <vx-table search :table="table" :max-items="table.meta.per_page">
      <template v-slot:no="props">
        {{ props.index }}
      </template>
      <template v-slot:type="props">
        {{ props.row.type | capitalize }}
      </template>
      <template v-slot:residentName="props">
        {{ props.row.resident.name }}
      </template>
      <template v-slot:created_at="props">
        {{ props.row.created_at | date_filter }}
      </template>
      <template v-slot:status="props">
        <p class="text-center py-2 text-white" :class="props.row.status === 'acc' ? 'bg-success' : props.row.status === 'pending' ? 'bg-warning' : 'bg-danger'">
          {{ props.row.status | filterStatus }}
        </p>
      </template>
      <template v-slot:aksi="props">
        <div class="flex justify-between">
          <vx-tooltip text="Tunda Pegaduan"
                      class="text-center">
            <feather-icon @click="changeStatus(props.row, 'pending')" icon="AlertCircleIcon" class="text-warning"></feather-icon>
          </vx-tooltip>
          <vx-tooltip text="Terima Pengaduan"
                      class="text-center">
            <feather-icon @click="changeStatus(props.row, 'acc')" icon="CheckIcon" class="text-success"></feather-icon>
          </vx-tooltip>
          <vx-tooltip text="Tolak Pengaduan"
                      class="text-center">
            <feather-icon @click="changeStatus(props.row, 'read')" icon="XIcon" class="text-danger"></feather-icon>
          </vx-tooltip>
        </div>
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
  </div>
</template>

<script>
  import complaint from "../../http/complaint";
  import xlsxHelper from "../../helper/xlsxHelper";
  import {saveAs} from "file-saver";
  import moment from 'moment';

  export default {
    name: "ComplaintAdmin",
    filters: {
      filterStatus(value) {
        if(value === 'pending') {
          return 'Ditunda';
        } else if(value === 'acc') {
          return 'Diterima';
        } else {
          return 'Ditolak';
        }
      }
    },
    data() {
      return {
        table: {
          data: [],
          columns: [
            { key: 'no', label: 'No' },
            { key: 'type', label: 'Tipe' },
            { key: 'residentName', sortKey: 'resident.name', label: 'Pengirim' },
            { key: 'status', label: 'Status' },
            { key: 'created_at', label: 'Tanggal Pengaduan' },
            { key: 'aksi' }
          ],
          meta: {},
          page: 1,
          perPage: 10
        },
        activePrompt: false,
        dataExcel: [],
        fileName: '',
        formats: ["xlsx", "csv"],
        selectedFormat: 'xlsx',
        types: ['Pengaduan Warga'],
        selectedType: 'Pengaduan Warga',
        cellAutoWidth: true,
        headerTitleComplaint: ['Pengirim', 'Tipe', 'Isi', 'Status', 'Tanggal Pengaduan'],
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
          this.fetchComplaint();
        }
      }
    },
    methods: {
      fetchDataExcel() {
        const params = `perPage=${this.table.meta.total_record}`;
        this.$vs.loading();
        complaint.index(params)
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
        if (this.table.meta) {
          this.fetchDataExcel();
        }
      },
      clearFields() {
        this.fileName = '';
        this.cellAutoWidth = true;
        this.selectedFormat = 'xlsx';
        this.selectedType = 'Kartu Keluarga';
      },
      exportData() {
        const list = this.dataExcel;
        const data = this.formatJson(list);
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
      },
      formatJson(jsonData) {
        moment.locale('id');
        return jsonData.map((obj) => {
          return [
            obj.resident.name,
            obj.type,
            obj.body,
            obj.status,
            moment(obj.created_at).format('ddd, DD-MM-YYYY hh:mm')
          ]
        })
      },
      fetchComplaint() {
        const params = `page=${this.table.page}&perPage=${this.table.perPage}`;
        complaint.index(params)
          .then((res) => {
            const { data } = res.data;
            if(data) {
              this.table.data = data.record;
              this.table.meta = data.meta_pagination;
            }
          }).catch((err) => {
          throw new Error(err);
        });
      },
      changeStatus(data, status) {
        if(status === 'pending') {
          complaint.markIsPending(data.id)
            .then(() => {
              this.$vs.notify({
                title: 'Berhasil!',
                text: '',
                iconPack: 'feather',
                icon: 'icon-check-circle',
                color: 'primary'
              });
              this.fetchComplaint();
            }).catch((err) => {
            throw new Error(err);
          })
        } else if(status === 'acc') {
          complaint.markIsAcc(data.id)
            .then(() => {
              this.$vs.notify({
                title: 'Berhasil!',
                text: '',
                iconPack: 'feather',
                icon: 'icon-check-circle',
                color: 'primary'
              });
              this.fetchComplaint();
            }).catch((err) => {
            throw new Error(err);
          })
        } else {
          complaint.markIsRead(data.id)
            .then(() => {
              this.$vs.notify({
                title: 'Berhasil!',
                text: '',
                iconPack: 'feather',
                icon: 'icon-check-circle',
                color: 'primary'
              });
              this.fetchComplaint();
            }).catch((err) => {
            throw new Error(err);
          })
        }
      },
      handlePerPage(perPage) {
        this.table.perPage = perPage;
        this.fetchComplaint();
      },
    },
    created() {
      this.fetchComplaint();
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="md:mt-2 md:float-left text-right">
      <vs-dropdown vs-trigger-click class="cursor-pointer sm:mr-3 mr-0 sm:mb-0 mb-3">
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

      <vs-button to="/penduduk/tambah" class="sm:mb-0 mb-3 sm:mr-2 mr-0">Tambah Penduduk</vs-button>
      <vs-button @click="openPrompt" color="success" class="sm:mb-0 mb-3 sm:mr-2 mr-0">Export</vs-button>
      <vs-button @click="printKK" color="success" class="sm:mb-0 mb-3 sm:mr-2 mr-0">Print KK</vs-button>
      <vs-button @click="printSP" color="success">Print Seluruh Penduduk</vs-button>
    </div>

    <vx-table search :table="table" :max-items="table.meta.per_page">
      <template #no="props">
        {{ props.index }}
      </template>
      <template #head_family_nik="props">
        {{ props.row.head_family.head_family_nik }}
      </template>
      <template #name="props">
        {{ props.row.head_family.name }}
      </template>
      <template #address="props">
        {{ props.row.head_family.address }}
      </template>
      <template #action="props">
        <vx-tooltip text="Edit Penduduk" class="text-center">
          <feather-icon @click="editResident(props.row)" icon="EditIcon"></feather-icon>
        </vx-tooltip>
      </template>

      <template #expand-slot="props">
        <vs-table :data="props.row.resident" class="text-dark">
          <template slot="thead">
            <vs-th>No</vs-th>
            <vs-th>NIK</vs-th>
            <vs-th>Nama Lengkap</vs-th>
            <vs-th>Jenis Kelamin</vs-th>
            <vs-th>Tempat Lahir</vs-th>
            <vs-th>Tanggal Lahir</vs-th>
            <vs-th>Pekerjaan</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
              <vs-td>
                {{ indextr+1 }}
              </vs-td>
              <vs-td :data="tr.nik_id">
                {{tr.nik_id}}
              </vs-td>
              <vs-td :data="tr.name">
                {{tr.name}}
              </vs-td>
              <vs-td :data="tr.gender">
                {{tr.gender}}
              </vs-td>
              <vs-td :data="tr.birth_place">
                {{tr.birth_place}}
              </vs-td>
              <vs-td :data="tr.birth_date">
                {{tr.birth_date}}
              </vs-td>
              <vs-td :data="tr.occupation">
                {{tr.occupation}}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
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
    <div id="printKK" v-show="false">
      <table class="table">
        <thead class="thead-light">
        <tr>
          <th scope="col" v-for="(data, index) in headerTitleKK" :key="index">
            {{ data }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(dataKK, indexKK) in kkArr" :key="indexKK">
          <td v-for="(data, index) in dataKK" :key="index">{{ data }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="printSP" v-show="false">
      <table class="table">
        <thead class="thead-light">
        <tr>
          <th scope="col" v-for="(data, index) in headerTitleSP" :key="index">
            {{ data }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(dataKK, indexKK) in spArr" :key="indexKK">
          <td v-for="(data, index) in dataKK" :key="index">{{ data }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import resident from "@/http/resident";
  import {saveAs} from 'file-saver'
  import xlsxHelper from "../../../helper/xlsxHelper";

  export default {
    name: "Residents",
    data: () => ({
      table: {
        data: [],
        columns: [
          { key: 'no', label: 'No' },
          { key: 'head_family_nik', label: 'NO KK' },
          { key: 'name', label: 'Nama Kepala Keluarga' },
          { key: 'address', label: 'Alamat' },
          { key: 'action', label: 'Aksi' }
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
      types: ['Kartu Keluarga', 'Seluruh Penduduk'],
      selectedType: 'Kartu Keluarga',
      cellAutoWidth: true,
      headerTitleKK: ['NIK KK', 'Nama Kepala Keluarga', 'Alamat', 'Kelurahan', 'Kecamatan', 'Kota', 'Provinsi'],
      headerValKK: ['head_family_nik', 'name', 'address', 'kelurahan', 'kecamatan', 'city', 'province'],
      kkArr: [],
      headerTitleSP: ['NIK', 'Nama', 'Alamat', 'Jenis Kelamin', 'Tempat Lahir', 'Tanggal Lahir', 'Agama', 'Pekerjaan'],
      headerValSP: ['nik_id', 'name', 'address', 'gender', 'birth_place', 'birth_date', 'religion', 'occupation'],
      spArr: [],
      isFetchedPrintData: false
    }),
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
          this.fetchResidents();
        }
      },
    },
    methods: {
      fetchResidents() {
        const params = `page=${this.table.page}&perPage=${this.table.perPage}`;
        resident.index(params)
          .then((res) => {
            const { data } = res.data;
            this.table.data = data.record;
            this.table.meta = data.meta_pagination;

            const params = `perPage=${this.table.meta.total_record}`;
            resident.index(params)
              .then(async (res) => {
                const { data } = res.data;
                this.dataExcel = data.record;
                const list = this.dataExcel;
                this.selectedType = 'Kartu Keluarga';
                this.kkArr = await this.formatArray(this.headerValKK, list);
                this.selectedType = 'Seluruh Penduduk';
                this.spArr = await this.formatArray(this.headerValSP, list);
                this.selectedType = 'Kartu Keluarga';
                this.isFetchedPrintData = true;
              }).catch((err) => {
              throw new Error(err);
            });
          }).catch((err) => {
          throw new Error(err);
        });
      },
      fetchDataExcel() {
        const params = `perPage=${this.table.meta.total_record}`;
        this.$vs.loading();
        resident.index(params)
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
      printKK() {
        if(this.isFetchedPrintData) {
          this.$htmlToPaper('printKK');
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
      printSP() {
        if(this.isFetchedPrintData) {
          this.$htmlToPaper('printSP');
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
          const data = this.formatArray(this.selectedType === 'Kartu Keluarga' ? this.headerValKK : this.headerValSP, list);
          const headData = this.selectedType === 'Kartu Keluarga' ? this.headerTitleKK : this.headerTitleSP;
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
      formatArray(filter, jsonData) {
        if(this.selectedType === 'Kartu Keluarga') {
          return jsonData.map(v => filter.map(j => {
            return v.head_family[j];
          }))
        } else {
          let data = [];
          jsonData.map(v => {
            v.resident.map(r => {
              data.push(r);
            })
          });
          return data.map(d => filter.map(j => {
            return d[j];
          }))
        }
      },
      clearFields() {
        this.fileName = '';
        this.cellAutoWidth = true;
        this.selectedFormat = 'xlsx';
        this.selectedType = 'Kartu Keluarga';
      },
      handlePerPage(perPage) {
        this.table.perPage = perPage;
        this.fetchResidents();
      },
      editResident(data) {
        this.$router.push(`/penduduk/edit/${data.head_family.id}`);
      }
    },
    created() {
      this.fetchResidents();
    }
  }
</script>

<style scoped>

</style>

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

      <vs-button to="/penduduk/tambah">Tambah Penduduk</vs-button>
    </div>

    <vx-table search :table="table" :max-items="table.meta.per_page">
      <template v-slot:no="props">
        {{ props.index }}
      </template>
    </vx-table>
    <vs-pagination
        class="mt-5"
        :total="totalPages"
        v-model="currentPage" />
  </div>
</template>

<script>
  export default {
    name: "Residents",
    data: () => ({
      table: {
        data: [],
        columns: [
          { key: 'no', label: 'No' },
          { key: 'nik', label: 'NIK' },
          { key: 'name', label: 'Name Lengkap' },
          { key: 'gender', label: 'Jenis Kelamin' },
          { key: 'place_of_birth', label: 'Tempat Lahir' },
          { key: 'date_of_birth', label: 'Tanggal Lahir' },
          { key: 'religion', label: 'Agama' },
          { key: 'actions' }
        ],
        meta: {},
        page: 1,
        perPage: 10
      }
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

      },
      handlePerPage(perPage) {
        this.table.perPage = perPage;
        this.fetchResidents();
      },
    },
    created() {
      this.fetchResidents();
    }
  }
</script>

<style scoped>

</style>

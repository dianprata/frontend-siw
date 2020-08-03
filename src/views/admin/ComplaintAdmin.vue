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
      <template v-slot:aksi="props">
        <vx-tooltip text="Tandai sudah terselesaikan"
                    class="text-center">
          <feather-icon @click="markAsResolved(props.row)" icon="CheckCircleIcon"></feather-icon>
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
  </div>
</template>

<script>
  import complaint from "../../http/complaint";
  export default {
    name: "ComplaintAdmin",
    data() {
      return {
        table: {
          data: [],
          columns: [
            { key: 'no', label: 'No' },
            { key: 'type', label: 'Tipe' },
            { key: 'residentName', sortKey: 'resident.name', label: 'Pengirim' },
            { key: 'created_at', label: 'Tanggal Pengaduan' },
            { key: 'aksi' }
          ],
          meta: {},
          page: 1,
          perPage: 10
        }
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
      markAsResolved(data) {
        if(data.is_resolved === 0) {
          complaint.markAsResolved(data.id)
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

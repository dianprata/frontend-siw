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
      <template v-slot:residentName="props">
        {{ props.row.resident.name }}
      </template>
      <template v-slot:created_at="props">
        {{ props.row.created_at | date_filter }}
      </template>
      <template v-slot:actions="props">
        <vx-tooltip text="Tandai sudah dibaca"
                    class="text-center">
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
  </div>
</template>

<script>
  import criticsSuggest from "../../http/criticsSuggest";
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
            { key: 'actions' }
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
          this.fetchCriticsSuggest();
        }
      }
    },
    methods: {
      fetchCriticsSuggest() {
        const params = `page=${this.table.page}&perPage=${this.table.perPage}`;
        criticsSuggest.index(params)
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

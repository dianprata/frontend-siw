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

      <vs-button @click="activePrompt = !activePrompt">Tambah Pengumuman</vs-button>
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
      <template v-slot:actions="props">
        <vx-tooltip text="Tandai untuk nonaktifkan"
                    class="text-center">
          <feather-icon @click="markNotActive(props.row)" icon="XIcon"></feather-icon>
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

    <vs-prompt
        @cancel="reset"
        @close="reset"
        @accept="sendAnnouncement()"
        accept-text="Kirim"
        :is-valid="validateForm"
        title="Tambah Pengumuman"
        :active.sync="activePrompt">
      <div class="vx-row mb-6">
        <div class="vx-col sm:w-1/5 w-full">
          <label for="subject">Judul</label>
        </div>
        <div class="vx-col sm:w-4/5 w-full">
          <vs-input id="subject" class="w-full" v-model="title" />
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col sm:w-1/5 w-full">
          <label for="body">Isi</label>
        </div>
        <div class="vx-col sm:w-4/5 w-full">
          <vs-textarea id="body" class="w-full" v-model="body"></vs-textarea>
        </div>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
  import announcement from "../../http/announcement";
  export default {
    name: "Announcement",
    data() {
      return {
        title: '',
        body: '',
        activePrompt: false,
        table: {
          data: [],
          columns: [
            { key: 'no', label: 'No' },
            { key: 'title', label: 'Judul' },
            { key: 'created_at', label: 'Tanggal Pengumuman' },
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
          this.fetchAnnouncement();
        }
      },
      validateForm() {
        return this.title !== '' && this.body !== '';
      }
    },
    methods: {
      fetchAnnouncement() {
        const params = `page=${this.table.page}&perPage=${this.table.perPage}`;
        announcement.index(params)
          .then((res) => {
            const { data } = res.data;
            this.table.data = data.record;
            this.table.meta = data.meta_pagination;
          }).catch((err) => {
          throw new Error(err);
        });
      },
      sendAnnouncement() {
        new Promise((resolve, reject) => {
          const payload = {
            title: this.title,
            body: this.body
          };
          announcement.store(payload)
            .then((res) => {
              if(res.data.data) {
                this.$vs.notify({
                  title: 'Berhasil!',
                  text: 'Pemberitahuan Anda telah diterbitkan',
                  iconPack: 'feather',
                  icon: 'icon-check-circle',
                  color: 'primary'
                });
                this.reset();
                resolve(res);
              } else {
                reject('Gagal!')
              }
            }).catch((err) => {
            this.$vs.notify({
              title: 'Gagal!',
              text: 'Maaf ada kesalahan, coba lagi',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
            reject(err);
          })
        });
      },
      markNotActive(data) {
        if(data.is_active === 1) {
          announcement.markNotActive(data.id)
            .then(() => {
              this.$vs.notify({
                title: 'Berhasil!',
                text: '',
                iconPack: 'feather',
                icon: 'icon-check-circle',
                color: 'primary'
              });
              this.fetchAnnouncement();
            }).catch((err) => {
            throw new Error(err);
          })
        }
      },
      handlePerPage(perPage) {
        this.table.perPage = perPage;
        this.fetchAnnouncement();
      },
      reset() {
        this.title = '';
        this.body = '';
      }
    },
    created() {
      this.fetchAnnouncement();
    }
  }
</script>

<style scoped>

</style>

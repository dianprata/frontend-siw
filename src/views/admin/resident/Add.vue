<template>
  <div class="w-full">
    <vx-card>
      <vs-tabs v-model="tabIndex">
        <vs-tab label="Data Kartu Keluarga">
          <div class="head-family">
            <h4 class="my-4">Data Kepala Keluarga</h4>
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full">
                <div class="vx-row">
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Nomor Kartu Keluarga (NO KK)" name="NO KK"
                              v-validate="'required|digits:16'"
                              :danger="!!errors.first('NO KK')"
                              :danger-text="errors.first('NO KK')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.head_family_nik"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Nama" name="Nama Kepala Keluarga"
                              v-validate="'required'"
                              :danger="!!errors.first('Nama Kepala Keluarga')"
                              :danger-text="errors.first('Nama Kepala Keluarga')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.name"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Alamat" name="Alamat Kepala Keluarga"
                              v-validate="'required'"
                              :danger="!!errors.first('Alamat Kepala Keluarga')"
                              :danger-text="errors.first('Alamat Kepala Keluarga')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.address"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Kode Pos" name="Kode Pos"
                              v-validate="'required'"
                              :danger="!!errors.first('Kode Pos')"
                              :danger-text="errors.first('Kode Pos')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.postal_code"/>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-1/2 w-full">
                <div class="vx-row">
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Kelurahan" name="Kelurahan"
                              v-validate="'required'"
                              :danger="!!errors.first('Kelurahan')"
                              :danger-text="errors.first('Kelurahan')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.kelurahan"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Kecamatan" name="Kecamatan"
                              v-validate="'required'"
                              :danger="!!errors.first('Kecamatan')"
                              :danger-text="errors.first('Kecamatan')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.kecamatan"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Kota" name="Kota"
                              v-validate="'required'"
                              :danger="!!errors.first('Kota')"
                              :danger-text="errors.first('Kota')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.city"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Provinsi" name="Provinsi"
                              v-validate="'required'"
                              :danger="!!errors.first('Provinsi')"
                              :danger-text="errors.first('Provinsi')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.head_family.province"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vs-tab>
        <vs-tab label="Data dalam Kartu Keluarga">
          <div class="resident">
            <h4 class="my-4">Data Penduduk</h4>
            <div class="vx-row" v-for="(res,index) in payload.resident" :key="index">
              <div class="w-full flex justify-between items-center px-4">
                <h5 :class="{'mb-4' : index === 0}">Penduduk {{ index + 1 }}</h5>
                <div class="flex">
                  <vs-button :class="{'mr-4': index !== 0}" color="success"
                             v-if="tabIndex === 1" @click="addResident" icon="add" />
                  <vs-button color="danger" v-if="tabIndex === 1 && index !== 0"
                             @click="removeFormResident(index)" icon="remove" />
                </div>
              </div>
              <div class="vx-col md:w-1/2 w-full">
                <div class="vx-row">
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Nomor Induk Kependudukan (NO NIK)" :name="`Nomor Induk Kependudukan (NO NIK) ${index+1}`"
                              v-validate="'required|digits:16'"
                              :danger="!!errors.first(`Nomor Induk Kependudukan (NO NIK) ${index+1}`)"
                              :danger-text="errors.first(`Nomor Induk Kependudukan (NO NIK) ${index+1}`)"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.resident[index].nik_id"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Nama" name="Nama"
                              v-validate="'required'"
                              :danger="!!errors.first('Nama')"
                              :danger-text="errors.first('Nama')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.resident[index].name"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <label class="vs-input--label">Jenis Kelamin</label>
                    <v-select v-model="payload.resident[index].gender"
                              :reduce="gender => gender.key"
                              :options="genders"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Alamat" name="Alamat"
                              :disabled="true"
                              tabindex="-1"
                              class="w-full" v-model="payload.resident[index].address"/>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-1/2 w-full">
                <div class="vx-row">
                  <div class="vx-col w-full mb-4">
                    <label class="vs-input--label">Agama</label>
                    <v-select v-model="payload.resident[index].religion"
                              :reduce="religi => religi.key"
                              :options="religions"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <label class="vs-input--label">Pekerjaan</label>
                    <v-select v-model="payload.resident[index].occupation"
                              :options="jobs"/>
                  </div>
                  <div class="vx-col w-full mb-4">
                    <vs-input label="Tempat Lahir" name="Tempat Lahir"
                              v-validate="'required'"
                              :danger="!!errors.first('Tempat Lahir')"
                              :danger-text="errors.first('Tempat Lahir')"
                              val-icon-danger="clear"
                              class="w-full" v-model="payload.resident[index].birth_place" />
                  </div>
                  <div class="vx-col w-full mb-4">
                    <label class="vs-input--label">Tanggal Lahir</label>
                    <datepicker :language="languages['id']"
                                v-model="payload.resident[index].birth_date"
                                format="dd-MM-yyyy"/>
                  </div>
                </div>
              </div>
              <vs-divider />
            </div>
          </div>
        </vs-tab>
      </vs-tabs>
      <div class="action-button">
        <vs-button class="mr-4" :disabled="!validKK" v-if="tabIndex === 0" @click="tabIndex+=1">Lanjut</vs-button>
        <vs-button class="mr-4" :disabled="!validKK" v-else @click="submit">Submit</vs-button>
        <vs-button color="danger" type="border" @click="reset">Reset</vs-button>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import * as lang from 'vuejs-datepicker/src/locale';
  import resident from "@/http/resident";
  import moment from 'moment'

  export default {
    name: "Add",
    data: () => ({
      form: {
        nik_id: '',
        name: '',
        gender: '',
        religion: '',
        address: '',
        birth_place: '',
        birth_date: '',
        occupation: ''
      },
      payload: {
        head_family: {
          head_family_nik: '',
          name: '',
          address: '',
          postal_code: '',
          kelurahan: '',
          kecamatan: '',
          city: '',
          province: ''
        },
        resident: [
          {
            nik_id: '',
            name: '',
            gender: '',
            religion: '',
            address: '',
            birth_place: '',
            birth_date: '',
            occupation: ''
          }
        ]
      },
      genders: [
        {key: 'L', label: 'Laki-Laki'},
        {key: 'P', label: 'Perempuan'}
      ],
      religions: [
        {key: 'Islam', label: 'Islam'},
        {key: 'Kristen', label: 'Kristen'},
        {key: 'Hindu', label: 'Hindu'},
        {key: 'Buddha', label: 'Buddha'},
        {key: 'Konghucu', label: 'Konghucu'},
      ],
      lastEducations: [
        'TIDAK / BELUM SEKOLAH',
        'BELUM TAMAT SD / SEDERAJAT',
        'TAMAT SD / SEDERAJAT',
        'SLTP / SEDERAJAT',
        'SLTA / SEDERAJAT',
        'DIPLOMA I / II',
        'AKADEMI/ DIPLOMA III/S. MUDA',
        'DIPLOMA IV/ STRATA I',
        'STRATA II',
        'STRATA III'
      ],
      jobs: [
        'Tidak Bekerja',
        'Wiraswasta',
        'Karyawan Swasta',
        'PNS',
        'Guru',
        'Ibu Rumah Tangga',
        'Pelajar/Mahasiswa',
        'Lain-lain',
      ],
      languages: lang,
      tabIndex: 0,
    }),
    watch: {
      'payload.head_family.address'() {
        this.fillAddress();
      }
    },
    computed: {
      validKK() {
        if(this.payload.head_family.head_family_nik !== '' &&
          this.payload.head_family.name !== '' &&
          this.payload.head_family.address !== '' &&
          this.payload.head_family.postal_code !== '' &&
          this.payload.head_family.kelurahan !== '' &&
          this.payload.head_family.kecamatan !== '' &&
          this.payload.head_family.city !== '' &&
          this.payload.head_family.province !== '') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      submit() {
        this.$vs.loading();
        this.payload.resident.filter((date) => date.birth_date = moment(date.birth_date).format('YYYY-MM-DD'));
        resident.store(this.payload)
          .then((res) => {
            this.$vs.loading.close();
            if(res.data.data) {
              this.$vs.notify({
                title: 'Berhasil',
                text: 'Tambah Penduduk Berhasil !',
                color: 'success',
                time: 1500
              });
              this.reset();
            }
          }).catch((err) => {
            throw new Error(err)
        })
      },
      addResident() {
        const form = {
          nik_id: '',
          name: '',
          gender: '',
          religion: '',
          address: '',
          birth_place: '',
          birth_date: '',
          occupation: ''
        };
        this.payload.resident.push(form);
        this.fillAddress();
      },
      removeFormResident(index) {
        this.payload.resident.splice(index, 1);
      },
      fillAddress() {
        this.payload.resident.map((data,index) => {
          this.payload.resident[index].address = this.payload.head_family.address
        });
      },
      resetForm() {
        this.form.nik_id = '';
        this.form.name = '';
        this.form.gender = '';
        this.form.religion = '';
        this.form.address = '';
        this.form.birth_place = '';
        this.form.birth_date = '';
        this.form.occupation = '';
      },
      reset() {
        this.resetForm();
        this.payload.resident = [];
        this.payload.resident.push(this.form);
        this.payload.head_family.head_family_nik = '';
        this.payload.head_family.name = '';
        this.payload.head_family.address = '';
        this.payload.head_family.postal_code = '';
        this.payload.head_family.kelurahan = '';
        this.payload.head_family.kecamatan = '';
        this.payload.head_family.city = '';
        this.payload.head_family.province = '';
        this.tabIndex = 0;
      }
    }
  }
</script>

<style scoped>

</style>

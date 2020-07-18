<template>
  <div class="w-full">
    <vx-card>
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-input label="NIK KK" name="nik kk"
                        v-validate="'required|digits:16'"
                        :danger="!!errors.first('nik kk')"
                        :danger-text="errors.first('nik kk')"
                        val-icon-danger="clear"
                        class="w-full" v-model="form.headFamilyNIK" />
            </div>
            <div class="vx-col w-full mb-4">
              <vs-input label="NIK" name="nik"
                        v-validate="'required|digits:16'"
                        :danger="!!errors.first('nik')"
                        :danger-text="errors.first('nik')"
                        val-icon-danger="clear"
                        class="w-full" v-model="form.nik" />
            </div>
            <div class="vx-col w-full mb-4">
              <vs-input label="Nama" name="nama"
                        v-validate="'required'"
                        :danger="!!errors.first('nama')"
                        :danger-text="errors.first('nama')"
                        val-icon-danger="clear"
                        class="w-full" v-model="form.name" />
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Jenis Kelamin</label>
              <v-select v-model="form.gender"
                        :reduce="gender => gender.key"
                        :options="genders"/>
            </div>
            <div class="vx-col w-full mb-4">
              <vs-input label="Tempat Lahir" name="tempat lahir"
                        v-validate="'required'"
                        :danger="!!errors.first('tempat lahir')"
                        :danger-text="errors.first('tempat lahir')"
                        val-icon-danger="clear"
                        class="w-full" v-model="form.placeOfBirth" />
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Tanggal Lahir</label>
              <datepicker :language="languages['id']" v-model="form.dateOfBirth" format="dd-MM-yyyy"/>
            </div>
            <div class="vx-col w-full mb-4">
              <p class="vs-input--label mb-2">Nama Orang Tua</p>
              <vs-input label="Ayah" class="w-full mb-4" v-model="form.parentName.father" />
              <vs-input label="Ibu" class="w-full" v-model="form.parentName.mother" />
            </div>
          </div>
        </div>
        <div class="vx-col md:w-1/2 w-full">
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Agama</label>
              <v-select v-model="form.religion"
                        :reduce="religi => religi.key"
                        :options="religions"/>
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Pendidikan Terakhir</label>
              <v-select v-model="form.lastEducation"
                        :options="lastEducations"/>
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Pekerjaan</label>
              <v-select v-model="form.job"
                        :options="jobs"/>
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Status Pernikahan</label>
              <v-select v-model="form.maritalStatus"
                        :options="maritalStatus"/>
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Status Hubungan Dalam Keluarga</label>
              <v-select v-model="form.relStatusOfFamily"
                        :options="relStatusOfFamily"/>
            </div>
            <div class="vx-col w-full mb-4">
              <label class="vs-input--label">Kewarganegaraan</label>
              <v-select v-model="form.nationality"
                        :options="nationality"/>
            </div>
            <div class="vx-col w-full mb-4 resident-upload">
              <label class="vs-input--label">Upload Foto</label>
              <vs-upload action="" automatic @on-success="successUpload" />
            </div>
          </div>
        </div>
      </div>
      <div class="action-button">
        <vs-button class="mr-4" @click="addResident">Tambah</vs-button>
        <vs-button color="danger" type="border" @click="reset">Reset</vs-button>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import * as lang from 'vuejs-datepicker/src/locale';
  export default {
    name: "Add",
    data: () => ({
      form: {
        headFamilyNIK: '',
        nik: '',
        name: '',
        gender: '', //select
        placeOfBirth: '',
        dateOfBirth: '', //date
        religion: '', //select
        lastEducation: '', //select
        job: '', //select
        maritalStatus: '', //select
        relStatusOfFamily: '', //select
        nationality: '', //select
        parentName: {
          father: '',
          mother: ''
        }
      },
      genders: [
        { key: 'laki-laki', label: 'Laki-Laki' },
        { key: 'perempuan', label: 'Perempuan' }
      ],
      religions: [
        { key: 'islam', label: 'Islam' },
        { key: 'kristen', label: 'Kristen' },
        { key: 'hindu', label: 'Hindu' },
        { key: 'buddha', label: 'Buddha' },
        { key: 'tionghoa', label: 'Tionghoa' },
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
        'TIDAK BEKERJA',
        'IBU RUMAH TANGGA',
        'KARYAWAN SWASTA',
        'PEGAWAI NEGERI SIPIL',
        'LAIN-LAIN',
      ],
      maritalStatus: ['BELUM KAWIN', 'KAWIN'],
      relStatusOfFamily: ['Kepala Keluarga', 'Istri', 'Anak'],
      nationality: ['WNI', 'WNA'],
      languages: lang,
    }),
    methods: {
      addResident() {

      },
      successUpload() {

      },
      reset() {
        this.form.headFamilyNIK = '';
        this.form.nik = '';
        this.form.name = '';
        this.form.gender = '';
        this.form.placeOfBirth = '';
        this.form.dateOfBirth = '';
        this.form.religion = '';
        this.form.lastEducation = '';
        this.form.job = '';
        this.form.maritalStatus = '';
        this.form.relStatusOfFamily = '';
        this.form.nationality = '';
        this.form.parentName.father = '';
        this.form.parentName.mother = '';
      }
    }
  }
</script>

<style scoped>

</style>

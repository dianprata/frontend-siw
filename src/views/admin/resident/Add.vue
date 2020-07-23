<template>
  <div class="w-full">
    <vx-card>
      <div class="head-family">
        <h4 class="mb-4">Data Kepala Keluarga</h4>
        <div class="vx-row">
          <div class="vx-col md:w-1/2 w-full">
            <div class="vx-row">
              <div class="vx-col w-full mb-4">
                <vs-input label="Nomor Kepala Keluarga (NO KK)" name="NO KK"
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
      <div class="resident">
        <h4 class="mb-4">Data Penduduk</h4>
        <div class="vx-col w-full mb-4">
          <vs-input label="Nomor Induk Kependudukan (NO NIK)" name="Nomor Induk Kependudukan (NO NIK)"
                    v-validate="'required'"
                    :danger="!!errors.first('Nomor Induk Kependudukan (NO NIK)')"
                    :danger-text="errors.first('Nomor Induk Kependudukan (NO NIK)')"
                    val-icon-danger="clear"
                    class="w-full" v-model="form.placeOfBirth"/>
        </div>
        <div class="vx-col w-full mb-4">
          <label class="vs-input--label">Nomor Induk Kependudukan (NO NIK)</label>
          <datepicker :language="languages['id']" v-model="form.dateOfBirth" format="dd-MM-yyyy"/>
        </div>
        <!--              <div class="vx-col w-full mb-4">-->
        <!--                <p class="vs-input&#45;&#45;label mb-2">Nama Orang Tua</p>-->
        <!--                <vs-input label="Ayah" class="w-full mb-4" v-model="form.parentName.father" />-->
        <!--                <vs-input label="Ibu" class="w-full" v-model="form.parentName.mother" />-->
        <!--              </div>-->
        <div class="vx-col w-full mb-4">
          <label class="vs-input--label">Kota</label>
          <v-select v-model="form.religion"
                    :reduce="religi => religi.key"
                    :options="religions"/>
        </div>
        <div class="vx-col w-full mb-4">
          <label class="vs-input--label">Provinsi</label>
          <v-select v-model="form.lastEducation"
                    :options="lastEducations"/>
        </div>
        <div class="vx-col w-full mb-4">
          <vs-input label="Nomor Kepala Keluarga" name="NO KK"
                    v-validate="'required|digits:16'"
                    :danger="!!errors.first('NO KK')"
                    :danger-text="errors.first('NO KK')"
                    val-icon-danger="clear"
                    class="w-full" v-model="form.headFamilyNIK"/>
        </div>
        <div class="vx-col w-full mb-4">
          <vs-input label="Nama" name="Nama Kepala Keluarga"
                    v-validate="'required|digits:16'"
                    :danger="!!errors.first('Nama Kepala Keluarga')"
                    :danger-text="errors.first('Nama Kepala Keluarga')"
                    val-icon-danger="clear"
                    class="w-full" v-model="form.nik"/>
        </div>
        <div class="vx-col w-full mb-4">
          <vs-input label="Alamat" name="alamat"
                    v-validate="'required'"
                    :danger="!!errors.first('nama')"
                    :danger-text="errors.first('nama')"
                    val-icon-danger="clear"
                    class="w-full" v-model="form.name"/>
        </div>
        <div class="vx-col w-full mb-4">
          <label class="vs-input--label">Kode Pos</label>
          <v-select v-model="form.gender"
                    :reduce="gender => gender.key"
                    :options="genders"/>
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
          <vs-upload action="" automatic @on-success="successUpload"/>
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
        resident: []
      },
      genders: [
        {key: 'laki-laki', label: 'Laki-Laki'},
        {key: 'perempuan', label: 'Perempuan'}
      ],
      religions: [
        {key: 'islam', label: 'Islam'},
        {key: 'kristen', label: 'Kristen'},
        {key: 'hindu', label: 'Hindu'},
        {key: 'buddha', label: 'Buddha'},
        {key: 'tionghoa', label: 'Tionghoa'},
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

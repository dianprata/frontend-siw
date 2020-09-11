<template>
	<div>
		<div class="vx-row">
		<div class="vx-col w-full sm:w-1/3 mb-base">
			<statistics-card-line
					v-if="statistics"
					hideChart
					icon="UsersIcon"
					icon-right
					:statistic="allResidents | num_formatter"
					statisticTitle="Jumlah Seluruh Penduduk" />
		</div>
		<div class="vx-col w-full sm:w-1/3 mb-base">
			<statistics-card-line
					v-if="statistics"
					hideChart
					icon="UserIcon"
					icon-right
					:statistic="statistics.resident_male_count | num_formatter"
					statisticTitle="Jumlah Penduduk Laki-laki"
					color="success" />
		</div>
		<div class="vx-col w-full sm:w-1/3 mb-base">
			<statistics-card-line
					v-if="statistics"
					hideChart
					icon="UserIcon"
					icon-right
					:statistic="statistics.resident_female_count | num_formatter"
					statisticTitle="Jumlah Penduduk Perempuan"
					color="danger" />
		</div>
	</div>
		<div class="vx-row">
			<!-- CARD 9: DISPATCHED ORDERS -->
			<div class="vx-col w-full mb-base">
				<vx-card title="Pengumuman" refresh-content-action collapse-action @refresh="getAnnouncement">
					<vs-list :key="index" v-for="(ann, index) in announcement">
						<vs-list-header :title="ann.created_at | date_filter"></vs-list-header>
						<vs-list-item :title="ann.title" :subtitle="ann.body">
							Dari: Ketua RT
						</vs-list-item>
					</vs-list>
					<vs-list :key="index+5" v-for="(comp, index) in complaint">
						<vs-list-header :title="comp.created_at | date_filter"></vs-list-header>
						<vs-list-item :title="comp.type | capitalize" :subtitle="comp.body">
							Dari: {{ comp.resident.name }}
						</vs-list-item>
					</vs-list>
					<div v-if="announcement.length === 0 && complaint.length === 0">
						<p class="text-center">No Data Available</p>
					</div>
				</vx-card>
			</div>
		</div>
	</div>
</template>

<script>
	import announcement from "../http/announcement";
	import complaint from "../http/complaint";
	import dashboard from "../http/dashboard";
	import StatisticsCardLine from "../components/statistics-cards/StatisticsCardLine.vue";
	export default {
		name: 'Home',
		components: {
			StatisticsCardLine
		},
		data: () => ({
			statistics: {},
			announcement: [],
			complaint: []
		}),
		computed: {
			allResidents() {
				return this.statistics.resident_female_count + this.statistics.resident_male_count;
			},
		},
		methods: {
			async getStatistics() {
				await dashboard.index()
						.then((res) => {
							this.statistics = res.data.data;
						}).catch((err) => {
							throw new Error(err);
						})
			},
			async getAnnouncement(card) {
				const params = 'page=1&perPage=5';
				await announcement.index(params)
						.then((res) => {
							const { data } = res.data;
							this.announcement = data.record;
							if(card !== undefined) {
								card.removeRefreshAnimation();
							}
						}).catch((err) => {
							throw new Error(err);
						})
			},
			async getComplaintStatusAcc() {
				const params = `page=1&perPage=5&status=acc`;
				await complaint.index(params)
						.then((res) => {
							const { data } = res.data;
							this.complaint = data.record;
						}).catch((err) => {
							throw new Error(err);
						})
			}
		},
		created() {
			this.getStatistics();
			this.getAnnouncement();
			this.getComplaintStatusAcc();
		}
	}
</script>

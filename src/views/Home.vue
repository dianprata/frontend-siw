<template>
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
</template>

<script>
	import dashboard from "../http/dashboard";
	import StatisticsCardLine from "../components/statistics-cards/StatisticsCardLine.vue";
	export default {
		name: 'Home',
		components: {
			StatisticsCardLine
		},
		data: () => ({
			statistics: {},
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
		},
		created() {
			this.getStatistics();
		}
	}
</script>

<template>
<div class="container mx-auto lg:p-6 p-5">
  <div class="vx-row">
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <statistics-card-line
          v-if="subscribersGained.analyticsData"
          icon="UsersIcon"
          :statistic="subscribersGained.analyticsData.subscribers | num_formatter"
          statisticTitle="Jumlah Penduduk"
          :chartData="subscribersGained.series"
          type='area' />
    </div>
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <statistics-card-line
          v-if="revenueGenerated.analyticsData"
          icon="DollarSignIcon"
          :statistic="revenueGenerated.analyticsData.revenue | k_formatter"
          statisticTitle="Revenue Generated"
          :chartData="revenueGenerated.series"
          color='success'
          type='area' />
    </div>
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <statistics-card-line
          v-if="quarterlySales.analyticsData"
          icon="ShoppingCartIcon"
          :statistic="quarterlySales.analyticsData.sales"
          statisticTitle="Quarterly Sales"
          :chartData="quarterlySales.series"
          color='danger'
          type='area' />
    </div>
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <statistics-card-line
          v-if="ordersRecevied.analyticsData"
          icon="ShoppingBagIcon"
          :statistic="ordersRecevied.analyticsData.orders | k_formatter"
          statisticTitle="Orders Received"
          :chartData="ordersRecevied.series"
          color='warning'
          type='area' />
    </div>
  </div>
</div>
</template>

<script>
  import StatisticsCardLine from "../components/statistics-cards/StatisticsCardLine.vue";
  export default {
    name: "Index",
    components: {
      StatisticsCardLine
    },
    data() {
      return  {
        subscribersGained: {
          series: [{
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55]
          }],
          analyticsData: {
            subscribers: 92600
          }
        },
        revenueGenerated: {
          series: [{
            name: 'Revenue',
            data: [350, 275, 400, 300, 350, 300, 450]
          }],
          analyticsData: {
            revenue: 97500
          }
        },
        quarterlySales: {
          series: [{
            name: 'Sales',
            data: [10, 15, 7, 12, 3, 16]
          }],
          analyticsData: {
            sales: "36%"
          }
        },
        ordersRecevied: {
          series: [{
            name: 'Orders',
            data: [10, 15, 8, 15, 7, 12, 8]
          }],
          analyticsData: {
            orders: 97500
          }
        },
      }
    },
  }
</script>

<style scoped>

</style>

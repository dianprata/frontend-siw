<template>
  <div class="router-view">
    <div class="router-content">
      <div class="container mx-auto lg:px-6 px-5">
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

        <div class="vx-row">
          <!-- CARD 9: DISPATCHED ORDERS -->
          <div class="vx-col w-full md:w-2/3 mb-base">
            <vx-card title="Pengumuman">
              <div slot="no-body" class="mt-4">
                <vs-table :data="dispatchedOrders" class="table-dark-inverted">
                  <template slot="thead">
                    <vs-th>ORDER NO.</vs-th>
                    <vs-th>STATUS</vs-th>
                    <vs-th>OPERATORS</vs-th>
                    <vs-th>LOCATION</vs-th>
                    <vs-th>DISTANCE</vs-th>
                    <vs-th>START DATE</vs-th>
                    <vs-th>EST DELIVERY DATE</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                      <vs-td :data="data[indextr].orderNo">
                        <span>#{{data[indextr].orderNo}}</span>
                      </vs-td>
                      <vs-td :data="data[indextr].status">
                        <span class="flex items-center px-2 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + data[indextr].statusColor"></div>{{data[indextr].status}}</span>
                      </vs-td>
                      <vs-td :data="data[indextr].orderNo">
                        <ul class="users-liked user-list">
                          <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                            <vx-tooltip :text="user.name" position="bottom">
                              <vs-avatar :src="user.img" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                            </vx-tooltip>
                          </li>
                        </ul>
                      </vs-td>
                      <vs-td :data="data[indextr].orderNo">
                        <span>{{data[indextr].location}}</span>
                      </vs-td>
                      <vs-td :data="data[indextr].orderNo">
                        <span>{{data[indextr].distance}}</span>
                        <vs-progress :percent="data[indextr].distPercent" :color="data[indextr].statusColor"></vs-progress>
                      </vs-td>
                      <vs-td :data="data[indextr].orderNo">
                        <span>{{data[indextr].startDate}}</span>
                      </vs-td>
                      <vs-td :data="data[indextr].orderNo">
                        <span>{{data[indextr].estDelDate}}</span>
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>

            </vx-card>
          </div>
          <div class="vx-col w-full md:w-1/3 mb-base">
            <vx-card title="Statistik Covid-19">
              <template slot="actions">
                <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
              </template>

              <!-- CHART -->
              <template slot="no-body">
                <vue-apex-charts class="mt-6 mb-8" type=donut height=250
                                 :options="sessionsByDeviceDonut.chartOptions"
                                 :series="sessionsData.series" />
              </template>

              <!-- DATA -->
              <div class="flex justify-between text-center mt-6" slot="no-body-bottom">
                <div class="w-1/3 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                  <p class="mt-4">Positif</p>
                  <p class="mb-4 text-3xl font-semibold">12.617</p>
                </div>
                <div class="w-1/3 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                  <p class="mt-4">Sembuh</p>
                  <p class="mb-4 text-3xl font-semibold">10.561</p>
                </div>
                <div class="w-1/3 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                  <p class="mt-4">Meninggal Dunia</p>
                  <p class="mb-4 text-3xl font-semibold">2.056</p>
                </div>
              </div>
            </vx-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts';
  import StatisticsCardLine from "../components/statistics-cards/StatisticsCardLine.vue";
  export default {
    name: "Index",
    components: {
      VueApexCharts,
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

        dispatchedOrders: [
          {
            orderNo: 879985,
            status: "Moving",
            statusColor: "success",
            operator: "Cinar Knowles",
            operatorImg: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
            usersLiked: [
              { name: "Vennie Mostowy", img: require("@/assets/images/portrait/small/avatar-s-5.jpg")   },
              { name: "Elicia Rieske", img: require("@/assets/images/portrait/small/avatar-s-7.jpg")    },
              { name: "Julee Rossignol", img: require("@/assets/images/portrait/small/avatar-s-10.jpg") },
              { name: "Darcey Nooner", img: require("@/assets/images/portrait/small/avatar-s-8.jpg")    }
            ],
            location: "Anniston, Alabama",
            distance: "130 km",
            distPercent: 80,
            startDate: "26/07/2018",
            estDelDate: "28/07/2018"
          },
          {
            orderNo: 156897,
            status: "Pending",
            statusColor: "warning",
            operator: "Britany Ryder",
            operatorImg: require("@/assets/images/portrait/small/avatar-s-4.jpg"),
            usersLiked: [
              { name: "Trina Lynes", img: require("@/assets/images/portrait/small/avatar-s-1.jpg")       },
              { name: "Lilian Nenez", img: require("@/assets/images/portrait/small/avatar-s-2.jpg")      },
              { name: "Alberto Glotzbach", img: require("@/assets/images/portrait/small/avatar-s-3.jpg") }
            ],
            location: "Cordova, Alaska",
            distance: "234 km",
            distPercent: 60,
            startDate: "26/07/2018",
            estDelDate: "28/07/2018"
          },
          {
            orderNo: 568975,
            status: "Moving",
            statusColor: "success",
            operator: "Kishan Ashton",
            operatorImg: require("@/assets/images/portrait/small/avatar-s-1.jpg"),
            usersLiked: [
              { name: "Lai Lewandowski", img: require("@/assets/images/portrait/small/avatar-s-6.jpg")   },
              { name: "Elicia Rieske", img: require("@/assets/images/portrait/small/avatar-s-7.jpg")     },
              { name: "Darcey Nooner", img: require("@/assets/images/portrait/small/avatar-s-8.jpg")     },
              { name: "Julee Rossignol", img: require("@/assets/images/portrait/small/avatar-s-10.jpg")  },
              { name: "Jeffrey Gerondale", img: require("@/assets/images/portrait/small/avatar-s-9.jpg") },
            ],
            location: "Florence, Alabama",
            distance: "168 km",
            distPercent: 70,
            startDate: "26/07/2018",
            estDelDate: "28/07/2018"
          },
          {
            orderNo: 245689,
            status: "Canceled",
            statusColor: "danger",
            operator: "Anabella Elliott",
            operatorImg: require("@/assets/images/portrait/small/avatar-s-6.jpg"),
            usersLiked: [
              { name: "Vennie Mostowy", img: require("@/assets/images/portrait/small/avatar-s-5.jpg") },
              { name: "Elicia Rieske", img: require("@/assets/images/portrait/small/avatar-s-7.jpg")  }
            ],
            location: "Clifton, Arizona",
            distance: "125 km",
            distPercent: 95,
            startDate: "26/07/2018",
            estDelDate: "28/07/2018"
          }
        ],

        sessionsData: {
          series: [12.617, 10.561, 2.056]
        },
        sessionsByDeviceDonut: {
          chartOptions: {
            labels: ['Positif', 'Sembuh', 'Meninggal Dunia'],
            dataLabels: {
              enabled: false
            },
            legend: { show: false },
            chart: {
              offsetY: 30,
              type: 'donut',
              toolbar: {
                show: false
              }
            },
            stroke: { width: 0 },
            colors: ['#0f4c75', '#FF9F43', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#116496', '#FFC085', '#f29292']
              }
            }
          }
        },
      }
    },
  }
</script>

<style scoped>

</style>

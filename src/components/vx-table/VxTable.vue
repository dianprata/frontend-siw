<template>
  <vs-table
      v-bind="$attrs"
      v-on="$listeners"
      :data="data">

    <template slot="header">
      <h3>{{title}}</h3>
    </template>

    <template slot="thead">
      <vs-th :sort-key="col.sortKey ? col.sortKey : col.key"
             v-for="(col,index) in columns"
             :key="index">
        {{ col.label ? col.label : col.key | capitalize }}
      </vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="item" v-for="(item, index) in data" :key="index" :state="item.is_read === 1 || item.is_resolved === 1 ? 'success' : null">
        <vs-td :data="data[index].field" v-for="(field, indexField) in columns" :key="indexField">
          <slot :name="field.key" :row="item" :index="(table.meta.current_page - 1) * table.meta.per_page + index + 1">{{ item[field.key] }}</slot>
        </vs-td>

        <template slot="expand">
          <slot name="expand-slot" :row="item"></slot>
        </template>
      </vs-tr>
    </template>
  </vs-table>

</template>

<script>
  export default {
    name: "VxTable",
    props: {
      table: {
        type: Object
      },
    },
    computed: {
      title() {
        return this.table.title
      },
      data() {
        return this.table.data
      },
      meta() {
        return this.table.meta
      },
      columns() {
        return this.table.columns
      }
    }
  }
</script>

<style scoped>

</style>

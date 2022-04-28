<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <TableCosts :tableData="tableData" :tableHead="tableHead" />
    <TableAdd @addNewPayment="addNewPayment"/>
  </div>
</template>

<script>
import TableCosts from "./components/TableCosts.vue";
import TableAdd from "./components/TableAdd.vue";

export default {
  name: "App",
  components: {
    TableCosts,
    TableAdd,
  },
  data () {
    return {
    }
  },
  methods: {
    addNewPayment(NewPayment) {
      let item = NewPayment;
      item.id = +this.tableData.length
      this.tableData.push(item)
    }
  },
  computed: {
      tableData() {
        console.log(this.$store)
        return this.$store.getters.getTableData;
      },
      tableHead() {
        console.log(this.$store)
        console.log(this.$store.getters)
        console.log(this.$store.getters.getTableHead)
        return this.$store.getters.getTableHead;
      },
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

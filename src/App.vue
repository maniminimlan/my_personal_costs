<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <TableCosts :tableData="tableData" />
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
      tableData: [{"id": 0, "date": "01/02/2020", "category": "Еда", "price": 100}]
    }
  },
  methods: {
    addNewPayment(NewPayment) {
      let item = NewPayment;
      item.id = +this.tableData.length
      this.tableData.push(item)
    }
  }
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

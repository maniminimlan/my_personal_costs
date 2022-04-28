import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";
const store = createStore({
  state: {
    tableData: [{"id": 0, "date": "01/02/2020", "category": "Еда", "price": 100}],
    tableHead: ["id", "date", "category", "price"],
  },
  getters: {
    getTableData(state) {
      return state.tableData;
    },
    getTableHead(state) {
      return state.tableHead;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount("#app");

createApp(App).mount('#app')

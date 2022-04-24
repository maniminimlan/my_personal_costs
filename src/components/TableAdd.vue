<template>
  <div>
    <div>
      <button @click="showEdit=!showEdit">Показать/Скрыть добавление</button>
    </div>
    <div v-show="showEdit">
        <input type="text" name="" id="" v-model="category" placeholder="Категория"/>
        <input type="text" name="" id="" v-model="price" placeholder="Цена"/>
        <input type="date" name="" id="" v-model="date" placeholder="Дата"/>
        <button @click="add">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableCosts",
  props: ["tableData"],
  data() {
    return {
      showEdit: false,
      category: "",
      price: "",
      date: "",
    };
  },
  methods: {
    add(){
      let data = {"category": this.category, "date": this.date, "price": this.price}
      console.log(data)
      this.$emit('addNewPayment', data)
    }
  }

};
</script>

<style>
</style>
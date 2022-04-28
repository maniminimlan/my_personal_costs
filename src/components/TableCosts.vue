<template>
  <div>
    <table>
      <tr>
        <th v-for="item in tableHead" :key="item">
          {{ item }}
        </th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td v-for="head in tableHead" :key="head">
          {{ item[head] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableCosts",
  props: ["tableData", "tableHead"],
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
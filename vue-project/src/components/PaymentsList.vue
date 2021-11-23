<template>
  <div>
    <div class="heading_table column">
      <p class="widthCol">#</p>
      <p class="widthCol">Date</p>
      <p class="widthCol">Category</p>
      <p class="widthCol">Value</p>
    </div>
    <div class="column" v-for="(item, index) in items" :key="index">
      <p class="widthCol">{{ item.id }}</p>
      <p class="widthCol">{{ item.date }}</p>
      <p class="widthCol">{{ item.category }}</p>
      <p class="widthCol">{{ item.price }}</p>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
};
</script>
 
<style lang="scss" scoped>
.table {
  display: flex;
  & > div {
    padding: 10px;
  }
}
.heading_table {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
}
.widthCol {
  width: 25%;
}
</style>
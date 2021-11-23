<template>
  <div class="table">
    <div @click="onClick(cur - 1)">-</div>
    <span
      @click="onClick(page)"
      v-for="page in amountPages"
      :key="page"
      :class="{ active: page === cur }"
    >
      {{ page }}
    </span>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pagesCount: 0,
    };
  },
  props: {
    itemsLength: Number, // общее кол-во эл-ов
    n: Number, //кол-во выводимых на 1 стр элементов
    cur: Number,
  },
  computed: {
    amountPages() {
      return Math.ceil(this.itemsLength / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 0 || p > this.amountPages) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background: rgb(190, 225, 221);
    }
  }
}
</style>
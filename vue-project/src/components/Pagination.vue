<template>
  <div class="table">
    <div @click="onClick(cur - 1)">-</div>
    <span
      @click="onClick(page)"
      v-for="page in arrLength"
      :key="page"
      :class="{ active: page === cur }"
    >
      {{ page }}
    </span>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      arrLength: 4,
    };
  },
  props: {
    n: Number, //кол-во выводимых на 1 стр элементов
    cur: Number,
  },
  computed: {
    ...mapGetters(["getArrLength"]),
  },
  methods: {
    onClick(p) {
      if (p < 0 || p > this.arrLength) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style scoped lang="scss">
span {
  padding: 0 7px 0 7px;
}
.table {
  display: flex;
  align-items: center;
  & > div {
    padding: 10px;
  }
}
.active {
  background: rgb(161, 184, 181);
}
</style>
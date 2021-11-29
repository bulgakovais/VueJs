<template>
  <div>
    <div v-show="showForm">
      <input type="text" placeholder="Date" v-model="date" />
      <select v-model="selected">
        <option v-for="option in getCategoryList" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input type="number" placeholder="Price" v-model.number="value" />
      <button @click="onClick">Save</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      date: "",
      value: 0,
      selected: "",
    };
  },
  props: {
    showForm: Boolean,
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
    // функция автоматического создания даты
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapActions(["loadCategories"]),
    ...mapMutations(["setPaymentsListData", "addPaymentsListData"]),

    onClick() {
      if (this.date === "") {
        this.date = this.getCurrentDate;
      }
      const data = {
        date: this.date,
        category: this.selected,
        value: this.value,
      };
      this.addPaymentsListData(data);
      // обнуление полей ввода данных
      this.date = "";
      this.selected = "";
      this.value = 0;
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>

<style>
</style>
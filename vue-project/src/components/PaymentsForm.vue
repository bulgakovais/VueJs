<template>
  <div>
    <div v-show="showForm">
      <input type="text" placeholder="Date" v-model="date" />
      <input type="text" placeholder="Category" v-model="category" />
      <input type="number" placeholder="Price" v-model.number="price" />
      <button @click="onClick">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  props: {
    showForm: Boolean,
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: this.price,
      };
      this.$emit("addNewPayment", data);
      this.date = "";
      this.category = "";
      this.price = 0;
    },
  },
};
</script>

<style>
</style>
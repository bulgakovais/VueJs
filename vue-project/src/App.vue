<template>
  <div id="app">
    <header>
      <div>My personal costs</div>
    </header>
    <main>
      <button @click="showAddForm">ADD NEW COST +</button>
      <PaymentsForm :showForm="showForm" />
      <PaymentsList />
      <Pagination @paginate="onChangePage" :cur="page" :length="12" />
    </main>
  </div>
</template>
 
<script>
// :itemsLength="paymentsList.length"
import PaymentsList from "./components/PaymentsList";
import PaymentsForm from "./components/PaymentsForm";
import Pagination from "./components/Pagination";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentsForm,
    Pagination,
  },
  data() {
    return {
      page: 1, // текущая страница
      n: 3,
      showForm: false,
    };
  },

  methods: {
    ...mapActions(["fetchData"]),

    showAddForm() {
      this.showForm = !this.showForm;
    },
    onChangePage(p) {
      this.page = p;
      this.fetchData(this.page);
    },
  },
  mounted() {
    this.fetchData(this.page);
  },
};
</script>
 
<style lang="scss" scoped>
#app {
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

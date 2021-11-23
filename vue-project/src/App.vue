<template>
  <div id="app">
    <header>
      <div>My personal costs</div>
    </header>
    <main>
      <button @click="showAddForm">ADD NEW COST +</button>
      <PaymentsForm @addNewPayment="addNewPayment" :showForm="showForm" />
      <PaymentsList :items="paymentsList" />
      <!-- <Pagination
        @paginate="onChangePage"
        :cur="page"
        :n="n"
        :itemsLength="paymentsList.length"
      /> -->
    </main>
  </div>
</template>
 
<script>
import PaymentsList from "./components/PaymentsList";
import PaymentsForm from "./components/PaymentsForm";
// import Pagination from "./components/Pagination";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentsForm,
    // Pagination,
  },
  data() {
    return {
      paymentsList: [],
      // page: 1, // текущая страница
      // n: 2,
      showForm: false,
    };
  },
  // computed: {
  //   currentElements() {
  //     const { page, n } = this;
  //     return this.paymentsList.slise(
  //       this.n * (this.page - 1),
  //       this.n * this.page + this.n
  //     );
  //   },
  // },
  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: "28.03.2020",
          category: "Food",
          price: 1123,
        },
        {
          id: 2,
          date: "24.03.2020",
          category: "Transport",
          price: 360,
        },
        {
          id: 3,
          date: "24.03.2020",
          category: "Education",
          price: 2500,
        },
        {
          id: 4,
          date: "28.03.2020",
          category: "Food",
          price: 1123,
        },
        {
          id: 5,
          date: "24.03.2020",
          category: "Transport",
          price: 360,
        },
        {
          id: 6,
          date: "24.03.2020",
          category: "Education",
          price: 2500,
        },
        {
          id: 7,
          date: "24.03.2020",
          category: "Education",
          price: 2500,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    showAddForm() {
      this.showForm = !this.showForm;
    },
    onChangePage(p) {
      this.page = p;
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>
 
<style lang="scss" scoped>
#app {
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <PaymentsForm />
    <PaymentsList />
    <Pagination @paginate="onChangePage" :cur="page" :length="12" />
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import PaymentsForm from "../components/PaymentsForm";
import Pagination from "../components/Pagination";

import { mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsList,
    PaymentsForm,
    Pagination,
  },
  data() {
    return {
      page: 1, // текущая страница
      n: 3,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),

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

<style>
</style>
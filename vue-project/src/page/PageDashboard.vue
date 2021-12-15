<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <header>My personal costs</header>
          <PaymentsForm />
          <PaymentsList />
          <Pagination @paginate="onChangePage" :cur="page" :length="12" />
          <transition name="fade"><context-menu /></transition>
        </v-col>
        <v-col>Диаграмма </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import PaymentsForm from "../components/PaymentsForm";
import Pagination from "../components/Pagination";

import { mapActions } from "vuex";
// import ContextMenu from "../components/ContextMenu.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsList,
    PaymentsForm,
    Pagination,
    ContextMenu: () => import("../components/ContextMenu.vue"),
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
  cursor: pointer;
  background-color: #eee;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
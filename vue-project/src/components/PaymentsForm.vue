<template>
  <div>
    <div>
      <p @click="routerLinkOnClick">
        <!-- Первая ссылка визуализирует поведение при отсутствии вводного параметра value -->
        <router-link class="link" to="/dashboard/add/payment/Food"
          >Добавить платеж в категорию Food стоимостью 200</router-link
        >
      </p>
      <p @click="routerLinkOnClick">
        <router-link class="link" to="/dashboard/add/payment/Transport?value=50"
          >Добавить платеж в категорию Transport стоимостью 50</router-link
        >
      </p>
      <p @click="routerLinkOnClick">
        <router-link
          class="link"
          to="/dashboard/add/payment/Entertainment?value=2000"
          >Добавить платеж в категорию Entertainment стоимостью
          2000</router-link
        >
      </p>
    </div>
    <button @click="showAddForm">ADD NEW COST +</button>
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
      id: 0,
      showForm: false,
    };
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
    ...mapMutations([
      "setPaymentsListData",
      "addPaymentsListData",
      "deletePaymentsListData",
    ]),

    showAddForm() {
      this.showForm = !this.showForm;
    },

    routerLinkOnClick() {
      // при отсутствии value в пути router-link
      if (!this.$route.query.value) {
        this.date = this.getCurrentDate;
        this.showForm = true;
        this.value = 0;
      } else {
        const data = {
          date: this.getCurrentDate,
          value: +this.$route.query.value,
          category: this.$route.path.split("/").pop(),
        };
        this.addPaymentsListData(data);
      }
    },

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
      this.showForm = false;
    },

    showFormOnClickEdit(item) {
      console.log(item);
      this.showForm = true;
      this.id = item.id;
      this.date = item.date;
      this.value = item.value;
      this.selected = item.category;
      this.deletePaymentsListData(item);
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
    this.$context.EventBus.$on("showFormOnClickEdit", this.showFormOnClickEdit);
  },
};
</script>

<style lang="scss" scoped>
.link {
  margin: 20px 0;
}
</style>
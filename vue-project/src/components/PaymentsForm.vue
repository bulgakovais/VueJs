<template>
  <v-container>
    <v-row
      ><p @click="routerLinkOnClick">
        <!-- Первая ссылка визуализирует поведение при отсутствии вводного параметра
        value -->
        <router-link class="link" to="/dashboard/add/payment/Food"
          >Добавить платеж в категорию Food стоимостью 200</router-link
        >
      </p></v-row
    >
    <v-row
      ><p @click="routerLinkOnClick">
        <router-link class="link" to="/dashboard/add/payment/Transport?value=50"
          >Добавить платеж в категорию Transport стоимостью 50</router-link
        >
      </p></v-row
    >
    <v-row
      ><p @click="routerLinkOnClick">
        <router-link
          class="link"
          to="/dashboard/add/payment/Entertainment?value=2000"
          >Добавить платеж в категорию Entertainment стоимостью
          2000</router-link
        >
      </p></v-row
    >
    <v-row
      ><v-btn :ripple="false" @click="showForm = !showForm" color="teal" dark>
        ADD NEW COST <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-form v-show="showForm">
      <v-container>
        <v-row>
          <!-- Date -->
          <v-col cols="12" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <!-- Category -->
          <v-col class="d-flex" cols="12" md="4">
            <v-select
              v-model="selected"
              :items="items"
              label="Category"
            ></v-select>
          </v-col>

          <!-- Value -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="value"
              label="Price"
              required
            ></v-text-field>
          </v-col>

          <!-- Button SAVE -->
          <v-col cols="12" md="4">
            <v-btn :ripple="false" @click="onClick">Save</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
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
      items: [],
      menu: false,
      menu2: false,
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

    addItemsInCategoryList() {
      this.items = this.getCategoryList;
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
    this.items = this.getCategoryList;
  },
};
</script>

<style lang="scss" scoped>
.link {
  margin: 20px 0;
}
</style>
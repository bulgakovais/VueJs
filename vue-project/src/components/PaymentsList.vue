<template>
  <v-container>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <!-- <v-col :cols="2">Menu</v-col> -->
    </v-row>
    <v-row v-for="(item, index) in getPaymentsList" :key="index">
      <v-col :cols="1">{{ index + 1 }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col
        :cols="1"
        class="contextLink"
        @click="onClickContextMenu($event, item)"
        >...</v-col
      >
    </v-row>
  </v-container>

  <!-- <div>
    <div class="heading_table column">
      <p class="widthCol">#</p>
      <p class="widthCol">Date</p>
      <p class="widthCol">Category</p>
      <p class="widthCol">Value</p>
    </div>
    <div class="column" v-for="(item, index) in getPaymentsList" :key="index">
      <p class="widthCol">{{ item.id }}</p>
      <p class="widthCol">{{ item.date }}</p>
      <p class="widthCol">{{ item.category }}</p>
      <p class="widthCol">{{ item.value }}</p>
      <p class="contextLink" @click="onClickContextMenu($event, item)">...</p>
    </div>
  </div> -->
</template>
 
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["deletePaymentsListData"]),

    onClickContextMenu(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            console.log(item, "Edit");
            this.$context.showForm(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deletePaymentsListData(item);
            this.$context.close();
          },
        },
      ];
      this.$context.show(event, items);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  mounted() {},
};
</script>
 
<style lang="scss" scoped>
.table {
  display: flex;
  & > div {
    padding: 10px;
  }
}
.heading_table {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
}
.widthCol {
  width: 25%;
}
.contextLink:hover {
  color: rgb(230, 65, 65);
}
</style>
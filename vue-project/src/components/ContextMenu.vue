 <template>
  <div class="context" v-if="isShow" :style="stylesMenu">
    <div
      class="context_item"
      v-for="(item, index) in items"
      :key="index"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShow: true,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onClick(item) {
      item.action();
    },
    onShown(items) {
      this.items = items.items;
      this.isShow = true;
      this.setItemPosition(items.caller);
    },
    onClose() {
      this.items = [];
      this.isShow = false;
    },
    setItemPosition(caller) {
      const position = caller.getBoundingClientRect();
      this.xPos = position.left;
      this.yPos = position.top;
    },
  },
  computed: {
    stylesMenu() {
      return {
        top: `${this.yPos - 58}px`,
        left: `${this.xPos + 40}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("shown", this.onShown);
    this.$context.EventBus.$on("close", this.onClose);
    this.$context.EventBus.$on("showFormOnClickEdit", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("shown", this.onShown);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>
 
 <style lang='scss' scoped>
.context {
  position: absolute;
  cursor: pointer;
  background-color: #eee;
}

.context_item:hover {
  color: rgb(230, 65, 65);
}
</style>



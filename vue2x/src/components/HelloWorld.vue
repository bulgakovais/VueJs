
 <template>
  <div class="hello">
    <br />
    <input type="number" placeholder="operand1" v-model.number="operand1" />
    <input type="number" placeholder="operand2" v-model.number="operand2" />
    <br />
    {{ result }}
    <br />
    <button @click="calculate('+')">+</button>
    <button @click="calculate('-')">-</button>
    <button @click="calculate('*')">*</button>
    <button @click="calculate('/')">/</button>
    <button @click="calculate('exponentiation')">exponentiation</button>
    <button @click="calculate('integer_div')">integer division</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello Vue",
      result: 0,
      operand1: 0,
      operand2: 0,
    };
  },
  methods: {
    onChange(str, event) {
      console.log(str, event);
    },
    calculate(action = "+") {
      switch (action) {
        case "+":
          this.add();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.mul();
          break;
        case "/":
          this.div();
          break;
        case "exponentiation":
          this.exponent();
          break;
        case "integer_div":
          this.integer_div();
          break;
      }
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.result = "На ноль делить нельзя.";
      } else this.result = operand1 / operand2;
    },
    onChangeInput(event) {
      this.operand1 = event.target.value;
    },
    integer_div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.result = "На ноль делить нельзя.";
      } else {
        if (operand1 / operand2 >= 0)
          this.result = Math.floor(operand1 / operand2);
        else this.result = Math.ceil(operand1 / operand2);
      }
    },
    exponent() {
      const { operand1, operand2 } = this;
      this.result = Math.pow(operand1, operand2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
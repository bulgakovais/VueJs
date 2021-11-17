
 <template>
  <div class="hello">
    <br />

    <label for="one"
      ><input
        type="number"
        placeholder="operand1"
        v-model.number="operand1"
        @focus="focusInput('operand1')" />
      <input type="radio" id="one" value="operand1" v-model="selectedOperand"
    /></label>

    <label for="two"
      ><input
        type="number"
        placeholder="operand2"
        v-model.number="operand2"
        @focus="focusInput('operand2')" />
      <input type="radio" id="two" value="operand2" v-model="selectedOperand"
    /></label>

    <br />
    {{ result }}
    <br />

    <button @click="calculate('+')">+</button>
    <button @click="calculate('-')">-</button>
    <button @click="calculate('*')">*</button>
    <button @click="calculate('/')">/</button>
    <button @click="calculate('exponentiation')">exponentiation</button>
    <button @click="calculate('integer_div')">integer division</button>

    <div class="margin-top">
      <button
        v-show="show_keyboard"
        class="keyboard"
        @click="numberInput(btn.number)"
        v-for="btn in btns"
        :key="btn.number"
      >
        {{ btn.number }}
      </button>
      <button @click="del()">delete</button>
    </div>
    <div class="margin-top">
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        @click="show_keyboard = !show_keyboard"
      />
      keyboard
    </div>
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
      selectedOperand: 0,
      checked: true,
      show_keyboard: true,
      btns: [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 0 },
      ],
    };
  },
  methods: {
    onChange(str, event) {
      console.log(str, event);
    },
    numberInput(number) {
      if (this[this.selectedOperand] === 0) {
        this[this.selectedOperand] = number;
      } else
        this[this.selectedOperand] = +`${this[this.selectedOperand]}${number}`;
    },
    del() {
      let newArr = this[this.selectedOperand]
        .toString()
        .split("")
        .slice(0, -1)
        .join("");

      this[this.selectedOperand] = `${newArr}`;
      console.log(newArr);
    },
    focusInput(operand) {
      this.selectedOperand = operand;
      console.log(this.operand);
      console.log(this.selectedOperand);
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

.margin-top {
  margin-top: 20px;
}
</style>
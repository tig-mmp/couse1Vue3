import { createApp } from "vue/dist/vue.esm-browser.js";

const Hello = {
  template: `
    <h3>Hello from component</h3>
  `,
};

const app = createApp({
  components: {
    Hello,
  },
  template: `
		<h1>Hello {{msg}}</h1>
		<p>{{person}}</p>
    <br>
    <hello></hello>
    <br>
		<h2>Increment</h2>
		<button @click="increment(5)">Increment</button>
    <p>{{count}}</p>
    <br>
    <h2>V-IF</h2>
    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else>
      Odd
    </div>
    <br>
    <h2>V-FOR</h2>
    <div v-for="number in evenList">
      {{number}}
    </div>
    <br>
    <h2>V-BIND</h2>
    <div v-for="number in numbers">
      <div :class="getClass(number)" :title="number">
        {{number}}
      </div>
    </div>
    <br>
    <h2>Input</h2>
    <input v-model="value" />
    {{value}}
    <div v-if="error">{{error}}</div>
    <br>
  `,
  computed: {
    evenList() {
      return this.numbers.filter(this.isEven);
    },
    error() {
      if (this.value.length < 7) {
        return "Too short";
      }
    },
  },
  data() {
    return {
      msg: "world",
      person: {
        name: "Tiago Pinto",
        age: 23,
      },
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "User",
    };
  },
  methods: {
    getClass(number) {
      return this.isEven(number) ? "red" : "blue";
    },
    increment(val) {
      this.count += val;
    },
    isEven(count) {
      return count % 2 === 0;
    },
  },
}).mount("#app");

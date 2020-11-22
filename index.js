import { createApp } from "vue/dist/vue.esm-browser.js";

const app = createApp({
  template: `
		<h1>Hello {{msg}}</h1>
		<p>{{person}}</p>
    <br>
		<h2>Increment</h2>
		<button v-on:click="increment(5)">Increment</button>
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
    <div v-for="number in numbers">
      <div v-show="isEven(number)">
        {{number}}
      </div>
    </div>
	`,
  data() {
    return {
      msg: "world",
      person: {
        name: "Tiago Pinto",
        age: 23,
      },
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    increment(val) {
      this.count += val;
    },
    isEven(count) {
      return count % 2 === 0;
    },
  },
}).mount("#app");

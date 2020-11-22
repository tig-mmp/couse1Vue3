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
	`,
  data() {
    return {
      msg: "world",
      person: {
        name: "Tiago Pinto",
        age: 23,
      },
      count: 0,
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

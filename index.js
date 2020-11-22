import { createApp } from "vue/dist/vue.esm-browser.js";

const app = createApp({
  template: `
		<h1>Hello {{msg}}</h1>
		<p>{{person}}</p>

		<h2>Increment</h2>
		<button v-on:click="increment()">Increment</button>
		<p>{{count}}</p>
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
    increment() {
      this.count += 1;
    },
  },
}).mount("#app");

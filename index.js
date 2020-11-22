import { createApp } from "vue/dist/vue.esm-browser.js";

const app = createApp({
  template: `
		<h1>Hello {{msg}}</h1>
		<p>{{person}}</p>
	`,
  data() {
    return {
      msg: "world",
      person: {
        name: "Tiago Pinto",
        age: 23,
      },
    };
  },
}).mount("#app");

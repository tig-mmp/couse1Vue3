import { createApp } from "vue";
// import App from "./App.vue";
// import App from "./pokemon/App.vue";
// import App from "./composition/App.vue";
// import App from "./microblog/App.vue";
import App from "./router/App.vue";
import { router } from "./router/router.js";

const app = createApp(App);
app.use(router);
app.mount("#app");

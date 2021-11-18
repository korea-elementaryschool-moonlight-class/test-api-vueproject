import { createApp } from "vue";
import App from "./App.vue";

import { Plugin } from "vue-responsive-video-background-player";

createApp(App).use(Plugin).mount("#app");

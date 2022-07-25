import { createApp, h } from "vue";

import App from "./App.vue";
import { marked as m } from "marked";
import router from "./router";
import { hljs } from "./util";
import ContainerComponent from "./components/Container.vue";
import SlideComponent from "./components/Slide.vue";
import LoadingComponent from "./components/Loading.vue";
import UnknownPageComponent from "./components/UnknownPage.vue";

export const app = createApp({
  render: () => h(App),
});
app.use(router);
app.config.productionTip = false;

require("./styles/master.scss");

// Register global components
app.component("container", ContainerComponent);
app.component("slide", SlideComponent);
app.component("loading", LoadingComponent);
app.component("unknown-page", UnknownPageComponent);

// Register the hightlight.js directive
app.directive("hljs", hljs);

// Register filters
export const marked = text => {
  if (!text) text = "**Documentation missing.**";
  text = m(text);
  return text.replace(/<(info|warn)>([\s\S]+)<\/\1>/gi, '<div class="$1">$2</div>');
};
app.mount("#app");

export default app;

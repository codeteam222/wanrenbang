import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Form, FormItem, Button as ElButton, Input, Checkbox, Select, Option } from "element-ui";
import {
  Popup,
  Stepper,
  Button,
  List,
  Icon,
  Tab,
  Tabs,
  Field,
  Notify,
  Uploader,
  Sidebar,
  SidebarItem,
  Card,
  Divider,
  Form as VantForm,
  Cell
} from "vant";
import fetch from "@/utils/fetch";
import "./assets/styles/reset.less";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/public.less";
import "vant/lib/index.css";
import "./assets/font/iconfont.css";
import "amfe-flexible";

Vue.use(Divider);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(ElButton);
Vue.use(Form);
Vue.use(FormItem);

Vue.use(List);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Uploader);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);
Vue.use(Select);
Vue.use(Option);
Vue.use(VantForm);
Vue.use(Cell);

Vue.prototype.$fetch = fetch;
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

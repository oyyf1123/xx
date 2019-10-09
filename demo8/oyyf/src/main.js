import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './layout/reset.css'
import {
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Main,
  Table,
  TableColumn
} from 'element-ui';


Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(Header)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

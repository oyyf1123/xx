import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import axios from 'axios'
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
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Button,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Col,
  DatePicker,
  TimePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Cascader,
  InputNumber,
  TimeSelect,
  Dialog,
  MessageBox,
  Message,
  Popover,
} from 'element-ui';


Vue.use(Popover)
Vue.use(Dialog)
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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Upload)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cascader)
Vue.use(InputNumber)
Vue.use(TimeSelect)


Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.config.productionTip = false
Vue.prototype.$http = axios;
//统一设置请求头 + 统一设置baseURL
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

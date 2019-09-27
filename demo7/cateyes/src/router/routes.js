import HomePage from '../pages/homepage'
import ExplainPage from '../pages/explainpage'
import DetailPage from '../pages/detailpage'
import Support from '../pages/support'
const routes = [
  {
    path: '/homepage',  // 路径
    component: HomePage  //对应的组件名
  },
  {
    path: '/explainpage',
    component: ExplainPage
  },
  {
    path: '/detailpage',
    component: DetailPage
  },
  {
    path: '/support',
    component: Support
  }
];

export default routes;
import NowMemo from '../pages/nowMemo'
import History from '../pages/history'
import MyHeader from '../pages/header'

const routes = [
  {
    path: '/nowMemo',
    component:NowMemo
  },
  {
    path: '/history',
    component:History
  },
  {
    path: '/header',
    component:MyHeader
  }
]

export default routes
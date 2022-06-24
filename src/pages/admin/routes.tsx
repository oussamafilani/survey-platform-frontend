// import Home from '../user/Home'
import NotFound from '../user/404'
import Dashboard from '../admin/Dashboard'
import Users from './Users'
// import Test from './Test'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    component: <Dashboard />,
  },
  {
    path: '/user',
    component: <Users/>,
  },
  // {
  //   path: '/test',
  //   component: <Test/>,
  // },
  {
    path: '*',
    component: <NotFound />,
  },
]

import Home from '../user/Home'
import NotFound from '../user/404'
import Contact from '../user/Contact'
import Dashboard from './Dashboard'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    component: <Dashboard />,
  },
  {
    path: '/contact',
    component: <Contact />,
  },
  /**
   * add your route like
   *
   * {
   *     path: "/your-path",
   *     element: <Your View />
   * },
   */
  {
    path: '*',
    component: <NotFound />,
  },
]

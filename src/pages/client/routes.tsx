import Home from '../guest/Home'
import NotFound from '../guest/404'
import Contact from '../guest/Contact'
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

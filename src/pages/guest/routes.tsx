import Home from './Home'
import NotFound from './404'
import Contact from './Contact'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    component: <Home />,
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

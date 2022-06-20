import Home from '../guest/Home'
import NotFound from '../guest/404'
import Contact from '../guest/Contact'
import Dashboard from '../admin/Dashboard'

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
  {
    path: '*',
    component: <NotFound />,
  },
]

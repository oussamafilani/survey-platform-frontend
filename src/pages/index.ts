import StoreFront from './store-front'
import Categories from './categories'
import Shop from './shop'
let indexRoutes = [
  {
    path: 'home',
    link: '/',
    name: 'Home',
    render: StoreFront,
  },
  {
    path: 'categories/*',
    link: 'categories',
    name: 'Categories',
    render: Categories,
  },
  {
    path: 'shop/*',
    link: 'shop',
    name: 'Shop',
    render: Shop,
  },
]

export default indexRoutes

import ProductOverview from './product-overview'
import Shop from './shop-view'

let routes = [
  {
    path: '',
    name: 'shop-view',
    component: Shop,
  },
  {
    path: ':id',
    name: 'product-view',
    component: ProductOverview,
  },
]

export default routes

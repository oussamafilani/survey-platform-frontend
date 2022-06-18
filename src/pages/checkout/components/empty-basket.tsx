import {ShoppingBagIcon} from '@heroicons/react/outline'
import React from 'react'
import {Link} from 'react-router-dom'
function EmptyBasket() {
  return (
    <div className="flex items-center justify-center flex-col py-12 space-y-4 h-96">
      <ShoppingBagIcon className="h-24 w-24 text-gray-700" />
      <div className="text-grey-600 font-medium text-gray-700">
        Your cart is currently empty
      </div>
      <Link to={'/shop'}>
        <div className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Shop the collection<span aria-hidden="true"> &rarr;</span>
        </div>
      </Link>
    </div>
  )
}

export default EmptyBasket

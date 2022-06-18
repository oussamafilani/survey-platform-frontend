import React from 'react'
import {Link} from 'react-router-dom'
import {Product} from 'generated/graphql.generated'
import {DEFAULT_IMG_PRODUCT} from '@constants/env'
import cache from '@app/cache'
import {useReactiveVar} from '@apollo/client'
import {toast} from 'react-hot-toast'

const shopVar = cache.shopVar
function ProductCard(product: Product) {
  const {image_urls, name, price, id} = product
  const cartValue = useReactiveVar(shopVar)
  const addToCart = (product: Product) => {
    const isAlreadyExist =
      cartValue.filter(productEl => productEl.id === product.id).length !== 0
    if (isAlreadyExist) {
      toast.success('product already exist on your cart !')
      return
    }
    shopVar([...cartValue, {...product, count: 1}])
    toast.success('added to your cart successfully')
  }
  return (
    <>
      <div>
        <Link to={`/shop/${id}`}>
          <div className="relative">
            <div className="relative w-full h-72 rounded-lg overflow-hidden">
              <img
                src={image_urls[0] ?? DEFAULT_IMG_PRODUCT}
                alt={`product_imag_${id}`}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative mt-4">
              <h3 className="text-sm font-medium text-gray-900 truncate ">
                {name}
              </h3>
            </div>
            <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                {price.toFixed(2)} $
              </p>
            </div>
          </div>
        </Link>
        <div className="mt-6">
          <button
            onClick={() => addToCart(product)}
            type="button"
            className="relative w-full flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Add to bag<span className="sr-only">, {name}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCard

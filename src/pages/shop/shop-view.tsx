import React from 'react'
import ProductCard from '@shared/components/product-card'
import TitlePage from '@shared/components/title-page'
import {Product} from 'generated/graphql.generated'
import {useQuery} from '@apollo/client'
import {PRODUCT_OVERVIEW} from 'apollo/queries/product-overview'
import SkeletonCard from '@shared/components/skeleton-card'

export default function ShopView() {
  const {data: products, loading: loading_products} = useQuery(
    PRODUCT_OVERVIEW,
    {
      variables: {
        limit: 5,
        offset: 0,
      },
    },
  )
  return (
    <section
      aria-labelledby="category-heading"
      className="py-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
    >
      <TitlePage title="Trending products :" />
      {loading_products ? (
        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
          <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
            {Array.from({length: 5}, (_, i) => i + 1).map(el => {
              return <SkeletonCard key={`skeleton-category-${el}`} />
            })}
          </div>
        </div>
      ) : (
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {products?.product.map((product: Product) => (
                  <ProductCard key={`product-${product.name}`} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import {useQuery} from '@apollo/client'
import {CATEGORY_OVERVIEW} from 'apollo/queries/category-overview'
import {PRODUCT_OVERVIEW} from 'apollo/queries/product-overview'
import ProductCard from '@shared/components/product-card'
import {Product, Product_Category_Enum} from 'generated/graphql.generated'
import {Link} from 'react-router-dom'
import CategoryCard from './../shared/components/category-card'
import SkeletonCard from './../shared/components/skeleton-card'

export default function StoreFront() {
  const {data: products, loading: loading_products} = useQuery(
    PRODUCT_OVERVIEW,
    {
      variables: {
        limit: 5,
        offset: 0,
      },
    },
  )
  const {data: categories, loading: loading_categories} = useQuery(
    CATEGORY_OVERVIEW,
    {
      variables: {
        limit: 5,
        offset: 0,
      },
    },
  )

  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <Link to="/categories">
            <div className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </div>
          </Link>
        </div>
        {loading_categories ? (
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
                  {categories.product_category_enum.map(
                    (category: Product_Category_Enum) => (
                      <CategoryCard key={category.name} {...category} />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 px-4 sm:hidden">
          <Link
            to="/categories"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Featured section */}
      <section
        aria-labelledby="social-impact-heading"
        className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">Level up</span>
                <span className="block sm:inline">your desk</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                Make your desk beautiful and organized. Post a picture to social
                media and watch it get more likes than life-changing
                announcements. Reflect on the shallow nature of existence. At
                least you have a really nice desk setup.
              </p>
              <a
                href="/"
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Shop Workspace
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Trending products
          </h2>
          <Link to="/categories">
            <div className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Shop the collection<span aria-hidden="true"> &rarr;</span>
            </div>
          </Link>
        </div>

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

        <div className="mt-6 px-4 sm:hidden">
          <Link
            to="/shop"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Featured section */}
      <section
        aria-labelledby="comfort-heading"
        className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="comfort-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Simple productivity
              </h2>
              <p className="mt-3 text-xl text-white">
                Endless tasks, limited hours, a single piece of paper. Not
                really a haiku, but we're doing our best here. No kanban boards,
                burndown charts, or tangled flowcharts with our Focus system.
                Just the undeniable urge to fill empty circles.
              </p>
              <a
                href="/"
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Shop Focus
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

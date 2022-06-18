import {Fragment} from 'react'
import {StarIcon} from '@heroicons/react/solid'
import {Tab} from '@headlessui/react'
import {classNames} from '@shared/helpers/classNames'
import {useNavigate, useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {PRODUCT_DETAILS} from '@graphql/queries/product-details'
import {Product} from 'generated/graphql.generated'
import Incentives from '@shared/components/incentives'
import {ExclamationCircleIcon} from '@heroicons/react/outline'
import cache from '@app/cache'
import {useReactiveVar} from '@apollo/client'
import toast from 'react-hot-toast'

const faqs = [
  {
    question: 'How Can I Pay?',
    answer:
      'You can use any of the payment types listed below to pay for your order. Your details are safe with us as we take security very seriously indeed.We also take fraud very seriously so all credit and debit cardholders are subject to validation, authorisation and security Checks by both the card issuer and us.',
  },
  {
    question: 'shipping is free ?',
    answer: 'yes we provide free shipping.',
  },
  {
    question: 'How do I use my discount/promo code?',
    answer: `
      You need to enter your discount/promo code on the order summary section of the 'confirm & pay' page. Under your order details, you'll see Promo Code . You must enter the discount/promo code when you are checking out as it can't be applied later.
      `,
  },
]
const shopVar = cache.shopVar

export default function ProductOverview() {
  const {id} = useParams()
  const navigate = useNavigate()
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
  const {data: product, loading: loading_product} = useQuery(PRODUCT_DETAILS, {
    variables: {
      productByPkId: id,
    },
  })
  if (loading_product) {
    return <>loading ...</>
  }
  const {product_by_pk}: {product_by_pk: Product} = product
  return (
    <div className="bg-white mt-12">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={product_by_pk.image_urls[0]}
                alt={product_by_pk.name}
                className="object-center object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product_by_pk.name}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
              </div>

              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        (product_by_pk.product_reviews_aggregate.aggregate?.avg
                          ?.rating ?? 0) > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {product_by_pk.product_reviews_aggregate.aggregate?.count ??
                    0}
                  out of 5 stars
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-6">{product_by_pk.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                onClick={() => {
                  navigate('/cart')
                  addToCart(product_by_pk)
                }}
                type="button"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Pay {product_by_pk.price.toFixed(2)} $
              </button>
              <button
                onClick={() => {
                  addToCart(product_by_pk)
                }}
                type="button"
                className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </div>
            <Incentives />
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Payment</h3>
              <p className="mt-4 text-sm text-gray-500">
                You can use any of the payment types listed below to pay for
                your order. Your details are safe with us as we take security
                very seriously indeed.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                We also take fraud very seriously so all credit and debit
                cardholders are subject to validation, authorisation and
                security Checks by both the card issuer and us.
              </p>
            </div>

            <div className="border-t border-gray-200 mt-10">
              <ul className="flex items-center space-x-6 mt-4">
                <li>
                  <a
                    href="/"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Instagram</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({selected}) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                      )
                    }
                  >
                    Customer Reviews
                  </Tab>
                  <Tab
                    className={({selected}) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                      )
                    }
                  >
                    FAQ
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Customer Reviews</h3>

                  {product_by_pk.product_reviews.length ? (
                    product_by_pk.product_reviews.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className="flex text-sm text-gray-500 space-x-4"
                      >
                        <div className="flex-none py-10">
                          <img
                            src={review.user.avatar!}
                            alt=""
                            className="w-10 h-10 bg-gray-100 rounded-full"
                          />
                        </div>
                        <div
                          className={classNames(
                            reviewIdx === 0 ? '' : 'border-t border-gray-200',
                            'py-10',
                          )}
                        >
                          <h3 className="font-medium text-gray-900">
                            {review.user.name}
                          </h3>
                          <p>
                            <time dateTime={review.created_at}>
                              {new Intl.DateTimeFormat('en-US').format(
                                new Date(review.created_at),
                              )}
                            </time>
                          </p>

                          <div className="flex items-center mt-4">
                            {[0, 1, 2, 3, 4].map(rating => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0',
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>

                          <div
                            className="mt-4 prose prose-sm max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{__html: review.comment}}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center space-x-2 mt-4">
                      <ExclamationCircleIcon className="w-8 h-8 text-gray-900" />
                      <div className="text-sm font-medium text-gray-900">
                        No reviews
                      </div>
                    </div>
                  )}
                </Tab.Panel>

                <Tab.Panel className="text-sm text-gray-500">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    {faqs.map(faq => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 font-medium text-gray-900">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                          <p>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

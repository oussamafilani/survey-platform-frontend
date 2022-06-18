import {useMutation, useReactiveVar} from '@apollo/client'
import cache from '@app/cache'
import {
  ExclamationCircleIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import EmptyBasket from './components/empty-basket'
import {Product} from 'generated/graphql.generated'
import {useAuth0} from '@auth0/auth0-react'
import {INSERT_ADDRESS} from '@graphql/mutations/insert-address'
import * as Yup from 'yup'

import {Formik, FormikHelpers, Form, Field} from 'formik'
import DangerAlert from '@shared/components/danger-alert'

const cachedProducts = cache.shopVar
const userCached = cache.userVar
const paymentMethods = [{id: 'paypal', title: 'PayPal'}]
function Checkout() {
  const [show, setShow] = React.useState(false)
  const navigate = useNavigate()
  const {user, loginWithPopup} = useAuth0()
  const products = useReactiveVar(cachedProducts)
  const userInfo = useReactiveVar(userCached)
  useEffect(() => {
    console.log(userInfo)
    if (userInfo?.id) {
      setShow(false)
      return
    }
    setShow(true)
  }, [userInfo])
  const incrementCount = (id: Product['id']) => {
    let newProducts = products.map(product => {
      if (product.id === id) product.count += 1
      return product
    })
    cachedProducts(newProducts)
  }
  const decrementCount = (id: Product['id']) => {
    let newProducts = products.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1
      return product
    })
    cachedProducts(newProducts)
  }
  const removeItem = (id: Product['id']) => {
    let newProdcuts = products.filter(product => product.id !== id)
    cachedProducts(newProdcuts)
  }
  const initialValues = {
    lastName: 'lastdefault',
    firstName: 'first',
    city: 'casablanca',
    email: user?.email ?? '',
    state: 'casablanca',
    county: 'morocco',
    zipcode: '20000',
    address: 'address',
    phone: '0677676543',
  }
  const [insertAddress] = useMutation(INSERT_ADDRESS)
  const submit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>,
  ) => {
    insertAddress({
      variables: {
        object: {
          address: values.address,
          city: values.city,
          zipcode: values.zipcode,
          user_id: userInfo.id,
          country: values.county,
          state: values.state,
        },
      },
    })
    actions.setSubmitting(false)
  }
  const checkoutSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'your first name short!')
      .max(50, 'your first name long!')
      .required('provide your first name'),
    city: Yup.string()
      .min(2, 'your city name short!')
      .max(50, 'your city name long!')
      .required('provide your city'),
    state: Yup.string()
      .min(2, 'your state short!')
      .max(50, 'your state long!')
      .required('provide your state'),
    zipcode: Yup.string()
      .min(2, 'your zip code short!')
      .max(50, 'your zip code long!')
      .required('provide your zip code'),
    phone: Yup.number()
      .min(10, 'your phone short!')
      .required('provide your phone'),
    address: Yup.string()
      .min(2, 'your address short!')
      .max(50, 'your address long!')
      .required('provide your address'),
    lastName: Yup.string()
      .min(2, 'your last name short!')
      .max(50, 'your last name long!')
      .required('provide your last name'),
    email: Yup.string().email('Invalid email').required('provide your email'),
  })
  if (!products.length) {
    return (
      <div className="mt-24">
        <EmptyBasket />
      </div>
    )
  }
  return (
    <>
      <DangerAlert
        show={show}
        title={'You are not authenticated!'}
        content={`
        The main thing error is responsible for is issuing a message to the user that he or she has done something incorrectly.
        `}
        prBtnAction={() => {
          loginWithPopup()
        }}
        prBtnLabel={'authorize'}
        scBtnAction={() => {
          navigate('/shop')
        }}
        scBtnLabel={'continue'}
        onClose={() => {
          console.log("you can't close alert")
        }}
      />
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={submit}
          >
            {({errors, touched}) => (
              <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                <div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Contact information
                    </h2>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                            errors.email
                              ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                              : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                          }`}
                          aria-invalid="true"
                          aria-describedby="email-error"
                        />
                        {errors.email ? (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                              className="h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                        ) : null}
                      </div>
                      {errors.email ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shipping information
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <Field
                            type="text"
                            id="first-name"
                            name="firstName"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.firstName
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="email-error"
                          />
                          {errors.firstName ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.firstName ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.firstName}
                          </p>
                        ) : null}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <Field
                            type="text"
                            id="last-name"
                            name="lastName"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.lastName
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="email-error"
                          />
                          {errors.lastName ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.lastName ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.lastName}
                          </p>
                        ) : null}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address (Apartment, suite)
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="address"
                            id="address"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.address
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="address-error"
                          />
                          {errors.address ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.address ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.address}
                          </p>
                        ) : null}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="city"
                            id="city"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.city
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="city-error"
                          />
                          {errors.city ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.city ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.city}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <div className="mt-1">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="state"
                            id="region"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.state
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="city-error"
                          />
                          {errors.state ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.state ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.state}
                          </p>
                        ) : null}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="zipcode"
                            id="postal-code"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.zipcode
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="city-error"
                          />
                          {errors.zipcode ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.zipcode ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.zipcode}
                          </p>
                        ) : null}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="phone"
                            id="phone"
                            className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${
                              errors.phone
                                ? `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`
                                : `border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`
                            }`}
                            aria-invalid="true"
                            aria-describedby="city-error"
                          />
                          {errors.phone ? (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : null}
                        </div>
                        {errors.phone ? (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Payment
                    </h2>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Payment type</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {paymentMethods.map(
                          (paymentMethod, paymentMethodIdx) => (
                            <div
                              key={paymentMethod.id}
                              className="flex items-center"
                            >
                              {paymentMethodIdx === 0 ? (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  defaultChecked
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                              ) : (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                              )}

                              <label
                                htmlFor={paymentMethod.id}
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                {paymentMethod.title}
                              </label>
                            </div>
                          ),
                        )}
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* Order summary */}
                <div className="mt-10 lg:mt-0">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order summary
                  </h2>

                  <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul className="divide-y divide-gray-200">
                      {products.map(product => (
                        <li key={product.id} className="flex py-6 px-4 sm:px-6">
                          <div className="flex-shrink-0">
                            <img
                              src={product.image_urls[0]}
                              alt={product.name}
                              className="w-20 rounded-md"
                            />
                          </div>
                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm">
                                  <Link
                                    to={`/shop/${product.id}`}
                                    className="font-medium text-gray-700 hover:text-gray-800"
                                  >
                                    {product.name}
                                  </Link>
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.brand}
                                </p>
                              </div>

                              <div className="ml-4 flex-shrink-0 flow-root">
                                <button
                                  type="button"
                                  className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Remove</span>
                                  <TrashIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    onClick={() => {
                                      removeItem(product.id)
                                    }}
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="flex-1 pt-2 flex items-end justify-between">
                              <p className="mt-1 text-sm font-medium text-gray-900">
                                {product.price.toFixed(2)} $
                              </p>

                              <div className="ml-4">
                                <label htmlFor="quantity" className="sr-only">
                                  Quantity
                                </label>
                                <div className="flex items-center space-x-2">
                                  <PlusIcon
                                    className="cursor-pointer	 h-3 w-3 text-gray-500"
                                    onClick={() => {
                                      incrementCount(product.id)
                                    }}
                                  />
                                  <span className="text-md font-bold text-gray-500">
                                    {product.count}
                                  </span>
                                  <MinusIcon
                                    className="cursor-pointer	 h-3 w-3 text-gray-500"
                                    onClick={() => {
                                      decrementCount(product.id)
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                          {products
                            .map(product => product.count * product.price)
                            .reduce((a, b) => a + b, 0)
                            .toFixed(2)}{' '}
                          $
                        </dd>
                      </div>
                    </dl>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                      >
                        Confirm order
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  )
}

export default Checkout

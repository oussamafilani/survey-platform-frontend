import {Fragment, useEffect, useState} from 'react'
import Pages from 'pages'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import {Dialog, Popover, Transition} from '@headlessui/react'
import {
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import {useAuth0} from '@auth0/auth0-react'
import {useQuery, useReactiveVar} from '@apollo/client'
import cache from './cache'
import Checkout from '@pages/checkout'
import {GET_USER_INFO} from '@graphql/queries/get-user-info'
import useLocalStorageState from '@shared/hooks/use-localstorage'

const footerNavigation = {
  shop: [
    {name: 'Bags', href: '#'},
    {name: 'Tees', href: '#'},
    {name: 'Objects', href: '#'},
    {name: 'Home Goods', href: '#'},
    {name: 'Accessories', href: '#'},
  ],
  company: [
    {name: 'Who we are', href: '#'},
    {name: 'Sustainability', href: '#'},
    {name: 'Press', href: '#'},
    {name: 'Careers', href: '#'},
    {name: 'Terms & Conditions', href: '#'},
    {name: 'Privacy', href: '#'},
  ],
  account: [
    {name: 'Manage Account', href: '#'},
    {name: 'Returns & Exchanges', href: '#'},
    {name: 'Redeem a Gift Card', href: '#'},
  ],
  connect: [
    {name: 'Contact Us', href: '#'},
    {name: 'Twitter', href: '#'},
    {name: 'Instagram', href: '#'},
    {name: 'Pinterest', href: '#'},
  ],
}

export default function Main() {
  const [open, setOpen] = useState(false)
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0()
  const {data: userInfo, loading} = useQuery(GET_USER_INFO, {
    variables: {
      where: {
        user_id_auth0: {
          _eq: user?.sub,
        },
      },
    },
    skip: !user?.sub,
  })
  if (!loading) {
    cache.userVar(userInfo?.user[0])
  }
  const shopVarGetter = useReactiveVar(cache.shopVar)
  const [loadLocalstorage, saveTolocalstorage] = useLocalStorageState({
    key: 'cart',
  })
  useEffect(() => {
    cache.shopVar(loadLocalstorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    saveTolocalstorage(shopVarGetter)
  }, [saveTolocalstorage, shopVarGetter])

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {Pages.map(page => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.path}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center justify-between">
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <a
                  href="/"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {Pages.map(page => (
                    <Link
                      key={page.name}
                      to={page.link}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <a href="/" className="flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>

              <div className="flex-1 flex items-center justify-end">
                {/* Search */}
                <a
                  href="/"
                  className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>

                {/* Account */}

                <Link
                  to="/profile"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon className="w-6 h-6" aria-hidden="true" />
                </Link>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={'/cart'}
                    className="group -m-2 p-2 flex items-center"
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {shopVarGetter.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <div>
                    {isAuthenticated ? (
                      <LogoutIcon
                        onClick={() =>
                          logout({returnTo: window.location.origin})
                        }
                        className="flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <LoginIcon
                        onClick={() => loginWithRedirect()}
                        className="flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="-mt-24">
        <h1 className="sr-only">layout</h1>
        {/* Main 3 column grid */}
        <Routes>
          {Pages.map(route => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.render />}
            />
          ))}
          <Route path="cart" element={<Checkout />} />
          <Route index element={<Navigate to={'/home'} />} />
        </Routes>
      </main>
      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-white">Shop</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.shop.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.company.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-white">Account</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.account.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Connect</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.connect.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-300">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2021 Clothing Company Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

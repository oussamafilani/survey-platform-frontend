//@ts-nocheck
import toast, {Toaster} from 'react-hot-toast'
import {BrowserRouter} from 'react-router-dom'

import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  from,
} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {onError} from '@apollo/client/link/error'

import React from 'react'
import AppRoutes from '../routes/AppRoutes'
import {
  BACKEND_URL,
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
} from '@constants/env'
import {Auth0Provider, useAuth0} from '@auth0/auth0-react'
import cache from './cache'
import Loading from './../shared/components/loading'
const AuthorizedApolloProvider = ({children}: {children: React.ReactNode}) => {
  const {getAccessTokenSilently, isLoading, isAuthenticated} = useAuth0()

  if (isLoading) {
    return <Loading />
  } else {
    const httpLink = createHttpLink({
      uri: BACKEND_URL,
    })

    // const errorLink = onError(({graphQLErrors, networkError}) => {
    //   if (graphQLErrors)
    //     graphQLErrors.forEach(({message, locations, path, extensions}) => {
    //       if (extensions.code === 'UNAUTHENTICATED') {
    //         toast.error('You are not authorized to view this page')
    //       } else {
    //         toast.error(`${message}`)
    //       }
    //       console.log(
    //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //       )
    //     })

    //   if (networkError) {
    //     console.log(`[Network error]: ${networkError}`)
    //     toast.error(`Network error ${networkError.message}`)
    //   }
    // })

    const authLink = setContext(async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently()
        return {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      } else {
        return {}
      }
    })

    const apolloClient = new ApolloClient({
      // link: from([errorLink, authLink.concat(httpLink)]),
      link: authLink.concat(httpLink),
      cache: cache.cache,
      connectToDevTools: true,
    })

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  }
}
function App() {

  return (
    <React.StrictMode>
      <Auth0Provider
        domain={AUTH0_DOMAIN!}
        clientId={AUTH0_CLIENT_ID!}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
        audience={AUTH0_AUDIENCE}
      >
        <AuthorizedApolloProvider>
          <Toaster />
          <BrowserRouter>
           <AppRoutes/>
          </BrowserRouter>
        </AuthorizedApolloProvider>
      </Auth0Provider>
    </React.StrictMode>
  )
}

export default App

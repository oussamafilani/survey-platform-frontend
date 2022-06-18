import {InMemoryCache, makeVar} from '@apollo/client'
import {Product, User} from 'generated/graphql.generated'
const shopVar = makeVar<(Product & {count: number})[]>([])
const userVar = makeVar<User>({} as User)

export const in_memory_cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
  },
})

const localVariables = {
  shopVar,
  userVar,
}

const cache = {
  cache: in_memory_cache,
  ...localVariables,
}

export default cache

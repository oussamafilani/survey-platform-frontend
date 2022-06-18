import {gql} from '@apollo/client'
export const GET_USER_INFO = gql`
  query Query_getUser($where: user_bool_exp) {
    user(where: $where) {
      avatar
      created_at
      email
      id
      name
      updated_at
    }
  }
`

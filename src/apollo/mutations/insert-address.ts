import {gql} from '@apollo/client'
export const INSERT_ADDRESS = gql`
  mutation Insert_address_one($object: address_insert_input!) {
    insert_address_one(object: $object) {
      address
      city
      state
      user_id
      zipcode
      id
    }
  }
`

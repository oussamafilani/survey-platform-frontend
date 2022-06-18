import {gql} from '@apollo/client'

export const CATEGORY_OVERVIEW = gql`
  query Category($limit: Int, $offset: Int) {
    product_category_enum(limit: $limit, offset: $offset) {
      display_name
      image
      name
    }
  }
`

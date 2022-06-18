import {gql} from '@apollo/client'

export const PRODUCT_OVERVIEW = gql`
  query Product($limit: Int, $offset: Int) {
    product(limit: $limit, offset: $offset) {
      brand
      category_display_name
      id
      image_urls
      name
      price
    }
  }
`

import {gql} from '@apollo/client'

export const PRODUCT_DETAILS = gql`
  query Product_by_pk($productByPkId: Int!) {
    product_by_pk(id: $productByPkId) {
      brand
      image_urls
      description
      category_display_name
      created_at
      description
      id
      name
      price
      product_reviews_aggregate {
        aggregate {
          avg {
            rating
          }
          count
        }
      }
      product_reviews {
        comment
        rating
        user {
          name
        }
        updated_at
        created_at
      }
    }
  }
`

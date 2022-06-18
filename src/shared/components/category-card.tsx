import React from 'react'
import {Link} from 'react-router-dom'
import {Product_Category_Enum} from 'generated/graphql.generated'

function CategoryCard({name, image, display_name}: Product_Category_Enum) {
  return (
    <>
      <Link
        to={`/shop?category=${name}`}
        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
      >
        <span aria-hidden="true" className="absolute inset-0">
          <img
            src={image!}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
        />
        <span className="relative mt-auto text-center text-xl font-bold text-white">
          {display_name}
        </span>
      </Link>
    </>
  )
}

export default CategoryCard

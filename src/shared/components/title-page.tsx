import React from 'react'
interface ITitlePage {
  title: string
}
function TitlePage({title}: ITitlePage) {
  return (
    <h2
      id="category-heading"
      className=" text-2xl font-extrabold tracking-tight text-gray-800 mb-10 text-center"
    >
      {title}
    </h2>
  )
}

export default TitlePage

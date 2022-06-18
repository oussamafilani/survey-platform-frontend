import React from 'react'

function SkeletonCard() {
  return (
    <div className="group relative">
      <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80 animate-pulse "></div>
    </div>
  )
}

export default SkeletonCard

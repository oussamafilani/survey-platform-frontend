import React from 'react'
import {Route, Routes} from 'react-router-dom'
import routes from './routes'

function Shop() {
  return (
    <div>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default Shop

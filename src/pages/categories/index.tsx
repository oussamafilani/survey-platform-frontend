import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CategoriesView from './categories-view'
import routes from './routes'

function Categories() {
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
        <Route index element={<CategoriesView />} />
      </Routes>
    </div>
  )
}

export default Categories

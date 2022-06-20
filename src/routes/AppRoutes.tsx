import {Routes, Route} from 'react-router-dom'
import guestRoutes from '../pages/guest/routes'
import clientRoutes from '../pages/client/routes'
import adminRoutes from '../pages/admin/routes'

const AppRoutes = () => {
  // @ts-ignore
  const GuestrouteComponents = guestRoutes.map(
    ({path, component}: any, key) => (
      <Route path={path} element={component} key={key} />
    ),
  )
  const ClientrouteComponents = clientRoutes.map(
    ({path, component}: any, key) => (
      <Route path={path} element={component} key={key} />
    ),
  )
  const AdminrouteComponents = adminRoutes.map(
    ({path, component}: any, key) => (
      <Route path={path} element={component} key={key} />
    ),
  )

  return (
    <>
      <Routes>{ClientrouteComponents}</Routes>
    </>
  )
}

export default AppRoutes

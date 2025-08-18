import { Routes, Route } from 'react-router'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Accommodation from '../pages/Accommodation/Accommodation'
import Error from '../pages/Error/Error'
import Layout from '../components/Layout/Layout'

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default Router

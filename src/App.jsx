import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'

function App() {
        const myRoutes = createBrowserRouter(createRoutesFromElements(
          <Route>
            <Route path='/' element={<LayoutOne />} >
             <Route index element={<Home />} />
            </Route>
          </Route>
        ))
  return (
    <>
    <RouterProvider router={myRoutes} />


    </>
  )
}

export default App

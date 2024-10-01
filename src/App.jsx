import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'

function App() {
        const myRoutes = createBrowserRouter(createRoutesFromElements(
          <Route>
            <Route path='/' element={<LayoutOne />} >
            
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

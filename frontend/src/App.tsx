import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import RootLayout from "./components/layouts/root/RootLayout"
import HomePage from "./routes/HomePage"

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout><Outlet /></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import NotFound from "./components/NotFound";
import RootLayout from "./components/RootLayout";
import Login from "./features/auth/Login.jsx";
import Register from "./features/auth/Register.jsx";
import Home from "./features/home/Home.jsx";




export default function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },

  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

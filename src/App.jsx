import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./components/NotFound";
import RootLayout from "./components/RootLayout";




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

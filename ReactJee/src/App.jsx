import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./components/NotFound";
import RootLayout from "./components/RootLayout";
import ItemList from "./pages/meals/ItemList";
import Meal from "./pages/meals/Meal";
import UseParam from "./pages/params/UseParam";
import UseSearchParam from "./pages/params/UseSearchParam";
import Search from "./pages/meals/Search";



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
          path: 'items-list/:label',
          element: <ItemList />
        },
        {
          path:'meal/:id',
          element: <Meal />
        },
        {
          path: 'search',
          element: <Search />
        },
        {
          path: 'use-params/:id',
          element: <UseParam />
        },
        {
          path: 'searchParams',
          element: <UseSearchParam />
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

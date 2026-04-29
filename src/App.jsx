import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./components/NotFound";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Page1 from "./pages/home/nested/Page1";
import Page2 from "./pages/home/nested/Page2";
import RootLayout from "./components/RootLayout";
import Practice from "./pages/practice-page/Practice";
import ItemList from "./pages/practice-page/ItemList";

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
          path: 'about',
          element:
            <About />
        },
        {
          path: 'dashboard',
          element:

            <Dashboard />
        },
        {
          path: 'practice-page',
          element: <Practice />
        },
        {
          path: 'items-list/:label',
          element: <ItemList />

        },
        {
          path: '*',
          element: <NotFound />
        }
        // {
        //   path: 'page-1',
        //   element: <Page1/>
        // },
        // {
        //   path: 'page-2',
        //   element: <Page2/>
        // }
      ]
    },

  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

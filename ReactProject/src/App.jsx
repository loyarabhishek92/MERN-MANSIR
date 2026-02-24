import Header from "./components/Header";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/NotFound";
import RootLayout from "./components/RootLayout";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }



  ]);





  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

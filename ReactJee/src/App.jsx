import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./components/NotFound";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header";

export default function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div>
          <Header />
          <Home />
        </div>
    },
    {
      path: '/about',
      element:
        <div>
          <Header />
          <About />
        </div>
    },
    {
      path: '/dashboard',
      element:
        <div>
          <Header />
          <Dashboard />
        </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);





  return (
    <div className="p-5">
      <RouterProvider router={router} />
    </div>
  )
}

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./components/NotFound";
import RootLayout from "./components/RootLayout";
import AddForm from "./pages/form/add/AddForm";
import UpdateForm from "./pages/form/update/UpdateForm";




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
          path: 'addForm',
          element: <AddForm />
        },
        {
          path: 'form/update/:id',
          element: <UpdateForm />
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

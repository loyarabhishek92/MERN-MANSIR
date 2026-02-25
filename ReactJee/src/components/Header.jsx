import { NavLink } from "react-router";
import { Button } from "./ui/button";


export default function Header() {
  return (
    <div className="flex gap-10 p-5 justify-between bg-amber-100 sticky top-0">
      <h1>Formik</h1>
<Button>
        <NavLink to={'/form/add'}>Add form</NavLink>
      </Button>
      
    </div>
  )
}

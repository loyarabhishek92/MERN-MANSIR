import { NavLink } from "react-router";
import { Button } from "./ui/button";


export default function Header() {
  return (
    <div className="flex justify-between p-5 bg-blue-100">
      <Button><NavLink to={'/'}>Go to Home</NavLink></Button>
      <h1>RTK</h1>
       <Button><NavLink to={'/addForm'}>Add</NavLink></Button>
        
      
     

    </div>
  )
}

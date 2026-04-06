import { NavLink } from "react-router";
import { Button } from "./ui/button";


export default function Header() {
  return (
    <div className="flex justify-between p-5 bg-blue-100">
      <Button><NavLink to={'/'}>Go to Home</NavLink></Button>
      <h1>frontend backend working</h1>
      <div className="flex gap-5">
        <Button><NavLink to={'/login'}>Login</NavLink></Button>
        <Button><NavLink to={'/register'}>Register</NavLink></Button>
      </div>




    </div>
  )
}

import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import DropdownMenuUser from "./DropDownMenuUser.jsx";


export default function Header() {

  const { user } = useSelector(state => state.userSlice);



  return (
    <div className="flex justify-between p-5 bg-blue-100">
      <Button><NavLink to={'/'}>Go to Home</NavLink></Button>
      <h1>frontend backend working</h1>

      {user ? <DropdownMenuUser user={user} /> : <div className="flex gap-5">
        <Button><NavLink to={'/login'}>Login</NavLink></Button>
        <Button className={'bg-blue-700'}><NavLink to={'/register'}>Register</NavLink></Button>
      </div>
      }





    </div>
  )
}

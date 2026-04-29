import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import DropdownMenuUser from "./DropDownMenuUser.jsx";


export default function Header() {

  const { user } = useSelector(state => state.userSlice);



  return (
    <div className="flex justify-between p-5 bg-blue-100">
      <NavLink to={'/'} className={"px-3 py-1 bg-blue-200 rounded-l-2xl hover:text-yellow-100"}>Go to Home</NavLink>
      <h1>frontend backend working</h1>

      {user ? <DropdownMenuUser user={user} /> : <div className="flex gap-10">
        <NavLink to={'/login'} className={"px-3 py-1 bg-white rounded-2xl"}>Login</NavLink>
        <NavLink to={'/register'} className={"px-3 py-1 bg-blue-500 rounded-2xl"}>Register</NavLink>
      </div>
      }





    </div>
  )
}

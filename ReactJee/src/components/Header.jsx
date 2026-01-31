import { NavLink } from "react-router";


export default function Header() {
  return (
    <div className="flex justify-between justify-items-center-safe h-20 bg-black text-white">
      <h1 className="p-2 text-2xl">React App</h1>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </div>
  )
}

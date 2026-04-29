import { NavLink } from "react-router";


export default function Header() {
  return (
    <div className="flex justify-between items-center h-20 bg-black text-white px-10">
      <h1 className="text-2xl">React App</h1>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/dashboard'}>Dashboard</NavLink>
      <NavLink to={'/practice-page'}>Practice page</NavLink>
    </div>
  )
}

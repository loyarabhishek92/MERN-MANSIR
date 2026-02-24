import { NavLink } from "react-router"
export default function Footer() {
  return (
    <div className="bg-black flex justify-center items-center h-30 text-white">
      <nav>
       <h1>Powered by <NavLink to={'/'}>Abhishek</NavLink> </h1>
      </nav>
    </div>
  )
}

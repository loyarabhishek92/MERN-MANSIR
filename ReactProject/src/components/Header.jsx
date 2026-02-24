import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/menu'}>Menu</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
    </div>
  )
}

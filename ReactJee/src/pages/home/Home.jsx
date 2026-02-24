
import {NavLink, Outlet} from "react-router";
export default function Home() {
  return (
    <div>
      <h1>This is Home page.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur, unde vel sequi velit laudantium sit alias cumque odit ipsum?</p>
      <NavLink to={'/page-1'}>page-1</NavLink>
      <NavLink to={'/page-2'}>page-2</NavLink>
      <Outlet/>
    </div>
    
  )
}


import { Form } from "react-router";
import Footer from "../../components/Footer";
import About from "../about/About";
import Menu from "../menu/Menu";
import Form1 from "../../components/Form1";

export default function Home() {
  return (
    <div>

      <header className="h-160 bg-[url(https://www.w3schools.com/w3images/pizza.jpg)] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div className="text-white text-center uppercase text-7xl space-y-15">
          <h1>thin</h1>
          <h1>crust pizza</h1>
          <button className="uppercase bg-black text-white text-2xl px-10 py-5 rounded-2xl cursor-pointer hover:bg-amber-600">let me see the menu</button>
        </div>

      </header>

      <Menu />
      <About/>
      <Form1/>
      <img src="https://www.w3schools.com/w3images/map.jpg" alt="map" className="w-full opacity-80" />
      <hr className="text-white"/>
  
      <Footer/>
    </div>
  )
}

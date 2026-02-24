import Footer from "../../components/Footer";

export default function Menu() {
  const pizzas = [
    {
      id: 1,
      name: 'pizza',
      price: 120,
    },
    {
      id: 2,
      name: 'pizza',
      price: 120,
    },
    {
      id: 3,
      name: 'pizza',
      price: 120,
    },
    {
      id: 4,
      name: 'pizza',
      price: 120,
    },
    {
      id: 5,
      name: 'pizza',
      price: 120,
    },
    {
      id: 6,
      name: 'pizza',
      price: 120,
    }
  ];
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl uppercase mt-20">the menu</h1>
      <div className="bg-white text-black w-250 my-20 px-5 py-2">
        {pizzas.map((pizza) => {
          return (

            <div key={pizza.id}>
              <h1> {pizza.name} </h1>
              <h1> ${pizza.price} </h1>
              <hr className="py-3" />
            </div>

          )
        })}
      </div>
    </div>
  )
}



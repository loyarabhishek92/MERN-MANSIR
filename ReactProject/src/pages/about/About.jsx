
export default function About() {
  return (
    <div className="bg-[#8B5F5B] text-white uppercase">
      <div className="mx-70">
        <h1 className="text-center text-6xl pt-20">about</h1>
        <p className="text-1xl mt-15">The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="mt-8">The Chef? Mr. Italiano himself</h1>
            <h1 className="mt-8">We are proud of our interiors.</h1>
          </div>
          <div>
            <img src="https://www.w3schools.com/w3images/chef.jpg" alt="image" className="w-50 h-30 rounded-4xl" />
          </div>
        </div>

        <img src="https://www.w3schools.com/w3images/onepage_restaurant.jpg" alt="Kitchen" className="mt-8" />
        <h1 className="mt-8 text-3xl">Opening Hours</h1>
        <div className="py-15 flex justify-between w-200 text-2xl">
          <div>
            <h2>Mon & Tue CLOSED</h2>
            <h2 className="mt-2">Wednesday 10.00 - 24.00</h2>
            <h2 className="mt-2">Thursday 10:00 - 24:00</h2>
          </div>
          <div>
            <h2>Friday 10:00 - 12:00</h2>
            <h2 className="mt-2">Saturday 10:00 - 23:00</h2>
            <h2 className="mt-2">Sunday Closed</h2>
          </div>


        </div>
      </div>
    </div>
  )
}

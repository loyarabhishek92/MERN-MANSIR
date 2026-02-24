import { useState } from "react";

function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-75">
      <h1 className="text-center text-6xl uppercase">contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nemo? Totam voluptatum officiis assumenda, harum placeat voluptatem aspernatur, saepe ut dicta aperiam suscipit facilis cupiditate repellat delectus natus molestias modi?</p>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-6xl">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <input
        type="text"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form1;

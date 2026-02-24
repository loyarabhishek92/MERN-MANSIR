import { useState } from "react";

export default function Card() {

     const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  

    return (
        <div
             style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
        >

        
    
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
           
            




        </div>
    )
}

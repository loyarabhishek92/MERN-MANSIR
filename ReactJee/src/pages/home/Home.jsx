import { Button } from "@/components/ui/button";
import { useState } from "react"


export default function Home() {

  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    setCount(count+1);
  }
  const decrementHandle = () => {
    if(count > 0) {
    setCount(count-1);
    }
    
  }





  return (
    <div className="p-5 space-x-2">
      <h1 className="font-extrabold">{count}</h1>
      <Button onClick = {incrementHandle}>increment</Button>
      <Button onClick = {decrementHandle}>decrement</Button>

      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eaque debitis suscipit numquam culpa libero ratione obcaecati commodi odio tenetur. Nemo, quasi iste nulla odio ad consectetur deserunt perspiciatis quia. Ipsam doloremque ex dolorum animi atque consectetur repudiandae laudantium ratione hic vero. Consequatur illum error natus nihil minima officia omnis tenetur sed, quisquam voluptas earum eligendi, nostrum voluptate labore optio ab in assumenda aut ut necessitatibus? Natus minus repudiandae veniam delectus voluptatum, reiciendis voluptas tempora deleniti? Impedit quam consectetur aperiam earum culpa ipsum repudiandae! Iure consectetur omnis facere dolorum, maiores eveniet ullam corporis, quod reiciendis ad, totam quasi vel commodi.</h1>
   
  
    </div>
  )
}

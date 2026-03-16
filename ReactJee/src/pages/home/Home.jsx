import { Button } from "@/components/ui/button";
import { useReducer } from "react"

export default function Home() {

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'INCREMENT':
      return state + 1;
      case 'DECREMENT':
        if(state>0){
        return state - 1;
        }
        default:
          return state;
    }
  }, 0);
  console.log(state);


  return (
    <div className="px-10">
      <h1>{state}</h1>
      <Button onClick= {() => dispatch({type: 'INCREMENT'})}>Increment</Button>
      <Button onClick= {() => dispatch({type: 'DECREMENT'})}>Decrement</Button>
    </div>
  )
}

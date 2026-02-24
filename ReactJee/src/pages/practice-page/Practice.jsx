
import axios from 'axios';
import { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from 'react-router';

export default function Practice() {

  const [cart, setCart] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  const nav = useNavigate();

  const getCart = async () => {
    try {
      setLoad(true);
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      setCart(response.data.categories);
      setLoad(false);


    } catch (error) {
      setError(error.message);
      setLoad(false);

    }

  }

  useEffect(() => {
    getCart();
  }, []);

  if(load){
    return <h1 className='text-green-600 text-5xl'>Loading....</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }




 


  return (
    <div className="p-10 gap-5 grid grid-cols-4">


      {
        cart?.map((cat) => {
          return <Card key={cat.idCategory} className="relative w-full max-w-sm pt-0">
            <div className="absolute" />
            <img src={cat.strCategoryThumb} alt="Event cover" className="relative z-20 aspect-video w-full object-cover " />
            <CardHeader>
              <CardTitle>{cat.strCategory}</CardTitle>
              <CardDescription className="line-clamp-3">
                {cat.strCategoryDescription}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full"
              onClick = {() => nav(`/items-list/${cat.strCategory}`)}
              >View Event</Button>
            </CardFooter>

          </Card>
        })
      }




    </div>
  )
}

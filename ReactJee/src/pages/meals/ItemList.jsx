import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { baseUrl } from "../../lib/constant.js";

export default function ItemList() {

    const { label } = useParams();
    const nav = useNavigate();

    const [data, setData] = useState();
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState();



    const getData = async () => {
        try {
            setLoad(true);
            const response = await axios.get(`${baseUrl}/filter.php`, {
                params: {
                    c: label
                }
            });
            setData(response.data);
            setLoad(false);

        } catch (err) {
            setErr(err.message);
            setLoad(false);

        }
    }


    useEffect(() => {
        getData();

    }, []);

    if (load) {
        return <h1>Loading...</h1>
    }
    if (err) {
        return <h1 className="text-red-700">{err}</h1>
    }
    console.log(data)




    return (
        <div className="grid grid-cols-4 gap-5 p-5 text-white ">

            {
                data && data.meals.map((meal) => {
                    return <div 
                    onClick={() => nav(`/meal/${meal.idMeal}`)}
                    key={meal.idMeal} className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={meal.strMealThumb} alt="" />
                        <h1>{meal.strMeal}</h1>
                    </div>
                })
            }




        </div>
    )
}

import { useNavigate, useParams } from "react-router"
import { useApi } from "@/hooks/apiHook.js";

export default function ItemList() {

    const { label } = useParams();
    const nav = useNavigate();

   const [data, load, error] = useApi('filter.php', {
    c: label
});

    if (load) {
        return <h1 className="text-white">Loading...</h1>
    }
    if (error) {
        return <h1 className="text-red-700">{error}</h1>
    }





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
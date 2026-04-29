import { useApi } from "@/hooks/apiHook";
import { useParams } from "react-router"


export default function Meal() {

    const { id } = useParams();

  const [data, load, error] = useApi('lookup.php', {
    i: id
  });

    if (load) {
        return <h1 className="text-white">Loading...</h1>
    }
    if (error) {
        return <h1 className="text-red-700">{error}</h1>
    }
    



    return (
        <div className="text-white p-5">

            {
                data && data.meals.map((meal) => {
                    return <div key={meal.idMeal} className="space-y-5">
                        <h1>{meal.strMeal}</h1>
                        <img className="h-64" src={meal.strMealThumb} alt="" />
                        <h1>Category: {meal.strCategory}</h1>
                        <h1>Area: {meal.strArea}</h1>
                        <h1>Instructions: {meal.strInstructions}</h1>
                        {/* <h1>Youtube: {meal.strYoutube}</h1> */}
                        <iframe width="420" height="315"
                            src={`https://www.youtube.com/embed/${meal.strYoutube.split("=")[1]}`}>
                        </iframe>
                    </div>
                })
            }

        </div>
    )
}

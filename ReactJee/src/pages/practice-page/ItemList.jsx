import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function ItemList() {

    const { label } = useParams();

    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState();


    const getItem = async () => {
        try {
            setLoad(true);
            const response = await axios.get("www.themealdb.com/api/json/v1/1/filter.php", {
                params: {
                    c:label
                }
            });
            setItem(response.data.meals);
            setLoad(false);
                


        } catch (error) {
            setError(error.message);
            setLoad(false);

        }

    }


    useEffect(() => {
        getItem();
    }, []);

    if (load) {
        return <h1 className='text-green-600 text-5xl'>Loading....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

console.log(item);
    



    return (
        <div>

        </div>
    )
}

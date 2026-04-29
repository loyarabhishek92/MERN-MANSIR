import { baseUrl } from "@/lib/constant";
import axios from "axios";
import { useEffect, useState } from "react"

export const useApi = (endPoint, params) => {


    const [data, setData] = useState();
    const [load, setLoad] = useState();
    const [error, setError] = useState();

    const getData = async () => {
        try {
            setLoad(true);
            const response = await axios.get(`${baseUrl}/${endPoint}`, {
                params
            });

            setData(response.data);
            setLoad(false);


        } catch (error) {
            setError(error.message);
            setLoad(false);

        }
    }

    useEffect(() => {
        getData();
    }, []);


    return [data, load, error];





}

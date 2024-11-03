import { useEffect, useState } from "react";
import CardItems from "./cardItems";

const CardContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=5")
                const results = await response.json()

                if (!response.ok) throw new Error(`Error fetching data: ${response.status}`)

                setDatas(results)
            } catch (error) {
                setError(error)
                console.error(`${error}`)
            } finally {
                setIsLoading(false)
            }
        }

        doFetch();
    }, [])

    console.log(datas);

    return <CardItems datas={datas} error={error} isLoading={isLoading} />
}

export default CardContainer;
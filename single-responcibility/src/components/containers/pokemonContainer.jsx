import { useState, useEffect } from "react";
import PokemonName from "../pokemonName";

const PokemonContainer = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
                const pokemons = await response.json();

                if (!response.ok) {
                    return (`Pokemon Api response status: ${response.status}`)
                }

                setPokemons(pokemons.results);
            } catch (error) {
                setError(error)
                console.error(`We un error ${error}`)
            } finally {
                setIsLoading(false)
            }
        }

        doFetch();
    }, [])


    return <PokemonName pokemons={pokemons} error={error} isLoading={isLoading} />

}

export default PokemonContainer;
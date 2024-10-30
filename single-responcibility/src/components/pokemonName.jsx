import '../index.css'

const PokemonName = ({ pokemons, isLoading, error }) => {
    if (isLoading) {
        return <h1>...loading</h1>
    }

    if (error) {
        console.error(`Your error: ${error}`);
    }

    return (
        <ul className='box'>
            {pokemons.map((poke, index) => (
                <li className='pokemon-card' key={index}>{poke.name}</li>
            ))}
        </ul>
    )
}

export default PokemonName;
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []); // Empty dependency array

    if (loading) return <p>Loading...</p>;
    if (!pokemon) return <p>No data available</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Type: {pokemon.types.map(type => type.type.name).join(", ")}</p>
        </div>
    );
}

export default App;

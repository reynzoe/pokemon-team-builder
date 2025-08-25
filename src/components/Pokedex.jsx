import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Pokedex = ({ onAdd }) => {
    const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const [search, setSearch] = useState("");

    if (loading) return <p>Loading Pokédex...</p>;
    if (error) return <p>Error fetching Pokémon: {error.message}</p>;

    // Filter Pokémon by name based on search input
    const filteredPokemon = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Pokédex</h2>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {filteredPokemon.map((pokemon, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px" }}>
                        <p>{pokemon.name}</p>
                        <button onClick={() => onAdd(pokemon)}>Add to Team</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pokedex;

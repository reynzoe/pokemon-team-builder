import React, { useState, useEffect, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import TeamSidebar from "./TeamSidebar";

const Pokedex = () => {
    const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (data?.results) {
            const fetchAllPokemon = async () => {
                setLoadingDetails(true);
                try {
                    const pokemonPromises = data.results.map(async (pokemon) => {
                        const response = await fetch(pokemon.url);
                        const details = await response.json();
                        return {
                            id: details.id,
                            name: details.name,
                            img: details.sprites.front_default,
                            types: details.types.map(type => type.type.name),
                            sprites: details.sprites
                        };
                    });

                    const allPokemon = await Promise.all(pokemonPromises);
                    setPokemonDetails(allPokemon);
                } catch (err) {
                    console.error("Error fetching Pokemon details:", err);
                } finally {
                    setLoadingDetails(false);
                }
            };

            fetchAllPokemon();
        }
    }, [data]);

    const filteredPokemon = useMemo(() => {
        if (!search) return pokemonDetails;

        return pokemonDetails.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
            pokemon.types.some(type => type.toLowerCase().includes(search.toLowerCase()))
        );
    }, [pokemonDetails, search]);

    if (loading || loadingDetails) {
        return (
            <div className="container-fluid mt-4">
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Loading Pokédex...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container-fluid mt-4">
                <div className="alert alert-danger">Error: {error.message}</div>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                {/* Main Pokedex Section - Left Side */}
                <div className="col-lg-9 col-md-8">
                    <h2 className="text-center mb-4">Pokédex</h2>

                    <SearchBar search={search} setSearch={setSearch} />

                    <div className="text-center mb-3">
                        <small className="text-muted">
                            Showing {filteredPokemon.length} of {pokemonDetails.length} Pokémon
                        </small>
                    </div>

                    <div className="row g-3">
                        {filteredPokemon.map((pokemon) => (
                            <div key={pokemon.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <PokemonCard pokemon={pokemon} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Sidebar - Right Side */}
                <div className="col-lg-3 col-md-4">
                    <TeamSidebar />
                </div>
            </div>
        </div>
    );
};

export default Pokedex;
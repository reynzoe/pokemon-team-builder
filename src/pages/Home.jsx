import React, { createContext, useState, useEffect } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState(() => {
        const savedTeam = localStorage.getItem("pokemonTeam");
        return savedTeam ? JSON.parse(savedTeam) : [];
    });

    useEffect(() => {
        localStorage.setItem("pokemonTeam", JSON.stringify(team));
    }, [team]);

    const addToTeam = (pokemon) => {
        if (team.length < 6 && !team.some((p) => p.name === pokemon.name)) {
            setTeam([...team, pokemon]);
        }
    };

    const removeFromTeam = (name) => {
        setTeam(team.filter((p) => p.name !== name));
    };

    return (
        <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
            {children}
        </TeamContext.Provider>
    );
};

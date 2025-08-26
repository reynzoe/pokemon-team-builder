import React, { createContext, useState, useEffect, useCallback } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    // Initialize team from localStorage
    const [team, setTeam] = useState(() => {
        try {
            const savedTeam = localStorage.getItem("pokemonTeam");
            return savedTeam ? JSON.parse(savedTeam) : [];
        } catch (error) {
            console.error("Error loading team from localStorage:", error);
            return [];
        }
    });

    // Save to localStorage whenever team changes
    useEffect(() => {
        try {
            localStorage.setItem("pokemonTeam", JSON.stringify(team));
        } catch (error) {
            console.error("Error saving team to localStorage:", error);
        }
    }, [team]);

    // Add Pokemon to team
    const addToTeam = useCallback((pokemon) => {
        setTeam(currentTeam => {
            // Check if team is full
            if (currentTeam.length >= 6) {
                alert("Your team is full! Remove a Pokemon first.");
                return currentTeam;
            }

            // Check if Pokemon already in team
            if (currentTeam.some(p => p.id === pokemon.id)) {
                alert(`${pokemon.name} is already in your team!`);
                return currentTeam;
            }

            return [...currentTeam, pokemon];
        });
    }, []);

    // Remove Pokemon from team
    const removeFromTeam = useCallback((pokemonId) => {
        setTeam(currentTeam => currentTeam.filter(p => p.id !== pokemonId));
    }, []);

    // Check if Pokemon is in team
    const inTeam = useCallback((pokemonId) => {
        return team.some(p => p.id === pokemonId);
    }, [team]);

    // Check if team is full
    const teamFull = team.length >= 6;

    const value = {
        team,
        addToTeam,
        removeFromTeam,
        inTeam,
        teamFull,
        teamCount: team.length
    };

    return (
        <TeamContext.Provider value={value}>
            {children}
        </TeamContext.Provider>
    );
};
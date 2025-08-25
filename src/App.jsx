import React, { useContext } from "react";
import Pokedex from "./components/Pokedex";
import { TeamContext } from "./contexts/TeamContext";

const App = () => {
    const { addToTeam } = useContext(TeamContext);

    return (
        <div>
            <h1>Pokémon Team Builder</h1>
            <Pokedex onAdd={addToTeam} />
        </div>
    );
};

export default App;

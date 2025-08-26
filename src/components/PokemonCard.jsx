import React, { useContext, useState } from "react";
import { TeamContext } from "../contexts/TeamContext";

const PokemonCard = ({ pokemon }) => {
    const { addToTeam, inTeam, teamFull } = useContext(TeamContext);
    const [isAdding, setIsAdding] = useState(false);

    const isAlreadyInTeam = inTeam(pokemon.id);
    const isDisabled = isAlreadyInTeam || teamFull;

    const handleAddToTeam = async () => {
        if (!isDisabled) {
            setIsAdding(true);
            setTimeout(() => {
                addToTeam(pokemon);
                setIsAdding(false);
            }, 300);
        }
    };

    const getButtonText = () => {
        if (isAdding) return "Adding...";
        if (isAlreadyInTeam) return "In Team";
        if (teamFull) return "Team Full";
        return "Add to Team";
    };

    const getButtonVariant = () => {
        if (isAdding) return "warning";
        if (isAlreadyInTeam) return "success";
        if (teamFull) return "secondary";
        return "primary";
    };

    const getTypeColor = (type) => {
        const colors = {
            normal: 'secondary', fire: 'danger', water: 'primary',
            electric: 'warning', grass: 'success', ice: 'info',
            fighting: 'dark', poison: 'danger', ground: 'warning',
            flying: 'info', psychic: 'danger', bug: 'success',
            rock: 'secondary', ghost: 'dark', dragon: 'primary',
            dark: 'dark', steel: 'secondary', fairy: 'danger'
        };
        return colors[type] || 'secondary';
    };

    return (
        <div className="pokedex-card">
            {/* Header */}
            <div className="pokedex-header">
                <span className="pokemon-name text-capitalize">{pokemon.name}</span>
            </div>

            {/* Main Section */}
            <div className="pokedex-main">
                <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    className="pokemon-sprite"
                />
                <div className="pokemon-details">
                    <div className="pokemon-types">
                        {pokemon.types.map((type) => (
                            <span
                                key={type}
                                className={`badge bg-${getTypeColor(type)} type-badge`}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="pokedex-menu">
                <button
                    className={`menu-btn btn-${getButtonVariant()}`}
                    disabled={isDisabled || isAdding}
                    onClick={handleAddToTeam}
                >
                    {isAdding && (
                        <span className="spinner-border spinner-border-sm me-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </span>
                    )}
                    {getButtonText()}
                </button>
            </div>
        </div>
    );
};

export default PokemonCard;

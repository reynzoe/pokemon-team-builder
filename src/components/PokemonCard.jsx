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

            // Add a small delay for visual feedback
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
        <div className={`card h-100 shadow-sm ${isAdding ? 'border-warning' : ''}`}>
            <img
                src={pokemon.img}
                alt={pokemon.name}
                className="card-img-top"
                style={{
                    height: "120px",
                    objectFit: "contain",
                    padding: "10px",
                    transform: isAdding ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                }}
            />
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="card-title text-capitalize mb-0">{pokemon.name}</h6>
                    <span className="badge bg-secondary">#{pokemon.id}</span>
                </div>

                <div className="mb-auto">
                    {pokemon.types.map((type) => (
                        <span
                            key={type}
                            className={`badge me-1 mb-1 bg-${getTypeColor(type)}`}
                            style={{ fontSize: "0.7rem" }}
                        >
                            {type}
                        </span>
                    ))}
                </div>

                <button
                    className={`btn btn-${getButtonVariant()} btn-sm mt-2`}
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
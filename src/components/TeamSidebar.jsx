import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import { getTypeColor } from "../utils/typeColors";

const TeamSidebar = () => {
    const { team, removeFromTeam, teamCount } = useContext(TeamContext);

    const renderEmptySlots = () => {
        const emptySlots = 6 - teamCount;
        return Array.from({ length: emptySlots }, (_, index) => (
            <div key={`empty-${index}`} className="team-slot empty-slot">
                <span>Empty</span>
            </div>
        ));
    };

    return (
        <div className="team-sidebar">
            <div className="team-header">
                <span>Your Team</span>
                <span className="team-count">{teamCount}/6</span>
            </div>

            <div className="team-body">
                {teamCount === 0 && (
                    <div className="empty-message">
                        <span>⚪ Add Pokémon from the left</span>
                    </div>
                )}

                {team.map((pokemon) => (
                    <div key={pokemon.id} className="team-slot">
                        <img src={pokemon.img} alt={pokemon.name} className="team-sprite" />
                        <div className="team-info">
                            <span className="team-name">{pokemon.name}</span>
                            <div className="team-types">
                                {pokemon.types.slice(0, 2).map((type) => (
                                    <span
                                        key={type}
                                        className={`type-badge bg-${getTypeColor(type)}`}
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            className="remove-btn"
                            onClick={() => removeFromTeam(pokemon.id)}
                            title={`Remove ${pokemon.name}`}
                        >
                            ✕
                        </button>
                    </div>
                ))}

                {renderEmptySlots()}

                {teamCount === 6 && (
                    <div className="team-complete">🎉 Team Complete!</div>
                )}
            </div>
        </div>
    );
};

export default TeamSidebar;

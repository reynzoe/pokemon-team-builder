// src/components/TeamView.jsx
import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import { getTypeColor } from '../utils/typeColors';

const TeamView = () => {
    const { team, removeFromTeam, teamCount } = useContext(TeamContext);

    const renderEmptySlots = () => {
        const emptySlots = 6 - teamCount;
        return Array.from({ length: emptySlots }, (_, index) => (
            <div key={`empty-${index}`} className="team-card-container">
                <div className="empty-slot-card">
                    <div className="slot-icon">＋</div>
                    <small>Empty Slot</small>
                </div>
            </div>
        ));
    };

    return (
        <div className="team-view-container">
            <div className="team-header">
                <h3>Your Team</h3>
                {/* Only show counter if teamCount > 0 */}
                {teamCount > 0 && (
                    <div className="team-count-badge">{teamCount}/6 Pokémon</div>
                )}
            </div>

            {teamCount === 0 ? (
                <div className="team-status-message info">
                    <strong>No Pokémon in your team yet!</strong>
                    <p>Visit the Pokédex to start building your dream team.</p>
                </div>
            ) : (
                <div className="team-grid">
                    {team.map((pokemon) => (
                        <div key={pokemon.id} className="team-card-container">
                            <div className="team-card">
                                <img src={pokemon.img} alt={pokemon.name} />
                                <h6 className="card-title">{pokemon.name}</h6>
                                <div className="type-badges-container">
                                    {pokemon.types.map((type) => (
                                        <span
                                            key={type}
                                            className={`type-badge bg-${getTypeColor(type)}`}
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-danger btn-sm btn-remove"
                                    onClick={() => removeFromTeam(pokemon.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    {renderEmptySlots()}
                </div>
            )}

            {teamCount === 6 && (
                <div className="team-status-message success">
                    🎉 Team Complete! <small>(6 Pokémon)</small>
                </div>
            )}
        </div>
    );
};

export default TeamView;

// src/components/TeamView.jsx
import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import { getTypeColor } from '../utils/typeColors';

const TeamView = () => {
    const { team, removeFromTeam, teamCount } = useContext(TeamContext);

    const renderEmptySlots = () => {
        const emptySlots = 6 - teamCount;
        return Array.from({ length: emptySlots }, (_, index) => (
            <div key={`empty-${index}`} className="col-md-2 col-4">
                <div className="card h-100 text-center" style={{ minHeight: "200px", border: "2px dashed #dee2e6" }}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div className="text-muted">
                            <div style={{ fontSize: "2rem" }}>+</div>
                            <small>Empty Slot</small>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Your Team</h3>
                <span className="badge bg-primary fs-6">
                    {teamCount}/6 Pokémon
                </span>
            </div>

            {teamCount === 0 ? (
                <div className="alert alert-info text-center">
                    <h4>No Pokémon in your team yet!</h4>
                    <p>Visit the Pokédex to start building your dream team.</p>
                </div>
            ) : (
                <div className="row g-3">
                    {team.map((pokemon) => (
                        <div key={pokemon.id} className="col-md-2 col-4">
                            <div className="card h-100 shadow-sm" style={{ minHeight: "200px" }}>
                                <img
                                    src={pokemon.img}
                                    alt={pokemon.name}
                                    className="card-img-top"
                                    style={{ height: "100px", objectFit: "contain", padding: "5px" }}
                                />
                                <div className="card-body text-center p-2">
                                    <h6 className="card-title small text-capitalize mb-1">
                                        {pokemon.name}
                                    </h6>
                                    <div className="mb-2">
                                        {pokemon.types.map((type) => (
                                            <span
                                                key={type}
                                                className={`badge bg-${getTypeColor(type)} me-1`}
                                                style={{ fontSize: "0.6rem" }}
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeFromTeam(pokemon.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {renderEmptySlots()}
                </div>
            )}

            {teamCount === 6 && (
                <div className="alert alert-success mt-4 text-center">
                    <strong>🎉 Your team is complete!</strong>
                    <br />
                    <small>You have assembled a team of 6 Pokémon. Ready for battle!</small>
                </div>
            )}
        </div>
    );
};

export default TeamView;
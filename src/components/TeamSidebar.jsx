import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";

const TeamSidebar = () => {
    const { team, removeFromTeam, teamCount } = useContext(TeamContext);

    const renderEmptySlots = () => {
        const emptySlots = 6 - teamCount;
        return Array.from({ length: emptySlots }, (_, index) => (
            <div key={`empty-${index}`} className="mb-2">
                <div
                    className="card text-center bg-light"
                    style={{
                        height: "80px",
                        border: "2px dashed #dee2e6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <small className="text-muted">Empty</small>
                </div>
            </div>
        ));
    };

    return (
        <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0 d-flex justify-content-between align-items-center">
                    <span>Your Team</span>
                    <span className="badge bg-light text-primary">{teamCount}/6</span>
                </h5>
            </div>
            <div className="card-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                {teamCount === 0 ? (
                    <div className="text-center text-muted py-3">
                        <div style={{ fontSize: "2rem" }}>⚪</div>
                        <small>Add Pokémon from the left</small>
                    </div>
                ) : null}

                {team.map((pokemon) => (
                    <div key={pokemon.id} className="mb-2">
                        <div className="card border shadow-sm">
                            <div className="row g-0 align-items-center">
                                <div className="col-4">
                                    <img
                                        src={pokemon.img}
                                        alt={pokemon.name}
                                        className="img-fluid"
                                        style={{ height: "60px", objectFit: "contain" }}
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-body p-2">
                                        <h6 className="card-title mb-1 text-capitalize" style={{ fontSize: "0.8rem" }}>
                                            {pokemon.name}
                                        </h6>
                                        <div className="mb-1">
                                            {pokemon.types.slice(0, 2).map((type) => (
                                                <span key={type} className="badge bg-info me-1" style={{ fontSize: "0.6rem" }}>
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            style={{ fontSize: "0.7rem", padding: "2px 6px" }}
                                            onClick={() => removeFromTeam(pokemon.id)}
                                            title={`Remove ${pokemon.name}`}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {renderEmptySlots()}

                {teamCount === 6 && (
                    <div className="alert alert-success mt-3 p-2 text-center" style={{ fontSize: "0.8rem" }}>
                        <strong>🎉 Team Complete!</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamSidebar;
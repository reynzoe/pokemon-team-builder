import React, { useContext } from "react";
import { TeamContext } from "../contexts/TeamContext.jsx";
import { Card, Button } from "react-bootstrap";

const TeamView = () => {
    const { team, removeFromTeam } = useContext(TeamContext);

    return (
        <div className="team-view mt-4">
            <h3>Your Team (Max 6 Pokémon)</h3>
            <div className="d-flex flex-wrap gap-3">
                {team.length === 0 ? (
                    <p>No Pokémon added yet.</p>
                ) : (
                    team.map((pokemon) => (
                        <Card key={pokemon.name} style={{ width: "150px" }}>
                            <Card.Img
                                variant="top"
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                            />
                            <Card.Body>
                                <Card.Title className="text-center" style={{ fontSize: "14px" }}>
                                    {pokemon.name.toUpperCase()}
                                </Card.Title>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => removeFromTeam(pokemon.name)}
                                >
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeamView;

import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="navbar shadow navbar-retro">
            <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand navbar-title">
          🔴 Choose Your Pokemon !!!
        </span>

                <div className="navbar-nav ms-auto d-flex flex-row">
                    <button
                        className={`btn me-2 ${
                            activeTab === "pokedex" ? "btn-warning" : "btn-outline-light"
                        } navbar-btn`}
                        onClick={() => setActiveTab("pokedex")}
                    >
                        📚 Pokédex
                    </button>
                    <button
                        className={`btn ${
                            activeTab === "team" ? "btn-warning" : "btn-outline-light"
                        } navbar-btn`}
                        onClick={() => setActiveTab("team")}
                    >
                        👥 My Team
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

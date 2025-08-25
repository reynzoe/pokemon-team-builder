import React, { useState } from "react";
import { TeamProvider } from "./contexts/TeamContext";
import Pokedex from "./components/Pokedex";
import TeamView from "./components/TeamView";

function App() {
    const [activeTab, setActiveTab] = useState("pokedex");

    return (
        <TeamProvider>
            <div className="min-vh-100 bg-light">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
                    <div className="container-fluid">
                        <span className="navbar-brand fs-3">
                            🔴 Pokémon Team Builder
                        </span>
                        <div className="navbar-nav ms-auto">
                            <button
                                className={`btn me-2 ${activeTab === "pokedex" ? "btn-light" : "btn-outline-light"}`}
                                onClick={() => setActiveTab("pokedex")}
                            >
                                📚 Pokédex
                            </button>
                            <button
                                className={`btn ${activeTab === "team" ? "btn-light" : "btn-outline-light"}`}
                                onClick={() => setActiveTab("team")}
                            >
                                👥 My Team
                            </button>
                        </div>
                    </div>
                </nav>

                <main className="pb-4">
                    {activeTab === "pokedex" && <Pokedex />}
                    {activeTab === "team" && <TeamView />}
                </main>

                <footer className="bg-dark text-white text-center py-3 mt-auto">
                    <small>
                        Built with React, Context API, and PokéAPI |
                        Real-time team updates with localStorage persistence
                    </small>
                </footer>
            </div>
        </TeamProvider>
    );
}

export default App;
import React, { useState } from "react";
import { TeamProvider } from "./contexts/TeamContext";
import Pokedex from "./components/Pokedex";
import TeamView from "./components/TeamView";
import "./styles/global.css";
import "./styles/background.css";

function App() {
    const [activeTab, setActiveTab] = useState("pokedex");

    return (
        <TeamProvider>
            <div className="min-vh-100 app-container">
                <nav
                    className="navbar shadow"
                    style={{
                        background: `
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.08) 0px,
              rgba(255, 255, 255, 0.08) 2px,
              transparent 2px,
              transparent 6px
            ),
            linear-gradient(90deg, #8b0000, #b22222)
          `,
                        borderBottom: "4px solid #222",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.6)",
                    }}
                >
                    <div className="container-fluid d-flex justify-content-between align-items-center">
          <span
              className="navbar-brand"
              style={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  color: "#ffcb05", // Pokémon yellow
                  textShadow:
                      "-2px 2px 0 #2a2a72, 2px -2px 0 #2a2a72, 2px 2px 0 #2a2a72", // thick navy outline
                  letterSpacing: "2px",
              }}
          >
            🔴 Pokémon Team Builder
          </span>

                        <div className="navbar-nav ms-auto d-flex flex-row">
                            <button
                                className={`btn me-2 ${
                                    activeTab === "pokedex" ? "btn-warning" : "btn-outline-light"
                                }`}
                                style={{
                                    fontWeight: "bold",
                                    border: "2px solid #fff",
                                    textShadow: "1px 1px 0 #000",
                                }}
                                onClick={() => setActiveTab("pokedex")}
                            >
                                📚 Pokédex
                            </button>
                            <button
                                className={`btn ${
                                    activeTab === "team" ? "btn-warning" : "btn-outline-light"
                                }`}
                                style={{
                                    fontWeight: "bold",
                                    border: "2px solid #fff",
                                    textShadow: "1px 1px 0 #000",
                                }}
                                onClick={() => setActiveTab("team")}
                            >
                                👥 My Team
                            </button>
                        </div>
                    </div>
                </nav>

                <main className="pb-4">
                    {activeTab === "pokedex" && <Pokedex/>}
                    {activeTab === "team" && <TeamView/>}
                </main>
            </div>
        </TeamProvider>
    );
}

export default App;
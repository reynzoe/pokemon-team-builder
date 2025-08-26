import React, { useState } from "react";
import { TeamProvider } from "./contexts/TeamContext";
import Pokedex from "./components/Pokedex";
import TeamView from "./components/TeamView";
import Navbar from "./components/Navbar"; // import Navbar component

// global CSS
import "./styles/global.css";
import "./styles/header.css";
import "./styles/pokedex.css";
import "./styles/buttons.css";
import "./styles/teamSidebar.css";
import "./styles/background.css";
import "./styles/Navbar.css";

function App() {
    const [activeTab, setActiveTab] = useState("pokedex");

    return (
        <TeamProvider>
            <div className="min-vh-100 app-container">
                {/* Use the Navbar component */}
                <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

                <main className="pb-4">
                    {activeTab === "pokedex" && <Pokedex />}
                    {activeTab === "team" && <TeamView />}
                </main>
            </div>
        </TeamProvider>
    );
}

export default App;

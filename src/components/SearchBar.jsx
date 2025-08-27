// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search Pokémon by name/type"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <button
                    className="clear-btn"
                    onClick={() => setSearch("")}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default SearchBar;

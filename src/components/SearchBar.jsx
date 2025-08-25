// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="row justify-content-center mb-4">
            <div className="col-md-6">
                <div className="input-group">
                    <span className="input-group-text">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Pokémon by name or type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setSearch("")}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
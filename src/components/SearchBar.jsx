import React from "react";

const SearchBar = ({ setSearch }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Search Pokémon by name or type..."
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                style={{ padding: "8px", width: "250px" }}
            />
        </div>
    );
};

export default SearchBar;

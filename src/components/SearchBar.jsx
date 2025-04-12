// filter expenses
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm}) {
    return (
        <div className="mb-3">
        <input 
        type= "text"
        placeholder="Search by description or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
    );
}

export default SearchBar;
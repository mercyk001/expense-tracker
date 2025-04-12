// filter expenses
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm}) {
    return (
        <input 
        type= "text"
        placeholder="Search by description or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
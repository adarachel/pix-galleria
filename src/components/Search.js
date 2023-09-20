import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search by tag"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

export default Search;

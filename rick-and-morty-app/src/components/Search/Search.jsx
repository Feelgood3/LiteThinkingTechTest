import React from "react";

function Search ({ setSearch, handlePageUpdater }) {
    

return (<>
    <form onSubmit={(event) => event.preventDefault()} className="search-form">
        <input 
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        placeholder="Search for any character"
        type="text" 
        className="search-form-input"
        />
    </form>
    <button 
    onClick={handlePageUpdater}
    className="search-button">Search</button></>
)
}

export default Search
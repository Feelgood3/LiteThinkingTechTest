import React from "react";

function Search ({ setSearch, handlePageUpdater }) {
    
    const handleSubmit = (evt) => {
    evt.preventDefault();
    handlePageUpdater()
      };
    

return (<>
    <form onSubmit={handleSubmit} className="search-form">
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
import React from "react";

export default function FilterCheapFast({ sortByCheapest, sortByFastest }) {
  return (
    <div className="container">
      <div className="radio-tile-group">
        <div className="input-container">
          <input 
            id="filter-cheap" 
            type="radio" 
            name="radio" 
            onChange={sortByCheapest} 
            checked
          />
          <div className="radio-tile">
            <label htmlFor="filter-cheap">Самый дешёвый</label>
          </div>
        </div>
        <div className="input-container">
          <input 
            id="filter-fast" 
            type="radio" 
            name="radio" 
            onChange={sortByFastest} 
          />
          <div className="radio-tile radio-tile2">
            <label htmlFor="filter-fast">Самый быстрый</label>
          </div>
        </div>
      </div>
    </div>
  );
}

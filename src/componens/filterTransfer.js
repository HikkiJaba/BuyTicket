import React from "react";

export default function FilterTransfer({ handleFilterChange, selectedFilters }) {
  return (
    <div>
      <div className="blockfilterTransfer">
        <div><p>Количество пересадок:</p></div>
        <label className="numTransfer">
          <input 
            type="checkbox" 
            name="all" 
            className="real-checkbox" 
            checked={selectedFilters.all} 
            onChange={() => handleFilterChange('all')} />
          <span className="custom-checkbox"></span>
          Все
        </label>
        <label className="numTransfer">
          <input 
            type="checkbox" 
            name="noTransfers" 
            className="real-checkbox" 
            checked={selectedFilters.noTransfers} 
            onChange={() => handleFilterChange('noTransfers')} />
          <span className="custom-checkbox"></span>
          Без пересадок
        </label>
        <label className="numTransfer">
          <input 
            type="checkbox" 
            name="oneTransfer" 
            className="real-checkbox" 
            checked={selectedFilters.oneTransfer} 
            onChange={() => handleFilterChange('oneTransfer')} />
          <span className="custom-checkbox"></span>
          1 пересадка
        </label>
        <label className="numTransfer">
          <input 
            type="checkbox" 
            name="twoTransfers" 
            className="real-checkbox" 
            checked={selectedFilters.twoTransfers} 
            onChange={() => handleFilterChange('twoTransfers')} />
          <span className="custom-checkbox"></span>
          2 пересадки
        </label>
        <label className="numTransfer">
          <input 
            type="checkbox" 
            name="threeTransfers" 
            className="real-checkbox" 
            checked={selectedFilters.threeTransfers} 
            onChange={() => handleFilterChange('threeTransfers')} />
          <span className="custom-checkbox"></span>
          3 пересадки
        </label>
      </div>
    </div>
  );
}

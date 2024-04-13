import React from "react";

export default function FilterTransfer() {
 return(
    <div>
      <div className="blockfilterTransfer">
         <div><p>Количество пересадок:</p></div>
        <label className="numTransfer">
            <input type="checkbox" name="coding-notes" className="real-checkbox" />
            <span className="custom-checkbox"></span>
            Все
        </label>
        <label className="numTransfer">
            <input type="checkbox" name="coding-notes" className="real-checkbox" />
            <span className="custom-checkbox"></span>
            Без пересадок
        </label>
        <label className="numTransfer">
            <input type="checkbox" name="coding-notes" className="real-checkbox" />
            <span className="custom-checkbox"></span>
            1 пересадка
        </label>
        <label className="numTransfer">
            <input type="checkbox" name="coding-notes" className="real-checkbox" />
            <span className="custom-checkbox"></span>
            2 пересадки
        </label>
        <label className="numTransfer">
            <input type="checkbox" name="coding-notes" className="real-checkbox" />
            <span className="custom-checkbox"></span>
            3 пересадки
        </label>
      </div>
    </div>
 )
}

import React from "react";



export default function FilterCheapFast() {

    const className1 = "radio-tile";
    const className2 = "radio-tile2";


    return (
        <div className="container">
            <div className="radio-tile-group">
                <div className="input-container">
                    <input id="filter-cheap" type="radio" name="radio"></input>
                    <div className="radio-tile">
                        <label htmlFor="filter-cheap" defaultChecked={true}>Самый дешёвый</label>
                    </div>
                </div>
                <div className="input-container">
                        <input id="filter-fast" type="radio" name="radio"></input>
                        <div className={`${className1} ${className2}`}>
                            <label htmlFor="filter-fast">Самый быстрый</label>
                        </div>
                </div>
            </div>
        </div>
    );
}

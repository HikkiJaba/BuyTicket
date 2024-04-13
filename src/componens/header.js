import React from "react";
import img from "../img/icon.png";

export default function header() {
    return (
        <header>
            <a href="#"><img className="icon-img" src={img} /></a>
        </header>
    );
}
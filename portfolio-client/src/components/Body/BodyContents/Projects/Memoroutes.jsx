import React from "react";
import "../../../../styles/Memoroutes.css"

function Memoroutes(){

    return(
        <div className="Projects-Div">
            <a href="https://memoroutes.onrender.com/">
                <h2 className="Memoroutes-Title">Memoroutes</h2>
            </a>
            <a href="https://github.com/Jbecker9/memoroutes">
                <i id="Projects-Github-Link"className="fa-brands fa-square-github fa-inverse fa-2x" />
            </a>
            <img className="Projects-Img" src="https://i.imgur.com/Duk0D7p.png"/>
        </div>
    )
}

export default Memoroutes
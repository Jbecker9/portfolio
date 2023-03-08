import React from "react";
import "../../styles/NavButtons.css"

function NavButtons({ loopBodyContents }){

    return(
        <div className="NavButtons-div" >
            <div className="Arrow-Left-Button" id="Minus" onClick={loopBodyContents}>
                <i className="fa-solid fa-arrow-left fa-4x" />
            </div>
            <div className="Arrow-Right-Button" id="Add" onClick={loopBodyContents}>
                <i className="fa-solid fa-arrow-right fa-4x" />
            </div>
        </div>
    )
}

export default NavButtons
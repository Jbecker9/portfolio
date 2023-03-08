import React from "react";
import "../../styles/Languages.css"

function Languages(){

    return(
        <div className="Languages-div">
           <div className="Languages-content">
               <p className="Languages-name"> React.js </p>
           </div>
           <div className="Languages-content">
               <p className="Languages-name"> Ruby on Rails </p>
           </div>
           <div>
                <p className="Languages-name"> CSS </p>
           </div>
           <div className="Languages-content">
                <p className="Languages-name"> Javascript </p>
           </div>
           <div className="Languages-content">
                <p className="Languages-name"> Ruby </p>
           </div>
           <div className="Languages-content">
                <p className="Languages-name"> SQL and postgreSQL </p>
           </div>
           <div className="Languages-content">
               <p className="Languages-name"> HTML </p>
           </div>
        </div>
    )
}

export default Languages
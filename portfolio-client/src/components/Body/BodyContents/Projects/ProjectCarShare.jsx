import React from "react";
import "../../../../styles/ProjectCarShare.css"
import "../../../../styles/Projects.css"

function ProjectCarShare(){

    return(    
        <div className="Projects-Div">
            <a>
                <h2 className="ProjectCarShare-Title">Project-Car-Share</h2>
            </a>
            <a href="https://github.com/Jbecker9/project-car-share">
                <i id="Projects-Github-Link"className="fa-brands fa-square-github fa-inverse fa-2x" />
            </a>
            <img className="Projects-Img" src="https://i.imgur.com/NhDM1FR.png"/>
        </div>
    )
}

export default ProjectCarShare
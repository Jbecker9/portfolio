import React, { useContext } from "react";
import { NavigationContext } from "../../../Context/Navigation";
import Title from "../Title";
import Projects from "./Projects/Projects";
import Resume from "./Resume";

function BodyContents(){
    const { navNumber } = useContext(NavigationContext)
    
        switch(navNumber){
            case 0:
                return <Title />
                break;
            case 1:
                return <Projects />
                break;
            case 2:
                return <Resume />
                break;
    }
}

export default BodyContents
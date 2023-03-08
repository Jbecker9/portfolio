import React, { useState } from "react";

const NavigationContext = React.createContext()

function NavigationProvider({ children }){
    const [navNumber, setNavNumber] = useState(0)
    const [contactPopUp, setContactPopUp] = useState(false)

    return <NavigationContext.Provider value={{navNumber, setNavNumber, contactPopUp, setContactPopUp}} >{children}</NavigationContext.Provider>
};

export {NavigationContext, NavigationProvider}
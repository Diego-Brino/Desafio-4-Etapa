import React, {createContext, useEffect, useState} from "react";
import useLayout from "../hooks/useLayout";

const LayoutContext = createContext("desktop");

function LayoutProvider(props){

    const layout = useLayout();

    return(
        <LayoutContext.Provider value={layout}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export {LayoutProvider, LayoutContext};

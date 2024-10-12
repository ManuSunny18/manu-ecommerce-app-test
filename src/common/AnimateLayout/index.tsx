import React from "react";
import { AnimatePresence  } from "framer-motion"
import { ReactNode } from "react";
import {
    useLocation,
    useOutlet
} from 'react-router-dom'

const AnimateLayout = (): React.JSX.Element => {
    const location = useLocation();
    const element = useOutlet();

    return (
        <AnimatePresence mode="wait" initial={true}>
            {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    );
};
  
export default AnimateLayout;
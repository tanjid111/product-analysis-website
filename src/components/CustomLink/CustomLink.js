import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (

        <Link
            style={{ color: match ? "#0991B1" : "BLACK" }} to={to} {...props}
        >
            {children}
        </Link>


    );
};

export default CustomLink;
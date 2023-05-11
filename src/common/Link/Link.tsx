import {FC} from "react";
import {NavLink, useLocation} from "react-router-dom";

import styles from './Link.module.scss';


interface NavLinkProps {
    path: string,
    name: string,
}


export const Link: FC<NavLinkProps> = ({name, path}) => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <NavLink
            to={path}
            className={currentPath === path ? styles.active : ''}
        >
            {name}
        </NavLink>
    )
}
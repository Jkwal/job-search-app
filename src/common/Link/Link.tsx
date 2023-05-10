import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from './Link.module.scss';


interface NavLinkProps {
    to: string,
    name: string,
}


export const Link: FC<NavLinkProps> = ({name, to}) => {
    return (
        <NavLink to={to} className={styles.link}>
            {name}
        </NavLink>
    )
}
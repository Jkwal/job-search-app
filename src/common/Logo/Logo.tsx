import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from "./Logo.module.scss";

import {ReactComponent as LogoJobored} from 'assets/Logo.svg';


interface LogoProps {
    path: string,
    name: string,
}

export const Logo: FC<LogoProps> = ({path, name}) => {
    return (
        <NavLink to={path} className={styles.logo}>

            <div className={styles.image}>
                <LogoJobored/>
            </div>

            <h1 className={styles.header}>{name}</h1>

        </NavLink>
    )
}
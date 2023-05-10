import {NavLink} from "react-router-dom";

import {ROUTES} from "utils";
import {ReactComponent as LogoJobored} from 'assets/Logo.svg';


export const Logo = () => {
    return (
        <NavLink to={ROUTES.HOME}>
            <LogoJobored/>
        </NavLink>

    )
}
import {FC} from "react";
import classNames from "classnames";
import {NavLink, useLocation} from "react-router-dom";

import styles from './Link.module.scss';


interface NavLinkProps {
	path: string,
	name: string,
}


export const Link: FC<NavLinkProps> = ({name, path}) => {

	const location = useLocation();
	const currentPath = location.pathname;

	const linkClassName = classNames({
		[styles.active]: currentPath === path,
	});

	return (
		<li className={styles.link}>
			<NavLink to={path} className={linkClassName}>
				{name}
			</NavLink>
		</li>

	)
}